"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase"

const getAdmins = async () => {
    const admins = {};
    const querySnapshot = await getDocs(collection(db, "admin_credentials"));
    querySnapshot.forEach((doc) => {
        admins[doc.id] = doc.data();;
    }
    );
    return admins;
}
  

export function UserAuthForm({ className, ...props }) {

  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [pwd, setPwd] = useState('')


  async function onSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    const admins = await getAdmins();

    if(admins.admin.username === username && admins.admin.password === pwd) {
        localStorage.setItem('admin', true)
        localStorage.setItem('timeStamp', Date.now())
        window.location.href = "/admin/dashboard"
    } else {
        alert("Wrong credentials")
    }

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="username">
              Username
            </Label>
            <Input
              id="username"
              placeholder="username"
              type="text"
              autoCapitalize="none"
              disabled={isLoading}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="pwd">
              Password
            </Label>
            <Input
              id="pwd"
              placeholder="password"
              type="password"
              disabled={isLoading}
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <Button disabled={isLoading}>
            Access Dashboard
          </Button>
        </div>
      </form>
    </div>
  )
}