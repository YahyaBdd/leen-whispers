"use client"

import { db } from "@/firebase";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react"

export default function ReviewsModal({offers}) {

    const [app, setApp] = useState({})
    const [reviewedApp, setReviewedApp] = useState({
        service: {
            description: ''
        },
        staff: ''
    })
    const [review, setReview] = useState('')

    async function getAppointments(identifier) {
        console.log("triggered")
        try {
          let q;
          if(identifier.includes('@')) {
            q = query(collection(db, "appointments"), where("email", "==", identifier));
          } else {
            q = query(collection(db, "appointments"), where("phone", "==", identifier));
          }
          const querySnapshot = await getDocs(q);

          const currentDate = new Date();

          const passedAppointments = [];

          querySnapshot.forEach((doc) => {
            const appointmentDate = new Date(doc.data().date);

            if(appointmentDate < currentDate && !doc.data().reviewed) {
                const data = {
                    ...doc.data(),
                    id: doc.id
                }
                passedAppointments.push(data);
            }
          });
          console.log("passed",passedAppointments)

          setApp(passedAppointments)
          console.log("passed",passedAppointments)

        } catch (error) {
          console.log(error)
        }
      }

    async function handleSubmitedReview() {
        const item = {
            ...reviewedApp,
            review: review,
            client_id: localStorage.getItem('identifier'),
            username: localStorage.getItem('userName')
        }
        try {
            await  setDoc(doc(db, "reviews", reviewedApp.id), item)
            await  setDoc(doc(db, "appointments", reviewedApp.id), {reviewed: true}, {merge: true})
            document.getElementById('reviews-modal').style.display='none'
            console.log("Document written with ID: ", reviewedApp.id);
            alert("Thanks for submitting your review!")
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
      

    useEffect(() => {
        console.log(localStorage.getItem('identifier'))
        getAppointments(localStorage.getItem('identifier'))
        
    }, [])

    useEffect(() => {
        if (app.length > 0) {
            //select a random appointment
            const randomApp = app[Math.floor(Math.random() * app.length)];
            setReviewedApp(randomApp);
            setTimeout(() => {
                const modal = document.getElementById('reviews-modal').querySelector("#modal-2");
                modal.style.setProperty('transition', 'display 0.5s ease');
                modal.style.setProperty('display', 'block', 'important');
                console.log(app);
            }, 10000);
        }
    }, [app]);
    

    
  return (
    <>
    <div id="reviews-modal">
    <div id="modal-2" className="modal" tabIndex={-1}>
        <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
                {/* CLOSE BUTTON */}
                <button
                    type="button"
                    className="modal-close color--black ico-20"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={()=>{document.getElementById('reviews-modal').style.display='none'}}
                >
                    <span className="flaticon-246" />
                </button>
                {/* MODAL CONTENT */}
                <div className="modal-body">
                    <div className="container">
                        <div className="row">
                            <div >
                                <div className="modal-body-content">
                                    {/* TEXT */}
                                    <div className="request-form-title">
                                        {/* Title 	*/}
                                        <h3 className="h3-md">
                                            <span>Hope you enjoyed your {reviewedApp.service.description} 😊</span>
                                        </h3>
                                        <p>
                                        🌺 Leave a review for {reviewedApp.staff}'s services 🌺
                                        </p>
                                    </div>
                                    {/* FORM */}
                                    <form name="requestForm" className="row request-form">
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                name="review"
                                                className="form-control email"
                                                placeholder="your review"
                                                autoComplete="off"
                                                required=""
                                                onChange={(e)=>{setReview(e.target.value)}}
                                            />
                                        </div>
                                        <div className="col-md-12 form-btn">
                                            <button
                                                type="button"
                                                className="btn btn--black hover--tra-black submit"
                                                onClick={handleSubmitedReview}
                                            >
                                                Submit your review
                                            </button>
                                        </div>
                                        <div className="request-form-msg">
                                            <span className="loading" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
