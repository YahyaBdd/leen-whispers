export default function PageHero({content}) {
  return (
    <section className="inner-page-hero division">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="page-hero-txt color--white">
            <h2>
              {/* About Reine */}
              {content.title}
              </h2>
            <p>
              {/* Luxury salon where you will feel unique and special */}
              {content.subtitle}
              </p>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* End container */}
  </section>
  )
}
