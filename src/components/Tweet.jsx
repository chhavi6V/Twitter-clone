import React from 'react';
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { CiHeart, CiViewBoard } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { BiRepost } from "react-icons/bi";

export default function Tweet({user}) {

    function formatNumber(num) {
        if (num >= 1000 && num <= 10000000) {
            return (num / 1000).toFixed(1) + 'k';
        }else if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + ' lac';
        } else {
            return num.toString();
        }
    }

    return (
        <div className='border-b border-gray-700 sm:w-auto sm:flex-auto sm:text-wrap'>
            <div>
                <div className='flex p-4'>
                    <Avatar name={user.name} size="40" round={true} />
                    <div className=' ml-2 w-full'>
                        <div className='flex items-center'>
                            <h1 className='font-bold'>{user.name}</h1>
                            <p className='text-gray-500 text-sm ml-2'>@{user.username}</p>
                        </div>
                        <div className='flex flex-wrap'>
                            <p>{user.description}</p>
                        </div>
                        <div className='flex flex-wrap justify-between my-3 sm:flex-auto'>
                            <div className='flex items-center '>
                                <div className='p-2 hover:bg-blue-500 rounded-full cursor-pointer'>
                                    <FaRegComment size="20px" />
                                </div>
                                <p>{user.number}</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-green-500 rounded-full cursor-pointer'>
                                    <BiRepost size="24px" />
                                </div>
                                <p>{user.number}</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-pink-400 rounded-full cursor-pointer'>
                                    <CiHeart size="24px" />
                                </div>
                                <p>{formatNumber(user.like)}</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-blue-500 rounded-full cursor-pointer'>
                                    <CiViewBoard size="24px" />
                                </div>
                                <p>{formatNumber(user.like)}</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-blue-500 rounded-full cursor-pointer'>
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