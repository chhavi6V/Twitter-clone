import Feed from "../components/Feed";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSide";
import axios from "axios";
import React, {useEffect, useState} from "react"
import "../App.css"

export default function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakerapi.it/api/v1/custom?_quantity=3&name=name&username=pokemon&post=number');
        console.log(response.data);
        setUserData(response.data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex md:container mx-auto ">
        <div className="first w-16 md:w-[70%]"><LeftSideBar/></div>
        <div className="second w-full border-[0.5px] border-x-gray-700 border-y-gray-400"><Feed/></div>
        <div className="third w-full bg-red-5044 hidden md:block">{userData && <RightSideBar user={userData} />}</div>
    </div>
  )
}