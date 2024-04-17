import CreatePost from "./CreatePost";
import Tweet from "./Tweet";
import axios from "axios";
import React, {useEffect, useState} from "react"

export default function Feed() {
  let image = null;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakerapi.it/api/v1/custom?_quantity=26&name=name&description=text&like=number&id=uuid&email=email&image=image&number=counter&bookmark=counter');
        setUserData(response.data.data); // Assuming the API returns an array of users and we are using the first one
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='w-[100%] border border-gray-600'>
      <CreatePost/>
      {userData && userData.map((user)=><Tweet user = {user} key={user.id} image={image}/>)}
    </div>
  )
}