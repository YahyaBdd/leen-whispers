import Team from "@/app/[lang]/team/components/Team";
import WorkingHours from "@/components/WorkingHours";
import Gallery from "@/components/Gallery";
import { getDictionary } from "@/get-dictionary";

export default async function TeamPage({params : {lang}}) {

    const dictionary = await getDictionary(lang)
    
    return(
        <>
            {/* PAGE CONTENT
		============================================= */}
            <div id="page" className="page">
                {/* INNER PAGE HERO
			============================================= */}
                <section id="team-page" className="inner-page-hero division">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-hero-txt color--white">
                                    <h2>{lang === 'en' ? "Meet Our Team" : "تعرفوا على فريقنا"}</h2>
                                    <p>{lang === 'en' ? "We want to make every girl pretty, happy and loved" : "نرغب في جعل كل فتاة جميلة، سعيدة، ومحبوبة"}</p>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End container */}
                </section>{" "}
                {/* END INNER PAGE HERO */}
                {/* TEAM-3
			============================================= */}
                <Team lang={lang}/>
                {/* END TEAM-3 */}
                {/* WORKING HOURS
			============================================= */}
                <WorkingHours dict={dictionary["workingHours"]}/>
                {/* END WORKING HOURS */}
                {/* GALLERY-4
			============================================= */}
                <Gallery dict={dictionary["gallery"]}/>
                {/* END GALLERY-4 */}
    
                {/* END NEWSLETTER-1 */}
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
            </div>{" "}
            {/* END PAGE CONTENT */}
        </>
    )
}