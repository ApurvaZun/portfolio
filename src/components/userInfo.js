import React from 'react';

const user = require("../data/user.json");

const UserInfo = () => {
    console.log(user);

    return(
        <div>
            <h1>{user[0].User}</h1>
            <p>{user[0].Description}</p>
        </div>
    )
}

export default UserInfo;