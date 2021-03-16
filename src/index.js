import React from "react";
import ReactDOM from "react-dom";
import Grid from '@material-ui/core/Grid';

import UserInfo from "./components/userInfo";
import "./index.scss";

const App = () => {

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <UserInfo />
                </Grid>
                <Grid item xs={6}>
                    block 2
                </Grid>
            </Grid>
        </div>
        
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
