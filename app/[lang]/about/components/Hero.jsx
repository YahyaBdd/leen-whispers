export default function Hero({dict}) {
    return (
      <section id="booking-page" className="inner-page-hero division">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="page-hero-txt color--white">
            <h2>{dict.title}</h2>
            <p>{dict.subtitle}</p>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* End container */}
  </section>
    )
  }