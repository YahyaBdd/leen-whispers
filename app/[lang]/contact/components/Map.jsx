export default function Map() {
  return (
    <div id="contacts-1" className="contacts-section division">
  <div className="container">
    {/* GOOGLE MAP */}
    <div className="row">
      <div className="col">
        <div className="google-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14494.544286677652!2d46.6883799!3d24.7393714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03b9cced9c13%3A0xfe0efb58ea519131!2z2YfZhdiz2KfYqiDZhNmK2YYgTGVlbiB3aGlzcGVycw!5e0!3m2!1sen!2sma!4v1699901685747!5m2!1sen!2sma" 
            width={1300}
            height={450}
            style={{ border: 0 }}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </div>{" "}
    {/* END GOOGLE MAP */}
  </div>{" "}
  {/* End container */}
</div>

  )
}
