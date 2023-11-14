export default function Hero({lang}) {
    return (
      <section id="booking-page" className="inner-page-hero division">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="page-hero-txt color--white">
            <h2>{ lang === 'en' ? "It’s Time For a Change" : "حان وقت التغيير" }</h2>
            <p>{ lang === 'en' ? "The perfect combination of beauty and relaxation" : "التوازن المثالي بين الجمال والاسترخاء"}</p>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* End container */}
  </section>
    )
  }