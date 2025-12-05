"use client";
import { useState } from "react";
import { useAuth } from "../../lib/useAuth";
import { setDormDoc } from "../../lib/writes";
import { ButtonPrimary } from "../../../components/Button";

export const AdminAddDorm = ({ schoolID }) => {
  const [dormName, setDormName] = useState("");
  const { admin } = useAuth();
  if (!admin) {
    return null;
  }
  const submitDorm = async (e) => {
    e.preventDefault();
    try {
      if (dormName.length === 0) {
        window.alert("Dorm name is required");
        return;
      }
      await setDormDoc({ schoolID, dormName });
      window.alert(`${dormName} added successfully`);
      setDormName("");
    } catch (error) {
      window.alert("Error adding dorm");
    }
  };
  return (
    <form
      className="space-y-2 bg-gray-100 border rounded p-4"
      onSubmit={submitDorm}
    >
      <p className="font-medium">Admin</p>
      <div className="space-x-2">
        <input
          name="dormName"
          type="text"
          value={dormName}
          onChange={(e) => setDormName(e.target.value)}
          className="border rounded px-2 py-1"
          placeholder="Enter school name"
        />
        <ButtonPrimary buttonType="submit" onClick={submitDorm}>
          Add Dorm
        </ButtonPrimary>
      </div>
    </form>
  );
};
