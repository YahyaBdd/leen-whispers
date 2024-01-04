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