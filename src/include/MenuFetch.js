import { database } from "./Firebase";
import { collection, getDocs, getCountFromServer, query, startAt, limit, orderBy, where } from "firebase/firestore";

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

async function getSingleFoodData(foodID=1) {
    let data;
    let q;
    const reference = collection(database, "foods");
    q = query(reference, where("id", "==", foodID));
    const snapshot = await getDocs(q);
    data = snapshot.docs[0].data();

    return data;
}

export { getFoodsData };
export { getNumberFoods };
export { getSingleFoodData };