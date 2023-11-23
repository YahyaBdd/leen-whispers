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
        console.log(`pwd: ${pwd} rePwd: ${rePwd}`)
        setErrors("Passwords should match");
        return;
    } else {
        console.log(`pwd: ${pwd} rePwd: ${rePwd}`)
        setErrors("");
    }   

    console.log("sending otp to: " + phoneNumber + "")

    onCaptchVerify();
    const formatPh = "+" + phoneNumber;

    console.log(formatPh);

    const appVerifier = window.recaptchaVerifier;

    console.log(appVerifier);

    signInWithPhoneNumber(auth, formatPh, appVerifier)
        .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setShowOTP(true);
        console.log(otp);
        })
        .catch((error) => {
        setErrors("invalid phone number");
        console.log(error.message);
        });
    }
  
    function onOTPVerify(e) {
    e.preventDefault();
    console.log(otp);
    window.confirmationResult
        .confirm(otp)
        .then(async (res) => {
        console.log(res);

        const data = {
            fullName : fullName,
            phoneNumber: phoneNumber,
            pwd : pwd,
            uid: res.user.uid,
        }

        await setDoc(doc(db, "users", res.user.phoneNumber), data);

        localStorage.setItem("userName", fullName);
        localStorage.setItem("identifier", phoneNumber);
        })
        .catch((err) => {
        console.log(err);
        });
    }
  
    function signInWithGmail() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then(async (result) => {

        const data = {
            fullName : result.user.displayName,
            email: result.user.email,
            uid: result.user.uid,
        }

        await setDoc(doc(db, "users", result.user.email), data);
    
        localStorage.setItem("userName", result.user.displayName);
        localStorage.setItem("identifier", result.user.email);


        }).catch((error) => {
        console.log(error.message);
    });
    }
  
    function signInWithFacebook() {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
    .then(async (result) => {

        const data = {
            fullName : result.user.displayName,
            email: result.user.email,
            uid: result.user.uid,
        }

        await setDoc(doc(db, "users", result.user.email), data);


        localStorage.setItem("userName", result.user.displayName);
        localStorage.setItem("identifier", result.user.email);

        })
        .catch((error) => {
        console.log(error.message);
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
