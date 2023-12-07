"use client"

import BookingForm from "./BookingForm";
import SignIn from "./SignIn";
import Register from "./Register";
import SocialLogin from "./SocialLogin";
import { useState } from "react";


export default function LoginRegistrationCard({lang,dict}) {
    const [activeTab, setActiveTab] = useState('signIn');
    const [userName, setUserName] = useState(localStorage.getItem("userName"))
    const [identifier, setIdentifier] = useState(localStorage.getItem("identifier"))

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };

    const userData = { 
        firstName: userName?.split(" ")[0] || "",
        lastName: userName?.split(" ")[1] || "",
        identifier: identifier || "",
    }

    const removeCookie = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("identifier");
        window.location.reload();
    }

  return (
    <div className="pt-8 pb-7 booking-section division">
      
      {userName ? (
        <>
        <div className="container text-center">
            <h2>{dict.welcoming.title} {userName}</h2>
            <p>{dict.welcoming.text}</p>
            <a className="btn btn--tra-black hover--black submit" onClick={removeCookie}>
              {dict.welcoming.button}  
            </a>
        </div>
        <BookingForm lang={lang} userData={userData}/>        
        </>
      ) : (
        <>
        <SocialLogin/> 
        <br />
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9">
        <div className="container" style={{display:'flex', flexDirection: 'row', justifyContent:'center'}}>
          <button
            style={{marginRight: '10px'}}
            className={`btn btn--tra-black hover--black nav-link ${activeTab === 'signIn' ? 'active' : ''}`}
            onClick={() => handleTabChange('signIn')}
          >
            {lang === "en" ? "Sign In" : "تسجيل الدخول"}
          </button>
      
          <button
            className={`btn btn--tra-black hover--black nav-link ${activeTab === 'registration' ? 'active' : ''}`}
            onClick={() => handleTabChange('registration')}
          >
            {lang === "en" ? "Register" : "إنشاء حساب"}
          </button>
        </div>
            <br />
            <br />
          <div  className="row ">
            {activeTab === 'signIn' && (<SignIn dict={dict.signIn}/>)}
            {activeTab === 'registration' && (<Register dict={dict.register}/>)}
        </div> 
        </div>
      </div>{" "}
    </div>
    </>
    )}

  </div>

  )
}
