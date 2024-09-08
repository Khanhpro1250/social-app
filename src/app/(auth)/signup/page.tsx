import { Metadata } from "next";
import React from "react";
import signUpImage from "@/assets/signup-image.png";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "@/app/(auth)/signup/SignUpForm";

export const metadata: Metadata = {
  title: "Sign up",
};

export default function SignUpPage() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Sign up to Social</h1>
          </div>
          <div className="space-y-5">
            <SignUpForm />

            <Link
              className="ml-2 block text-center hover:underline"
              href={"/login"}
            >
              Already have an account? Login
            </Link>
          </div>
        </div>
        <Image
          style={{
            objectFit: "cover",
          }}
          src={signUpImage}
          alt=""
          className="hidden w-1/2 md:block"
        />
      </div>
    </main>
  );
}
