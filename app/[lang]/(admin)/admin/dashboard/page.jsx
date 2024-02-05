'use client'

import React, {useEffect } from 'react'
import Dashboard from './components/Dashboard'

function page() {

  let admin =''
  let timeStamp = ''

  useEffect(() => {
    admin = localStorage.getItem('admin')
    timeStamp = localStorage.getItem('timeStamp') > Date.now()- 3600000
  }, [])

  return (
    <>
      <Dashboard admin={admin} timeStamp={timeStamp}/>
    </>
  )
}

export default page