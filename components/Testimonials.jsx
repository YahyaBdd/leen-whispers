const Testimonials = ({dict}) => {

  return (
    <div id="reviews-2" className="pt-8 reviews-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-title text-center mb-6">
              {/* Section ID */}
              <span className="section-id">{dict.title}</span>
              {/* Title */}
              <h2 className="h2-title">{dict.subtitle}</h2>
            </div>
          </div>
        </div>
        <div id="carouselExample" className="carousel slide text-center">
          <div className="carousel-inner">
            {dict.testimonials.map((testimonial, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                {/* Render testimonial content dynamically */}
                <img
                  className="rounded-circle shadow-1-strong mb-4"
                  src={`https://ui-avatars.com/api/?name=${testimonial.name}`}
                  alt="avatar"
                  style={{ width: 80 }}
                />
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-8">
                    <h5 className="mb-3">{testimonial.name}</h5>
                    <p className="text-muted">
                      <i className="fas fa-quote-left pe-2" />
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0 gap-1">
                  {testimonial.stars.map((star, starIndex) => (
                    <li key={starIndex}>
                      <span className={star}></span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z"/></svg>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
                <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z"/></svg>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

