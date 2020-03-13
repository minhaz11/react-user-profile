import React from 'react';
import './Userlist.css'

const Userlist = (props) => {
    const {name, email} = props.userlist;
    return (
        <div className="user">
            <div className="user-img">
                <img src="" alt=""/>
            </div>
            <div className="user-detail">
                <h4>{name}</h4>
                <h6>{email}</h6>
                <button>Add Friend</button>
                <button>View Profile</button>
            </div>
        </div>
    );
};

export default Userlist;