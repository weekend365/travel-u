import React from "react";

function login() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <a href="/">Travel U</a>
        <input type="text" placeholder="id" />
        <input type="text" placeholder="password" />
        <button>login</button>
      </div>
    </>
  );
}

export default login;
