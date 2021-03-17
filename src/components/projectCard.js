import React from 'react';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const user = require("../data/user.json");

const useStyles = makeStyles({
    link: {
        textDecoration: 'none'
    },
    card: {
        color: '#949495',
        backgroundColor: '#151414',
        paddingLeft: '18px',
        paddingRight: '18px',
        marginBottom: '10px'
    },
    headerStyle:{
        marginTop: '8px',
        marginBottom:'0',
        color: "#FFFFFF"
    }
})

const ProjectCard = () => {

    const classes = useStyles();

    return(
        <div>
            {
                user[0].Project.map((project, index) => {
                    return(
                        <Link key={index} href={project.ProjectUrl} target="_blank" className={classes.link}>
                        <Card className={classes.card}>
                            <CardContent>
                                
                                <p>{project.ProjectLanguage}</p>
                                <h3 className={classes.headerStyle}>{project.ProjectName}</h3>
                                <p>{project.ProjectDescription}</p>
                            </CardContent>
                        </Card>  
                    </Link>           
                    )
                })
            }
            
                      
        </div>
    )
}

export default ProjectCard;
