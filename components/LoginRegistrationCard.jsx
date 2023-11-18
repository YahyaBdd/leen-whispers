"use client"

import { useState } from "react"

export default function LoginRegistrationCard() {
    const [activeTab, setActiveTab] = useState('signIn')

    const handleTabChange = (tab) => {
        setActiveTab(tab);
      };

  return (
    <div className="pt-8 pb-7 booking-section division">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9">
            
        <div className="row">
              <div className="col-md-12">
                <ul className="nav nav-tabs justify-content-center">
                  <li className="nav-item">
                    <button
                      className={`btn btn--tra-black hover--black nav-link ${activeTab === 'signIn' ? 'active' : ''}`}
                      onClick={() => handleTabChange('signIn')}
                    >
                      Sign In
                    </button>
                  </li>
                  
                  <li className="nav-item">
                    <button
                      className={`btn btn--tra-black hover--black nav-link ${activeTab === 'registration' ? 'active' : ''}`}
                      onClick={() => handleTabChange('registration')}
                    >
                      Register
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <br />
          <div  className="row ">
          {activeTab === 'signIn' && (
            <>
                <p className="text-center">Sign in with:</p>
                <ul className="foo-socials ico-20 text-center clearfix" style={{marginTop: "0px !important", marginLeft:"10px !important" }}>
                    <li>
                        <a href="#" className="ico-facebook" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024"><path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6c44.2 0 82.1 3.3 93.2 4.8v107.9z"/></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="ico-facebook" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="ico-facebook" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                        </a>
                    </li>
                </ul>
            </>
            )}

            {activeTab === 'registration' && (
                <>
                <p className="text-center">Sign Up with:</p>
                <ul className="foo-socials ico-20 text-center clearfix" style={{marginTop: "0px !important", marginLeft:"10px !important" }}>
                    <li>
                        <a href="#" className="ico-facebook" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024"><path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6c44.2 0 82.1 3.3 93.2 4.8v107.9z"/></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="ico-facebook" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="ico-facebook" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                        </a>
                    </li>
                </ul>
            </>
            )}

            <br />
            <br />
            

        </div> 

            <p className="text-center">Or :</p>

            {activeTab === 'signIn' && (
              <form name="signIn" className="row booking-form">
                {/* Sign In form fields */}
                <div className="col-md-12">
              <input
                type="text"
                name="phoneNumber"
                className="form-control date"
                placeholder="Enter your phone number*"
                required
              />
            </div>
            <div className="col-md-12">
              <input
                type="password"
                name="date"
                className="form-control date"
                placeholder="Enter your password*"
                required
              />
            </div>
            <div className="col-md-12 text-center">
              <button
                type="submit"
                className="btn btn--tra-black hover--black submit"
              >
                Sign In
              </button>
            </div>
              </form>
            )}

            {activeTab === 'registration' && (
              <form name="registration" className="row booking-form">
                {/* Registration form fields */}
                <div className="col-md-12">
              <input
                type="text"
                name="fullName"
                className="form-control date"
                placeholder="Enter your name*"
                required
              />
            </div>
            <div className="col-md-12">
              <input
                type="text"
                name="date"
                className="form-control date"
                placeholder="Enter your phone number*"
                required
              />
            </div>
            <div className="col-md-12">
              <input
                type="password"
                name="pwd"
                className="form-control date"
                placeholder="Password *"
                required
              />
            </div>
            <div className="col-md-12">
              <input
                type="password"
                name="re-pwd"
                className="form-control"
                placeholder="Repeat password *"
                required
              />
            </div>
            <div className="col-md-12 text-center">
              <button
                type="submit"
                className="btn btn--tra-black hover--black submit"
              >
                Register
              </button>
            </div>
              </form>
            )}

          {/* <form name="signIn" className="row booking-form"> */}
            {/* <div className="col-lg-6">
              <input
                type="text"
                name="firstname"
                className="form-control firstname"
                placeholder={content.firstNamePlaceholder}
                required=""
              />
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                name="lastname"
                className="form-control lastname"
                placeholder={content.lastNamePlaceholder}
                required=""
              />
            </div>
            <div className="col-lg-6">
              <input
                type="email"
                name="email"
                className="form-control email"
                placeholder={content.emailAddressPlaceholder}
                required=""
              />
            </div>
            <div className="col-lg-6">
              <input
                type="tel"
                name="phone"
                className="form-control phone"
                placeholder={content.phoneNumberPlaceholder}
                required=""
              />
            </div>
            <div className="col-lg-6">
              <select dir='ltr'
                name="service"
                className="form-select service"
                aria-label="Service Select"
              >
                <option selected="">{content.selectService}</option>
                  {content.services.map((service, index) => (
                    <option key={index}>{service}</option>
                  ))}
              </select>
            </div>
            <div className="col-lg-6">
              <select
                dir='ltr'
                name="staff"
                className="form-select staff"
                aria-label="Staff Select"
              >
                <option selected="">
                  {content.selectStaff}
                </option>
                <option selected="">{content.selectService}</option>
                  {content.staff.map((service, index) => (
                    <option key={index}>{service}</option>
                  ))}
              </select>
            </div> */}
            {/* <div className="col-md-12">
              <input
                id="datetimepicker"
                type="text"
                name="date"
                className="form-control date"
                placeholder={content.appointmentDatePlaceholder}
                required
              />
            </div> */}
            {/* <div className="col-md-12">
              <input
                type="text"
                name="fullName"
                className="form-control date"
                placeholder="Enter your name*"
                required
              />
            </div>
            <div className="col-md-12">
              <input
                type="email"
                name="date"
                className="form-control date"
                placeholder="Enter your email*"
                required
              />
            </div>
            <div className="col-md-12 text-center">
              <button
                type="submit"
                className="btn btn--tra-black hover--black submit"
              >
                Sign In
              </button>
            </div>
            <div className="col-md-12 booking-form-msg">
              <div className="sending-msg">
                <span className="loading" />
              </div>
            </div>
          </form> */}
        </div>
      </div>{" "}
    </div>
    {/* <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9">
          <div  className="row ">
            <p className="text-center">Sign up with:</p>
            <ul className="foo-socials ico-20 text-center clearfix">
                <li>
                    <a href="#" className="ico-facebook" target="_blank">
                        <span className="flaticon-facebook" />
                    </a>
                </li>
                <li>
                    <a href="#" className="ico-facebook" target="_blank">
                        <span className="flaticon-email" />
                    </a>
                </li>
                <li>
                    <a href="#" className="ico-facebook" target="_blank">
                        <span className="flaticon-facebook" />
                    </a>
                </li>
                <li>
                    <a href="#" className="ico-facebook" target="_blank">
                        <span className="flaticon-facebook" />
                    </a>
                </li>
            </ul>

            <br />
            <br />
            

        </div> 

            <p className="text-center">Or :</p>

          <form name="registration" className="row booking-form">
            <div className="col-md-12">
              <input
                type="text"
                name="fullName"
                className="form-control date"
                placeholder="Enter your name*"
                required
              />
            </div>
            <div className="col-md-12">
              <input
                type="email"
                name="date"
                className="form-control date"
                placeholder="Enter your email*"
                required
              />
            </div>
            <div className="col-md-12">
              <input
                type="password"
                name="pwd"
                className="form-control date"
                placeholder="Password *"
                required
              />
            </div>
            <div className="col-md-12">
              <input
                type="password"
                name="re-pwd"
                className="form-control"
                placeholder="Repeat password *"
                required
              />
            </div>
            <div className="col-md-12 text-center">
              <button
                type="submit"
                className="btn btn--tra-black hover--black submit"
              >
                Register
              </button>
            </div>
            <div className="col-md-12 booking-form-msg">
              <div className="sending-msg">
                <span className="loading" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div> */}
  </div>

  )
}
