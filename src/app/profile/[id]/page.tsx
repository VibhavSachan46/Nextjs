import React from 'react'
import { parseArgs } from 'util'

const UserProfile = ({ params }: any) => {
    return (
        <div className='flex flex-col gap-4 justify-center items-center'>
            <h1>Profile</h1>
            <hr />
            <p className='text-4xl'>Profile page</p>
            <span className='p-2 text-3xl bg-blue-600 rounded-2xl'> {params.id}</span>
        </div>
    )
}

export default UserProfile