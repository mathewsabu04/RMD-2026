import { useState, useEffect } from "react";
import { auth } from "./fireabase";
import { userIsAdmin } from "./reads";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        const isAdmin = userIsAdmin(user.uid);
        setAdmin(isAdmin);
        if (isAdmin) {
          window.alert("You are an admin");
        }
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  return { user, loading, admin };
};
