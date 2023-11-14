import Image from "next/image"
import woman2 from '@/assets/images/woman_02.jpg'

export default function TextCard1({dict}) {
  
  return (
    <section className="pt-8 ct-01 content-section division">
      <div className="container">
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
                  href="/about"
                  className="btn btn--tra-black hover--black"
                >
                  {dict.button.text}
                </a>
              </div>
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
          {/* IMAGE BLOCK */}
          <div className="col-lg-6 order-first order-lg-2">
            <div className="img-block right-column ">
              <Image className="img-fluid" src={woman2} alt="image" />
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  )
}
