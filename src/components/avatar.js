import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import avatarImg from "../assets/prof_photo.jpg";

const UserAvatar = () => {
    return(
        <div className="avatar-box">
            <Avatar alt="Apurva Zunzunwala" src={avatarImg} />
        </div>
    )
}

export default UserAvatar;

