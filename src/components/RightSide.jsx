import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import "../App.css"

export default function RightSideBar({user}) {
  function formatNumber(num) {
    if (num >= 1000 && num <= 10000000) {
        return (num / 1000).toFixed(1) + 'k';
    }else if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + ' lac';
    } else {
        return num.toString();
    }
}
  let trends = user;
  return (
    <div className='search m-3 sticky top-0'>
    <div className='flex items-center p-2 bg-[#16181c] rounded-full w-1/2'>
      <CiSearch size="20px" />
      <input type="text" className='bg-[#16181c] text-white outline-none px-2' placeholder='Search' />
    </div>
    <div class="whats sticky top-0 m-3 bg-[#16181c] w-1/2 py-5 rounded-xl space-y-3">
        <h1 class="text-xl font-bold px-3">What's Happening</h1>
        {trends.map((trend, index) => (
                <div key={index} className="item p-3 hover:bg-gray-800 cursor-pointer px-3">
                    <div className="text-sm text-gray-200">Trending in India</div>
                    <div className="font-bold">#{trend.name}</div>
                    <div className="text-sm text-gray-200">{formatNumber(trend.post)} posts</div>
                </div>
          ))}
    </div>

    <div className='who sticky top-[50vh] m-3 bg-[#16181c] w-1/2 py-5 rounded-xl space-y-1'>
      <h1 className='text-xl font-bold px-3'>Who to follow</h1>
      {
          user?.map((user) => {
            return(
            <div className='item p-3 items-center gap-2 flex justify-between hover:bg-gray-800 cursor-pointer md:flex-col'>
              <div className='flex gap-3'>
                <div className='p1'>
                  <Avatar name={user.name} size="40" round={true} className='w-12 h-12'/>
                </div>
                <div className='p2'>
                  <h1 className='font-bold'>{user?.name}</h1>
                  <p className='text-gray-500'>{`@${user?.username}`}</p>
                </div>
              </div>
              <div class="p3">
                  <button class="bg-white text-black px-2 py-2 rounded-full font-bold">Follow</button>
              </div>
            </div>
          )})}
          <div class="text-blue-600 px-3 cursor-pointer hover:underline my-5">Show More</div>

          <div class="terms sticky top-[84vh] m-2 text-xs text-gray-500 px-3  w-1/2 py-5  space-y-1">
                <span class="hover:underline cursor-pointer mr-2">Terms of Service</span>
                <span class="hover:underline cursor-pointer mr-2">Privacy Policy</span>
                <span class="hover:underline cursor-pointer mr-2">Cookie Policy</span>
                <span class="hover:underline cursor-pointer mr-2">Accessibility</span>
                <span class="hover:underline cursor-pointer mr-2">Ads info</span>
                <span class="hover:underline cursor-pointer mr-2">More</span>
                <span class="hover:underline cursor-pointer mr-2">© 2024 X Corp.</span>
            </div>
        </div>
      </div>
  )
}