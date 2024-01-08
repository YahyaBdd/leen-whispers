"use client"
import React from 'react'
import { utils, writeFile } from 'xlsx';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from '@/components/ui/button';

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
        <div className="flex flex-col sm:flex-row justify-between">
      <h3 className="text-xl font-bold tracking-tight py-6 pl-10 sm:py-3">Clients list</h3>
      <Button variant="outline" onClick={downloadUsers} className="bg-green-600 text-white p-3 m-2">Download Clients</Button>
      </div>
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Full Name</TableHead>
            <TableHead className="text-center">uid</TableHead>
            <TableHead className="text-center">Phone Number</TableHead>
            <TableHead className="text-center">Email</TableHead>
          </TableRow>
        </TableHeader>
        {/* <ScrollArea> */}
        <TableBody>
          {users &&
            Object.keys(users).map((user, index) => (
              <TableRow key={index}>
                <TableCell className="text-center">{users[user].fullName}</TableCell>
                <TableCell className="text-center">{users[user].uid}</TableCell>
                <TableCell className="text-center">{users[user].phoneNumber ? `+${users[user].phoneNumber}` : '--'}</TableCell>
                <TableCell className="text-center">{users[user].email || '--'}</TableCell>
              </TableRow>
            ))}
        </TableBody>
        {/* </ScrollArea> */}
      </Table>
    </div>
  )
}

export default Clients