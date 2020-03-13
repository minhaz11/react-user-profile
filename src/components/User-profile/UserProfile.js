import React from 'react';
import './UserProfile.css'

const UserProfile = (props) => {
    const profile = props.userProfile;
    let data = 0;
    for(let i=0; i<profile.length; i++){
        data = profile[i];
    }

   let salaryYearly =0;
    if (!data.salary){
        salaryYearly =0;
    } else{
        salaryYearly =(data.salary)*12
    }
     
    return (
        <div className="profile">
           <div className="profile-img">
                <img src={data.img} alt=""/>
           </div>
           <div className="info">
                <h3><span>Name:</span>  {data.name}</h3>
                <h5><span>Username:</span>  {data.username}</h5>
                <h5><span>Email:</span>  {data.email}</h5>
                <h5><span>Phone:</span>  {data.phone}</h5>
                <h5><span>Location:</span>  {data.city}</h5>
                <h5><span>Salary:</span>  ${salaryYearly} Yearly</h5>
           </div>
        
        </div>
    );
};

export default UserProfile;

