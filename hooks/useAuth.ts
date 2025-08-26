"use client";
import { useEffect, useState } from "react";
import { getUser, saveUser, clearUser } from "../lib/auth";
import { User } from "@/types/User";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    const storedUser = getUser();
    if (storedUser) setUser(storedUser);
  }, []);

  function login(userData: User) {
    saveUser(userData);
    setUser(userData);
  }

  function logout() {
    clearUser();
    setUser(null);
  }

  return { user, login, logout, isAuthenticated: !!user };
}