import { database } from "./Firebase";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import '../css/Booking.css'
import React, { useState } from "react";

const BookingForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [count, setCount] = useState(0);
    const [error, setError] = useState(null);
    const db = getFirestore()
    const colRef = collection(db, 'BookingTables')

    function handlePlus(e) {
        if(count === null || count === ""){
          setCount(1);
        } else {
          setCount(count + 1);
          setError(null);
        }
        e.preventDefault();
      }
    
      function handleMinus(e) {
        if (count > 0) {
          setCount(count - 1);
          setError(null);
        } else {
          setError("Please Enter a Valid Number");
        }
        e.preventDefault();
      }

      function handleValueChange(e) {
        const re = /^[0-9\b]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
          const x = Number(e.target.value);
          setCount(x);
          setError("updated");
        } else {
          setError("Your input is not valid");
        }
        e.preventDefault();
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name=='' || phone=='' || count==0 || date=='' || time==''){
          alert('Booking fail! Lack of information! ')
        }else{
          addDoc(colRef,{
            name: name,
            phone: phone,
            people_num: count,
            date: date,
            time: time
          })

          .then(() => {
            alert('Your message has been sent!');
          })
        }
        

        setName('');
        setPhone('');
        setCount('');
        setDate('');
        setTime('');
    };

    return (
        <form className='booking-container m-0' onSubmit={handleSubmit}>
            <h3 className="textContact"><i className="fa-solid fa-phone"></i> Book your table here</h3>
                <hr className='line' />
                <hr className='line'/>
                <label className='booking-form-label d-flex justify-content-between'>
                    Name:
                    <input className='booking-form-input' type="text" placeholder='Enter here...' value={name} onChange={(e)=>setName(e.target.value)}/>
                </label>
                <label className='booking-form-label d-flex justify-content-between'>
                    Phone:
                    <input className='booking-form-input' type="number" placeholder='Enter here...' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </label>
                <label className='booking-form-label d-flex justify-content-between'>
                    People:
                    <div className='specialDiv'>
                        <button className='dautru' onClick={handleMinus}>-</button>
                        <input className='specialInput' type="text" value={count} min="0" onClick={() => setCount(0)} onChange={handleValueChange}/>
                        <button className='daucong' onClick={handlePlus}>+</button>
                    </div>
                </label>
                <label className='booking-form-label d-flex justify-content-between'>
                    Date:
                    <input className='booking-form-input' type="text" placeholder='Enter here...' value={date} onChange={(e)=>setDate(e.target.value)}/>
                </label>
                <label className='booking-form-label d-flex justify-content-between'>
                    Time:
                    <input className='booking-form-input' type="text" placeholder='Enter here...' value={time} onChange={(e)=>setTime(e.target.value)}/>
                </label>
                <div className='positionButton'>
                    <button className='btn position-button btn-primary' type="submit">Submit</button>
                </div>
            </form>
  );
};

export default BookingForm;
