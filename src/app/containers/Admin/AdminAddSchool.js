"use client";
import { useState } from "react";
import { useAuth } from "../../lib/useAuth";
import { ButtonPrimary } from "../../../components/Button";
import { setSchoolDoc } from "../../lib/writes";
import { auth } from "../../lib/fireabase";

export const AdminAddSchool = () => {
  const [schoolName, setSchoolName] = useState("");
  const { admin } = useAuth();
  if (!admin) {
    return null;
  }


  const submitSchool = async (e) => {
    e.preventDefault();
    try {
      if (schoolName.length === 0) {
        window.alert("School name is required");
        return;
      }
      await setSchoolDoc(schoolName);
      window.alert(`${schoolName} added successfully`);
      setSchoolName("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="space-y-2 bg-gray-100 border rounded p-4"
      onSubmit={submitSchool}
    >
      <p className="font-medium">Admin</p>
      <div className="space-x-2">
        <input
          name="schoolName"
          type="text"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          className="border rounded px-2 py-1"
          placeholder="Enter school name"
        />
        <ButtonPrimary buttonType="submit" onClick={submitSchool}>
          Add School
        </ButtonPrimary>
      </div>
    </form>
  );
};