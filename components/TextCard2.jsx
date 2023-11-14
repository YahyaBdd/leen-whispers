export default function TextCard2() {
  return (
    <section className="pt-8 ct-06 content-section">
      <div className="container white--shape shape-shadow">
        <div className="row d-flex align-items-center">
          {/* IMAGE BLOCK */}
          <div className="col-lg-6">
            <div className="ct-06-img left-column wow fadeInRight">
              <img
                className="img-fluid"
                src="images/woman_01.jpg"
                alt="content-image"
              />
            </div>
          </div>
          {/* TEXT BLOCK */}
          <div className="col-lg-6">
            <div className="txt-block right-column wow fadeInLeft">
              {/* Section ID */}
              <span className="section-id">Naturally You</span>
              {/* Title */}
              <h2 className="h2-md">Look more natural with Reine studio</h2>
              {/* ACCORDION WRAPPER */}
              <div className="accordion accordion-wrapper mt-5">
                <ul className="accordion">
                  {/* ACCORDION ITEM #1 */}
                  <li className="accordion-item is-active">
                    {/* Title */}
                    <div className="accordion-thumb">
                      <p>Certified Stylists</p>
                    </div>
                    {/* Text */}
                    <div className="accordion-panel">
                      <p className="mb-0">
                        Nemo ipsam magna volute placerat a turpis ipsum purus
                        sapien ultrice ipsum aliquam congue dolor
                      </p>
                    </div>
                  </li>{" "}
                  {/* END ACCORDION ITEM #1 */}
                  {/* ACCORDION ITEM #2 */}
                  <li className="accordion-item">
                    {/* Title */}
                    <div className="accordion-thumb">
                      <p>100% Organic Cosmetics</p>
                    </div>
                    {/* Text */}
                    <div className="accordion-panel">
                      <p className="mb-0">
                        Magna sapien dolor vitae molestie nunc augue and primis
                        quisque sapien justo aliquet venenatis quaerat
                      </p>
                    </div>
                  </li>{" "}
                  {/* END ACCORDION ITEM #2 */}
                  {/* ACCORDION ITEM #3 */}
                  <li className="accordion-item">
                    {/* Title */}
                    <div className="accordion-thumb">
                      <p>Easy Online Booking</p>
                    </div>
                    {/* Text */}
                    <div className="accordion-panel">
                      <p className="mb-0">
                        Volute magna nemo ipsam placerat turpis ipsum purus
                        sapien ultrice ipsum aliquam an ipsum congue cursus
                      </p>
                    </div>
                  </li>{" "}
                  {/* END ACCORDION ITEM #3 */}
                </ul>
              </div>{" "}
              {/* END ACCORDION WRAPPER */}
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
