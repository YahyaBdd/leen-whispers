import { YouTubeEmbed } from '@next/third-parties/google'

export default function VideoSection({dict}) {
    return (
      <>
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/css/flag-icons.min.css"
/>
    <section className="pt-8 about-1 about-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div className="txt-block text-center">
              <h2 className="h2-title"><span class="fi fi-sa fib" />   {dict.title}   <span class="fi fi-sa fib" /></h2>
              {/* Text */}
              {/* <p className="mb-3">
              {dict.subtitle}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="services-3" className="services-section division">
        <div style={{display:'flex', justifyContent: 'center'}}>
            <YouTubeEmbed videoid="2XAhKJLd2uU" height={400} params="autoplay=1&controls=0" style="width:60vw;height:50vh" />
        </div>
    </div>
  </>
    )
  }
  