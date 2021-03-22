import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const user = require("../data/user.json");

const SocialProfileLinks = () => {
    return(
        <ul>
            <li>
                <a href={user.LinkedinURL} rel="noreferrer" target="_blank" className="item-social-icon">
                    <LinkedInIcon fontSize="small" />
                    <span>LinkedIn</span>
                    <OpenInNewIcon fontSize="small" />
                </a>
            </li>
            <li>
                <a href={user.GithubURL} rel="noreferrer" target="_blank" className="item-social-icon">
                    <GitHubIcon fontSize="small" />
                    <span>GitHub</span>
                    <OpenInNewIcon fontSize="small" />
                </a>
            </li>
        </ul>
    )
}

export default SocialProfileLinks;