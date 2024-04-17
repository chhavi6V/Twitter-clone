import React from 'react';
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

export default function Tweet({user}) {
    return (
        <div className='border-b border-gray-200'>
            <div>
                <div className='flex p-4'>
                    <Avatar name={user.name} size="40" round={true} />
                    <div className=' ml-2 w-full'>
                        <div className='flex items-center'>
                            <h1 className='font-bold'>{user.name}</h1>
                            <p className='text-gray-500 text-sm ml-1'>{user.email}</p>
                        </div>
                        <div>
                            <p>{user.description}</p>
                        </div>
                        <div className='flex justify-between my-3'>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-green-200 rounded-full cursor-pointer'>
                                    <FaRegComment size="20px" />
                                </div>
                                <p>{user.number}</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-pink-200 rounded-full cursor-pointer'>
                                    <CiHeart size="24px" />
                                </div>
                                <p>{user.like}</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-yellow-200 rounded-full cursor-pointer'>
                                    <CiBookmark size="24px" />
                                </div>
                                <p>{user.bookmark}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}