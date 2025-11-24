"use client";
import Link from "next/link";
import { signInWithGoogle } from "../lib/fireabase";

export const Header = () => {
  return (
    <div className="py-4 px-8 border-b font-medium flex items-center justify-between">
      <Link href={"/"} className="text-lg font-semibold">
        RMD
      </Link>

      <button
        onClick={signInWithGoogle}
        className="hover:underline"
        type="button"
      >
        Log in
      </button>
    </div>
  );
};
