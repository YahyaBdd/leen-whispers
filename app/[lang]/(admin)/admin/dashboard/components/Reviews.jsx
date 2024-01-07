'use client'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { db } from "@/firebase";
import { deleteDoc, doc } from "firebase/firestore";

const handleDelete = async (reviewId) => {
  try {
    await deleteDoc(doc(db, "reviews", reviewId));
    alert('Review deleted successfully');
    window.location.reload();
  } catch (error) {
    alert('Error deleting Review:', error);
    window.location.reload();
  }
};

export default function Reviews({reviews}) {

  return (
    <div>
      <h3 className="text-xl font-bold tracking-tight py-6 pl-10">Reviews list</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client</TableHead>
            <TableHead>Contact</TableHead> 
            <TableHead>Service</TableHead>
            <TableHead>Staff</TableHead>
            <TableHead>Review</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews && Object.keys(reviews).map((reviewId, index) => {
            const fullName = `${reviews[reviewId].firstName} ${reviews[reviewId].lastName}`;

            return (
              <TableRow key={index}>
              <TableCell>{fullName}</TableCell>
              <TableCell>{reviews[reviewId].email}</TableCell>
              <TableCell>{reviews[reviewId].service.description}</TableCell>
              <TableCell>{reviews[reviewId].staff}</TableCell>
              <TableCell>{reviews[reviewId].review}</TableCell>
              <TableCell className="text-left">
                <Button className="bg-red-600 text-white" variant="outline" onClick={() => handleDelete(reviewId)}>Delete</Button>
              </TableCell>  
            </TableRow>
            )
            })}
        </TableBody>
      </Table>
    </div>
  )
}