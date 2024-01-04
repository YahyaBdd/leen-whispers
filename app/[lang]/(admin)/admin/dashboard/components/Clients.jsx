"use client"
import React from 'react'
import { utils, writeFile } from 'xlsx';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

function Clients({users}) {

    const downloadUsers = () => {

        const data = Object.values(users)
        data.forEach((user, index) => {
            if(user.pwd) {
                delete user.pwd;
            }
        });

        const workbook = utils.book_new();
        
        const ws = utils.json_to_sheet(data);

        utils.book_append_sheet(workbook, ws, "Users");
        writeFile(workbook, "users.xlsx");
    }

  return (
    <div>
              <Table>
        <TableCaption>A list of your recent users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>uid</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users &&
            Object.keys(users).map((user, index) => (
              <TableRow key={index}>
                <TableCell>{users[user].fullName}</TableCell>
                <TableCell>{users[user].uid}</TableCell>
                <TableCell>{users[user].phoneNumber || ''}</TableCell>
                <TableCell>{users[user].email || ''}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Clients