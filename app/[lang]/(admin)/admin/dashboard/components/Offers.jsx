'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { db } from "@/firebase"
import { deleteDoc, doc, setDoc } from "firebase/firestore"
import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
  
const handleSubmit = async (offerType, offerTitle, offerDescription, clientId, discount) => {
  try {
    const offer = {
      offerType,
      offerTitle,
      offerDescription,
      clientId,
      discount,
    };

    if(clientId) {
      await setDoc(doc(db, "offers", clientId), offer);
    } else {
      await setDoc(doc(db, "offers", offerTitle), offer);
    }

    alert('Offer created successfully');
    window.location.reload();
  } catch (error) {
    alert('Error creating offer:', error);
    window.location.reload();
  }
};

const handleDelete = async (offerId) => {
  try {
    await deleteDoc(doc(db, "offers", offerId));
    alert('Offer deleted successfully');
    window.location.reload();
  } catch (error) {
    alert('Error deleting offer:', error);
    window.location.reload();
  }
};

function Offers({offers}) {

  const [offerType, setOfferType] = useState('general')
  const [offerTitle, setOfferTitle] = useState('');
  const [offerDescription, setOfferDescription] = useState('');
  const [clientId, setClientId] = useState('');
  const [discount, setDiscount] = useState('');

  return (
    <div>
      <h1>Offers</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Offer Type</TableHead>
            <TableHead>Offer Title</TableHead>
            <TableHead>Offer Description</TableHead>
            <TableHead>Client Identifier</TableHead>
            <TableHead>Discount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {offers && Object.keys(offers).map((offerId, index) => (
            <TableRow key={index}>
              <TableCell>{offers[offerId].offerType}</TableCell>
              <TableCell>{offers[offerId].offerTitle}</TableCell>
              <TableCell>{offers[offerId].offerDescription}</TableCell>
              {offers[offerId].clientId ? (
                <>
                <TableCell>{offers[offerId].clientId}</TableCell>
                <TableCell>{offers[offerId].discount}%</TableCell>
                </>
              ) : (
                <>
                <TableCell>--</TableCell>
                <TableCell>--</TableCell>
                </>
              )}
              <TableCell className="text-left">
                <Button variant="outline" onClick={() => handleDelete(offerId)}>Delete</Button>
              </TableCell>  
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">New Offer</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Offer</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Offer title
              </Label>
              <Input id="title" className="col-span-3" placeholder='Offer Title' onChange={(e) => setOfferTitle(e.target.value)} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                  Offer description
              </Label>
              <Input id="description" placeholder="Offer description" className="col-span-3" onChange={(e) => setOfferDescription(e.target.value)}/>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="type" className="text-right">
                  Offer Type
              </Label> 
              <Select id="type" onValueChange={(value) => setOfferType(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Offer Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Offer</SelectItem>
                  <SelectItem value="client">Assign to a client</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {offerType === 'client' && (
              <>
              <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="client_id" className="text-right">
                      Client Identifier
                  </Label>
                  <Input id="client_id" placeholder='Client email/phone number' className="col-span-3" onChange={(e) => setClientId(e.target.value)}/>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="discount" className="text-right">
                      Discount percentage
                  </Label>
                  <Input id="discount" placeholder='Discount percentage' className="col-span-3" onChange={(e) => setDiscount(e.target.value)}/>
              </div>
              </>
            )}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" onClick={() => handleSubmit(offerType, offerTitle, offerDescription, clientId, discount)}>Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
    </Dialog>
    </div>
  )
}

export default Offers