import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Avatar from '@material-ui/core/Avatar';

import "../styles/userInfo.scss";
import avatarImg from "../assets/prof_photo.jpg"; 


const user = require("../data/user.json");

const UserInfo = () => {
    console.log(user);

    return(
        <div>
            <h1>{user[0].User}</h1>
            <p>{user[0].Description}</p>
            <div className="social-info">
                <Avatar alt="Remy Sharp" src={avatarImg} />
                <ul>
                    <li>
                        <a href="https://sarahdayan.dev/" rel="noreferrer" target="_blank" className="item-social-icon">
                        <LinkedInIcon fontSize="small" />
                        <span>LinkedIn</span>
                        <OpenInNewIcon fontSize="small" />
                        </a>
                    </li>
                    <li>
                        <a href="https://sarahdayan.dev/" rel="noreferrer" target="_blank" className="item-social-icon">
                        <GitHubIcon fontSize="small" />
                        <span>GitHub</span>
                        <OpenInNewIcon fontSize="small" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default UserInfo;