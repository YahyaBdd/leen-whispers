export default function TextCard4() {
  return (
    <section className="pt-8 ct-05 content-section">
      <div className="container white--shape">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-lg-6 order-last order-lg-2">
            <div className="txt-block left-column wow fadeInRight">
              {/* Section ID */}
              <span className="section-id">You Are Beautiful</span>
              {/* Title */}
              <h2 className="h2-md">Unleash your inner beauty with Reine</h2>
              {/* List */}
              <ul className="simple-list">
                <li className="list-item">
                  <p>
                    Aliquam vitae molestie quisque sapien diam purus egestas
                    quaerat an aliquet molestie ipsum
                  </p>
                </li>
                <li className="list-item">
                  <p className="mb-0">
                    Sagittis congue augue magna volutpat porta mauris purus and
                    egestas ipsum suscipit quaerat augue
                  </p>
                </li>
              </ul>
              {/* Button */}
              <div className="txt-block-btn">
                <a
                  href="pricing-2.html"
                  className="btn btn--tra-black hover--black"
                >
                  Salon Menu
                </a>
              </div>
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
          {/* IMAGE BLOCK */}
          <div className="col-lg-6 order-first order-lg-2">
            <div className="ct-05-img right-column wow fadeInLeft">
              <img
                className="img-fluid"
                src="images/woman_03.jpg"
                alt="content-image"
              />
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  )
}
