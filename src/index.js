import React from "react";
import ReactDOM from "react-dom";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import UserInfo from "./components/userInfo";
import ProjectCard from "./components/projectCard";
import "./index.scss";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: '4rem'
    },
    user: {
      padding: theme.spacing(2),
      textAlign: 'center',
    }
  }));

const App = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={6} className="user-info">
                    <UserInfo className={classes.user}/>
                </Grid>
                <Grid item xs={6}>
                    <ProjectCard />
                </Grid>
            </Grid>
        </div>
        
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
