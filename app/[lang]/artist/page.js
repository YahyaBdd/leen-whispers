import NewsLetter from '@/components/NewsLetter'
import WorkingHours from '@/components/WorkingHours'
import Image from 'next/image'

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
                <h2>{content.hero.title}</h2>
                <p>{content.hero.description}</p>
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
                  <a href="booking.html" className="btn btn--tra-black hover--black">
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
//         <>
//                         {/* INNER PAGE HERO
// 			============================================= */}
//                 <section id="team-page" className="inner-page-hero division">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col">
//                                 <div className="page-hero-txt color--white">
//                                     <h2>Meet Our Team</h2>
//                                     <p>We want to make every girl pretty, happy and loved</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>{" "}
//                     {/* End container */}
//                 </section>{" "}
//                 {/* END INNER PAGE HERO */}

//         <section className="pt-8 artist-details division">
//   <div className="container">
//     <div className="row">
//       {/* Team Member Photo */}
//       <div className="col-lg-5">
//         <div className="artist-photo">
//           <img
//             className="img-fluid"
//             src="https://placehold.co/700x900"
//             alt="team-member-foto"
//           />
//         </div>
//       </div>
//       {/* Team Member Bio */}
//       <div className="col-lg-7">
//         <div className="artist-bio">
//           {/* Artist Name */}
//           <h2 className="h2-title">Marcy Burnett</h2>
//           {/* Artist Data */}
//           <div className="artist-data">
//             <p>
//               <span className="sm-title">Senior Stylist</span>
//             </p>
//             <p>
//               <span className="sm-title">Experience:</span> Hairdressing since
//               2006
//             </p>
//           </div>
//           {/* Social Icons */}
//           <div className="tm-social ico-20 clearfix">
//             <ul className="clearfix" style={{paddingLeft : '0px'}}>
//               <li>
//                 <a href="#">
//                   <span className="flaticon-facebook" />
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <span className="flaticon-instagram" />
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <span className="flaticon-twitter" />
//                 </a>
//               </li>
//             </ul>
//           </div>
//           {/* Text */}
//           <p>
//             <span className="sm-title">About:</span>
//           </p>
//           {/* Artist Description */}
//           <p>
//             Sagittis congue augue egestas integer velna purus purus magna libero
//             suscipit and egestas magna aliquam ipsum vitae purus justo lacus
//             ligula ipsum primis cubilia donec undo augue luctus vitae egestas a
//             molestie donec libero sapien dapibus congue tempor undo quisque
//             ipsum fusce cursus neque blandit fusce nulla aliquam a lacinia
//             integer molestie
//           </p>
//           {/* Artist Description */}
//           <p>
//             Primis cubilia donec undo augue luctus vitae egestas a molestie
//             donec libero sapien neque dapibus tempor undo quisque ociis fusce
//             and neque cursus blandit fusce aliquam nulla ociis lacinia integer
//             molestie
//           </p>
//           {/* Artist Data */}
//           <div className="artist-prices">
//             {/* Text */}
//             <p>
//               <span className="sm-title">Marcy's Pices:</span>
//             </p>
//             {/* List */}
//             <ul className="artist-prices-list" style={{paddingLeft : '0px'}}>
//               <li>
//                 <p>
//                   <span>Shampoo Cut Blowdry</span> - $95
//                 </p>
//               </li>
//               <li>
//                 <p>
//                   <span>Long Hair/Extra Time</span>: +$15
//                 </p>
//               </li>
//               <li>
//                 <p>
//                   <span>Dry Haircut</span> - $72
//                 </p>
//               </li>
//               <li>
//                 <p>
//                   <span>Child’s Haircut</span> - $55
//                 </p>
//               </li>
//               <li>
//                 <p>
//                   <span>Root Touch Up</span> - $125
//                 </p>
//               </li>
//               <li>
//                 <p>
//                   <span>Finishing Gloss</span> - $77
//                 </p>
//               </li>
//             </ul>
//           </div>
//           {/* End Artist Data */}
//           {/* Booking Link */}
//           <div className="booking-link">
//             <a href="booking.html" className="btn btn--tra-black hover--black">
//               Book Appointment
//             </a>
//           </div>
//         </div>
//       </div>
//     </div> 
//     {/* End row */}
//   </div> 
//   {/* End container */}
// </section>
// </>
    )
}