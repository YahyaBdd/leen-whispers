"use client"

import { useEffect, useState } from "react"

export default function DiscountModal({offers}) {

    const [offer, setOffer] = useState({
        offerTitle: '',
        offerDescription: ''
    })

    useEffect(() => {
        if(offers[localStorage.getItem('identifier')]) {
            setOffer(offers[localStorage.getItem('identifier')])
            setTimeout(() => {
                const modal = document.getElementById('modal-2')
                modal.style.setProperty('transition', 'display 0.5s ease')
                modal.style.setProperty('display', 'block', 'important')
            }, 7000)
        }
    }, [])

    console.log(offers[localStorage.getItem('identifier')], localStorage.getItem('identifier'))
    
  return (
    <>
    <div id="modal-2" className="modal" tabIndex={-1}>
        <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
                {/* CLOSE BUTTON */}
                <button
                    type="button"
                    className="modal-close color--black ico-20"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={()=>{document.getElementById('modal-2').style.display='none'}}
                >
                    <span className="flaticon-246" />
                </button>
                {/* MODAL CONTENT */}
                <div className="modal-body">
                    <div className="container">
                        <div className="row">
                            {/* BACKGROUND IMAGE */}
                            <div className="col-md-6 bg-img d-none d-sm-flex align-items-end" />
                            {/* REQUEST FORM */}
                            <div className="col-md-6">
                                <div className="modal-body-content">
                                    {/* TEXT */}
                                    <div className="request-form-title">
                                        {/* Title 	*/}
                                        <h3 className="h3-md">
                                            <span>{offer.offerTitle}</span>
                                        </h3>
                                        <p>
                                            {offer.offerDescription}
                                        </p>
                                    </div>
                                    {/* FORM */}
                                    <form name="requestForm" className="row request-form">
                                        <div className="col-md-12">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control email"
                                                placeholder="Enter your email"
                                                autoComplete="off"
                                                required=""
                                            />
                                        </div>
                                        <div className="col-md-12 form-btn">
                                            <button
                                                type="button"
                                                className="btn btn--black hover--tra-black submit"
                                                onClick={()=>{document.getElementById('modal-2').style.display='none'}}
                                            >
                                                Claim
                                            </button>
                                        </div>
                                        <div className="request-form-msg">
                                            <span className="loading" />
                                        </div>
                                    </form>
                                </div>
                            </div>{" "}
                            {/* END REQUEST FORM */}
                        </div>
                    </div>
                </div>{" "}
                {/* END MODAL CONTENT */}
            </div>
        </div>
    </div>
    </>
  )
}
