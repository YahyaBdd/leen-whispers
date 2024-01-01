import { getDictionary } from "@/get-dictionary";
import ContanctForm from "./components/ContanctForm";
import Hero from "./components/Hero";
import Map from "./components/Map";

export default async function page({params : {lang}}) {
  const dictionary = await getDictionary(lang)
  return (
    <>
    <Hero lang={lang}/>
    <br/>
    <Map />
    <ContanctForm dict={dictionary["contactPage"]} />
    </>
  )
}
