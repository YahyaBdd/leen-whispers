import { db } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';
import React, { useState } from 'react'


export default function SignIn({dict}) {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [pwd, setPwd] = useState("");
    const [errors, setErrors] = useState("");

    const signInUser = async (e) => {
        e.preventDefault();
        const docSnap = await getDoc(doc(db, "users", phoneNumber));
        if (docSnap.exists() && docSnap.data().pwd === pwd) {
            const result = docSnap.data();
            localStorage.setItem("userName", result.fullName);
            localStorage.setItem("identifier", result.phoneNumber);
            window.location.reload();
        }
        else {
            setErrors("Invalid Credentials");
        }
    }

  return (
    <>
        <form name="signIn" className="row booking-form" >
            <div className="col-md-12">
              <input
                type="text"
                name="phoneNumber"
                className="form-control date"
                placeholder={dict.phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <p style={{fontSize:"medium"}}>*Use universal format (Ex. +966)</p>
            <div className="col-md-12">
              <input
                type="password"
                name="date"
                className="form-control date"
                placeholder={dict.pwd}
                onChange={(e) => setPwd(e.target.value)}
                required
              />
            </div>
            <p>{errors}</p>
            <div className="col-md-12 text-center">
              <button
                type="submit"
                className="btn btn--tra-black hover--black submit"
                onClick={signInUser}
              >
                {dict.button}
              </button>
            </div>
        </form>
            
    </>
  )
}
