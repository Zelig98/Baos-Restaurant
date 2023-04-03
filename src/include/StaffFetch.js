import { database } from "./Firebase";
import { collection, getDocs, query, orderBy, addDoc  } from "firebase/firestore";

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

async function addStaff(fname,lname,phone, username, role) {
    const reference = collection(database, "staffs")
    
    addDoc(reference, {
        first_name: fname,
        last_name:lname,
        phone: phone,
        username: username,
        role: role,
      })
}

export {getStaffs, addStaff};