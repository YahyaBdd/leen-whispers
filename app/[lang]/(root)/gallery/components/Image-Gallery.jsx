import Image from "next/image";
import Image1 from '@/assets/images/ig/ig_01.jpg';
import Image2 from "@/assets/images/ig/ig_02.jpg";
import Image3 from "@/assets/images/model-06.jpeg";
import Image4 from "@/assets/images/ig/ig_04.jpg";
import Image5 from "@/assets/images/ig/ig_05.jpg";
import Image6 from "@/assets/images/ig/ig_06.jpg";
import Image7 from "@/assets/images/model-04.jpeg";
import Image8 from "@/assets/images/ig_01.jpg";
import Image9 from "@/assets/images/ig/ig_09.jpg";

export default function ImageGallery({lang}) {
  return (
    <div id="gallery-1" className="gallery-section division">
      <div className="container">
        {/* IMAGES WRAPPER */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
          {/* IMAGE #1 */}
          <div className="col">
            <div className="gallery-image">
              <div className="hover-overlay">
                {/* Image */}
                <Image
                  className="img-fluid"
                  src={Image1}
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
          {/* IMAGE #2 */}
          <div className="col">
            <div className="gallery-image">
              <div className="hover-overlay">
                {/* Image */}
                <Image
                  className="img-fluid"
                  src={Image2}
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
          <div className="col">
            <div className="gallery-image">
              <div className="hover-overlay">
                {/* Image */}
                <Image
                  className="img-fluid"
                  src={Image3}
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
            <div className="gallery-image">
              <div className="hover-overlay">
                {/* Image */}
                <Image
                  className="img-fluid"
                  src={Image4}
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
          <div className="col">
            <div className="gallery-image">
              <div className="hover-overlay">
                {/* Image */}
                <Image
                  className="img-fluid"
                  src={Image5}
                  alt="gallery-image"
                />
                <div className="item-overlay" />
                {/* Image Zoom */}
                <div className="image-data">
                  <div className="gallery-link ico-40 color--white">
                    <a
                      className="video-popup2"
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
            <div className="gallery-image">
              <div className="hover-overlay">
                {/* Image */}
                <Image
                  className="img-fluid"
                  src={Image6}
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
          {/* IMAGE #7 */}
          <div className="col">
            <div className="gallery-image">
              <div className="hover-overlay">
                {/* Image */}
                <Image
                  className="img-fluid"
                  src={Image7}
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
          {/* IMAGE #8 */}
          <div className="col">
            <div className="gallery-image">
              <div className="hover-overlay">
                {/* Image */}
                <Image
                  className="img-fluid"
                  src={Image8}
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
          {/* IMAGE #9 */}
          <div className="col">
            <div className="gallery-image">
              <div className="hover-overlay">
                {/* Image */}
                <Image
                  className="img-fluid"
                  src={Image9}
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
        </div>{" "}
        {/* END IMAGES WRAPPER */}
        {/* INSTAGRAM LINK */}
        <div className="row">
          <div className="col">
            <div className="more-btn">
              <a href="https://www.instagram.com/leenwhispersbeauty/" target="_blank" className="btn btn--tra-black hover--black">
                {lang === 'en' ? "Visit Our Instagram" : "زوروا حسابنا على الإنستجرام"}
              </a>
            </div>
          </div>
        </div>{" "}
        {/* END BUTTON */}
      </div>{" "}
      {/* End container */}
    </div>
  );
}
