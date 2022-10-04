import { app } from './Firebase';
import { USER_PATH } from './src/helpers/firebaseHelpers';
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
  getDoc,
} from 'firebase/firestore';
import { bottomPopUpMessage } from './src/helpers/helpers';

const db = getFirestore(app);

export const postTestDataToFireStore = async (data) => {
  const collectionRef = collection(db, 'testData');
  try {
    const path = USER_PATH + '/' + testUserData.id;
    const userdocRef = doc(db, path);
    const docRef = await setDoc(userdocRef, testUserData);
    const message = 'Data is sent to firestore with id';
    bottomPopUpMessage(message);
    return docRef;
  } catch (error) {
    const message = 'Error while sending data to firestore: ' + error.message;
    bottomPopUpMessage(message);
    return null;
  }
};

export const retriveTestDataFromFireStore = async () => {
  try {
    const path = USER_PATH + '/' + testUserData.id;
    const userdocRef = doc(db, path);
    const userdocSnap = await getDoc(userdocRef);
    if (userdocSnap.exists()) {
      const message = 'Data is available in firestore ';
      bottomPopUpMessage(message);
      console.log(userdocSnap.data());
      return userdocSnap.data();
    } else {
      const message = 'Data does not exist';
      bottomPopUpMessage(message);
    }
  } catch (error) {
    const message =
      'Error while retriving data from firestore: ' + error.message;
    bottomPopUpMessage(message);
    return null;
  }
};

export const updateUserProfile = async (userId, data) => {
  try {
    const path = USER_PATH + '/' + userId;
    const userdocRef = doc(db, path);
    const userdocSnap = await updateDoc(userdocRef, data);
    if (userdocSnap) {
      const message = 'Data updated successfully';
      bottomPopUpMessage(message);
    } else {
      const message = 'Data does not exist';
      bottomPopUpMessage(message);
    }
  } catch (error) {}
};

export const postTestData2ToFireStore = async () => {
  try {
    const path = 'Wardrobe/' + testUserData.id;
    const userdocRef = doc(db, path);
    const docRef = await setDoc(userdocRef, {
      clothename: 'clothename',
      clothetype: 'clothetype',
      color: 'color',
    });
    const message = 'Data is sent to firestore with id';
    bottomPopUpMessage(message);
    return docRef;
  } catch (error) {
    console.warn('Error sending posts to firebase ', error);
    return null;
  }
};

export const registerWithGoogle = async (data) => {
  try {
    const path = USER_PATH + '/' + data.id;
    const userdocRef = doc(db, path);
    const docRef = await setDoc(userdocRef, data);
    const message = 'Data is sent to firestore with id';
    bottomPopUpMessage(message);
    return docRef;
  } catch (error) {
    const message = 'Error while sending data to firestore: ' + error.message;
    bottomPopUpMessage(message);
    return null;
  }
};

export const fetchUser = async (userId) => {
  try {
    const path = USER_PATH + '/' + userId;
    const userdocRef = doc(db, path);
    const userdocSnap = await getDoc(userdocRef);
    if (userdocSnap.exists()) {
      const message = 'Data is available in firestore ';
      bottomPopUpMessage(message);
      return userdocSnap.data();
    } else {
      const message = 'Data does not exist';
      bottomPopUpMessage(message);
    }
  } catch (error) {
    console.log(error);
  }
};

const testUserData = {
  id: '2',
  firstName: 'test-firstname',
  lastName: 'test-lastname',
  email: 'test-email',
  signupType: 'test-signupType',
  phoneNumber: 'test-phoneNumber',
  country: 'test-country',
  city: 'test-city',
};

export const saveUserToFirebase = (userData) => {};
