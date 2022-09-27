import { app } from "./Firebase";
import { USER_PATH } from "./src/helpers/firebaseHelpers";
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
import { bottomPopUpMessage } from "./src/helpers/helpers";

const db = getFirestore(app);

export const postTestDataToFireStore = async (data) => {
  const collectionRef = collection(db, "testData");
  try {
    const docRef = await addDoc(collectionRef, data);
    const message = 'Data is sent to firestore with id: ' + docRef.id;
    bottomPopUpMessage(message);
    return docRef;
  } catch (error) {
    const message = 'Error while sending data to firestore: ' + error.message;
    bottomPopUpMessage(message);
    return null;
  }
};

const testUserData = {
  firstName: "test-firstname",
  lastName: "test-lastname",
  email: "test-email",
  signupType: "test-signupType",

}

export const saveUserToFirebase = ( userData ) => {

} 
