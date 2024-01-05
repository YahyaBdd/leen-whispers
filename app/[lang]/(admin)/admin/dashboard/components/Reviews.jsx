'use client'
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Reviews({reviews}) {

  return (
    <div>
      <h1>Offers</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>comment</TableHead>
            <TableHead>member</TableHead>
            <TableHead>rating</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews && Object.keys(reviews).map((reviewId, index) => (
            <TableRow key={index}>
              <TableCell>{reviews[reviewId].comment}</TableCell>
              <TableCell>{reviews[reviewId].member}</TableCell>
              <TableCell>{reviews[reviewId].rating}</TableCell>
              <TableCell className="text-left">
                <Button variant="outline" onClick={() => handleDelete(reviewId)}>Delete</Button>
              </TableCell>  
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}