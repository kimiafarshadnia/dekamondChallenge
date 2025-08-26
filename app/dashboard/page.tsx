"use client";
import { useEffect, useState } from "react";
import { getUser } from "../../lib/auth";
import { useRouter } from "next/navigation";
import { User } from "@/types/User";
import { SkeletonCard } from "@/components/ui/SkeletonCard";

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const u = getUser();
    if (!u) {
      router.replace("/");
      return;
    }
    setUser(u);
  }, [router]);

  if (!user) return <SkeletonCard />;

  const { name, email, phone, picture } = user;

  return (
    <section className="p-6 flex justify-center">
      <div className="flex flex-col items-center gap-5 rounded-lg w-full max-w-md">
        {picture ? (
          <img
            src={picture.thumbnail}
            alt={`${name.first} ${name.last}`}
            className="w-20 h-20 object-cover rounded-full"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gray-200" />
        )}

        <h2 className="text-xl font-semibold">{`Welcome ${name.first} ${name.last}`}</h2>
        <p className="text-sm text-gray-600">Email: {email}</p>
        <p className="text-sm text-gray-600">Phone Number: {phone}</p>
      </div>
    </section>
  );
}