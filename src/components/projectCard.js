import React from 'react';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none'
    },
    card: {
        color: '#949495',
        backgroundColor: '#151414',
        paddingLeft: '18px',
        paddingRight: '18px'
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
            <Link href="https://material-ui.com/components/links/" className={classes.link}>
                <Card className={classes.card}>
                    <CardContent>
                        <p>Reactjs</p>
                        <h3 className={classes.headerStyle}>LinkedIn</h3>
                        <p>Description</p>
                    </CardContent>
                </Card>  
            </Link>
                      
        </div>
    )
}

export default ProjectCard;
