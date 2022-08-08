import { app } from "./Firebase";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  setDoc,
  doc,
  updateDoc,
  where,
  query,
} from "firebase/firestore";

const db = getFirestore(app);

export const postTestDataToFireStore = async (data) => {
  const collectionRef = collection(db, "testData");
  try {
    const docRef = await addDoc(collectionRef, data);
    return docRef;
  } catch (error) {
    console.warn("Error sending posts to firebase ", error);
    return null;
  }
};
