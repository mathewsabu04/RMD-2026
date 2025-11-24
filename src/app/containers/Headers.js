"use client";
import Link from "next/link";
import { signInWithGoogle, signOut } from "../lib/fireabase";
import { useAuth } from "../lib/useAuth";

export const Header = () => {
  const { user, loading } = useAuth();
  return (
    <div className="py-4 px-8 border-b font-medium flex items-center justify-between">
      <Link href={"/"} className="text-lg font-semibold">
        RMD
      </Link>
      {!loading && (
        <button
          onClick={user ? signOut : signInWithGoogle}
          className="hover:underline"
          type="button"
        >
          Log {user ? <>out</> : <>in</>}
        </button>
      )}
    </div>
  );
};
