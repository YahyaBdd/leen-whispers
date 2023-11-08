import Image from 'next/image'
import styles from './page.module.css'
import Script from 'next/script';

export default function Home({ params: { lang } }) {
  return (
<>
  {/* PAGE CONTENT
		============================================= */}
  <div id="page" className="page">
    {/* HEADER
			============================================= */}
    <header id="header" className="tra-menu navbar-light white-scroll">
      <div className="header-wrapper">
        {/* MOBILE HEADER */}
        <div className="wsmobileheader clearfix">
          <span className="smllogo">
            <a href="#hero-1" className="logo-black">
              <img src="images/logo-black.png" alt="mobile-logo" />
            </a>
            <a href="#hero-1" className="logo-white">
              <img src="images/logo-white.png" alt="mobile-logo" />
            </a>
          </span>
          <a id="wsnavtoggle" className="wsanimated-arrow">
            <span />
          </a>
        </div>
        {/* NAVIGATION MENU */}
        <div className="wsmainfull menu clearfix">
          <div className="wsmainwp clearfix">
            {/* HEADER BLACK LOGO */}
            <div className="desktoplogo">
              <a href="#hero-1" className="logo-black">
                <img src="images/logo-black.png" alt="logo" />
              </a>
            </div>
            {/* HEADER WHITE LOGO */}
            <div className="desktoplogo">
              <a href="#hero-1" className="logo-white">
                <img src="images/logo-white.png" alt="logo" />
              </a>
            </div>
            {/* MAIN MENU */}
            <nav className="wsmenu clearfix">
              <ul className="wsmenu-list">
                {/* DROPDOWN SUB MENU */}
                <li aria-haspopup="true">
                  <a href="#" className="h-link">
                    Home <span className="wsarrow" />
                  </a>
                  <ul className="sub-menu">
                    <li aria-haspopup="true">
                      <a href="demo-2.html">Nail Salon</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="demo-3.html">Hair Salon</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="demo-4.html">Hair Lounge</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="demo-5.html">Nail Studio</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="demo-6.html">Hair Art Studio</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="demo-7.html">Skincare Center</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="demo-8.html">Nail Care Center</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="demo-9.html">Beauty Salon</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="demo-10.html">Barber Shop #1</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="demo-11.html">Hair Studio</a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="demo-12.html">Barber Shop #2</a>
                    </li>
                  </ul>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true">
                  <a href="pricing-1.html" className="h-link">
                    Services
                  </a>
                </li>
                {/* DROPDOWN MENU */}
                <li aria-haspopup="true">
                  <a href="#" className="h-link">
                    Pages <span className="wsarrow" />
                  </a>
                  <div className="wsmegamenu clearfix halfmenu">
                    <div className="container-fluid">
                      <div className="row">
                        {/* Links */}
                        <ul className="col-lg-6 link-list">
                          <li>
                            <a href="about.html">About Salon</a>
                          </li>
                          <li>
                            <a href="pricing-1.html">Salon Menu #1</a>
                          </li>
                          <li>
                            <a href="pricing-2.html">Salon Menu #2</a>
                          </li>
                          <li>
                            <a href="pricing-3.html">Salon Menu #3</a>
                          </li>
                          <li>
                            <a href="gift-cards.html">Gift Cards</a>
                          </li>
                          <li>
                            <a href="team.html">Artists + Staff</a>
                          </li>
                          <li>
                            <a href="artist-details.html">Artist Details</a>
                          </li>
                          <li>
                            <a href="gallery.html">Gallery Page</a>
                          </li>
                        </ul>
                        {/* Links */}
                        <ul className="col-lg-6 link-list">
                          <li>
                            <a href="reviews.html">Testimonials</a>
                          </li>
                          <li>
                            <a href="faqs.html">FAQs Page</a>
                          </li>
                          <li>
                            <a href="blog-listing.html">Blog Listing</a>
                          </li>
                          <li>
                            <a href="single-post.html">Blog Post</a>
                          </li>
                          <li>
                            <a href="booking.html">Booking Page</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact Us</a>
                          </li>
                          <li>
                            <a href="location.html">Our Locations</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>{" "}
                {/* END DROPDOWN MENU */}
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true">
                  <a href="gallery.html" className="h-link">
                    Portfolio
                  </a>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple" aria-haspopup="true">
                  <a href="blog-listing.html" className="h-link">
                    Blog
                  </a>
                </li>
                {/* SIGN UP BUTTON */}
                <li className="nl-simple" aria-haspopup="true">
                  <a
                    href="booking.html"
                    className="btn btn--tra-white hover--white last-link"
                  >
                    Book Online
                  </a>
                </li>
              </ul>
            </nav>{" "}
            {/* END MAIN MENU */}
          </div>
        </div>{" "}
        {/* END NAVIGATION MENU */}
      </div>{" "}
      {/* End header-wrapper */}
    </header>{" "}
    {/* END HEADER */}
    {/* HERO-1
			============================================= */}
    <section id="hero-1" className="hero-section">
      <div className="slideshow">
        <div className="slideshow-inner">
          {/* SLIDER */}
          <div className="slides">
            {/* SLIDE #1 */}
            <div className="slide is-active">
              {/* Slide Content */}
              <div className="slide-content">
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div className="col col-lg-10">
                      <div className="caption color--white">
                        {/* Title */}
                        <div className="title">
                          <h2>Welcome to Reine Studio</h2>
                        </div>
                        {/* Text */}
                        <div className="text">
                          <h5 className="h5-lg">Your one stop beauty shop</h5>
                          {/* Button */}
                          <a
                            href="gallery.html"
                            className="btn btn--tra-white hover--white"
                          >
                            Discover More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* End Slide Content */}
              {/* Slide Background Image */}
              <div className="image-container">
                <img
                  className="image"
                  src="images/slider/slide-1.jpg"
                  alt="slide-background"
                />
              </div>
            </div>{" "}
            {/* END SLIDE #1 */}
            {/* SLIDE #2 */}
            <div className="slide">
              {/* Slide Content */}
              <div className="slide-content">
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div className="col col-lg-10">
                      <div className="caption color--white">
                        {/* Title */}
                        <div className="title">
                          <h2>Enhance Your Natural Beauty</h2>
                        </div>
                        {/* Text */}
                        <div className="text">
                          <h5 className="h5-lg">
                            Feel yourself more beautiful
                          </h5>
                          {/* Button */}
                          <a
                            href="pricing-2.html"
                            className="btn btn--tra-white hover--white"
                          >
                            View Salon Menu
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* End Slide Content */}
              {/* Slide Background Image */}
              <div className="image-container">
                <img
                  className="image"
                  src="images/slider/slide-2.jpg"
                  alt="slide-background"
                />
              </div>
            </div>{" "}
            {/* END SLIDE #2 */}
            {/* SLIDE #3 */}
            <div className="slide">
              {/* Slide Content */}
              <div className="slide-content">
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div className="col col-lg-10">
                      <div className="caption text-center color--white">
                        {/* Title */}
                        <div className="title">
                          <h2>It’s a Pleasure to be Beautiful</h2>
                        </div>
                        {/* Text */}
                        <div className="text">
                          <h5 className="h5-lg">Bring out your inner beauty</h5>
                          {/* Button */}
                          <a
                            href="booking.html"
                            className="btn btn--tra-white hover--white"
                          >
                            Online Booking
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* End Slide Content */}
              {/* Slide Background Image */}
              <div className="image-container">
                <img
                  className="image"
                  src="images/slider/slide-3.jpg"
                  alt="slide-background"
                />
              </div>
            </div>{" "}
            {/* END SLIDE #3 */}
          </div>{" "}
          {/* END SLIDER */}
        </div>{" "}
        {/* End Slideshow Inner */}
      </div>{" "}
      {/* End Slideshow */}
    </section>{" "}
    {/* END HERO-1 */}
    {/* TEXT CONTENT
			============================================= */}
    <section className="pt-8 ct-01 content-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-lg-6 order-last order-lg-2">
            <div className="txt-block left-column wow fadeInRight">
              {/* Section ID */}
              <span className="section-id">Mind, Body and Soul</span>
              {/* Title */}
              <h2 className="h2-md">Luxury salon where you will feel unique</h2>
              {/* Text */}
              <p className="mb-0">
                Sagittis congue augue egestas integer velna purus purus magna
                libero suscipit and egestas magna aliquam ipsum vitae purus
                justo lacus ligula ipsum primis cubilia donec undo augue luctus
                vitae egestas a molestie donec libero sapien dapibus congue
                tempor undo quisque and fusce cursus neque blandit fusce aliquam
                nulla lacinia
              </p>
              {/* Button */}
              <div className="txt-block-btn">
                <a
                  href="#gallery-4"
                  className="btn btn--tra-black hover--black"
                >
                  Discover More
                </a>
              </div>
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
          {/* IMAGE BLOCK */}
          <div className="col-lg-6 order-first order-lg-2">
            <div className="img-block right-column wow fadeInLeft">
              <img
                className="img-fluid"
                src="images/woman_02.jpg"
                alt="content-image"
              />
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>{" "}
    {/* END TEXT CONTENT */}
    {/* ABOUT-1
			============================================= */}
    <section className="pt-8 about-1 about-section">
      <div className="container">
        <div className="row justify-content-center">
          {/* TEXT BLOCK */}
          <div className="col-lg-10 col-xl-9">
            <div className="txt-block text-center">
              {/* Section ID */}
              <span className="section-id">Indulge Yourself</span>
              {/* Title */}
              <h2 className="h2-title">Your Secret Place of Beauty</h2>
              {/* Text */}
              <p className="mb-0">
                Congue augue sagittis egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula and ipsum lacinia primis cubilia
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
    {/* SERVICES-2
			============================================= */}
    <section id="services-2" className="pt-6 services-section division">
      <div className="container">
        {/* SERVICES-2 WRAPPER */}
        <div className="sbox-2-wrapper text-center">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            {/* SERVICES BOX #1 */}
            <div className="col">
              <div className="sbox-2 sb-1 wow fadeInUp">
                {/* Icon */}
                <div className="sbox-ico ico-65">
                  <span className="flaticon-facial-treatment" />
                </div>
                {/* Text */}
                <div className="sbox-txt">
                  <h5 className="h5-lg">Facials</h5>
                  <p>
                    Sagittis congue augue egestas integer diam purus magna and
                    egestas magna suscipit
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* END SERVICES BOX #1 */}
            {/* SERVICES BOX #2 */}
            <div className="col">
              <div className="sbox-2 sb-2 wow fadeInUp">
                {/* Icon */}
                <div className="sbox-ico ico-65">
                  <span className="flaticon-wax" />
                </div>
                {/* Text */}
                <div className="sbox-txt">
                  <h5 className="h5-lg">Waxing</h5>
                  <p>
                    Sagittis congue augue egestas integer diam purus magna and
                    egestas magna suscipit
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* END SERVICES BOX #2 */}
            {/* SERVICES BOX #3 */}
            <div className="col">
              <div className="sbox-2 sb-3 wow fadeInUp">
                {/* Icon */}
                <div className="sbox-ico ico-65">
                  <span className="flaticon-cosmetics" />
                </div>
                {/* Text */}
                <div className="sbox-txt">
                  <h5 className="h5-lg">Make-Up</h5>
                  <p>
                    Sagittis congue augue egestas integer diam purus magna and
                    egestas magna suscipit
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* END SERVICES BOX #3 */}
            {/* SERVICES BOX #4 */}
            <div className="col">
              <div className="sbox-2 sb-4 wow fadeInUp">
                {/* Icon */}
                <div className="sbox-ico ico-65">
                  <span className="flaticon-nail-polish" />
                </div>
                {/* Text */}
                <div className="sbox-txt">
                  <h5 className="h5-lg">Nails</h5>
                  <p>
                    Sagittis congue augue egestas integer diam purus magna and
                    egestas magna suscipit
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* END SERVICES BOX #4 */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* END SERVICES-2 WRAPPER */}
      </div>{" "}
      {/* End container */}
    </section>{" "}
    {/* END SERVICES-2 */}
    {/* TEXT CONTENT
			============================================= */}
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
    </section>{" "}
    {/* END TEXT CONTENT */}
    {/* WORKING HOURS
			============================================= */}
    <section className="py-8 ct-table content-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT */}
          <div className="col-lg-6">
            <div className="left-column wow fadeInRight">
              {/* Section ID */}
              <span className="section-id">Time Schedule</span>
              {/* Title */}
              <h2 className="h2-md">Working Hours</h2>
              {/* Text */}
              <p className="mb-0">
                Nemo ipsam egestas volute turpis varius ipsum egestas purus diam
                ligula sapien ultrice sapien tempor aliquam tortor ipsum and
                augue turpis quaerat aliquet congue and molestie magna in congue
                undo aliquet congue ultrices quaerat purus justo
              </p>
            </div>
          </div>
          {/* TABLE */}
          <div className="col-lg-6">
            <div className="txt-table right-column wow fadeInLeft">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Mon – Wed</td>
                    <td> - </td>
                    <td className="text-end">10:00 AM - 9:00 PM</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td> - </td>
                    <td className="text-end">10:00 AM - 7:30 PM</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td> - </td>
                    <td className="text-end">10:00 AM - 9:00 PM</td>
                  </tr>
                  <tr className="last-tr">
                    <td>Sun - Sun</td>
                    <td>-</td>
                    <td className="text-end">10:00 AM - 5:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>{" "}
          {/* END TABLE */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>{" "}
    {/* END WORKING HOURS */}
    {/* WIDE IMAGE
			============================================= */}
    <div className="bg--01 bg--scroll ct-12 content-section" />
    {/* PRICING-1
			============================================= */}
    <div className="pt-8 pricing-1 pricing-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-title text-center mb-6">
              {/* Section ID */}
              <span className="section-id">Focus On Beauty</span>
              {/* Title */}
              <h2 className="h2-title">Our Service Menu</h2>
            </div>
          </div>
        </div>
        {/* PRICING-1 WRAPPER */}
        <div className="pricing-1-wrapper">
          <div className="row">
            {/* PRICING-1 TABLE */}
            <div className="col-lg-6">
              <div className="pricing-1-table left-column wow fadeInUp">
                <ul className="pricing-list">
                  {/* PRICING ITEM #1 */}
                  <li className="pricing-1-item">
                    {/* Title & Price */}
                    <div className="detail-price">
                      <div className="price-name">
                        <p>Herbal Facial</p>
                      </div>
                      <div className="price-dots" />
                      <div className="price-number">
                        <p>$75</p>
                      </div>
                    </div>
                    {/* Description */}
                    <div className="price-txt">
                      <p>Service length 1 hour</p>
                    </div>
                  </li>
                  {/* MENU ITEM #2 */}
                  <li className="pricing-1-item">
                    {/* Title & Price */}
                    <div className="detail-price">
                      <div className="price-name">
                        <p>Deep Cleaning Facial</p>
                      </div>
                      <div className="price-dots" />
                      <div className="price-number">
                        <p>$130</p>
                      </div>
                    </div>
                    {/* Description */}
                    <div className="price-txt">
                      <p>Service length 55 minutes</p>
                    </div>
                  </li>
                  {/* MENU ITEM #3 */}
                  <li className="pricing-1-item">
                    {/* Title & Price */}
                    <div className="detail-price">
                      <div className="price-name">
                        <p>Organic Facial</p>
                      </div>
                      <div className="price-dots" />
                      <div className="price-number">
                        <p>$185</p>
                      </div>
                    </div>
                    {/* Description */}
                    <div className="price-txt">
                      <p>Service length 1,5 hours</p>
                    </div>
                  </li>
                  {/* PRICING ITEM #4 */}
                  <li className="pricing-1-item">
                    {/* Title & Price */}
                    <div className="detail-price">
                      <div className="price-name">
                        <p>Four Layer Facial</p>
                      </div>
                      <div className="price-dots" />
                      <div className="price-number">
                        <p>$140</p>
                      </div>
                    </div>
                    {/* Description */}
                    <div className="price-txt">
                      <p>Service length 1,5 hours</p>
                    </div>
                  </li>
                  {/* PRICING ITEM #5 */}
                  <li className="pricing-1-item">
                    {/* Title & Price */}
                    <div className="detail-price">
                      <div className="price-name">
                        <p>Biolight Facial</p>
                      </div>
                      <div className="price-dots" />
                      <div className="price-number">
                        <p>$165</p>
                      </div>
                    </div>
                    {/* Description */}
                    <div className="price-txt">
                      <p>Service length 1,5 hours</p>
                    </div>
                  </li>
                  {/* MENU ITEM #6 */}
                  <li className="pricing-1-item resp-lst">
                    {/* Title & Price */}
                    <div className="detail-price">
                      <div className="price-name">
                        <p>Oxygen Blast Facial</p>
                      </div>
                      <div className="price-dots" />
                      <div className="price-number">
                        <p>$265</p>
                      </div>
                    </div>
                    {/* Description */}
                    <div className="price-txt">
                      <p>Service length 60 minutes</p>
                    </div>
                  </li>
                </ul>{" "}
                {/* END PRICING LIST */}
              </div>
            </div>{" "}
            {/* END PRICING-1 TABLE */}
            {/* PRICING-1 TABLE */}
            <div className="col-lg-6">
              <div className="pricing-1-table right-column wow fadeInUp">
                <ul className="pricing-list">
                  {/* PRICING ITEM #1 */}
                  <li className="pricing-1-item">
                    {/* Title & Price */}
                    <div className="detail-price">
                      <div className="price-name">
                        <p>Eyebrow Tinting</p>
                      </div>
                      <div className="price-dots" />
                      <div className="price-number">
                        <p>$15+</p>
                      </div>
                    </div>
                    {/* Description */}
                    <div className="price-txt">
                      <p>Service length 40 minutes</p>
                    </div>
                  </li>
                  {/* MENU ITEM #2 */}
                  <li className="pricing-1-item">
                    {/* Title & Price */}
                    <div className="detail-price">
                      <div className="price-name">
                        <p>Eyelash Tinting</p>
                      </div>
                      <div className="price-dots" />
                      <div className="price-number">
                        <p>$25+</p>
                      </div>
                    </div>
                    {/* Description */}
                    <div className="price-txt">
                      <p>Service length 2 hours</p>
                    </div>
                  </li>
                  {/* MENU ITEM #3 */}
                  <li className="pricing-1-item">
                    {/* Title & Price */}
                    <div className="detail-price">
                      <div className="price-name">
                        <p>Lash Application</p>
                      </div>
                      <div className="price-dots" />
                      <div className="price-number">
                        <p>$45+</p>
                      </div>
                    </div>
                    {/* Description */}
                    <div className="price-txt">
                      <p>Service length 50 minutes</p>
                    </div>
                  </li>
                  {/* PRICING ITEM #4 */}
                  <li className="pricing-1-item">
                    {/* Title & Price */}
                    <div className="detail-price">
                      <div className="price-name">
                        <p>Eyebrow Shaping</p>
                      </div>
                      <div className="price-dots" />
                      <div className="price-number">
                        <p>$50 - $97</p>
                      </div>
                    </div>
                    {/* Description */}
                    <div className="price-txt">
                      <p>Service length 1,5 hours</p>
                    </div>
                  </li>
                  {/* MENU ITEM #5 */}
                  <li className="pricing-1-item">
                    {/* Title & Price */}
                    <div className="detail-price">
                      <div className="price-name">
                        <p>Brow Tint</p>
                      </div>
                      <div className="price-dots" />
                      <div className="price-number">
                        <p>From $50</p>
                      </div>
                    </div>
                    {/* Description */}
                    <div className="price-txt">
                      <p>Service length 1 hour</p>
                    </div>
                  </li>
                  {/* MENU ITEM #6 */}
                  <li className="pricing-1-item">
                    {/* Title & Price */}
                    <div className="detail-price">
                      <div className="price-name">
                        <p>Lash Tint</p>
                      </div>
                      <div className="price-dots" />
                      <div className="price-number">
                        <p>From $50</p>
                      </div>
                    </div>
                    {/* Description */}
                    <div className="price-txt">
                      <p>Service length 50 minutes</p>
                    </div>
                  </li>
                </ul>{" "}
                {/* END PRICING LIST */}
              </div>
            </div>{" "}
            {/* END PRICING-1 TABLE */}
          </div>
        </div>{" "}
        {/* END PRICING-1 WRAPPER */}
        {/* BUTTON */}
        <div className="row">
          <div className="col">
            <div className="more-btn mt-5">
              <a
                href="pricing-2.html"
                className="btn btn--tra-black hover--black"
              >
                View All Prices
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* End container */}
    </div>{" "}
    {/* END PRICING-1 */}
    {/* TEXT CONTENT
			============================================= */}
    <section className="pt-8 ct-07 ws-wrapper content-section">
      <div className="container">
        <div className="ct-07-wrapper bg--white block-shadow">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-lg-6 order-last order-lg-2">
              <div className="txt-block left-column">
                {/* Section ID */}
                <span className="section-id">Come, Relax and Enjoy</span>
                {/* Title */}
                <h2 className="h2-md">Place where you will feel peaceful</h2>
                {/* Text */}
                <p className="mb-0">
                  Sagittis congue augue egestas integer velna purus purus magna
                  blandit suscipit egestas magna diam ipsum aliquam vitae purus
                  justo lacus ligula ipsum congue tempor undo quisque fusce
                  cursus neque
                </p>
                {/* Button */}
                <div className="txt-block-btn">
                  <a
                    href="booking.html"
                    className="btn btn--black hover--tra-black"
                  >
                    Book an Appointment
                  </a>
                </div>
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
            {/* IMAGE BLOCK */}
            <div className="col-lg-6 order-first order-lg-2">
              <div className="img-block right-column">
                <img
                  className="img-fluid"
                  src="images/woman_05.jpg"
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
    </section>{" "}
    {/* END TEXT CONTENT */}
    {/* BRANDS-1
			============================================= */}
    <div id="brands-1" className="pt-8 brands-section">
      <div className="container">
        {/* BRANDS CAROUSEL */}
        <div className="row">
          <div className="col text-center">
            <div className="owl-carousel brands-carousel-5">
              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="images/brand-1.png"
                    alt="brand-logo"
                  />
                </a>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="images/brand-2.png"
                    alt="brand-logo"
                  />
                </a>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="images/brand-3.png"
                    alt="brand-logo"
                  />
                </a>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="images/brand-4.png"
                    alt="brand-logo"
                  />
                </a>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="images/brand-5.png"
                    alt="brand-logo"
                  />
                </a>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="images/brand-6.png"
                    alt="brand-logo"
                  />
                </a>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="images/brand-7.png"
                    alt="brand-logo"
                  />
                </a>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="images/brand-8.png"
                    alt="brand-logo"
                  />
                </a>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="images/brand-9.png"
                    alt="brand-logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* END BRANDS CAROUSEL */}
      </div>{" "}
      {/* End container */}
    </div>{" "}
    {/* END BRANDS-1 */}
    {/* GALLERY-4
			============================================= */}
    <div id="gallery-4" className="py-8 gallery-section division">
      <div className="container-fluid">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-title text-center mb-6">
              {/* Section ID */}
              <span className="section-id">Be a more perfect</span>
              {/* Title */}
              <h2 className="h2-title">Redefine Your Beauty</h2>
            </div>
          </div>
        </div>
        {/* GALLERY-4 WRAPPER */}
        <div className="gallery-4-wrapper">
          <div className="row">
            {/* IMAGE #1 */}
            <div className="col-md-6 col-lg-2">
              <div id="img-4-1" className="gallery-image">
                <div className="hover-overlay">
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="images/gallery/woman_04.jpg"
                    alt="gallery-image"
                  />
                  <div className="item-overlay" />
                  {/* Image Zoom */}
                  <div className="image-data">
                    <div className="gallery-link ico-30 color--white">
                      <a
                        className="image-link"
                        href="images/gallery/woman_04.jpg"
                      >
                        <span className="flaticon-visibility" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* IMAGE #2 */}
            <div className="col-md-6 col-lg-5">
              <div id="img-4-2" className="gallery-image">
                <div className="hover-overlay">
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="images/gallery/woman_01.jpg"
                    alt="gallery-image"
                  />
                  <div className="item-overlay" />
                  {/* Image Zoom */}
                  <div className="image-data">
                    <div className="gallery-link ico-40 color--white">
                      <a
                        className="image-link"
                        href="images/gallery/woman_01.jpg"
                      >
                        <span className="flaticon-visibility" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* IMAGE #1 */}
            <div className="col-lg-3">
              {/* IMAGE #3 */}
              <div id="img-4-3" className="gallery-image">
                <div className="hover-overlay">
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="images/gallery/woman_03.jpg"
                    alt="gallery-image"
                  />
                  <div className="item-overlay" />
                  {/* Image Zoom */}
                  <div className="image-data">
                    <div className="gallery-link ico-40 color--white">
                      <a
                        className="image-link"
                        href="images/gallery/woman_03.jpg"
                      >
                        <span className="flaticon-visibility" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* IMAGE #4 */}
              <div id="img-4-4" className="gallery-image">
                <div className="hover-overlay">
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="images/gallery/woman_02.jpg"
                    alt="gallery-image"
                  />
                  <div className="item-overlay" />
                  {/* Image Zoom */}
                  <div className="image-data">
                    <div className="gallery-link ico-40 color--white">
                      <a
                        className="image-link"
                        href="images/gallery/woman_02.jpg"
                      >
                        <span className="flaticon-visibility" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              {/* IMAGE #5 */}
              <div id="img-4-5" className="gallery-image">
                <div className="hover-overlay">
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="images/gallery/woman_05.jpg"
                    alt="gallery-image"
                  />
                  <div className="item-overlay" />
                  {/* Image Zoom */}
                  <div className="image-data">
                    <div className="gallery-link ico-30 color--white">
                      <a
                        className="image-link"
                        href="images/gallery/woman_05.jpg"
                      >
                        <span className="flaticon-visibility" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* IMAGE #5 */}
              <div id="img-4-6" className="gallery-image">
                <div className="hover-overlay">
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="images/gallery/woman_06.jpg"
                    alt="gallery-image"
                  />
                  <div className="item-overlay" />
                  {/* Image Zoom */}
                  <div className="image-data">
                    <div className="gallery-link ico-30 color--white">
                      <a
                        className="image-link"
                        href="images/gallery/woman_06.jpg"
                      >
                        <span className="flaticon-visibility" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* END GALLERY-4 WRAPPER */}
        {/* BUTTON */}
        <div className="row">
          <div className="col">
            <div className="more-btn">
              <a
                href="gallery.html"
                className="btn btn--tra-black hover--black"
              >
                Visit Our Gallery
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* End container */}
    </div>{" "}
    {/* END GALLERY-4 */}
    {/* BANNER-2
			============================================= */}
    <section className="bg--03 bg--scroll py-8 banner-2 banner-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="banner-2-txt text-center color--white">
              {/* Section ID */}
              <span className="section-id">This Week Only</span>
              {/* Title */}
              <h2>
                Get <span>30% OFF</span>
              </h2>
              <h3>Quick Face Makeup</h3>
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
    </section>{" "}
    {/* END BANNER-2 */}
    {/* TESTIMONIALS-2
			============================================= */}
    <div id="reviews-2" className="pt-8 reviews-section">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-title text-center mb-6">
              {/* Section ID */}
              <span className="section-id">Testimonials</span>
              {/* Title */}
              <h2 className="h2-title">Comments &amp; Reviews</h2>
            </div>
          </div>
        </div>
        {/* TESTIMONIALS CONTENT */}
        <div className="row">
          <div className="col">
            <div className="owl-carousel owl-theme reviews-2-wrapper">
              {/* TESTIMONIAL #1 */}
              <div className="review-2">
                <div className="review-txt">
                  {/* Rating Stars */}
                  <div className="star-rating ico-20 color--yellow clearfix">
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-half-empty" />
                  </div>
                  {/* Text */}
                  <p>
                    Etiam sapien sagittis diam congue augue massa varius ociis
                    egestas ultrice varius magna tempus an aliquet cursus
                    suscipit pretium and lacinia molestie
                  </p>
                  {/* Data */}
                  <div className="review-author">
                    <p>Kelly Walker</p>
                    <span>13 days ago</span>
                  </div>
                </div>
              </div>{" "}
              {/* END TESTIMONIAL #1 */}
              {/* TESTIMONIAL #2 */}
              <div className="review-2">
                <div className="review-txt">
                  {/* Rating Stars */}
                  <div className="star-rating ico-20 color--yellow clearfix">
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star" />
                  </div>
                  {/* Text */}
                  <p>
                    Sagittis congue augue ligula molestie egestas magna ipsum
                    vitae purus ipsum and primis cubilia laoreet augue egestas
                    donec ltrice ligula porta augue cursus
                  </p>
                  {/* Data */}
                  <div className="review-author">
                    <p>Evelyn Martinez</p>
                    <span>19 days ago</span>
                  </div>
                </div>
              </div>{" "}
              {/* END TESTIMONIAL #2 */}
              {/* TESTIMONIAL #3 */}
              <div className="review-2">
                <div className="review-txt">
                  {/* Rating Stars */}
                  <div className="star-rating ico-20 color--yellow clearfix">
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                  </div>
                  {/* Text */}
                  <p>
                    Mauris gestas magnis sapien molestie etiam sapien congue
                    augue and egestas ultrice ipsum vitae purus integer congue
                    and magna egestas suscipit
                  </p>
                  {/* Data */}
                  <div className="review-author">
                    <p>Linda Ferell</p>
                    <span>27 days ago</span>
                  </div>
                </div>
              </div>{" "}
              {/* END TESTIMONIAL #3 */}
              {/* TESTIMONIAL #4 */}
              <div className="review-2">
                <div className="review-txt">
                  {/* Rating Stars */}
                  <div className="star-rating ico-20 color--yellow clearfix">
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-half-empty" />
                  </div>
                  {/* Text */}
                  <p>
                    Mauris donec magnis sapien quisque etiam pretium congue
                    augue a volutpat undo lectus volute egestas aenean vitae
                    sapien purus integer cubilia
                  </p>
                  {/* Data */}
                  <div className="review-author">
                    <p>Elizabeth Ross</p>
                    <span>27 days ago</span>
                  </div>
                </div>
              </div>{" "}
              {/* END TESTIMONIAL #4 */}
              {/* TESTIMONIAL #5 */}
              <div className="review-2">
                <div className="review-txt">
                  {/* Rating Stars */}
                  <div className="star-rating ico-20 color--yellow clearfix">
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-half-empty" />
                  </div>
                  {/* Text */}
                  <p>
                    Sagittis congue augue ligula gravida egestas magna ipsum
                    vitae purus ipsum and primis cubilia laoreet augue egestas
                    donec ltrice ligula a porta augue cursus molestie molestie
                    blandit justo
                  </p>
                  {/* Data */}
                  <div className="review-author">
                    <p>Nicole Byer</p>
                    <span>1 month ago</span>
                  </div>
                </div>
              </div>{" "}
              {/* END TESTIMONIAL #5 */}
              {/* TESTIMONIAL #6 */}
              <div className="review-2">
                <div className="review-txt">
                  {/* Rating Stars */}
                  <div className="star-rating ico-20 color--yellow clearfix">
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star" />
                  </div>
                  {/* Text */}
                  <p>
                    Etiam sapien sagittis diam congue augue massa varius egestas
                    ociis ultrice varius magna tempus an aliquet undo cursus
                    suscipit augue pretium lacinia
                  </p>
                  {/* Data */}
                  <div className="review-author">
                    <p>Laura Merino</p>
                    <span>1 month ago</span>
                  </div>
                </div>
              </div>{" "}
              {/* END TESTIMONIAL #6 */}
              {/* TESTIMONIAL #7 */}
              <div className="review-2">
                <div className="review-txt">
                  {/* Rating Stars */}
                  <div className="star-rating ico-20 color--yellow clearfix">
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                  </div>
                  {/* Text */}
                  <p>
                    Congue augue sagittis ligula aliquet egestas magna ipsum
                    vitae purus ipsum and primis cubilia laoreet augue egestas
                    donec ltrice ligula a cursus porta augue molestie suscipit
                    magna at tortor
                  </p>
                  {/* Data */}
                  <div className="review-author">
                    <p>Carmen M. Garcia</p>
                    <span>2 month ago</span>
                  </div>
                </div>
              </div>{" "}
              {/* END TESTIMONIAL #7 */}
              {/* TESTIMONIAL #8 */}
              <div className="review-2">
                <div className="review-txt">
                  {/* Rating Stars */}
                  <div className="star-rating ico-20 color--yellow clearfix">
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-half-empty" />
                  </div>
                  {/* Text */}
                  <p>
                    Augue vitae purus tempus and egestas volutpat dignissim
                    augue cubilia laoreet magna dolor suscipit luctus turpis
                    blandit tempus gravida feugiat impedit
                  </p>
                  {/* Data */}
                  <div className="review-author">
                    <p>Rachel A.</p>
                    <span>2 month ago</span>
                  </div>
                </div>
              </div>{" "}
              {/* END TESTIMONIAL #8 */}
            </div>
          </div>
        </div>{" "}
        {/* END TESTIMONIALS CONTENT */}
      </div>{" "}
      {/* End container */}
    </div>{" "}
    {/* END TESTIMONIALS-2 */}
    {/* TEXT CONTENT
			============================================= */}
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
    </section>{" "}
    {/* END TEXT CONTENT */}
    {/* TEXT CONTENT
			============================================= */}
    <section className="pt-8 ct-09 content-section division">
      <div className="container text-center">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-title text-center mb-6">
              {/* Section ID */}
              <span className="section-id">Our Locations</span>
              {/* Title */}
              <h2 className="h2-title">Welcome to Reine</h2>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-6">
            <div className="left-column wow fadeInRight">
              {/* IMAGE */}
              <div className="ct-09-img">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="images/salon_02.jpg"
                    alt="location-photo"
                  />
                  <div className="item-overlay" />
                </div>
              </div>
              {/* TEXT */}
              <div className="ct-09-txt">
                {/* Title */}
                <h3>Visit Reine Wilshire</h3>
                <p className="ct-09-address">
                  8721 Central Ave, Los Angeles, CA 90036
                </p>
                {/* Advantages List */}
                <ul className="advantages ico-30 clearfix">
                  <li>
                    <p className="me-3">est. 2018</p>
                  </li>
                  <li>
                    <p>
                      <a href="contact.html">Learm More</a>
                    </p>
                  </li>
                  <li className="advantages-links-divider">
                    <p>
                      <span className="flaticon-vertical-line" />
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="booking.html">Book Now</a>
                    </p>
                  </li>
                </ul>
              </div>{" "}
              {/* END TEXT */}
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
          {/* TEXT BLOCK */}
          <div className="col-md-6">
            <div className="right-column wow fadeInLeft">
              {/* IMAGE */}
              <div className="ct-09-img">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="images/salon_03.jpg"
                    alt="location-photo"
                  />
                  <div className="item-overlay" />
                </div>
              </div>
              {/* TEXT */}
              <div className="ct-09-txt">
                {/* Title */}
                <h3>Visit Reine Westwood</h3>
                <p className="ct-09-address">
                  8493 Sunset Blvd, Los Angeles, CA 90069
                </p>
                {/* Advantages List */}
                <ul className="advantages ico-30 clearfix">
                  <li>
                    <p className="me-3">est. 2021</p>
                  </li>
                  <li>
                    <p>
                      <a href="contact.html">Learm More</a>
                    </p>
                  </li>
                  <li className="advantages-links-divider">
                    <p>
                      <span className="flaticon-vertical-line" />
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="booking.html">Book Now</a>
                    </p>
                  </li>
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
    </section>{" "}
    {/* END TEXT CONTENT */}
    {/* BLOG-1
			============================================= */}
    <section id="blog-1" className="pt-8 blog-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-title text-center mb-6">
              {/* Section ID */}
              <span className="section-id">From The Blog</span>
              {/* Title */}
              <h2 className="h2-title">Our Latest News</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* BLOG POST #1 */}
          <div className="col-md-6 col-lg-4">
            <div id="bp-1-1" className="blog-post wow fadeInUp">
              {/* BLOG POST IMAGE */}
              <div className="blog-post-img">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="images/blog/img-01.jpg"
                    alt="blog-post-image"
                  />
                  <div className="item-overlay" />
                </div>
              </div>
              {/* BLOG POST TEXT */}
              <div className="blog-post-txt">
                {/* Post Tag */}
                <p className="post-tag">News | August 03, 2023</p>
                {/* Post Link */}
                <h5 className="h5-md post-link">
                  <a href="single-post.html">
                    Quaerat sodales sapien and tempor diam euismod purus
                  </a>
                </h5>
                {/* Text */}
                <p className="mb-0">
                  Velna purus purus magna ipsum suscipit egestas magna aliquam
                  ipsum vitae...
                </p>
              </div>
            </div>
          </div>{" "}
          {/* END BLOG POST #1 */}
          {/* BLOG POST #2 */}
          <div className="col-md-6 col-lg-4">
            <div id="bp-1-2" className="blog-post wow fadeInUp">
              {/* BLOG POST IMAGE */}
              <div className="blog-post-img">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="images/blog/img-05.jpg"
                    alt="blog-post-image"
                  />
                  <div className="item-overlay" />
                </div>
              </div>
              {/* BLOG POST TEXT */}
              <div className="blog-post-txt">
                {/* Post Tag */}
                <p className="post-tag">Trends | July 31, 2023</p>
                {/* Post Link */}
                <h5 className="h5-md post-link">
                  <a href="single-post.html">Luctus vitae and egestas</a>
                </h5>
                {/* Post Text */}
                <p className="mb-0">
                  Congue augue sagittis egestas integer velna purus purus magna
                  suscipit...
                </p>
              </div>
            </div>
          </div>{" "}
          {/* END BLOG POST #2 */}
          {/* BLOG POST #3 */}
          <div className="col-md-12 col-lg-4">
            <div id="bp-1-3" className="blog-post wow fadeInUp">
              {/* BLOG POST IMAGE */}
              <div className="blog-post-img">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="images/blog/img-03.jpg"
                    alt="blog-post-image"
                  />
                  <div className="item-overlay" />
                </div>
              </div>
              {/* BLOG POST TEXT */}
              <div className="blog-post-txt">
                {/* Post Tag */}
                <p className="post-tag">Treatment | July 18, 2023</p>
                {/* Post Link */}
                <h5 className="h5-md post-link">
                  <a href="single-post.html">
                    Magna aliquam ipsum a vitae purus justo lacus ligula
                  </a>
                </h5>
                {/* Post Text */}
                <p className="mb-0">
                  Congue augue sagittis egestas integer velna purus and magna
                  ipsum suscipit...
                </p>
              </div>
            </div>
          </div>{" "}
          {/* END BLOG POST #3 */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>{" "}
    {/* END BLOG-1 */}
    {/* NEWSLETTER-1
			============================================= */}
    <section id="newsletter-1" className="pt-8 newsletter-section division">
      <div className="container">
        <div className="newsletter-wrapper bg--img">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="section-title color--white text-center">
                {/* Title */}
                <h2 className="h2-title">Join Our Newsletter</h2>
                {/* Text */}
                <p>
                  Receive beauty and wellness insights, events and latest
                  offers!
                </p>
              </div>
            </div>
          </div>
          {/* NEWSLETTER FORM */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form className="newsletter-form text-center">
                <div className="input-group">
                  <input
                    type="email"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Enter your email"
                    required=""
                    id="s-email"
                  />
                  <span className="input-group-btn">
                    <button
                      type="submit"
                      className="btn btn--tra-white hover--white"
                    >
                      Subscribe
                    </button>
                  </span>
                </div>
                {/* Newsletter Form Notification */}
                <label htmlFor="s-email" className="form-notification" />
              </form>
            </div>
          </div>{" "}
          {/* END NEWSLETTER FORM */}
        </div>{" "}
        {/* End newsletter-wrapper */}
      </div>{" "}
      {/* End container */}
    </section>{" "}
    {/* END NEWSLETTER-1 */}
    {/* GALLERY-3
			============================================= */}
    <section id="gallery-3" className="pt-8 gallery-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title">
              <h3 className="h3-lg color--black">
                Follow: <a href="#">@reine_studio</a>
              </h3>
            </div>
          </div>
        </div>
        {/* IMAGES WRAPPER */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6">
          {/* IMAGE #1 */}
          <div className="col">
            <div id="img-3-1" className="gallery-image">
              <div className="hover-overlay">
                {/* Image */}
                <img
                  className="img-fluid"
                  src="images/gallery/woman_08.jpg"
                  alt="gallery-image"
                />
                <div className="item-overlay" />
                {/* Image Zoom */}
                <div className="image-data">
                  <div className="gallery-link ico-40 color--white">
                    <a
                      className="image-link"
                      href="images/gallery/woman_08.jpg"
                    >
                      <span className="flaticon-visibility" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* IMAGE #2 */}
          <div className="col">
            <div id="img-3-2" className="gallery-image">
              <div className="hover-overlay">
                {/* Image */}
                <img
                  className="img-fluid"
                  src="images/gallery/beauty_01.jpg"
                  alt="gallery-image"
                />
                <div className="item-overlay" />
                {/* Image Zoom */}
                <div className="image-data gallery-video">
                  <div className="gallery-link ico-40 color--white">
                    <a
                      className="video-popup1"
                      href="https://www.youtube.com/embed/SZEflIVnhH8"
                    >
                      <span className="flaticon-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* IMAGE #3 */}
          <div className="col">
            <div id="img-3-3" className="gallery-image">
              <div className="hover-overlay">
                {/* Image */}
                <img
                  className="img-fluid"
                  src="images/gallery/woman_07.jpg"
                  alt="gallery-image"
                />
                <div className="item-overlay" />
                {/* Image Zoom */}
                <div className="image-data">
                  <div className="gallery-link ico-40 color--white">
                    <a
                      className="image-link"
                      href="images/gallery/woman_07.jpg"
                    >
                      <span className="flaticon-visibility" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* IMAGE #4 */}
          <div className="col">
            <div id="img-3-4" className="gallery-image">
              <div className="hover-overlay">
                {/* Image */}
                <img
                  className="img-fluid"
                  src="images/gallery/beauty_02.jpg"
                  alt="gallery-image"
                />
                <div className="item-overlay" />
                {/* Image Zoom */}
                <div className="image-data">
                  <div className="gallery-link ico-40 color--white">
                    <a
                      className="image-link"
                      href="images/gallery/beauty_01.jpg"
                    >
                      <span className="flaticon-visibility" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* IMAGE #5 */}
          <div className="col">
            <div id="img-3-5" className="gallery-image">
              <div className="hover-overlay">
                {/* Image */}
                <img
                  className="img-fluid"
                  src="images/gallery/beauty_03.jpg"
                  alt="gallery-image"
                />
                <div className="item-overlay" />
                {/* Image Zoom */}
                <div className="image-data gallery-video">
                  <div className="gallery-link ico-40 color--white">
                    <a
                      className="video-popup2"
                      href="https://www.youtube.com/watch?v=7e90gBu4pas"
                    >
                      <span className="flaticon-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* IMAGE #6 */}
          <div className="col">
            <div id="img-3-6" className="gallery-image">
              <div className="hover-overlay">
                {/* Image */}
                <img
                  className="img-fluid"
                  src="images/gallery/woman_09.jpg"
                  alt="gallery-image"
                />
                <div className="item-overlay" />
                {/* Image Zoom */}
                <div className="image-data">
                  <div className="gallery-link ico-40 color--white">
                    <a
                      className="image-link"
                      href="images/gallery/woman_09.jpg"
                    >
                      <span className="flaticon-visibility" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* END IMAGES WRAPPER */}
      </div>{" "}
      {/* End container */}
    </section>{" "}
    {/* END GALLERY-3 */}
    {/* MODAL-2
			============================================= */}
    <div id="modal-2" className="modal fade" tabIndex={-1}>
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          {/* CLOSE BUTTON */}
          <button
            type="button"
            className="modal-close color--black ico-20"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span className="flaticon-246" />
          </button>
          {/* MODAL CONTENT */}
          <div className="modal-body">
            <div className="container">
              <div className="row">
                {/* BACKGROUND IMAGE */}
                <div className="col-md-6 bg-img d-none d-sm-flex align-items-end" />
                {/* REQUEST FORM */}
                <div className="col-md-6">
                  <div className="modal-body-content">
                    {/* TEXT */}
                    <div className="request-form-title">
                      {/* Title 	*/}
                      <h3 className="h3-md">
                        Get <span>10% OFF</span>
                      </h3>
                      <h4 className="h4-md">New Guest Offer</h4>
                      {/* Text */}
                      <p>
                        Experience Reine Studio and enjoy 10% off your first
                        salon service
                      </p>
                    </div>
                    {/* FORM */}
                    <form name="requestForm" className="row request-form">
                      {/* Form Input */}
                      <div className="col-md-12">
                        <input
                          type="email"
                          name="email"
                          className="form-control email"
                          placeholder="Enter Your Email*"
                          autoComplete="off"
                          required=""
                        />
                      </div>
                      {/* Form Button */}
                      <div className="col-md-12 form-btn">
                        <button
                          type="submit"
                          className="btn btn--black hover--tra-black submit"
                        >
                          Get Started Now
                        </button>
                      </div>
                      {/* Form Message */}
                      <div className="request-form-msg">
                        <span className="loading" />
                      </div>
                    </form>{" "}
                    {/* END FORM */}
                  </div>
                </div>{" "}
                {/* END REQUEST FORM */}
              </div>
            </div>
          </div>{" "}
          {/* END MODAL CONTENT */}
        </div>
      </div>
    </div>{" "}
    {/* END MODAL-2 */}
    {/* FOOTER-3
			============================================= */}
    <footer id="footer-3" className="pt-8 footer division">
      <div className="container text-center">
        {/* FOOTER CONTENT */}
        <div className="row">
          {/* FOOTER CONTACTS */}
          <div className="col-sm-6 col-lg-4">
            <div className="footer-contacts">
              {/* Title */}
              <h5 className="h5-md">Our Location</h5>
              {/* Salon Name */}
              <p>Reine Studio</p>
              {/* Address */}
              <p>
                Los Angeles, 8721 M <br /> Central Avenue, CA 90036
              </p>
            </div>
          </div>
          {/* FOOTER CONTACTS */}
          <div className="col-sm-6 col-lg-4">
            <div className="footer-info">
              {/* Title */}
              <h5 className="h5-md">Get in Touch</h5>
              {/* Phone */}
              <p className="footer-phone">
                <a href="tel:123456789">phone: +12 9 8765 4321</a>
              </p>
              {/* Email */}
              <p className="footer-email">
                <a href="mailto:yourdomain@mail.com">hello@yourdomain.com</a>
              </p>
              {/* List */}
              <ul className="foo-socials ico-20 text-center clearfix">
                <li>
                  <a href="#" className="ico-facebook">
                    <span className="flaticon-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="ico-twitter">
                    <span className="flaticon-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="ico-youtube">
                    <span className="flaticon-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* FOOTER CONTACTS */}
          <div className="col-sm-6 col-lg-4">
            <div className="footer-info">
              {/* Title */}
              <h5 className="h5-md">Working Hours</h5>
              {/* Text */}
              <p>
                Mon-Fri: <span>10:00AM - 9:00PM</span>
              </p>
              <p>
                Saturday: <span>10:00AM - 7:00PM</span>
              </p>
              <p>
                Sunday: <span>10:00PM - 7:00PM</span>
              </p>
            </div>
          </div>
        </div>{" "}
        {/* END FOOTER CONTENT */}
        <hr /> {/* FOOTER DIVIDER LINE */}
        {/* FOOTER COPYRIGHT */}
        <div className="bottom-footer">
          <div className="row">
            <div className="col">
              <div className="footer-copyright">
                <p>© 2023 Reine. All Rights Reserved</p>
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* BOTTOM FOOTER */}
      </div>{" "}
      {/* End container */}
    </footer>{" "}
    {/* END FOOTER-3 */}
  </div>{" "}
  {/* END PAGE CONTENT */}
</>
  )
}
