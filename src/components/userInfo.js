import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Avatar from '@material-ui/core/Avatar';

import "../styles/userInfo.scss";
import avatarImg from "../assets/prof_photo.jpg";
import base64URL from "../assets/Apurva_Zunzunwala_Resume.pdf";


const user = require("../data/user.json");

const UserInfo = () => {

    function debugBase64(){
        const win = window.open();
        win.document.write(`<iframe src="${  base64URL   }" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`);
    }
    
   
    return(
        <div>
            <h1>{user[0].User}</h1>
            <p>{user[0].Description}</p>
            <div className="social-info">
                <div className="avatar-box">
                    <Avatar alt="Apurva Zunzunwala" src={avatarImg} />
                </div>
                <div className="download-resume">
                    <button onClick={debugBase64}>dnfsd</button>
                </div>
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