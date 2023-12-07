"use client"
import { db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Appointments({userName, identifier}) {

  const [app, setApp] = useState()

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
      console.log("appointments",appointments)
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
      <br />
        <h2 className="text-center">Your Appointments</h2>
        <br />
        <ul>

        {app?.map((a) => (
          <li>
            <p>
            {a.service.description} by {a.staff} 
            </p>
            <p>
              {a.date} at {a.time} - {a.orderId ? "Paid" : "Not Paid"}
            </p>
            <hr />
        </li>
        ))  
      }
      </ul>
    </div>
  )
}
