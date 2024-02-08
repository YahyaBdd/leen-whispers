'use client'

import { PayPalButtons } from '@paypal/react-paypal-js'
import React, { useEffect } from 'react'

export default function PayWithPaypal({srv}) {
  let description = ''
  let price = ''

  useEffect(() => {
    console.log("****** PayPal Checkout useEffect ******");
    console.log("****** Before setting up the variables ******, description: ", description, ", price: ", price);
    description = srv.description;
    price = srv.price;
    console.log("****** After setting up the variables ******, description: ", description, ", price: ", price);
  }, [srv])
  
  const handleCreateOrder = (data, actions) => {
    console.log("PayPal Checkout handleCreateOrder", "description: ", description, "price: ", price);
    return actions.order.create({
    purchase_units: [
    {
        description:srv.description,
        amount: {
        value: srv.price,
        }
    }
    ]
});
  }
  return (
    <PayPalButtons 
        style = {{disableMaxWidth: true}}
        createOrder={handleCreateOrder}
        onApprove={async (data, actions) => {
        const order = await actions.order.capture(); 
        console.log("order", order);
        
        handleApprove(data.orderID);
        }}
        onError={(err) => {
        console.error("PayPal Checkout onError", err);
        }}
    />
  )
}
