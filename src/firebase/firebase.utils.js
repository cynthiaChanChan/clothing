// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDe-7pHg2I3EwHglZbuj6Xi8P7L-k6KtJo",
    authDomain: "clothing-7e317.firebaseapp.com",
    databaseURL: "https://clothing-7e317.firebaseio.com",
    projectId: "clothing-7e317",
    storageBucket: "clothing-7e317.appspot.com",
    messagingSenderId: "345177573749",
    appId: "1:345177573749:web:7b9c21d4bd99fb9724eb3c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const { uid, displayName, email } = userAuth;
    const userRef = firestore.doc(`users/${uid}`);
    const querySnapshot = await userRef.get();
    const createAt = new Date();
    if (!querySnapshot.exists) {
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("Store user data error: ", error.message);
        }
    }
    return userRef;
};

export const addCollectionsAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach((obj) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
    const collections = {};
    collectionsSnapshot.docs.forEach((docSnapshot) => {
        const { title, items } = docSnapshot.data();
        collections[title.toLowerCase()] = {
            id: docSnapshot.id,
            title,
            items,
            routeName: encodeURI(title.toLowerCase()),
        };
    });
    return collections;
};

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const signInWithGoolge = () => auth.signInWithPopup(provider);

export default firebase;
