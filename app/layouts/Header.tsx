"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  const { data: session } = useSession();

  return (
    <div className="fixed top-0 left-0 w-full flex-col z-50 border-b border-slate-500 p-4">
      <div className="flex justify-between items-center bg-white mb-2">
        <Link href="/" id="headerLogo" className="text-2xl">
          <span className="text-black mr-1">Travel</span>
          <span className="text-alizarin">U</span>
        </Link>
        {session?.user ? (
          <>
            <Image
              className="w-8 h-8 rounded-full"
              src={session.user.image || ""}
              alt="user image"
            />
            <p className="text-sky-600"> {session.user.email}</p>
            <button className="text-red-500" onClick={() => signOut()}>
              Sign Out
            </button>
          </>
        ) : (
          <button className="text-green-600" onClick={() => signIn()}>
            Sign In
          </button>
        )}
        <Link href="/login">로그인 & 로그아웃</Link>
      </div>
      <div className="flex">
        <Link className="hover:text-peterRiver mr-2" href="/travelWith">
          동행
        </Link>
        <Link className="hover:text-peterRiver mr-2" href="/travelPlan">
          일정
        </Link>
        <Link className="hover:text-peterRiver" href="/messenger">
          메신저
        </Link>
      </div>
    </div>
  );
}

export default Header;
