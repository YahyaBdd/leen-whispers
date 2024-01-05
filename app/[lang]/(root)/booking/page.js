import Hero from "./components/Hero";
import WorkingHours from "@/components/WorkingHours";
import Location from "@/components/Location";
import { getDictionary } from "@/get-dictionary";
import LoginRegistrationCard from "./components/LoginRegistrationCard";
import OffersModal from "./components/OffersModal";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import ReviewsModal from "./components/ReviewsModal";

const getOffers = async () => {
    const offers = {};
    const querySnapshot = await getDocs(collection(db, "offers"));
    querySnapshot.forEach((doc) => {
      offers[doc.id] = doc.data();;
    });
    return offers;
  }

export default async function index({params : {lang}}) {

    const dictionary = await getDictionary(lang)
    const offers = await getOffers()
    
    return(
        <>
            <Hero lang={lang}/>
            <LoginRegistrationCard lang={lang} dict={dictionary["bookingPage"]} />
            <OffersModal offers={offers} />
            <ReviewsModal/>
            <WorkingHours dict={dictionary["workingHours"]}/>
            <Location dict={dictionary["location"]} />
        </>
    )
}