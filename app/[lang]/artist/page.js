export default function index({params : {lang}}){
// Content in English
const contentEnglish = {
  hero: {
    title: 'Meet Our Team',
    description: 'We want to make every girl pretty, happy, and loved',
  },
  artist: {
    name: 'Marcy Burnett',
    role: 'Senior Stylist',
    experience: 'Hairdressing since 2006',
    about: 'Passionate and experienced senior stylist Marcy Burnett has been shaping beautiful hair since 2006. With a keen eye for the latest trends and a commitment to delivering top-notch service, Marcy ensures every client leaves the salon feeling confident and satisfied.',
    additionalInfo: 'With a diverse skill set that includes everything from classic cuts to modern color techniques, Marcy is dedicated to making each client\'s experience unique and enjoyable.',
    prices: [
      { service: 'Shampoo Cut Blowdry', price: '$95' },
      { service: 'Long Hair/Extra Time', price: '+$15' },
      { service: 'Dry Haircut', price: '$72' },
      { service: "Child’s Haircut", price: '$55' },
      { service: 'Root Touch Up', price: '$125' },
      { service: 'Finishing Gloss', price: '$77' },
    ],
  },
};

// Content in Arabic
const contentArabic = {
  hero: {
    title: 'تعرفي على فريقنا',
    description: 'نريد أن نجعل كل فتاة جميلة وسعيدة ومحبوبة',
  },
  artist: {
    name: 'مارسي بيرنيت',
    role: 'كبير مصففي الشعر',
    experience: 'تصفيف الشعر منذ عام 2006',
    about: 'مصففة الشعر الكبيرة مارسي بيرنيت، الشغوفة والمتمرسة، قامت بتشكيل الشعر الجميل منذ عام 2006. بفضل نظرتها الحادة لأحدث الاتجاهات والتفاني في تقديم خدمة متميزة، تضمن مارسي أن يترك كل عميل الصالون واثقًا وراضيًا.',
    additionalInfo: 'بفضل مجموعة متنوعة من المهارات تتضمن كل شيء من التصفيفات الكلاسيكية إلى تقنيات اللون الحديثة، تكرس مارسي نفسها لجعل تجربة كل عميل فريدة وممتعة.',
    prices: [
      { service: 'تصفيف الشامبو والقص والتجفيف', price: '95 دولارًا' },
      { service: 'شعر طويل / وقت إضافي', price: '+15 دولارًا' },
      { service: 'تصفيف الشعر الجاف', price: '72 دولارًا' },
      { service: 'تصفيف شعر الطفل', price: '55 دولارًا' },
      { service: 'لمسة الجذر', price: '125 دولارًا' },
      { service: 'تألق الانتهاء', price: '77 دولارًا' },
    ],
  },
};
    // Select content based on the language prop
    const content = lang === 'ar' ? contentArabic : contentEnglish;

    return(
      <>
      {/* INNER PAGE HERO */}
      <section id="team-page" className="inner-page-hero division">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="page-hero-txt color--white">
                <h2 style={{textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", color: "#f0f0f0"}}>{content.hero.title}</h2>
                <p style={{textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", color: "#f0f0f0"}}>{content.hero.description}</p>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End container */}
      </section>{" "}
      {/* END INNER PAGE HERO */}

      <section className="pt-8 artist-details division">
        <div className="container">
          <div className="row">
            {/* Team Member Photo */}
            <div className="col-lg-5">
              <div className="artist-photo">
                <img
                  className="img-fluid"
                  src="https://placehold.co/700x900"
                  alt="team-member-foto"
                />
              </div>
            </div>
            {/* Team Member Bio */}
            <div className="col-lg-7">
              <div className="artist-bio">
                {/* Artist Name */}
                <h2 className="h2-title">{content.artist.name}</h2>
                {/* Artist Data */}
                <div className="artist-data">
                  <p>
                    <span className="sm-title">{content.artist.role}</span>
                  </p>
                  <p>
                    <span className="sm-title">{content.artist.experience}</span>
                  </p>
                </div>
                {/* Social Icons */}
                {/* ... (unchanged) */}
                {/* Text */}
                <p>
                  <span className="sm-title">{content.artist.about}</span>
                </p>
                {/* Artist Description */}
                <p>{content.artist.additionalInfo}</p>
                {/* Artist Data */}
                <div className="artist-prices">
                  {/* Text */}
                  <p>
                    <span className="sm-title">Marcy's Prices:</span>
                  </p>
                  {/* List */}
                  <ul className="artist-prices-list" style={{ paddingLeft: '0px' }}>
                    {content.artist.prices.map((price, index) => (
                      <li key={index}>
                        <p>
                          <span>{price.service}</span> - {price.price}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* End Artist Data */}
                {/* Booking Link */}
                <div className="booking-link">
                  <a href={`${lang}/booking`} className="btn btn--tra-black hover--black">
                    {lang === 'en' ? "Book Appointment" : "احجزي موعدًا"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End container */}
      </section>
    </>
    )
}