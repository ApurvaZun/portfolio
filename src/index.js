import React from "react";
import ReactDOM from "react-dom";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import UserInfo from "./components/userInfo";
import "./index.scss";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: '4rem'
    },
    grid: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
  }));

const App = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={6} className="user-info">
                    <UserInfo className={classes.grid}/>
                </Grid>
                <Grid item xs={6}>
                    block 2
                </Grid>
            </Grid>
        </div>
        
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
