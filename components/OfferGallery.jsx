'use client'
import Script from 'next/script'
import React from 'react'

import ig01 from '@/assets/images/offers/offer_1.png'
import ig02 from '@/assets/images/offers/offer_2.png'
import ig03 from '@/assets/images/offers/offer_3.png'
import ig04 from '@/assets/images/offers/offer_4.png'
import ig05 from '@/assets/images/offers/offer_5.png'
import ig06 from '@/assets/images/offers/offer_6.png'
import Image from 'next/image'

function OfferGallery() {
  return (
    <div>
        <Script src="/js/swiper-bundle.min.js" strategy='afterInteractive' onLoad={() => {
          var swiper = new Swiper(".mySwiper", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            });
            console.log('hello')
        }}/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <div className="swiper mySwiper" style={{width:'80vw'}}>
            <div className="swiper-wrapper" style={{alignItems: 'center' }}>
            <div className="swiper-slide" style={{display:'flex',justifyContent:'center'}}>
                <Image
                  className="img-fluid"
                  src={ig01}
                  alt="gallery-image"
                  width={400}
                  height={400}
                />
            </div>
            <div className="swiper-slide" style={{display:'flex',justifyContent:'center'}}>
                <Image
                  className="img-fluid"
                  src={ig02}
                  alt="gallery-image"
                  width={400}
                  height={400}
                /></div>
            <div className="swiper-slide" style={{display:'flex',justifyContent:'center'}}>
                <Image
                  className="img-fluid"
                  src={ig03}
                  alt="gallery-image"
                  width={400}
                  height={400}
                />
            </div>
            <div className="swiper-slide" style={{display:'flex',justifyContent:'center'}}>
            <Image
                  className="img-fluid"
                  src={ig04}
                  alt="gallery-image"
                  width={400}
                  height={400}
                />
            </div>
            <div className="swiper-slide" style={{display:'flex',justifyContent:'center'}}>
            <Image
                  className="img-fluid"
                  src={ig05}
                  alt="gallery-image"
                  width={400}
                  height={400}
                />
            </div>
            <div className="swiper-slide" style={{display:'flex',justifyContent:'center'}}>
            <Image
                  className="img-fluid"
                  src={ig06}
                  alt="gallery-image"
                  width={400}
                  height={400}
                />
            </div>
            </div>
            <div className="swiper-button-next" style={{color:"#808080"}}></div>
            <div className="swiper-button-prev" style={{color:"#808080"}}></div>
        </div>
    </div>
  )
}

export default OfferGallery