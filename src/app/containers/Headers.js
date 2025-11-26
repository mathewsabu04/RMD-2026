"use client";
import Link from "next/link";
import { signInWithGoogle, signOut } from "../lib/fireabase";
import { useAuth } from "../lib/useAuth";
import { getSchools } from "../lib/reads";

export const Header = () => {
  const { user, loading } = useAuth();
  return (
    <div className="py-4 px-8 border-b font-medium flex justify-between">
      <Link href={"/"}>RMD</Link>

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
