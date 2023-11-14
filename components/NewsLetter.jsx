export default function NewsLetter({dict}) {

  return (
    <section id="newsletter-1" className="pt-8 newsletter-section division">
      <div className="container">
        <div className="newsletter-wrapper bg--img">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="section-title color--white text-center">
                {/* Title */}
                <h2 className="h2-title">{dict.title}</h2>
                {/* Text */}
                <p>{dict.description}</p>
              </div>
            </div>
          </div>
          {/* NEWSLETTER FORM */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form className="newsletter-form text-center">
                <div className="input-group">
                  <input
                    type="email"
                    autoComplete="off"
                    className="form-control"
                    placeholder={dict.form.placeholder}
                    required=""
                    id="s-email"
                  />
                  <span className="input-group-btn">
                    <button
                      type="submit"
                      className="btn btn--tra-white hover--white"
                    >
                      {dict.form.buttonText}
                    </button>
                  </span>
                </div>
                {/* Newsletter Form Notification */}
                <label htmlFor="s-email" className="form-notification" />
              </form>
            </div>
          </div>{" "}
          {/* END NEWSLETTER FORM */}
        </div>{" "}
        {/* End newsletter-wrapper */}
      </div>{" "}
      {/* End container */}
    </section>
    // <section id="newsletter-1" className="pt-8 newsletter-section division">
    //   <div className="container">
    //     <div className="newsletter-wrapper bg--img">
    //       {/* SECTION TITLE */}
    //       <div className="row justify-content-center">
    //         <div className="col-lg-10 col-xl-8">
    //           <div className="section-title color--white text-center">
    //             {/* Title */}
    //             <h2 className="h2-title">Join Our Newsletter</h2>
    //             {/* Text */}
    //             <p>
    //               Receive beauty and wellness insights, events and latest
    //               offers!
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       {/* NEWSLETTER FORM */}
    //       <div className="row justify-content-center">
    //         <div className="col-lg-8">
    //           <form className="newsletter-form text-center">
    //             <div className="input-group">
    //               <input
    //                 type="email"
    //                 autoComplete="off"
    //                 className="form-control"
    //                 placeholder="Enter your email"
    //                 required=""
    //                 id="s-email"
    //               />
    //               <span className="input-group-btn">
    //                 <button
    //                   type="submit"
    //                   className="btn btn--tra-white hover--white"
    //                 >
    //                   Subscribe
    //                 </button>
    //               </span>
    //             </div>
    //             {/* Newsletter Form Notification */}
    //             <label htmlFor="s-email" className="form-notification" />
    //           </form>
    //         </div>
    //       </div>{" "}
    //       {/* END NEWSLETTER FORM */}
    //     </div>{" "}
    //     {/* End newsletter-wrapper */}
    //   </div>{" "}
    //   {/* End container */}
    // </section>
  )
}
