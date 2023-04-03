import { database } from "./Firebase";
import { collection, getDocs, query, orderBy,  } from "firebase/firestore";

async function getStaffs() {
    let data = [];
    const reference = collection(database, "staffs");
    let q =  query(reference, orderBy("id", "asc"));

    const snapshot = await getDocs(q);
    snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data()});
    });

    return data;
}

async function addStaff() {
    let data = [];
    const reference = collection(database, "staffs");
    let q =  query(reference, orderBy("id", "asc"));

    const snapshot = await getDocs(q);
    snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data()});
    });
}

export {getStaffs};