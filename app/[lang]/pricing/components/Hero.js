export default function Hero({lang}) {
  return (
    <section id="pricing-page-1" className="inner-page-hero division">
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="page-hero-txt color--white">
          <h2>{lang === 'en' ? "Services" : "خدمات"}</h2>
          <p>{lang === 'en' ? "It’s time to give your hair some love" : "حان الوقت لتهدي نفسك بعض الحب"}</p>
        </div>
      </div>
    </div>
  </div>{" "}
  {/* End container */}
</section>

  )
}
