import { db } from "./fireabase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getDoc, doc } from "firebase/firestore";

export const getSchools = async () => {
  return (await getDocs(query(collection(db, "schools")))).docs.map(
    (docSnap) => ({
      ...docSnap.data(),
      id: docSnap.id,
    })
  );
};

export const getSchoolFromSchoolID = async (schoolID) => {
  return (await getDoc(doc(db, "schools", schoolID))).data();
};

export const getDorms = async (schoolID) => {
  return (
    await getDocs(
      query(collection(db, "dorms"), where("schoolID", "==", schoolID))
    )
  ).docs.map((docSnap) => ({
    ...docSnap.data(),
    id: docSnap.id,
  }));
};
