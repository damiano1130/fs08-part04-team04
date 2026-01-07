import { promises as fs } from "fs";
import path from "path";
import { User } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");

// 데이터 디렉토리 및 파일 초기화
async function ensureDataFile() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(USERS_FILE);
    } catch {
      // 파일이 없으면 빈 배열로 생성
      await fs.writeFile(USERS_FILE, JSON.stringify([], null, 2));
    }
  } catch (error) {
    console.error("Error ensuring data file:", error);
  }
}

// 모든 사용자 읽기
export async function getUsers(): Promise<User[]> {
  await ensureDataFile();
  try {
    const data = await fs.readFile(USERS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// 사용자 저장
export async function saveUsers(users: User[]): Promise<void> {
  await ensureDataFile();
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
}

// 이메일로 사용자 찾기
export async function findUserByEmail(email: string): Promise<User | null> {
  const users = await getUsers();
  return users.find((user) => user.email === email) || null;
}

// ID로 사용자 찾기
export async function findUserById(id: string): Promise<User | null> {
  const users = await getUsers();
  return users.find((user) => user.id === id) || null;
}

// 새 사용자 추가
export async function createUser(email: string, hashedPassword: string): Promise<User> {
  const users = await getUsers();
  const newUser: User = {
    id: Date.now().toString(),
    email,
    password: hashedPassword,
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  await saveUsers(users);
  return newUser;
}

