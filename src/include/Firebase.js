// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getCountFromServer, query, startAt, limit, orderBy, where } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8m-cEWNAolDsI3-0L6YKwszc0OVJnT1w",
    authDomain: "advanced-software-engine-4326c.firebaseapp.com",
    databaseURL: "https://advanced-software-engine-4326c-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "advanced-software-engine-4326c",
    storageBucket: "advanced-software-engine-4326c.appspot.com",
    messagingSenderId: "148125485516",
    appId: "1:148125485516:web:ece1d97968a46a5572f569",
    measurementId: "G-4C1JHCL8KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

async function getNumberFoods(categories) {
    const reference = collection(database, "foods");
    let q;

    switch (categories) {
        case "all":
            q = reference;
            break;
        case "main courses":
            q = query(reference, where("type", "==", "main courses"));
            break;
        case "dessert":
            q = query(reference, where("type", "==", "dessert"));
            break;
        case "beverage":
            q = query(reference, where("type", "==", "beverage"));
            break;
    }

    const result = await getCountFromServer(q);

    return result.data().count;
}

async function getFoodsData (foodType="all", start=1) {
    const limitFoods = 8;
    let data = [];
    let q;
    const reference = collection(database, "foods");

    if(foodType == "all"){
        q = query(reference, orderBy("id", "asc"), startAt(start), limit(limitFoods));
    } else {
        q = query(reference, where("type", "==", foodType), orderBy("id", "asc"), startAt(start), limit(limitFoods));
    }
    const snapshot = await getDocs(q);
    snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
    });

    return data;
}

export { getFoodsData };
export { getNumberFoods };