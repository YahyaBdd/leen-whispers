const Footer = ({dict}) => {
  return (
    <footer id="footer-3" className="pt-8 footer division">
      <div className="container text-center">
        {/* FOOTER CONTENT */}
        <div className="row">
          {/* FOOTER CONTACTS */}
          <div className="col-sm-6 col-lg-4">
            <div className="footer-contacts">
              <h5 className="h5-md">{dict.location.title}</h5>
              <p>{dict.location.salonName}</p>
              <p>{dict.location.address}</p>
            </div>
          </div>
          {/* FOOTER CONTACTS */}
          <div className="col-sm-6 col-lg-4">
            <div className="footer-info">
              <h5 className="h5-md">{dict.getInTouch.title}</h5>
              <p className="footer-phone">
                <a href={`tel:${dict.getInTouch.phone}`}>
                  phone: {dict.getInTouch.phone}
                </a>
              </p>
              <p className="footer-email">
                <a href={`mailto:${dict.getInTouch.email}`}>
                  {dict.getInTouch.email}
                </a>
              </p>
              <ul className="foo-socials ico-20 text-center clearfix">
                {dict.getInTouch.socials.map((social, index) => (
                  <li key={index}>
                    <a href={social.link} className={`ico-${social.platform.toLowerCase()}`}>
                      <span className={`flaticon-${social.platform.toLowerCase()}`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* FOOTER CONTACTS */}
          <div className="col-sm-6 col-lg-4">
            <div className="footer-info">
              <h5 className="h5-md">{dict.workingHours.title}</h5>
              {dict.workingHours.days.map((day, index) => (
                <p key={index}>
                  {day.day}: <span>{day.hours}</span>
                </p>
              ))}
            </div>
          </div>
        </div>{" "}
        {/* END FOOTER CONTENT */}
      </div>{" "}
      {/* End container */}
    </footer>
    // <footer id="footer-3" className="pt-8 footer division">
    // <div className="container text-center">
    //     {/* FOOTER CONTENT */}
    //     <div className="row">
    //     {/* FOOTER CONTACTS */}
    //     <div className="col-sm-6 col-lg-4">
    //         <div className="footer-contacts">
    //         {/* Title */}
    //         <h5 className="h5-md">Our Location</h5>
    //         {/* Salon Name */}
    //         <p>Reine Studio</p>
    //         {/* Address */}
    //         <p>
    //             Los Angeles, 8721 M <br /> Central Avenue, CA 90036
    //         </p>
    //         </div>
    //     </div>
    //     {/* FOOTER CONTACTS */}
    //     <div className="col-sm-6 col-lg-4">
    //         <div className="footer-info">
    //         {/* Title */}
    //         <h5 className="h5-md">Get in Touch</h5>
    //         {/* Phone */}
    //         <p className="footer-phone">
    //             <a href="tel:123456789">phone: +12 9 8765 4321</a>
    //         </p>
    //         {/* Email */}
    //         <p className="footer-email">
    //             <a href="mailto:yourdomain@mail.com">hello@yourdomain.com</a>
    //         </p>
    //         {/* List */}
    //         <ul className="foo-socials ico-20 text-center clearfix">
    //             <li>
    //             <a href="#" className="ico-facebook">
    //                 <span className="flaticon-facebook" />
    //             </a>
    //             </li>
    //             <li>
    //             <a href="#" className="ico-twitter">
    //                 <span className="flaticon-twitter" />
    //             </a>
    //             </li>
    //             <li>
    //             <a href="#" className="ico-youtube">
    //                 <span className="flaticon-instagram" />
    //             </a>
    //             </li>
    //         </ul>
    //         </div>
    //     </div>
    //     {/* FOOTER CONTACTS */}
    //     <div className="col-sm-6 col-lg-4">
    //         <div className="footer-info">
    //         {/* Title */}
    //         <h5 className="h5-md">Working Hours</h5>
    //         {/* Text */}
    //         <p>
    //             Mon-Fri: <span>10:00AM - 9:00PM</span>
    //         </p>
    //         <p>
    //             Saturday: <span>10:00AM - 7:00PM</span>
    //         </p>
    //         <p>
    //             Sunday: <span>10:00PM - 7:00PM</span>
    //         </p>
    //         </div>
    //     </div>
    //     </div>{" "}
    //     {/* END FOOTER CONTENT */}
    //     {/* BOTTOM FOOTER */}
    // </div>{" "}
    // {/* End container */}
    // </footer>
  )
}

export default Footer