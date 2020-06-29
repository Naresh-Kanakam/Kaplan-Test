import React from 'react'

import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Avatar from '@material-ui/core/Avatar';
import './App.css'
import CourseData from  './data.json';
 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  contentContainer: {
    display: 'flex',
  },

  cardContainer:{
    margin: '2em auto',
  },
}));


export default function Main() { 
  const classes = useStyles();      
  return  (
          <div>
          {CourseData.map((courseDetails, index)=>{
            return (<Grid container spacing={5} className={classes.cardContainer} item xs={12} md={9}>
            <CardActionArea component="a" href="#">
              <Card>
                <div>
                  <CardContent className={classes.contentContainer}>
                  <Grid item xs={12} md={1}>
                    <Avatar src={courseDetails.subjectPhotoUrl} className={classes.large} />
                  </Grid>  
                  <Grid item xs={12} md={6}>
                  <Typography component="h2" variant="h5">
                      {courseDetails.title}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {courseDetails.description}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <Avatar src={courseDetails.instructorPhotoUrl} className={classes.large} />
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography variant="subtitle1" paragraph>
                      {courseDetails.instructorName}
                    </Typography>
                    </Grid>
                    <Grid item xs={12} md={2}>
                    <Typography variant="subtitle1" paragraph>
                      {courseDetails.time} EDT
                    </Typography>
                    </Grid>
                  </CardContent>
                </div>
                <Hidden xsDown>
                  <CardMedia />
                </Hidden>
              </Card>
            </CardActionArea>
          </Grid>)
          })}</div>
          
    )}