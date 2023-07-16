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
          <div className="text-2xl">
            <span className="mr-1">Travel</span>
            <span className="text-alizarin">U</span>
          </div>
        </Link>
        <input className="border" type="text" placeholder="아이디" value={id} />
        <input
          className="border"
          type="text"
          placeholder="비밀번호"
          value={password}
        />
        <button className="rounded-md bg-belizeHole hover:bg-peterRiver text-white px-2 py-1">
          로그인
        </button>
      </div>
    </>
  );
}

export default Login;
