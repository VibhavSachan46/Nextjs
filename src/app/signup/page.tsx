"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { userAgent } from 'next/server'
import toast from 'react-hot-toast'

const signup = () => {

  const router = useRouter()

  const [buttonDisabled, setButtonDisabled] = React.useState(false)

  const [loading, setLoading] = useState(false)

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: ""
  })

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }

  }, [user])

  const onSignup = async () => {
    try {
      setLoading(true)
      console.log("Signup started");
      
      const response = await axios.post("/api/users/signup", user)
      console.log("respponse is ",response.data);
      router.push("/login")
    } catch (error: any) {
      console.log("Signup failed")
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <h1 className='text-3xl'>Sign Up</h1>
      <label htmlFor='username'>
        Username
      </label>
      <input
        className='border border-black p-2 rounded-2xl'
        id='username'
        type='text'
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder='user name'
      />

      <label htmlFor='email'>
        email
      </label>
      <input
        className='border border-black p-2 rounded-2xl'
        id='email'
        type='text'
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder='email'
      />

      <label htmlFor='password'>
        password
      </label>
      <input
        className='border border-black p-2 rounded-2xl'
        id='password'
        type='text'
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder='password'
      />

      <button
        className='border border-gray-300 bg-blue-400 p-2 rounded-3xl'
        onClick={onSignup}
      >
        {
          buttonDisabled ? "No signup" : " Signup"
        }
      </button>

      <Link href="/login">ALready signup? Login</Link>
    </div>
  )
}

export default signup