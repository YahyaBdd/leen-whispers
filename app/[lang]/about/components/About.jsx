import Image from "next/image";
import beauty_08 from '@/assets/images/beauty_08.jpg'
import salon_04 from '@/assets/images/salon_04.jpg'

export default function About({dict}) {
  return (
    <section className="pt-8 ct-03 content-section division">
  <div className="container">
    <div className="row">
      {/* TEXT BLOCK */}
      <div className="col-lg-6">
        <div className="txt-block left-column">
          {/* TEXT */}
          <div className="ct-03-txt">
            {/* Section ID */}
            <span className="section-id">{dict.sectionId}</span>
            {/* Title */}
            <h2 className="h2-md">{dict.title}</h2>
            {/* Text */}
            <p className="mb-5">
            {dict.text1}
            </p>
          </div>
          {/* IMAGE */}
          <div className="ct-03-img">
            <Image
            className="img-fluid"
            src={beauty_08}
            alt="content-image"
            />
          </div>
        </div>
      </div>{" "}
      {/* END TEXT BLOCK */}
      {/* TEXT BLOCK */}
      <div className="col-lg-6">
        <div className="txt-block right-column ">
          {/* IMAGE */}
          <div className="ct-03-img mb-5">
            <Image
            className="img-fluid"
            src={salon_04}
            alt="content-image"
            />
          </div>
          {/* TEXT */}
          <div className="ct-03-txt">
            {/* Text */}
            <p className="mb-0">
            {dict.text2}
            </p>
          </div>
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
