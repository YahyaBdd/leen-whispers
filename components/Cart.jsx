'use client'

import { ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { getCategoryName, getCategoryIcon } from '@/constants';

function Cart({mode}) {
  const [show, setShow] = useState(false);
  const [iconColor, setIconColor] = useState(localStorage.getItem("theme") === "light" ? '#353f4f' : '#ffffff');

  const theme = localStorage.getItem("theme");
  const items = JSON.parse(localStorage.getItem("appointment")) || {};
  console.log(items);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleScroll = () => {
    console.log("scroll");
    const scrollPosition = window.scrollY;
    const threshold = 100;

    // Change color based on scroll position
    if (scrollPosition > threshold && theme === "light") {
      setIconColor('#353f4f'); // Dark theme color
      console.log("dark");
    }else if (scrollPosition <= threshold && theme === "light") {
      setIconColor('#ffffff');
    } 
  }

  // Add scroll event listener when the component mounts
  // and remove it when the component unmounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // No dependencies to avoid eslint warnings

  useEffect(() => {
    setIconColor(mode === "light" ? '#353f4f' : '#ffffff');
  }
  , [mode]);

  return (
    <>
      <a onClick={handleShow} style={{margin:'0px'}}>
        <ShoppingBag color={iconColor}/>
      </a>

      <Offcanvas show={show} onHide={handleClose}  data-bs-theme={theme === "dark" ? "dark" : "light"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Reservations</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {Object.keys(items).length ? (
          Object.keys(items).map((key) => (
            <Card>
              <Card.Body>
                <div style={{display:"flex"}}>
              <div className="sbox-ico ico-65" style={{display:'flex' , paddingRight: '15px' ,alignItems: 'center'}}>
                <span className={getCategoryIcon(getCategoryName(items[key].service.description))} />
              </div>
              <div>

              <p>
                {items[key].service.description} by {items[key].staff}
              </p>
              <p>
                {items[key].date} at {items[key].time} - In Cart
              </p>
              </div>
              </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <Card>
            <Card.Body>No Reservations Available</Card.Body>
          </Card>
        )}
        
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;