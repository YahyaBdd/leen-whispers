import woman05 from '@/assets/images/woman_05.jpg'
import Image from 'next/image'
export default function TextCard3({dict}) {
  return (
    <section className="pt-8 ct-07 ws-wrapper content-section">
      <div className="container">
        <div className="ct-07-wrapper bg--white block-shadow">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-lg-6 order-last order-lg-2">
              <div className="txt-block left-column">
                {/* Section ID */}
                <span className="section-id">{dict.sectionId}</span>
                {/* Title */}
                <h2 className="h2-md">{dict.title}</h2>
                {/* Text */}
                <p className="mb-0">
                  {dict.text}
                </p>
                {/* Button */}
                <div className="txt-block-btn">
                  <a
                    href="/team"
                    className="btn btn--black hover--tra-black"
                  >
                    {dict.cta}
                  </a>
                </div>
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
            {/* IMAGE BLOCK */}
            <div className="col-lg-6 order-first order-lg-2">
              <div className="img-block right-column">
                <Image
                  className="img-fluid"
                  src={woman05}
                  alt="content-image"
                />
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End content wrapper */}
      </div>{" "}
      {/* End container */}
    </section>
  )
}
