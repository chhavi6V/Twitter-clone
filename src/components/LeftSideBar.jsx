import React from 'react';
import { sidebarData } from './LeftSideBarData'; // Corrected import statement
import { CiEdit } from 'react-icons/ci';
import Avatar from 'react-avatar';

export default function LeftSideBar() {
    return (
        <div className='sidebar flex md:items-end flex-col sticky top-0'>

            <div class="logo invert my-4 self-start mx-2 md:mx-16">
                <svg viewBox="0 0 24 24" aria-hidden="true"
                    class="w-8 m-auto r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk">
                    <g>
                        <path
                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z">
                        </path>
                    </g>
                </svg>
            </div>

            <ul className="flex flex-col text-2xl space-y-3 md:px-11 font-bold w-full  ">
                {sidebarData.map((item, index) => (
                    <li
                        key={index}
                        className="flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-1 hover:rounded-full">
                        <span className="text-3xl material-symbols-outlined">{item.icon()}</span>
                        <span className="hidden md:block font-semibold text-xl">{item.label}</span>
                    </li>
                ))}
                <li>
                    <div className="button w-full text-center my-4">
                        <button
                            className="hidden md:block bg-[#1d9bf0] px-20 text-xl rounded-full py-3 text-white">Post</button>
                        <button className="md:hidden bg-[#1d9bf0]  px-2 md:px-4 text-xl rounded-full py-1 md:py-3 text-white">
                            <span className="material-symbols-outlined">
                                <CiEdit/>
                            </span>
                        </button>
                    </div>
                </li>
                <li
                        className="flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 hover:rounded-full">
                        <span className="text-3xl"><Avatar name="Jane Doe" size="30px" round={true}/></span>
                        <div className='flex flex-col -gap-y-1'>
                            <p className="hidden md:block font-semibold text-xl">JaneDoe</p>
                            <p className='text-gray-500'>@janeDoe</p>
                        </div>
                </li>
            </ul> 
        </div>
    )
}
