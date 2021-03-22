import React from 'react';


import UserDescription from "./userDescription";
import UserAvatar from "./avatar";
import SocialProfileLinks from "./socialProfileLink";
import "../styles/userInfo.scss";


const UserInfo = () => {
   
    return(
        <div>
            <UserDescription />
            <div className="social-info">
                <UserAvatar />
                <SocialProfileLinks />
            </div>
        </div>
    )
}

export default UserInfo;