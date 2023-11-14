export default function Services({dict}) {
  return (
    <>
  {/* ABOUT-1
			============================================= */}
  <section className="pt-8 about-1 about-section">
    <div className="container">
      <div className="row justify-content-center">
        {/* TEXT BLOCK */}
        <div className="col-lg-10 col-xl-9">
          <div className="txt-block text-center">
            {/* Section ID */}
            <span className="section-id">{dict.sectionId}</span>
            {/* Title */}
            <h2 className="h2-title">{dict.title}</h2>
            {/* Text */}
            <p className="mb-0">
            {dict.text}
            </p>
          </div>
        </div>{" "}
        {/* END TEXT BLOCK */}
      </div>{" "}
      {/* End row */}
    </div>{" "}
    {/* End container */}
  </section>{" "}
  {/* END ABOUT-1 */}
  {/* SERVICES-3
			============================================= */}
  <div id="services-3" className="pt-8 services-section division">
    <div className="container">
      {/* SERVICES-3 WRAPPER */}
      <div className="sbox-3-wrapper text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6">
          {/* SERVICES BOX #1 */}
          <div className="col">
            <div className="sbox-3 sb-1 wow fadeInUp">
              {/* Icon */}
              <div className="sbox-ico ico-65">
                <span className="flaticon-facial-treatment color--black" />
              </div>
              {/* Text */}
              <div className="sbox-txt">
                <p>{dict.icons.facials}</p>
              </div>
            </div>
          </div>{" "}
          {/* END SERVICES BOX #1 */}
          {/* SERVICES BOX #2 */}
          <div className="col">
            <div className="sbox-3 sb-2 wow fadeInUp">
              {/* Icon */}
              <div className="sbox-ico ico-65">
                <span className="flaticon-eyelashes color--black" />
              </div>
              {/* Text */}
              <div className="sbox-txt">
                <p>{dict.icons.eyelash}</p>
              </div>
            </div>
          </div>{" "}
          {/* END SERVICES BOX #2 */}
          {/* SERVICES BOX #3 */}
          <div className="col">
            <div className="sbox-3 sb-3 wow fadeInUp">
              {/* Icon */}
              <div className="sbox-ico ico-65">
                <span className="flaticon-eyebrow color--black" />
              </div>
              {/* Text */}
              <div className="sbox-txt">
                <p>{dict.icons.eyebrow}</p>
              </div>
            </div>
          </div>{" "}
          {/* END SERVICES BOX #3 */}
          {/* SERVICES BOX #4 */}
          <div className="col">
            <div className="sbox-3 sb-4 wow fadeInUp">
              {/* Icon */}
              <div className="sbox-ico ico-65">
                <span className="flaticon-wax color--black" />
              </div>
              {/* Text */}
              <div className="sbox-txt">
                <p>{dict.icons.waxing}</p>
              </div>
            </div>
          </div>{" "}
          {/* END SERVICES BOX #4 */}
          {/* SERVICES BOX #5 */}
          <div className="col">
            <div className="sbox-3 sb-5 wow fadeInUp">
              {/* Icon */}
              <div className="sbox-ico ico-65">
                <span className="flaticon-foundation color--black" />
              </div>
              {/* Text */}
              <div className="sbox-txt">
                <p>{dict.icons.nails}</p>
              </div>
            </div>
          </div>{" "}
          {/* END SERVICES BOX #5 */}
          {/* SERVICES BOX #6 */}
          <div className="col">
            <div className="sbox-3 sb-6 wow fadeInUp">
              {/* Icon */}
              <div className="sbox-ico ico-65">
                <span className="flaticon-cosmetics color--black" />
              </div>
              {/* Text */}
              <div className="sbox-txt">
                <p>{dict.icons.makeup}</p>
              </div>
            </div>
          </div>{" "}
          {/* END SERVICES BOX #6 */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* END SERVICES-3 WRAPPER */}
      {/* MORE BUTTON */}
      <div className="row">
        <div className="col">
          <div className="more-btn">
            <a
              href="pricing-2.html"
              className="btn btn--tra-black hover--black"
            >
             {dict.cta}
            </a>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* End container */}
  </div>{" "}
  {/* END SERVICES-3 */}
</>
  )
}
