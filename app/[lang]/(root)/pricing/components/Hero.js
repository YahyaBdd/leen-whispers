export default function Hero({lang}) {
  return (
    <section id="pricing-page-1" className="inner-page-hero division" style={{backgroundImage: "../../../assets/images/interior-12.jpeg"}}>
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="page-hero-txt color--white">
          <h2 style={{textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", color: "#f0f0f0"}}>{lang === 'en' ? "Services" : "خدمات"}</h2>
          <p style={{textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", color: "#f0f0f0"}}>{lang === 'en' ? "It’s time to give yourself some love" : "حان الوقت لتهدي نفسك بعض الحب"}</p>
        </div>
      </div>
    </div>
  </div>{" "}
  {/* End container */}
</section>

  )
}
