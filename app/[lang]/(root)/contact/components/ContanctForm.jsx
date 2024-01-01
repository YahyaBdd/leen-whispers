export default function ContanctForm({dict}) {
  return (
    <section id="contacts-3" className="pt-8 contacts-section division">
  <div className="container">
    <div className="row">
      {/* CONTACT INFO */}
      <div className="col-lg-4">
        {/* LOCATION */}
        <div className="cbox-2 cb-1 mb-5">
          {/* Title */}
          <h4>{dict.location.title}</h4>
          {/* Address */}
          <p>{dict.location.address[0]}</p>
          <p>{dict.location.address[1]}</p>
          {/* Contacts */}
          <div className="cbox-2-contacts">
            <p>
              <a href="tel:123456789">{dict.location.contacts[0]}</a>
            </p>
            <p>
              <a href="mailto:yourdomain@mail.com">{dict.location.contacts[1]}</a>
            </p>
          </div>
        </div>
        {/* LOCATION */}
        <div className="cbox-2 cb-2">
          {/* Title */}
          <h4>{dict.salonHours.title}</h4>
          {/* Text */}
          <p>
          {dict.salonHours.hours[0]}
          </p>
          <p>
          {dict.salonHours.hours[1]}
          </p>
          <p>
          {dict.salonHours.hours[2]}
          </p>
          <p>
          {dict.salonHours.hours[3]}
          </p>
        </div>
      </div>{" "}
      {/* END CONTACT INFO */}
      {/* CONTACT FORM */}
      <div className="col-lg-8">
        <div className="contact-form-wrapper">
          {/* Title */}
          <h4>{dict.contactForm.title}</h4>
          <form name="contactform" className="row contact-form">
            {/* Form Input */}
            <div className="col-lg-6">
              <input
                type="text"
                name="name"
                className="form-control name"
                placeholder={dict.contactForm.formFields.name}
              />
            </div>
            {/* Form Input */}
            <div className="col-lg-6">
              <input
                type="email"
                name="email"
                className="form-control email"
                placeholder={dict.contactForm.formFields.email}
              />
            </div>
            {/* Form Input */}
            <div className="col-md-12">
              <input
                type="text"
                name="subject"
                className="form-control subject"
                placeholder={dict.contactForm.formFields.subject}
              />
            </div>
            {/* Form Textarea */}
            <div className="col-md-12">
              <textarea
                name="message"
                className="form-control message"
                rows={6}
                placeholder={dict.contactForm.message}
                defaultValue={""}
              />
            </div>
            {/* Form Button */}
            <div className="col-md-12 text-end">
              <button
                type="submit"
                className="btn btn--tra-black hover--black submit"
              >
                {dict.contactForm.cta}
              </button>
            </div>
            {/* Form Message */}
            <div className="col-md-12 contact-form-msg">
              <div className="sending-msg">
                <span className="loading" />
              </div>
            </div>
          </form>
        </div>
      </div>{" "}
      {/* END CONTACT FORM */}
    </div>{" "}
    {/* End row */}
  </div>{" "}
  {/* End container */}
</section>

  )
}
