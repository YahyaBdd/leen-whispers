import Team from "@/app/[lang]/(root)/team/components/Team";
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
            </div>{" "}
            {/* END PAGE CONTENT */}
        </>
    )
}