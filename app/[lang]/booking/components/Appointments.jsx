"use client"
import { db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

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
      <Collapsible>
      <div className="flex items-center justify-between space-x-4 px-4">
        <p>Your Appointments</p>
        <CollapsibleTrigger><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12z"/></g></svg></CollapsibleTrigger>
      </div>
      <br />
      <div className="space-x-4 px-4">
      <CollapsibleContent className="space-y-2">
      {app?.map((a) => (
          <div className="rounded-md border px-4 py-2 text-sm shadow-sm">
            <p>
              {a.service.description} by {a.staff} 
            </p>
            <p>
              {a.date} at {a.time} - {a.orderId ? "Paid" : "Not Paid"}
            </p>
          </div>
          ))  
        }
        </CollapsibleContent>
      </div>  
      </Collapsible>
    </div>
  )
}
