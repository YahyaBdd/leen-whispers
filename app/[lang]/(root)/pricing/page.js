import TextCard1 from "@/components/TextCard1";
import Hero from "./components/Hero";
import PricingMenu from "./components/PricingMenu";

export default function page({params : {lang}}) {
  return (
    <>
        <Hero lang={lang}/>
        <PricingMenu lang={lang} />
    </>
  )
}
