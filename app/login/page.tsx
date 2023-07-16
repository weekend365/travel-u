"use client";

import Link from "next/link";
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

function Login() {
  const { data: session } = useSession();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Link href="/">
          <div className="font-bold text-2xl mb-2">
            <span className="mr-1">Travel</span>
            <span className="text-alizarin">U</span>
          </div>
        </Link>
        <button
          onClick={() => signIn("naver")}
          className="text-xl rounded-md bg-naver text-white px-4 py-2 mb-2"
        >
          네이버로 간편 로그인
        </button>
        <button
          onClick={() => signIn("kakao")}
          className="text-xl rounded-md bg-kakao text-black px-4 py-2 mb-2"
        >
          카카오로 간편 로그인
        </button>
        <Link
          className="text-xl border border-cono rounded-md bg-white hover:cursor-pointer text-black px-4 py-2 mb-2"
          href="/login/normal"
        >
          이메일 또는 전화번호로 로그인
        </Link>
        <div>
          <span className="mr-1">아직 계정이 없으신가요?</span>
          <Link className="text-cono hover:cursor-pointer" href="/join">
            회원가입
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
