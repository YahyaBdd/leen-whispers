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
                    <a href={social.link} className={`ico-${social.platform.toLowerCase()}`} target="_blank">
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
  )
}

export default Footer