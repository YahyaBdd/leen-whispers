import Script from 'next/script';

import '@/styles/bootstrap.min.css'


import '@/styles/flaticon.css';
import '@/styles/menu.css';
import '@/styles/dropdown-effects/fade-down.css';
import '@/styles/magnific-popup.css';
import '@/styles/owl.carousel.min.css';
import '@/styles/owl.theme.default.min.css';
import '@/styles/datetimepicker.min.css';
import '@/styles/lunar.css';
import '@/styles/style.css';
import '@/styles/responsive.css';

import Footer from "@/components/Footer";
import NavBar from '@/components/NavBar';
import NewsLetter from '@/components/NewsLetter';
import Instagram from '@/components/Instagram';
import { getDictionary } from '@/get-dictionary';


export const metadata = {
  title: 'Leen Whispers',
  description: 'After several years of providing home services, and thanks to the great support, trust, and love from the distinguished ladies of the community, we decided to turn that idea into a tangible reality by creating a comprehensive salon. This salon aims to serve beautiful women, allowing them to enjoy the finest details and comprehensive care. We are committed to providing our services with love and attention, continuing to deliver the best in the ways you have come to expect from us.',
}



export default async function RootLayout({ children, params }) {

  const dictionary = await getDictionary(params.lang)

  return (
    <>
      <NavBar dict={dictionary["navBar"]} lang={params.lang} />
      {children}
      <NewsLetter dict={dictionary["newsletter"]}/>
      <Instagram dict={dictionary["instagram"]} />
      <Footer dict={dictionary["footer"]}/>
      <Script src="/js/jquery-3.7.0.min.js" strategy="afterInteractive"/>
      <Script src="/js/bootstrap.min.js" strategy="lazyOnload" />
      <Script src="/js/menu.js" strategy="lazyOnload" />
      <Script src="/js/tweenmax.min.js" strategy="lazyOnload" /> 
      <Script src="/js/slideshow.js" strategy="lazyOnload" />
      <Script src="/js/custom.js" strategy="lazyOnload" />
    </>
  )
}
