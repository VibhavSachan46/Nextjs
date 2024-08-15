"use client"

import React from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation'


const page = () => {

  const router = useRouter()

  async function logout() {
    try {
      await axios.get("/api/users/logout")
      alert("Logged out");
      router.push('/login')
    } catch (error: any) {
      console.log(error)
    }
  }
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>

      <button
        className='mt-4 bg-blue-400 py-2 px-4 rounded'
        onClick={logout}
      >
        Logout
      </button>
    </div>

  )
}

export default page