"use client"

import React, { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation'
import Link from 'next/link';


const page = () => {

  const router = useRouter()
  const [userDetails, setUserDetails] = useState("")

  async function getProfile() {
    try {
      const response = await axios.get("/api/users/me")
      setUserDetails(response.data.data._id)
      console.log(response.data.data._id)
    } catch (error) {
      console.log(error)
    }
  }

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
        onClick={getProfile}
      >
        Get Profile
      </button>

      {
        userDetails ? <Link href={`/profile/${userDetails}`}> {userDetails}</Link> : "No user click button abopve to get user details"
      }

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