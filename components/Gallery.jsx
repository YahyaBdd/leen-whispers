import Image from 'next/image'
import woman_04 from "@/assets/images/gallery/woman_04.jpg";
import woman_01 from "@/assets/images/gallery/woman_01.jpg";
import woman_03 from "@/assets/images/gallery/woman_03.jpg";
import woman_02 from "@/assets/images/gallery/woman_02.jpg";
import woman_05 from "@/assets/images/gallery/woman_05.jpg";
import woman_06 from "@/assets/images/gallery/woman_06.jpg";

export default function Gallery({dict}) {
  return (
      <div id="gallery-4" className="py-8 gallery-section division">
        <div className="container-fluid">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="section-title text-center mb-6">
                <span className="section-id">{dict.sectionId}</span>
                <h2 className="h2-title">{dict.title}</h2>
              </div>
            </div>
          </div>
          {/* GALLERY-4 WRAPPER */}
          <div className="gallery-4-wrapper">
            <div className="row">
              {/* IMAGE #1 */}
              <div className="col-md-6 col-lg-2">
                <div id="img-4-1" className="gallery-image">
                  <div className="hover-overlay">
                    {/* Image */}
                    <Image
                        className="img-fluid"
                        src={woman_01}
                        alt="gallery-image"
                    />
                    <div className="item-overlay" />
                    {/* Image Zoom */}
                    <div className="image-data">
                      <div className="gallery-link ico-30 color--white">
                        <a className="image-link" href="https://www.instagram.com/leenwhispersbeauty/" target="_blank">
                          <span className="flaticon-visibility" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* IMAGE #2 */}
              <div className="col-md-6 col-lg-5">
                <div id="img-4-2" className="gallery-image">
                  <div className="hover-overlay">
                    {/* Image */}
                    <Image
                        className="img-fluid"
                        src={woman_04}
                        alt="gallery-image"
                    />
                    <div className="item-overlay" />
                    {/* Image Zoom */}
                    <div className="image-data">
                      <div className="gallery-link ico-40 color--white">
                        <a className="image-link" href="https://www.instagram.com/leenwhispersbeauty/" target="_blank">
                          <span className="flaticon-visibility" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* IMAGE #3 */}
              <div className="col-lg-3">
                <div id="img-4-3" className="gallery-image">
                  <div className="hover-overlay">
                    {/* Image */}
                    <Image
                        className="img-fluid"
                        src={woman_03}
                        alt="gallery-image"
                    />
                    <div className="item-overlay" />
                    {/* Image Zoom */}
                    <div className="image-data">
                      <div className="gallery-link ico-40 color--white">
                        <a className="image-link" href="https://www.instagram.com/leenwhispersbeauty/" target="_blank">
                          <span className="flaticon-visibility" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* IMAGE #4 */}
                <div id="img-4-4" className="gallery-image">
                  <div className="hover-overlay">
                    {/* Image */}
                    <Image
                        className="img-fluid"
                        src={woman_02}
                        alt="gallery-image"
                    />
                    <div className="item-overlay" />
                    {/* Image Zoom */}
                    <div className="image-data">
                      <div className="gallery-link ico-40 color--white">
                        <a className="image-link" href="https://www.instagram.com/leenwhispersbeauty/" target="_blank">
                          <span className="flaticon-visibility" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* IMAGE #5 */}
              <div className="col-lg-2">
                <div id="img-4-5" className="gallery-image">
                  <div className="hover-overlay">
                    {/* Image */}
                    <Image
                        className="img-fluid"
                        src={woman_05}
                        alt="gallery-image"
                    />
                    <div className="item-overlay" />
                    {/* Image Zoom */}
                    <div className="image-data">
                      <div className="gallery-link ico-30 color--white">
                        <a className="image-link" href="https://www.instagram.com/leenwhispersbeauty/" target="_blank">
                          <span className="flaticon-visibility" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* IMAGE #6 */}
                <div id="img-4-6" className="gallery-image">
                  <div className="hover-overlay">
                    {/* Image */}
                    <Image
                        className="img-fluid"
                        src={woman_06}
                        alt="gallery-image"
                    />
                    <div className="item-overlay" />
                    {/* Image Zoom */}
                    <div className="image-data">
                      <div className="gallery-link ico-30 color--white">
                        <a className="image-link" href="https://www.instagram.com/leenwhispersbeauty/" target="_blank">
                          <span className="flaticon-visibility" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* END GALLERY-4 WRAPPER */}
          {/* BUTTON */}
          <div className="row">
            <div className="col">
              <div className="more-btn">
                <a
                    href="/gallery"
                    className="btn btn--tra-black hover--black"
                >
                 {dict.buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End container */}
      </div>
  );
}
