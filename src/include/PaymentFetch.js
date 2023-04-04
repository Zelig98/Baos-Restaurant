import { ReactSession } from 'react-client-session';
import { collection, addDoc, getCountFromServer , orderBy, getDocs, query} from "firebase/firestore";
import { database } from "./Firebase";
import { result } from 'lodash';

async function getPayment() {
  let data = [];
  const reference = collection(database, "payments");
  let q =  query(reference, orderBy("id", "asc"));

  const snapshot = await getDocs(q);
  snapshot.docs.forEach((doc) => {
      data.push({ ...doc.data()});
  });

  return data;
}

async function addToPayment() {
  

  const d = new Date();
  let day = d.toString();
  
    console.log(day);



  const reference = collection(database, "payments");
  const foodCartSession = ReactSession.get("cart");

  foodCartSession.forEach(item => {
      addDoc(reference, {
          time: day,
          food_name: item["name"],
          price:item["price"],
          amount: item["quantity"],
        })
      
        // console.log(cartID);
        // console.log(item["name"]);
        // console.log(item["price"]);
        // console.log(item["quantity"]);
        // console.log();
  })
}

export {addToPayment};