// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, getDocs, query, startAt, limit, orderBy, where } from "firebase/firestore";

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
// function writeFoodData(foodID, foodName, foodType, foodImage, foodPrice) {
//     const reference = ref(database, 'foods/' + foodID)

//     set(reference, {
//         id: foodID,
//         name: foodName,
//         type: foodType,
//         image: foodImage,
//         price: foodPrice
//     });

//     console.log("added");
// }

async function getFoodsData (foodType="main courses", limitFoods=8, start=1) {
    let data = [];
    let q;
    const reference = collection(database, "foods");

    if(foodType == "all"){
        q = query(reference, orderBy("id", "asc"), startAt(start), limit(limitFoods));
    } else {
        q = query(reference, where("type", "==", "main courses"), orderBy("id", "asc"), startAt(start), limit(limitFoods));
    }
    const snapshot = await getDocs(q);
    snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
    });

    return data;
}

// export { writeFoodData };
export { getFoodsData };