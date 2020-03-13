import React, { useState } from 'react';
import userData from '../../../userData/users';
import './UserContainer.css'
import Userlist from '../../Userlist/Userlist';

const UserContainer = () => {
    const [user , setUser] = useState(userData);
    return (
        <div className="userContainer">
            <div className="userList">
               {
                   user.map(users => <Userlist userlist ={users}></Userlist>)
               }
                
            </div>
            <div className="userProfile">

            </div>
        </div>
    );
};

export default UserContainer;