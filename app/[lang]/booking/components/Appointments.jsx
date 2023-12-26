"use client"
import { db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import AccordionCard from "@/components/AccordionCard";

export default function Appointments({userName, identifier}) {

  const [app, setApp] = useState({})

  async function getAppointments(identifier) {
    try {
      let q;
      if(identifier.includes('@')) {
        q = query(collection(db, "appointments"), where("email", "==", identifier));
      } else {
        q = query(collection(db, "appointments"), where("phone", "==", identifier));
      }
      const querySnapshot = await getDocs(q);
      const appointments = [];
      querySnapshot.forEach((doc) => {
        appointments.push(doc.data());
      });
      setApp(appointments)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => { 
    getAppointments(identifier)
  }, [])
    
  return (
    <div className="container">
      <AccordionCard title="Your Appointments" data={app} emptyMsg="No appointments available."/>
    </div>
  )
}
