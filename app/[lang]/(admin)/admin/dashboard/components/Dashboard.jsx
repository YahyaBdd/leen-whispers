import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Clients from "./Clients";

import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase';
import Appointments from "./Appointments";
import Offers from "./Offers";
import Reviews from "./Reviews";

const getUsers = async () => {
  const users = {};
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
      users[doc.id] = doc.data();;
  });
  return users;
}

const getAppointments = async () => {
  const appointments = {};
  const querySnapshot = await getDocs(collection(db, "appointments"));
  querySnapshot.forEach((doc) => {
      appointments[doc.id] = doc.data();;
  });
  return appointments;
}

const getOffers = async () => {
  const offers = {};
  const querySnapshot = await getDocs(collection(db, "offers"));
  querySnapshot.forEach((doc) => {
    offers[doc.id] = doc.data();;
  });
  return offers;
}

const getReviews = async () => {
  const reviews = {};
  const querySnapshot = await getDocs(collection(db, "reviews"));
  querySnapshot.forEach((doc) => {
    reviews[doc.id] = doc.data();;
  });
  return reviews;
}

export default async function Dashboard({ admin, timeStamp}) {

  const users = await getUsers();
  const appointments = await getAppointments();
  const offers = await getOffers();
  const reviews = await getReviews();

  return (
    <>
    <div className="container mx-auto px-8">
      <h1 className="text-3xl font-bold tracking-tight py-6">Admin Dashboard</h1>
      <Tabs defaultValue="clients" className="w-full">
          <TabsList className="flex border-b border-gray-200">
              <TabsTrigger value="appointments" className="px-4 py-2 w-1/4 font-medium text-gray-700 hover:text-blue-500">Appointments</TabsTrigger>
              <TabsTrigger value="clients" className="px-4 py-2 w-1/4 font-medium text-gray-700 hover:text-blue-500">Clients</TabsTrigger>
              <TabsTrigger value="offers" className="px-4 py-2 w-1/4 font-medium text-gray-700 hover:text-blue-500">Offers</TabsTrigger>
              <TabsTrigger value="evaluations" className="px-4 py-2 w-1/4 font-medium text-gray-700 hover:text-blue-500">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="appointments"><Appointments appointments={appointments}/></TabsContent>
          <TabsContent value="clients"><Clients users={users}/></TabsContent>
          <TabsContent value="offers"><Offers offers={offers}/></TabsContent>
          <TabsContent value="evaluations"><Reviews reviews={reviews} /></TabsContent>
      </Tabs>
      </div>
    </>
  )
}
