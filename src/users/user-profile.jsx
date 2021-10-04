import {useParams} from 'react-router-dom';
import {useState,useEffect} from "react"
const UserProfile = (props) => {
  const [userInfo, setUserInfo] = useState({});

  const {id:userId}=useParams();


  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res=>res.json())
    .then(data=>setUserInfo(data))
  },[userId]);
  return (
  <>
  <h1>{userId}</h1>
  <div>
    <h2>{userInfo.name}</h2>
  </div>
  </>);
};

export default UserProfile;
