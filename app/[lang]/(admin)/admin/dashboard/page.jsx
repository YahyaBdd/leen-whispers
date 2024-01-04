import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Clients from "./components/Clients";

import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase';
import Appointments from "./components/Appointments";
import Offers from "./components/Offers";
import Reviews from "./components/Reviews";

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


export default async function DashboardPage() {

  const users = await getUsers();
  const appointments = await getAppointments();
  const offers = await getOffers();
  const reviews = await getReviews();

  return (
    <>

    <h1> Dashboard </h1>

    <Tabs defaultValue="clients" className="w-screen">
  <TabsList className="w-screen">
    <TabsTrigger value="appointments">Appointments</TabsTrigger>
    <TabsTrigger value="clients">Clients</TabsTrigger>
    <TabsTrigger value="offers">Offers</TabsTrigger>
    <TabsTrigger value="evaluations">Reviews</TabsTrigger>
  </TabsList>
  <TabsContent value="appointments"><Appointments appointments={appointments}/></TabsContent>
  <TabsContent value="clients"><Clients users={users}/></TabsContent>
  <TabsContent value="offers"><Offers offers={offers}/></TabsContent>
  <TabsContent value="evaluations"><Reviews reviews={reviews} /></TabsContent>
</Tabs>
    </>
  )
}
