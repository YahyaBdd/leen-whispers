export default function Hero({lang}) {
    return (
      <section id="booking-page" className="inner-page-hero division">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="page-hero-txt color--white">
            <h2>{lang === 'en' ? "Let's Talk Beauty!" : "لنتحدث عن الجمال!" }</h2>
            <p>{lang === 'en' ? "Got Questions? Please, don't hesitate to get in touch with us" : "لا تترددي في طرح أي أسئلة."}</p>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* End container */}
  </section>
    )
  }