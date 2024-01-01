"use client"
import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase';
import { utils, writeFile } from 'xlsx';
import FileSaver from 'file-saver';

export default async function index() {

    const getUsers = async () => {
        const users = {};
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            users[doc.id] = doc.data();;
        });
        return users;
    }

    const users = await getUsers();

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
    <div className="container" style={{paddingTop:"100px"}}>
        <h1 className='text-center'>Users List</h1>
        <br/>
        <br/>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>uid</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {users && Object.keys(users).map((user, index) => (
                <tr key={index}>
                    <td>{users[user].fullName}</td>
                    <td>{users[user].uid}</td>
                    <td>{users[user].phoneNumber || ""}</td>
                    <td>{users[user].email || ""}</td>
                </tr>
                ))
            }
            </tbody>
        </table>
        
        <button className="btn btn--tra-black hover--black submit" onClick={downloadUsers}>Download</button>
    </div>
  )
}
