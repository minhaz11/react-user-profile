import React from 'react';
import './Userlist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import RequestCount from '../Header/UserContainer/RequestCount';

const Userlist = (props) => {
    const {name, email,img, salary,phone,username} = props.userlist;

   let addCount = 0;
    return (
        <div className="user">
            <div className="user-img">
                <img src={img} alt=""/>
            </div>
            <div className="user-detail">
                <h4>{name}</h4>
                <h6>Email: {email}</h6>
                <h6>Salary: ${salary} per/month</h6>
                <button onClick={() =>props.addCount()}><FontAwesomeIcon icon={faUserPlus} />Add Friend</button>
                <button onClick={() => props.viewProfileHandler(props.userlist)} ><FontAwesomeIcon icon={faEye} />View Profile</button>
            </div>
        </div>
    );
};

export default Userlist;





