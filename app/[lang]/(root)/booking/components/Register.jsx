"use client"
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import { auth, db } from "@/firebase";
import {FacebookAuthProvider, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup } from "firebase/auth";

import { doc, setDoc } from "firebase/firestore"; 

export default function Register({dict}) {

    const [showOTP, setShowOTP] = useState(false);
    const [otp, setOtp] = useState("");
    const [errors, setErrors] = useState();
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pwd, setPwd] = useState("");
    const [rePwd, setRePwd] = useState("");


    function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
          window.recaptchaVerifier = new RecaptchaVerifier(
            auth,
            "recaptcha-container",
            {
              size: "invisible",
              callback: (response) => {
                onSignup();
              },
              "expired-callback": () => {},
            }
          );
        }
    }
  
    function onSignup(e) {
    e.preventDefault();

    if(pwd !== rePwd) {
        setErrors("Passwords should match");
        return;
    } else {
        setErrors("");
    }   

    onCaptchVerify();
    const formatPh = "+" + phoneNumber;

    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
        .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setShowOTP(true);
        })
        .catch((error) => {
        setErrors("invalid phone number");
        });
    }
  
    function onOTPVerify(e) {
    e.preventDefault();
    window.confirmationResult
        .confirm(otp)
        .then(async (res) => {
        const data = {
            fullName : fullName,
            phoneNumber: phoneNumber,
            pwd : pwd,
            uid: res.user.uid,
        }

        await setDoc(doc(db, "users", res.user.phoneNumber), data);

        localStorage.setItem("userName", fullName);
        localStorage.setItem("identifier", phoneNumber);

        window.location.reload();
        })
        .catch((err) => {
        console.log(err);
        });
    }

    return (
        <>
        {showOTP ? (
            <>
                <p className="text-center">{dict.otp.title}</p>
                <p className="text-center"><svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24"><path fill="currentColor" d="m11.19 1.36l-7 3.11C3.47 4.79 3 5.51 3 6.3V11c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V6.3c0-.79-.47-1.51-1.19-1.83l-7-3.11c-.51-.23-1.11-.23-1.62 0zm-1.9 14.93L6.7 13.7a.996.996 0 1 1 1.41-1.41L10 14.17l5.88-5.88a.996.996 0 1 1 1.41 1.41l-6.59 6.59a.996.996 0 0 1-1.41 0z"/></svg></p>
                <form name="otp" className="row booking-form" onSubmit={onOTPVerify}>

                <div className="col-md-12">
                    <input
                    type="text"
                    name="otp"
                    className="form-control"
                    placeholder={dict.otp.otp}
                    required
                    onChange={(e) => setOtp(e.target.value)}
                    />
                </div>
                <div className="col-md-12 text-center">
                    <button
                        type="submit"
                        className="btn btn--tra-black hover--black submit"
                    >
                        {dict.otp.button}
                    </button>
                </div>
                </form>
            </>
            )  : (

            <>
            <div id="recaptcha-container"></div>
            <form name="registration" className="row booking-form" onSubmit={onSignup}>
              {/* Registration form fields */}
                <div className="col-md-12">
                    <input
                    type="text"
                    name="fullName"
                    className="form-control date"
                    placeholder={dict.name}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    />
                </div>
                <div className="col-md-12">
                    <PhoneInput country={"sa"} value={phoneNumber} onChange={setPhoneNumber}/>
                </div>
                <div className="col-md-12">
                    <input
                    type="password"
                    name="pwd"
                    className="form-control date"
                    placeholder={dict.pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    required
                    />
                    </div>
                <div className="col-md-12">
                    <input
                        type="password"
                    name="re-pwd"
                    className="form-control"
                    placeholder={dict.rePwd}
                    onChange={(e) => setRePwd(e.target.value)}
                    required
                    />
                </div>
                <p>{errors}</p>
                <div className="col-md-12 text-center">
                    <button
                        type="submit"
                        className="btn btn--tra-black hover--black submit"
                        >
                        {dict.button}
                    </button>
                </div>
            </form>
            </>
            
            )
        }   
        </>
    )
}
