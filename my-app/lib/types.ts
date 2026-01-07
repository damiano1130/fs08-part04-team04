export type User = {
  id: string;
  email: string;
  password: string; // 해시된 비밀번호
  createdAt: string;
};

export type AuthResponse = {
  success: boolean;
  message?: string;
  token?: string;
  user?: {
    id: string;
    email: string;
  };
};

