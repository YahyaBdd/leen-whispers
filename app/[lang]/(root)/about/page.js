import Services from "@/components/Services";
import About from "./components/About";
import Hero from "./components/Hero";
import { getDictionary } from "@/get-dictionary";

export default async function Index({params : {lang}}) {

  const dictionary = await getDictionary(lang)

  return (
    <>
    <Hero dict={dictionary["aboutPage"].hero}/>
    <About dict={dictionary["aboutPage"]} />
    <Services dict={dictionary["services"]}/>
    </>
  );
}
  