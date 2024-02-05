'use client'

import { PayPalButtons } from '@paypal/react-paypal-js'
import React, { useEffect } from 'react'

export default function PayWithPaypal({srv}) {
  let description = ''
  let price = ''

  useEffect(() => {
    description = srv.description;
    price = srv.price;
  }, [srv])
  
  const handleCreateOrder = (data, actions) => {
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
        
        handleApprove(data.orderID);
        }}
        onError={(err) => {
        console.error("PayPal Checkout onError", err);
        }}
    />
  )
}
