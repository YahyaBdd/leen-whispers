import HomeHero from '@/components/HomeHero';
import Testimonials from '@/components/Testimonials';
import Services from '@/components/Services';
import TextCard1 from '@/components/TextCard1';
import WorkingHours from '@/components/WorkingHours';
import Pricing from '@/components/Pricing';
import TextCard3 from '@/components/TextCard3';
import Gallery from '@/components/Gallery';
import Discount from '@/components/Discount';
import Location from '@/components/Location';
import {getDictionary} from "@/get-dictionary";
import DiscountModal from '@/components/DiscountModal';
import VideoSection from '@/components/VideoSection';



export default async function Home({ params: { lang } }) {

  const dictionary = await getDictionary(lang)

  return (
    
<div>
  {/* PAGE CONTENT */}
  <div id="page" className="page">
    <HomeHero dict={dictionary['heroSection']}/>

    <VideoSection dict={dictionary['specialOffer']["0"]} />
    {/* TEXT CONTENT */}
    <TextCard1 dict={dictionary["contentSection"]} />

    {/* SERVICES-2 */}
    <Services dict={dictionary["services"]}/>

    {/* WORKING HOURS */}
    <WorkingHours dict={dictionary["workingHours"]}/>
    {/* WIDE IMAGE*/}
    <div className="bg--01 bg--scroll ct-12 content-section" />
    {/* PRICING-1*/}
    <Pricing lang={lang} />
    {/* TEXT CONTENT */}
    <TextCard3 dict={dictionary["textContent3"]} />
    {/* GALLERY-4 */}
    <Gallery dict={dictionary["gallery"]} />
    {/* BANNER-2 */}
    <Discount dict={dictionary["discount"]} />
    {/* TESTIMONIALS-2 */}
    <Testimonials dict={dictionary["testemonials"]} />
    {/* LOCATION */}
    <Location dict={dictionary["location"]} />

    <DiscountModal dict={dictionary["modal"]} />

  </div>{" "}
  {/* END PAGE CONTENT */}
</div>
  )
};



