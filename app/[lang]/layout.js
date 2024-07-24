import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata = {
  title: 'Leen Whispers',
  description: 'After several years of providing home services, and thanks to the great support, trust, and love from the distinguished ladies of the community, we decided to turn that idea into a tangible reality by creating a comprehensive salon. This salon aims to serve beautiful women, allowing them to enjoy the finest details and comprehensive care. We are committed to providing our services with love and attention, continuing to deliver the best in the ways you have come to expect from us.',
}

export default async function RootLayout({ children, params }) {

  const direction = params.lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <html  lang={params.lang} dir={direction}>
      <GoogleAnalytics />
      <body lang={params.lang} >
        {children}
      </body>
    </html>
  )
}
