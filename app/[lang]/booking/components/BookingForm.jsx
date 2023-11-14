import React from 'react';

export default function BookingForm({ lang }) {
  // Content in English
  const contentEnglish = {
    firstNamePlaceholder: 'First Name*',
    lastNamePlaceholder: 'Last Name*',
    emailAddressPlaceholder: 'Email Address*',
    phoneNumberPlaceholder: 'Phone Number*',
    selectService: 'Select Service',
    selectStaff: 'Select Staff',
    services: [
      'Hair Cut & Styling',
      'Hair Coloring',
      'Hair Treatments',
      'Hair Extensions',
      'Skin Care & Facials',
      'Body Waxing',
      'Makeup & Eyebrows',
      'Manicure & Pedicure',
    ],
    staff: [
      'Veronica Aaron',
      'Olivia Grosh',
      'Eva Anderson',
      'Jessica Priston',
      'Evelyn Sanchez',
      'Kristin Cortes',
      'Any Available Staff',
    ],
    appointmentDatePlaceholder: 'Appointment Date*',
    bookButton: 'Book Appointment',
  };

  // Content in Arabic
  const contentArabic = {
    firstNamePlaceholder: 'الاسم الأول*',
    lastNamePlaceholder: 'الاسم الأخير*',
    emailAddressPlaceholder: 'عنوان البريد الإلكتروني*',
    phoneNumberPlaceholder: 'رقم الهاتف*',
    selectService: 'اختر الخدمة',
    selectStaff: 'اختر الموظف',
    services: [
      'قص الشعر وتصفيفه',
      'تلوين الشعر',
      'علاجات الشعر',
      'تمديدات الشعر',
      'العناية بالبشرة والتجميل',
      'تشميع الجسم',
      'مكياج وحواجب',
      'مانيكير وباديكير',
    ],
    staff: [
      'فيرونيكا آرون',
      'أوليفيا جروش',
      'إيفا أندرسون',
      'جيسيكا بريستون',
      'إيفلين سانشيز',
      'كريستين كورتيس',
      'أي موظف متاح',
    ],
    appointmentDatePlaceholder: 'تاريخ الموعد*',
    bookButton: 'حجز موعد',
  };

  const content = lang === 'ar' ? contentArabic : contentEnglish;

  return (
    <div id="booking-1" className="pt-8 pb-7 booking-section division">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9">
          <form name="bookingform" className="row booking-form">
            <div className="col-lg-6">
              <input
                type="text"
                name="firstname"
                className="form-control firstname"
                placeholder={content.firstNamePlaceholder}
                required=""
              />
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                name="lastname"
                className="form-control lastname"
                placeholder={content.lastNamePlaceholder}
                required=""
              />
            </div>
            <div className="col-lg-6">
              <input
                type="email"
                name="email"
                className="form-control email"
                placeholder={content.emailAddressPlaceholder}
                required=""
              />
            </div>
            <div className="col-lg-6">
              <input
                type="tel"
                name="phone"
                className="form-control phone"
                placeholder={content.phoneNumberPlaceholder}
                required=""
              />
            </div>
            <div className="col-lg-6">
              <select dir='ltr'
                name="service"
                className="form-select service"
                aria-label="Service Select"
              >
                <option selected="">{content.selectService}</option>
                  {content.services.map((service, index) => (
                    <option key={index}>{service}</option>
                  ))}
              </select>
            </div>
            <div className="col-lg-6">
              <select
                dir='ltr'
                name="staff"
                className="form-select staff"
                aria-label="Staff Select"
              >
                <option selected="">
                  {content.selectStaff}
                </option>
                <option selected="">{content.selectService}</option>
                  {content.staff.map((service, index) => (
                    <option key={index}>{service}</option>
                  ))}
              </select>
            </div>
            <div className="col-md-12">
              <input
                id="datetimepicker"
                type="text"
                name="date"
                className="form-control date"
                placeholder={content.appointmentDatePlaceholder}
                required
              />
            </div>
            <div className="col-md-12 text-center">
              <button
                type="submit"
                className="btn btn--tra-black hover--black submit"
              >
                {content.bookButton}
              </button>
            </div>
            <div className="col-md-12 booking-form-msg">
              <div className="sending-msg">
                <span className="loading" />
              </div>
            </div>
          </form>
        </div>
      </div>{" "}
    </div>{" "}
  </div>
  )
}
