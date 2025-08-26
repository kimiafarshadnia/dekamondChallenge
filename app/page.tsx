"use client";
import React, { useState } from "react";
import { isValidIranMobile } from "../lib/utils";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import { getUserDetail } from "@/services/user";
import { User } from "@/types/User";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async () => {
    setError(null);

    const normalizedPhone = phone.replace(/\s+/g, "").trim();

    if (!isValidIranMobile(normalizedPhone)) {
      setError(
        "Invalid mobile number format. Example: 0912xxxxxxx or +98912xxxxxxx"
      );
      return;
    }

    setLoading(true);
    try {
      const data = await getUserDetail();

      const userInfo: User = {
        name: {
          first: data.name.first,
          last: data.name.last,
        },
        email: data.email,
        phone: normalizedPhone,
        picture: data.picture,
      };

      login(userInfo);
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Error connecting to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void handleLogin();
  };

  return (
    <section className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
      <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Phone Number (Iran)"
          value={phone}
          onChange={setPhone}
          placeholder="EX: 0912 xxx xxxx or +98912 xxx xxxx"
          error={error}
        />

        <Button
          type="submit"
          loading={loading}
          disabled={loading}
          className="w-full"
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </section>
  );
}