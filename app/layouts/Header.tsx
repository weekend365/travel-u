import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="fixed top-0 left-0 w-full flex-col border-b border-slate-500">
      <div className="flex justify-between items-center bg-white">
        <Link href="/" className="text-2xl">
          <span className="text-black">Travel</span>
          <span className="text-red-500">U</span>
        </Link>
        <Link href="/login">로그인 & 로그아웃</Link>
      </div>
      <div className="flex">
        <Link className="hover:text" href="/travelWith">
          동행
        </Link>
        <Link className="hover:text" href="/travelPlan">
          일정
        </Link>
        <Link className="hover:text" href="/messenger">
          메신저
        </Link>
      </div>
    </div>
  );
}

export default Header;
