import { User } from "@/types/User";

const STORAGE_KEY = "app_user_v1";

export function saveUser(user: User) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } catch (e) {
    console.error("saveUser error", e);
  }
}

export function getUser(): User | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && "email" in parsed) {
      return parsed as User;
    }
    return null;
  } catch (e) {
    console.error("getUser error", e);
    return null;
  }
}

export function clearUser() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("clearUser error", e);
  }
}

// Extra helper
export function isLoggedIn(): boolean {
  return !!getUser();
}