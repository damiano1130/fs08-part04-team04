import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, generateToken } from "@/lib/auth";
import { findUserByEmail } from "@/lib/users";
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

    // 사용자 찾기
    const user = await findUserByEmail(email);
    if (!user) {
      return NextResponse.json<AuthResponse>(
        { success: false, message: "이메일 또는 비밀번호가 올바르지 않습니다." },
        { status: 401 }
      );
    }

    // 비밀번호 검증
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json<AuthResponse>(
        { success: false, message: "이메일 또는 비밀번호가 올바르지 않습니다." },
        { status: 401 }
      );
    }

    // JWT 토큰 생성
    const token = generateToken(user.id, user.email);

    // 응답
    const response = NextResponse.json<AuthResponse>(
      {
        success: true,
        message: "로그인 성공",
        token,
        user: {
          id: user.id,
          email: user.email,
        },
      },
      { status: 200 }
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
    console.error("Login error:", error);
    return NextResponse.json<AuthResponse>(
      { success: false, message: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

