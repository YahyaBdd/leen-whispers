'use client'
import { pricingAr, pricingEn, teamMembersEn, getTags } from "@/constants";
import { db } from "@/firebase";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { addDoc, collection} from "firebase/firestore";
import { useState, useEffect} from "react";
import PhoneInput from "react-phone-input-2";
import Appointments from "./Appointments";
import AccordionCard from "@/components/AccordionCard";


export default function BookingForm({ lang, userData }) {

  const [formData, setFormData] = useState({
    firstName: userData?.firstName || '',
    lastName: userData?.lastName || '',
    email: userData?.identifier.includes("@") ? userData.identifier : null,
    phone: userData?.identifier.includes("@") ? null : userData.identifier,
    service: null,
    staff: null,
    date: null,
    time: null,
  });
  const [exchangeRate, setExchangeRate] = useState()
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    staff: '',
    date: '',
    time: '',
  })
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("appointment")) || {})

  const [teamMembers, setTeamMembers] = useState([...teamMembersEn]);

  const setPhoneNumber = (phone) => {
    setFormData({...formData, phone: phone})
  }

  useEffect(() => {
    fetch('https://openexchangerates.org/api/latest.json?app_id=d8af557bc9e541bb8a2949aa0e8d000c')
      .then(response => response.json())
      .then(data => {
      setExchangeRate(data.rates.SAR)
      })
      .catch(error => console.error('Error:', error));

  }, [])
  

  const createAppointment = async (paymentMethod,orderId) => {
    // loopr through the appointments in local storage and add them to the database
    const appointmentCookie = localStorage.getItem("appointment");
    const appointment = JSON.parse(appointmentCookie);

    for (const item of appointment) {
      try {
        //if payment method is paypal, add the order id to the appointment
        if(paymentMethod === 'paypal'){
          item.orderId = orderId
        }

        const ref = await addDoc(collection(db, "appointments"), item);
      } catch (error) {
        console.log(error);
      }
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAppointment('in-person')
      localStorage.removeItem("appointment");
      alert("Appointment booked successfully")
      window.location.reload();
    } catch (error) {
      alert("something went wrong, please refresh the pafe and try again ")
      console.log(error)
    }
  }

  const validateForm = () => {
    let valid = true
    let errors = {}
    if(!formData.firstName){
      errors.firstName = 'First Name is required'
      valid = false
    }
    if(!formData.lastName){
      errors.lastName = 'Last Name is required'
      valid = false
    }
    if(!formData.email ){
      errors.email = 'Email is required'
      valid = false
    }
    if(!formData.phone){
      errors.phone = 'Phone is required'
      valid = false
    }
    if(!formData.service){
      errors.service = 'Service is required'
      valid = false
    }
    if(!formData.staff){
      errors.staff = 'Staff is required'
      valid = false
    }
    if(!formData.date){
      errors.date = 'Date is required'
      valid = false
    }
    if(!formData.time){
      errors.time = 'Time is required'
      valid = false
    }
    setErrors(errors)
    return valid
  }

  const handleApprove = async (orderId) => {
    try{
      await createAppointment('paypal',orderId)
      alert("Appointment booked successfully")
      localStorage.removeItem("appointment");
      window.location.reload();
    } catch (error) {
      alert("something went wrong, please refresh the pafe and try again ")
      console.log(error)
    }
  };

  const handleSelectedService = (e) => {
    const srv = e.target.value.split('-')
    const data = {
      description: srv[0], 
      price: srv[1]
    }
    setFormData({...formData, service: data})
    // Get the tags from the service description
    const tags = getTags(srv[0]);

    const filteredTeamMembers = teamMembersEn.filter((category) => {
      // Check if the category.category is in tags
      const hasCategory = tags.some((tag) =>
        category.category.toLowerCase().includes(tag.toLowerCase())
      );
      return hasCategory;
    });
    // Update the team members state with the filtered members
    setTeamMembers(filteredTeamMembers);
  }

  const handleSelectedStaff = (e) => {
    setFormData({...formData, staff:e.target.value})
  }

  const addAppointment = () => {
    if(validateForm()){
      const appointmentCookie = localStorage.getItem("appointment");
      if(appointmentCookie){
        const appointment = JSON.parse(appointmentCookie);
        appointment.push(formData)
        localStorage.setItem("appointment", JSON.stringify(appointment));
        setCartItems(appointment)
        alert("Service added to cart")
      } else {
        const appointment = [formData]
        localStorage.setItem("appointment", JSON.stringify(appointment));
        setCartItems(appointment)
        alert("Service added to cart")
      }
    }
  }

  const contentEnglish = {
    firstNamePlaceholder: 'First Name*',
    lastNamePlaceholder: 'Last Name*',
    emailAddressPlaceholder: 'Email Address*',
    phoneNumberPlaceholder: 'Phone Number*',
    selectService: 'Select Service',
    selectStaff: 'Select Staff',
    appointmentDatePlaceholder: 'Appointment Date*',
    bookButton: 'Or Pay In Person',
  };

  const contentArabic = {
    firstNamePlaceholder: 'الاسم الأول*',
    lastNamePlaceholder: 'الاسم الأخير*',
    emailAddressPlaceholder: 'عنوان البريد الإلكتروني*',
    phoneNumberPlaceholder: 'رقم الهاتف*',
    selectService: 'اختر الخدمة',
    selectStaff: 'اختر الموظف',
    appointmentDatePlaceholder: 'تاريخ الموعد*',
    bookButton: 'أو ادفع في المكان',
  };

  const content = lang === 'ar' ? contentArabic : contentEnglish;

  const services = lang === 'ar' ? pricingAr : pricingEn;

  return (
    <PayPalScriptProvider options={{ "client-id": "AVnvPk94IsV5Cy1ni1AKtWefOvUU8IFzfaS0oY8Nl9GNELwFG_E61JofyLQWlKS1e_GPOkQ5t3Ca3mWU" }}>
    <div id="booking-1" className="pt-8 pb-7 booking-section division">
      <style>
        {`
          input[type='date']::-webkit-calendar-picker-indicator, input[type='time']::-webkit-calendar-picker-indicator{
            background: transparent;
            bottom: 0;
            color: transparent;
            cursor: pointer;
            height: auto;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            width: auto;
          }
          `}
      </style>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9">
          <Appointments userName={userData.firstName} identifier={userData.identifier} />
          <br />
          <form name="bookingform" className="row booking-form" onSubmit={handleSubmit}>
            <div className="col-lg-6">
              <input
                type="text"
                name="firstname"
                className="form-control firstname"
                placeholder={content.firstNamePlaceholder}
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                required
                />
            </div>
            {errors.firstName === '' ? '' : <p style={{color:'red'}}>{errors.firstName}</p>}
            <div className="col-lg-6">
              <input
                type="text"
                name="lastname"
                className="form-control lastname"
                placeholder={content.lastNamePlaceholder}
                value={formData.lastName}
                onChange= {(e) => setFormData({...formData, lastName: e.target.value})}
                required=""
                />
                {errors.lastName === '' ? '' : <p style={{color:'red'}}>{errors.lastName}</p>}
            </div>
            <div className="col-md-12">
              <input
                type="email"
                name="email"
                className="form-control email"
                placeholder={content.emailAddressPlaceholder}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required=""
                />
            </div>
            <div className="col-md-12">
              <PhoneInput 
              country={"sa"} 
              value={formData.phone}
              onChange={setPhoneNumber}
              required = {true}
              />
              {errors.phone === '' ? '' : <p style={{color:'red'}}>{errors.phone}</p>}
            </div>
            <div className="col-lg-6">
              <select 
              name="service"
              className="form-select service"
              onChange={handleSelectedService}
              >
              <option value="">{content.selectService}</option>
                {services.categories.map((category, index) => (
                  <optgroup key={index} label={category.name} style={{color:'black'}}>
                    {category.items.map((item, i) => (
                      <option key={i} value={`${item.description}-${item.price}`}>
                        {item.description} - {item.price} ˢᵃʳ
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            {errors.service === '' ? '' : <p style={{color:'red'}}>{errors.service}</p>}
            </div>
            <div className="col-lg-6">
              <select name="staff" className="form-select staff" aria-label="Staff Select" onChange={handleSelectedStaff} >
                <option value="">{content.selectStaff}</option> 
                {teamMembers.map((category, index) => (
                  <optgroup key={index} label={category.category} style={{color:'black'}}>
                    {category.members.map((member, i) => (
                      <option key={i} value={member.name}>
                        {member.name} - {member.title}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            {errors.staff === '' ? '' : <p style={{color:'red'}}>{errors.staff}</p>}
            </div>
            <div className="col-md-12">
              <input
                type="text"
                style={{position:'relative'}}
                name="date-input"
                className="form-control date"
                onChange={(e) => setFormData({...formData, date:e.target.value})}
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'date')}    
                placeholder="Appointment Date*"  
                required
              />
              {errors.date === '' ? '' : <p style={{color:'red'}}>{errors.date}</p>}
            </div>
            <div className="col-md-12">
              <input
                type="text"
                name="time-input"
                style={{position:'relative'}}
                min="08:00" max="20:00"
                className="form-control date"
                onChange={(e) => setFormData({...formData, time:e.target.value})}
                onFocus={(e) => (e.target.type = 'time')}
                onBlur={(e) => (e.target.type = 'time')}
                placeholder="Appointment Time*"
                required
                />
              {errors.time === '' ? '' : <p style={{color:'red'}}>{errors.time}</p>}
            </div>
            <br />
            <AccordionCard title="Your Reservations" data={cartItems} emptyMsg="No Reservations Available"/>
            <br />
            <div className="col-md-12 text-center mb-3">
              <button
                type="button"
                className="btn btn--tra-black hover--black"
                onClick={addAppointment}
                >
                Add Service
              </button>
            </div>
            <PayPalButtons
              forceReRender = {[formData.service, formData.staff, formData.date, formData.time]}
              createOrder={(data, actions) => {
                  const appointmentCookie = localStorage.getItem("appointment");
                  const appointment = JSON.parse(appointmentCookie);
                  const purchase_units = appointment.map((item, index) => {
                    return {
                      reference_id: `${Date.now()}${index}`,
                      description:item.service.description,
                      amount: {
                        value: Math.ceil(item.service.price/exchangeRate),
                      }
                    }
                  })
                  return actions.order.create(
                    { purchase_units: [...purchase_units]}
                  );
              }}
              onApprove={async (data, actions) => {
              const order = await actions.order.capture();
              handleApprove(data.orderID)
              }}
              onError={(err) => {
              console.error("PayPal Checkout onError", err);
              }}
            />
            <div className="col-md-12 text-center">
              <button
                type="submit"
                className="btn btn--tra-black hover--black submit"
                >
                {content.bookButton}
              </button>
            </div>
          </form>
        </div>
      </div>{" "}
    </div>{" "}
  </div>
</PayPalScriptProvider>
  )
}
