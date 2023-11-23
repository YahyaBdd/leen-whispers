import { auth, db } from '@/firebase';
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useState } from 'react'


export default function SignIn({dict}) {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [pwd, setPwd] = useState("");
    const [errors, setErrors] = useState("");

    const signInUser = async (e) => {
        e.preventDefault();
        console.log("signing in user with phone number: " + phoneNumber + " and password: " + pwd + "");
        const docSnap = await getDoc(doc(db, "users", phoneNumber));
        if (docSnap.exists() && docSnap.data().pwd === pwd) {
            const result = docSnap.data();
            console.log("signed in the following user:", docSnap.data());
            localStorage.setItem("userName", result.fullName);
            localStorage.setItem("identifier", result.phoneNumber);
            window.location.reload();
        }
        else {
            console.log("No such document!");
            setErrors("Invalid Credentials");
        }
    }

    function signInWithGmail() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(async (result) => {      
                localStorage.setItem("userName", result.user.displayName);
                localStorage.setItem("identifier", result.user.email);
                window.location.reload();
            }).catch((error) => {
                console.log(error.message);
        });
    }
    
    function signInWithFacebook() {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
        .then(async (result) => {

            localStorage.setItem("userName", result.user.displayName);
            localStorage.setItem("identifier", result.user.email);
            window.location.reload();

            })
            .catch((error) => {
            console.log(error.message);
        });
    }

  return (
    <>
        <p className="text-center">{dict.title}</p>
        <ul className="foo-socials ico-20 text-center clearfix" style={{marginTop: "0px !important", marginLeft:"10px !important" }}>
            <li>
                <a onClick={signInWithFacebook}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024"><path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6c44.2 0 82.1 3.3 93.2 4.8v107.9z"/></svg>
                </a>
            </li>
            <li>
                <a onClick={signInWithGmail}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/></svg>
                </a>
            </li>
        </ul>
        <br />
        <br />
        <p className="text-center">Or :</p>
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
