'use client'
import { useState } from 'react'

const VideoPopup = () => {
    const [showModal, setShowModal] = useState(true);

    const handleClose = () => {
      setShowModal(false);
    };

  return (
    <>
        <style>
        {`
        .video-modal {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 99999;
          }
          
          .video-modal-content {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.5) !important;
            padding: 20px;
            border-radius: 5px;
          }
          
          .close {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
          }
        `}
        </style>
        {showModal && ( <div className="video-modal" >
        <div className="video-modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <iframe
            title="video"
            height="560"
            width="315"
            src="https://www.youtube.com/embed/MmPIdyilU-E?autoplay=1&controls=0&loop=1"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            ></iframe>
        </div>
        </div>
        )}
    </>
  );
};


export default VideoPopup;