# Next.js 프로젝트 구조 가이드

## Next.js는 풀스택 프레임워크입니다

**별도로 백엔드/프론트엔드 폴더를 분리할 필요가 없습니다!**

---

## 현재 프로젝트 구조

```
my-app/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # 프론트엔드: 홈 페이지
│   ├── login/
│   │   └── page.tsx              # 프론트엔드: 로그인 페이지
│   ├── signup/
│   │   └── page.tsx              # 프론트엔드: 회원가입 페이지
│   ├── products/
│   │   └── page.tsx              # 프론트엔드: 상품 페이지
│   ├── api/                       # 백엔드: API Routes (여기에 생성)
│   │   └── auth/
│   │       ├── signup/
│   │       │   └── route.ts      # 백엔드: 회원가입 API
│   │       ├── login/
│   │       │   └── route.ts      # 백엔드: 로그인 API
│   │       └── logout/
│   │           └── route.ts      # 백엔드: 로그아웃 API
│   └── components/                # 공통 컴포넌트
├── lib/                           # 유틸리티 함수 (선택사항)
│   └── auth.ts                   # 인증 관련 헬퍼 함수
├── data/                          # 데이터 저장 (JSON 파일 등)
│   └── users.json                 # 사용자 데이터
└── package.json
```

---

## 폴더 역할 설명

### 프론트엔드 (클라이언트 사이드)
- `app/*/page.tsx` - 사용자가 보는 페이지
- `app/components/` - 재사용 가능한 컴포넌트
- `"use client"` 지시어 사용

### 백엔드 (서버 사이드)
- `app/api/*/route.ts` - API 엔드포인트
- 서버에서만 실행되는 코드
- `"use client"` 지시어 없음

---

## API Routes 생성 방법

### 예시: 회원가입 API

**파일 경로**: `app/api/auth/signup/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // 서버 사이드 코드
  const body = await request.json();
  // 회원가입 로직 처리
  return NextResponse.json({ success: true });
}
```

### 프론트엔드에서 호출

```typescript
// app/signup/page.tsx
const response = await fetch('/api/auth/signup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password }),
});
```

---

## 장점

1. **단일 프로젝트**: 하나의 프로젝트에서 모든 것을 관리
2. **타입 안정성**: TypeScript로 프론트엔드와 백엔드 타입 공유 가능
3. **배포 간편**: 한 번의 배포로 프론트엔드와 백엔드 모두 배포
4. **코드 공유**: 유틸리티 함수를 프론트엔드와 백엔드에서 공유 가능

---

## 언제 분리해야 하나?

### 분리가 필요한 경우:
- 백엔드가 다른 언어로 작성된 경우 (예: Python, Java)
- 마이크로서비스 아키텍처를 사용하는 경우
- 팀이 완전히 분리되어 있는 경우

### 현재 프로젝트:
- **분리 불필요**: Next.js로 모든 것을 처리 가능
- **같은 프로젝트 내에서 관리**: `app/api/` 폴더에 API Routes 생성

---

## 구현할 구조

```
app/
├── api/
│   └── auth/
│       ├── signup/
│       │   └── route.ts      # POST /api/auth/signup
│       ├── login/
│       │   └── route.ts      # POST /api/auth/login
│       └── logout/
│           └── route.ts      # POST /api/auth/logout
├── login/
│   └── page.tsx              # 프론트엔드: /login
└── signup/
    └── page.tsx              # 프론트엔드: /signup
```

이렇게 하면:
- 프론트엔드: `/login`, `/signup` 페이지
- 백엔드: `/api/auth/login`, `/api/auth/signup` API

**모두 같은 프로젝트 안에서 관리됩니다!**

