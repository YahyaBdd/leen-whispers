import slide01 from '@/assets/images/slider/slide-1.jpg'
import slide02 from '@/assets/images/slider/slide-2.jpg'
import slide03 from '@/assets/images/slider/slide-3.jpg'
import Image from 'next/image'

export default function HomeHero({dict}) {
    const images = [slide01,slide02,slide03]
    return (
      <section id="hero-1" className="hero-section">
          <div className="slideshow">
              <div className="slideshow-inner">
                  <div className="slides">
                      {dict.slides.map((slide, index) => (
                          <div key={index} className={`slide ${index === 0 ? 'is-active' : ''}`}>
                              <div className="slide-content">
                                  <div className="container">
                                      <div className="row justify-content-md-center">
                                          <div className="col col-lg-10">
                                              <div className="caption color--white">
                                                  <div className="title">
                                                      <h2>{slide.title}</h2>
                                                  </div>
                                                  <div className="text">
                                                      <h5 className="h5-lg">{slide.text.main}</h5>
                                                      <a href="#" className="btn btn--tra-white hover--white">
                                                          {slide.text.button}
                                                      </a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="image-container">
                                  <Image
                                      className="image"
                                      src= {images[index]}
                                      alt={`slide-background-${index}`}
                                  />
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>
  )
}
