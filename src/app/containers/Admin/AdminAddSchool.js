"use client";
import { useState } from "react";
import { useAuth } from "../../lib/useAuth";
//import { ButtonPrimary } from "../Buttons";

export const AdminAddSchool = () => {
  const [schoolName, setSchoolName] = useState(" ");
  const { admin } = useAuth();
  if (!admin) {
    return null;
  }
  return (
    <form className="space-y-2 bg-gray-100 border rounded p-4">
      <p className="font-medium">Admin</p>
    </form>
  );
};
