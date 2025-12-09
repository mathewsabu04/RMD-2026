import { useState, useEffect } from "react";
import { auth } from "@/app/lib/fireabase";
import { onAuthStateChanged } from "firebase/auth";
import { userIsAdmin } from "./reads";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        const isAdmin = await userIsAdmin(user.uid);
        setAdmin(isAdmin);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  return { user, loading, admin };
};
