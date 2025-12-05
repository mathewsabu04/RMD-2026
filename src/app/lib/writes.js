import { db } from "./fireabase";
import { setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";

// Converts a string (e.g. school name) to a valid ID by lowercasing, removing non-alphanumeric characters, and replacing spaces with dashes
export function stringToId(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // remove all non-alphanumeric and non-space chars
    .trim()
    .replace(/\s+/g, "-"); // replace spaces (one or more) with -
}

export const setSchoolDoc = async (schoolName) => {
  const schoolID = stringToId(schoolName);
  return setDoc(doc(db, "schools", schoolID), {
    schoolName: schoolName,
    schoolID: schoolID,
  });
};

export const setDormDoc = ({ schoolID, dormName }) => {
  const dormID = stringToId(`${schoolID} ${stringToId(dormName)}`);
  return setDoc(doc(db, "dorms", dormID), {
    schoolID: schoolID,
    dormID,
    dormName,
  });
};
