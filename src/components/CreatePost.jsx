import Avatar from "react-avatar";
import { CiCircleList, CiImageOn, CiSettings } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { FaGlobeAsia } from "react-icons/fa";

export default function CreatePost() {
  return (
    <>
        <div className='top flex p-3 sticky top-0 bg-black backdrop-blur-3xl opacity-80 w-full'>
        <div className="absolute w-16 h-1 rounded-full bg-blue-500 bottom-0 left-[18%] z-10"></div>
                <div className='left bg-red-3001 w-1/2 flex justify-center font-bold text-lg'>For You</div>
                <div className="right bg-green-3001 w-1/2 flex justify-center font-bold text-lg">Following</div>
                <div className="settings mx-2">
                    <span className="hidden sm:block">
                        <CiSettings size="24px"/>
                    </span>
                </div>
            </div>
            <div className="h-[1px] w-full bg-gray-700"></div>
                    <div className='whatishapp flex gap-4 my-3'>
                        <div className="img m-2 w-16">
                            <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="40" round={true} />
                        </div>
                    <div className="w-full">
                        <input className="w-full h-7 my-2 text-xl bg-black outline-none text-white" type="text"
                            placeholder="What is happening?!"></input>
                        <div className="text-blue-400 flex items-center gap-1 w-full my-4">
                            <span className="material-symbols-outlined ">
                                <FaGlobeAsia/>
                            </span>
                            <span className="font-bold">Everyone can reply</span>
                        </div>
                    <div className="w-[90%] h-[0.2px] bg-gray-400 my-3"></div>
                    <div className="flex justify-between">
                        <div className="blueicons flex gap-2 text-blue-400 items-center">
                            <span class="cursor-pointer"><CiImageOn size="24px" /></span>
                            <span class="cursor-pointer"><MdOutlineGifBox size="24px" /></span>
                            <span class="cursor-pointer"><CiCircleList /></span>
                            <span class="cursor-pointer"><BsEmojiSmile /></span>
                            <span class="cursor-pointer"><RiCalendarScheduleLine /></span>
                            <span class="cursor-pointer"> <IoLocationOutline /></span>
                    </div>
                    <div class="postbtn">
                            <button
                                class="bg-[#1d9bf0] px-6 mx-5 text-sm rounded-full py-2 text-white font-bold">Post</button>
                    </div>
                </div>
            </div>
            </div>
                
        </>
  )
}