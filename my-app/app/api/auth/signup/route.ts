import { NextRequest, NextResponse } from "next/server";
import { hashPassword, generateToken } from "@/lib/auth";
import { findUserByEmail, createUser } from "@/lib/users";
import { AuthResponse } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // 입력 검증
    if (!email || !password) {
      return NextResponse.json<AuthResponse>(
        { success: false, message: "이메일과 비밀번호를 입력해주세요." },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json<AuthResponse>(
        { success: false, message: "올바른 이메일 형식이 아닙니다." },
        { status: 400 }
      );
    }

    // 비밀번호 길이 검증
    if (password.length < 6) {
      return NextResponse.json<AuthResponse>(
        { success: false, message: "비밀번호는 최소 6자 이상이어야 합니다." },
        { status: 400 }
      );
    }

    // 중복 이메일 확인
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return NextResponse.json<AuthResponse>(
        { success: false, message: "이미 가입된 이메일입니다." },
        { status: 409 }
      );
    }

    // 비밀번호 해싱
    const hashedPassword = await hashPassword(password);

    // 사용자 생성
    const user = await createUser(email, hashedPassword);

    // JWT 토큰 생성
    const token = generateToken(user.id, user.email);

    // 응답
    const response = NextResponse.json<AuthResponse>(
      {
        success: true,
        message: "회원가입이 완료되었습니다.",
        token,
        user: {
          id: user.id,
          email: user.email,
        },
      },
      { status: 201 }
    );

    // 쿠키에 토큰 저장
    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7일
    });

    return response;
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json<AuthResponse>(
      { success: false, message: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

