import React, { useState } from 'react';
import userData from '../../../userData/users';
import './UserContainer.css'
import Userlist from '../../Userlist/Userlist';
import UserProfile from '../../User-profile/UserProfile';

const UserContainer = () => {
    const [user , setUser] = useState(userData);
    const [userProfile, setProfile] = useState([]);
    const [count, setCount] = useState(0);
   

    const viewProfileHandler = (profile) =>{
        // console.log(profile)
        const newProfile = [...userProfile, profile]
        setProfile(newProfile);
    }
    
    const addFriendHandler = ()=>{
        setCount(count+1);
   }
    

    return (
        <div className="userContainer">

            <div className="userList">
                <div className="">
                 <h6>Total Sent Request: {count}</h6>
                </div>
               {
                   user.map(users => <Userlist viewProfileHandler={viewProfileHandler} addCount={addFriendHandler} userlist ={users}></Userlist>)
                   
               }
                
            </div>
            <div className="userProfile">
              <UserProfile userProfile={userProfile}></UserProfile>
            </div>
            
          
        </div>
    );
};

export default UserContainer;