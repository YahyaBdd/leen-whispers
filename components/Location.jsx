import Image from 'next/image'
import interior from '@/assets/images/shop_interior.jpg'

export default function Location({dict}) {
  return (
    <section className="pt-8 ct-09 content-section division">
    <div className="container text-center">
      {/* SECTION TITLE */}
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="section-title text-center mb-6">
            {/* Section ID */}
            <span className="section-id">{dict.sectionTitle}</span>
            {/* Title */}
            <h2 className="h2-title">{dict.welcomeTitle}</h2>
          </div>
        </div>
      </div>
      <div className="row d-flex align-items-center">
        {/* TEXT BLOCK */}
        <div>
          <div className="left-column">
            {/* IMAGE */}
            <div className="ct-09-img">
              <div className="hover-overlay">
                <Image
                  className="img-fluid"
                  src={interior}
                  alt="location-photo"
                />
                <div className="item-overlay" />
              </div>
            </div>
            {/* TEXT */}
            <div className="ct-09-txt">
              {/* Title */}
              <h3>Visit Leen Whispers</h3>
              <p className="ct-09-address">{dict.address}</p>
              {/* Advantages List */}
              <ul className="advantages ico-30 clearfix">
                {dict.advantages.map((advantage, index) => (
                  <li key={index}>
                    <p style={{padding: '0px 10px'}}>
                      <a href={advantage.link}>{advantage.label}</a>
                    </p>
                  </li>
                ))}
              </ul>
            </div>{" "}
            {/* END TEXT */}
          </div>
        </div>{" "}
        {/* END TEXT BLOCK */}
      </div>{" "}
      {/* End row */}
    </div>{" "}
    {/* End container */}
  </section>
  )
}
