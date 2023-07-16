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
      <div className="flex flex-col justify-center items-center min-h-screen mb-32">
        <Link href="/">
          <div className="font-bold text-2xl">
            <span className="mr-1">Travel</span>
            <span className="text-alizarin">U</span>
          </div>
        </Link>
        <input
          className="border border-cono text-cono rounded-sm mb-2 px-2 py-1"
          type="text"
          placeholder="아이디"
          value={id}
        />
        <input
          className="border border-cono text-cono rounded-sm mb-2 px-2 py-1"
          type="text"
          placeholder="비밀번호"
          value={password}
        />
        <button className="rounded-md bg-alizarin hover:bg-pomegranate text-white px-2 py-1">
          로그인
        </button>
      </div>
    </>
  );
}

export default Login;
