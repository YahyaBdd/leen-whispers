import Hero from "./components/Hero";
import WorkingHours from "@/components/WorkingHours";
import Location from "@/components/Location";
import { getDictionary } from "@/get-dictionary";
import LoginRegistrationCard from "./components/LoginRegistrationCard";

export default async function index({params : {lang}}) {

    const dictionary = await getDictionary(lang)
    
    return(
        <>
            <Hero lang={lang}/>
            <LoginRegistrationCard lang={lang} dict={dictionary["bookingPage"]} />
            <WorkingHours dict={dictionary["workingHours"]}/>
            <Location dict={dictionary["location"]} />
        </>
    )
}