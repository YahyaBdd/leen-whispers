"use client"

import { useEffect } from "react"

export default function DiscountModal({dict}) {
    useEffect(() => {
        // set a 7 sec timeout to show modal
        setTimeout(() => {
            const modal = document.getElementById('modal-2')
            modal.style.setProperty('transition', 'display 0.5s ease')
            modal.style.setProperty('display', 'block', 'important')
        }, 7000)
        
    }, [])
    
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
                                            <span>{dict.modalTitle}</span>
                                        </h3>
                                        <h4 className="h4-md">{dict.modalSubtitle}</h4>
                                        {/* Text */}
                                        <p>
                                            {dict.modalText}
                                        </p>
                                    </div>
                                    {/* FORM */}
                                    <form name="requestForm" className="row request-form">
                                        {/* Form Input */}
                                        <div className="col-md-12">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control email"
                                                placeholder={dict.emailPlaceholder}
                                                autoComplete="off"
                                                required=""
                                            />
                                        </div>
                                        {/* Form Button */}
                                        <div className="col-md-12 form-btn">
                                            <button
                                                type="submit"
                                                className="btn btn--black hover--tra-black submit"
                                            >
                                                {dict.submitButton}
                                            </button>
                                        </div>
                                        {/* Form Message */}
                                        <div className="request-form-msg">
                                            <span className="loading" />
                                        </div>
                                    </form>{" "}
                                    {/* END FORM */}
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
