export default function Hero({lang}) {
  return (
    <section id="booking-page" className="inner-page-hero division">
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="page-hero-txt color--white">
          <h2 style={{textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", color: "#f0f0f0"}}>{lang === 'en' ? "Book an Appointment" :"احجز موعدًا"} </h2>
          <p style={{textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", color: "#f0f0f0"}}>{lang === 'en' ? "Please fill out the appointment form below to make appointment" : "يرجى ملء النموذج أدناه لحجز موعد."}</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
