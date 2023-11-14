import ig01 from '@/assets/images/ig_01.jpg'
import ig02 from '@/assets/images/ig_02.jpg'
import ig03 from '@/assets/images/ig_03.jpg'
import ig04 from '@/assets/images/ig_04.jpg'
import ig05 from '@/assets/images/ig_05.jpg'
import ig06 from '@/assets/images/ig_06.jpg'
import Image from 'next/image'

export default function Instagram({dict}) {
  return (
    <section id="gallery-3" className="pt-8 gallery-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title">
              <h3 className="h3-lg color--black">
                {dict.follow}: <a href="https://www.instagram.com/leenwhispersbeauty/" target="_blank">@leenwhispersbeauty</a>
              </h3>
            </div>
          </div>
        </div>
        {/* IMAGES WRAPPER */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6">
          {/* IMAGE #1 */}
          <div className="col">
            <div id="img-3-1" className="gallery-image">
              <div className="hover-overlay">
                {/* Image */}
                <Image
                  className="img-fluid"
                  src={ig01}
                  alt="gallery-image"
                />
                <div className="item-overlay" />
                {/* Image Zoom */}
                <div className="image-data">
                  <div className="gallery-link ico-40 color--white">
                    <a
                      target="_blank"
                      className="image-link"
                      href="https://www.instagram.com/leenwhispersbeauty/"
                    >
                      <span className="flaticon-visibility" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE #2 */}
          <div className="col">
            <div id="img-3-1" className="gallery-image">
              <div className="hover-overlay">
                {/* Image */}
                <Image
                  className="img-fluid"
                  src={ig02}
                  alt="gallery-image"
                  target="_blank"
                />
                <div className="item-overlay" />
                {/* Image Zoom */}
                <div className="image-data">
                  <div className="gallery-link ico-40 color--white">
                    <a
                      className="image-link"
                      href="https://www.instagram.com/leenwhispersbeauty/"
                    >
                      <span className="flaticon-visibility" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE #3 */}
          <div className="col">
            <div id="img-3-1" className="gallery-image">
              <div className="hover-overlay">
                {/* Image */}
                <Image
                  className="img-fluid"
                  src={ig03}
                  alt="gallery-image"
                />
                <div className="item-overlay" />
                {/* Image Zoom */}
                <div className="image-data">
                  <div className="gallery-link ico-40 color--white">
                    <a
                      className="image-link"
                      href="https://www.instagram.com/leenwhispersbeauty/"
                      target="_blank"
                    >
                      <span className="flaticon-visibility" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE #4 */}
          <div className="col">
            <div id="img-3-1" className="gallery-image">
              <div className="hover-overlay">
                {/* Image */}
                <Image
                  className="img-fluid"
                  src={ig04}
                  alt="gallery-image"
                />
                <div className="item-overlay" />
                {/* Image Zoom */}
                <div className="image-data">
                  <div className="gallery-link ico-40 color--white">
                    <a
                      className="image-link"
                      href="https://www.instagram.com/leenwhispersbeauty/"
                      target="_blank"
                    >
                      <span className="flaticon-visibility" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE #5 */}
          <div className="col">
            <div id="img-3-1" className="gallery-image">
              <div className="hover-overlay">
                {/* Image */}
                <Image
                  className="img-fluid"
                  src={ig05}
                  alt="gallery-image"
                />
                <div className="item-overlay" />
                {/* Image Zoom */}
                <div className="image-data">
                  <div className="gallery-link ico-40 color--white">
                    <a
                      className="image-link"
                      href="https://www.instagram.com/leenwhispersbeauty/"
                      target="_blank"
                    >
                      <span className="flaticon-visibility" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE #6 */}
          <div className="col">
            <div id="img-3-1" className="gallery-image">
              <div className="hover-overlay">
                {/* Image */}
                <Image
                  className="img-fluid"
                  src={ig06}
                  alt="gallery-image"
                />
                <div className="item-overlay" />
                {/* Image Zoom */}
                <div className="image-data">
                  <div className="gallery-link ico-40 color--white">
                    <a
                      className="image-link"
                      href="https://www.instagram.com/leenwhispersbeauty/"
                      target="_blank"
                    >
                      <span className="flaticon-visibility" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END IMAGES WRAPPER */}
      </div>
      {/* End container */}
    </section>
  )
}
