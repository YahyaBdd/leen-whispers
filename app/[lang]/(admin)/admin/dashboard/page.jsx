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
    {/* <div className="container mx-auto px-4 w-screen"> */}
    {/* <div className="container mx-auto px-4 w-screen"> */}
        <Dashboard admin={admin} timeStamp={timeStamp}/>
    {/* </div>   */}
    {/* </div>   */}
    </>
  )
}

export default page