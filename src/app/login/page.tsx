"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { userAgent } from 'next/server'
import toast from 'react-hot-toast'

const Loginpage = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    })

    const onLogin = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/users/login", user)
            console.log("response is ", response);
            toast.success("Login success")
            router.push("/profile")
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <h1 className='text-3xl'>
                {loading ? "Processing":"Log in"}
            </h1>

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
                onClick={onLogin}
            >
                Log in
            </button>

            <Link href="/signup">Dont have account? Sign up</Link>
        </div>
    )
}

export default Loginpage