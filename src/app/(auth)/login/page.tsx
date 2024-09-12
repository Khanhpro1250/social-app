import Image from "next/image";
import Link from "next/link";
import React from "react";
import loginImage from "@/assets/login-image.png";
import LoginForm from "@/app/(auth)/login/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Login to Social</h1>
          </div>
          <div className="space-y-5">
            <LoginForm />
            <Link
              className="ml-2 block text-center hover:underline"
              href={"/signup"}
            >
              Don&apos;t have an account? Sign up
            </Link>
          </div>
        </div>
        <Image
          style={{
            objectFit: "cover",
          }}
          src={loginImage}
          alt=""
          className="hidden w-1/2 md:block"
        />
      </div>
    </main>
  );
}
