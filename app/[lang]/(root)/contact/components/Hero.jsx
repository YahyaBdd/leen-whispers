export default function Hero({lang}) {
    return (
      <section id="booking-page" className="inner-page-hero division">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="page-hero-txt color--white">
            <h2 style={{textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", color: "#f0f0f0"}}>{lang === 'en' ? "Let's Talk Beauty!" : "لنتحدث عن الجمال!" }</h2>
            <p style={{textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", color: "#f0f0f0"}}>{lang === 'en' ? "Got Questions? Please, don't hesitate to get in touch with us" : "لا تترددي في طرح أي أسئلة."}</p>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* End container */}
  </section>
    )
  }