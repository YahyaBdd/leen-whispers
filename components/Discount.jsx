import React from 'react';

const Discount = ({dict}) => {
  return (
    <section className="bg--03 bg--scroll py-8 banner-2 banner-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="banner-2-txt text-center color--white">
              <span className="section-id">{dict.sectionId}</span>
              <h2>{dict.title}</h2>
              <h3>{dict.subtitle}</h3>
              <a href="/booking" className="btn btn--tra-white hover--white">
                {dict.buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discount;

function Ddiscount() {
  return (
  <section className="bg--03 bg--scroll py-8 banner-2 banner-section">
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="banner-2-txt text-center color--white">
          {/* Section ID */}
          <span className="section-id">This Week Only</span>
          {/* Title */}
          <h2>
            Get <span>100% OFF Discount</span>
          </h2>
          <h3>After the fifth vist</h3>
          {/* Button */}
          <a
            href="booking.html"
            className="btn btn--tra-white hover--white"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>{" "}
    {/* End row */}
  </div>{" "}
  {/* End container */}
</section>
  )
}
