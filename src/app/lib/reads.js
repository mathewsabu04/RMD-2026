import { db } from "./fireabase";
import { collection, getDocs, query } from "firebase/firestore";

export const getSchools = async () => {
  return (await getDocs(query(collection(db, "schools")))).docs.map(
    (docSnap) => ({
      ...docSnap.data(),
      id: docSnap.id,
    })
  );
};
