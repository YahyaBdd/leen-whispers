"use client"
import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase';
import { utils } from 'xlsx';
import FileSaver from 'file-saver';

export default async function index() {

    const getUsers = async () => {
        const users = {};
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            users[doc.id] = doc.data();
            // console.log(doc.id, " => ", doc.data());
        });
        return users;
    }

    const users = await getUsers();

    const downloadUsers = () => {
        const workbook = utils.book_new();

        Object.keys(users).forEach(key => {
            const sheet = workbook.addWorksheet(key);
            const dataForSheet = users[key];

            sheet.addRow([dataForSheet.phoneNumber?dataForSheet.phoneNumber:dataForSheet.email, dataForSheet.fullName, dataForSheet.pwd, dataForSheet.uid]);
        });

        const excelFile = workbook.write();

        FileSaver.saveAs(new Blob([excelFile], {type: 'application/octet-stream'}), 'users.xlsx');
    }
  return (
    <div style={{paddingTop:"500px"}}>
        {users && Object.keys(users).map((user, index) => (
            <>
                <div key={index}>{users[user].fullName}</div>
                <p>{users[user].phoneNumber ? users[user].phoneNumber : users[user].email}</p>
            </>
            )
        )
        }
        <button onClick={downloadUsers}>Download</button>
    </div>
  )
}
