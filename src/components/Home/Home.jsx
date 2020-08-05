import React from 'react'
import useWebAnimations, {fadeIn,fadeInLeft} from "@wellyshen/use-web-animations"
import ScrollAnimation from 'react-animate-on-scroll';
import {StyleRoot} from 'radium';
import {Grid, Card, CardContent, Typography, CardHeader} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import {useStyles, animation_styles} from "./Home.style";
// Assets.
import "./Home.scss"
import landing_page from "./../../images/landing-page.jpg"
import "animate.css/animate.min.css" // Scroller dependency.
import meeting_in_motion from "./../../images/meeting.gif";

const Home = () => {
    // Web Animation API config.
    const {ref} = useWebAnimations({...fadeIn, timing:{duration: 4000}})
    const {fade_in_left_ref} = useWebAnimations({...fadeInLeft, timing:{duration: 2000}})
    // Material Styles.
    const classes = useStyles()
    return (
        <Grid container>
            <Grid item xs={12}>
                <div ref={ref}>
                    <img id="home_landing_image" src={landing_page} alt="home_landing_pic" />
                    <div>
                        <h2 className="landing_page_heading" >
                            Where Innovation Happens
                        </h2>    
                    </div>
                </div>
            </Grid>
            <Grid item xs={6}>
              <StyleRoot>  
                <div className="meeting_svg" style={animation_styles.shake_meeting}>
                    <ScrollAnimation animateIn="fadeInLeft" duration={3}>
                        <div>
                            <img src={meeting_in_motion} alt="Meeting"/>
                        </div>
                    </ScrollAnimation>
                </div>
               </StyleRoot> 
            </Grid>
            <Grid item xs={6}>
                <div>
                   <StyleRoot> 
                        <ScrollAnimation animateIn="fadeInRight" duration={3}>
                                <h2 className="talk_to_experts_about_requirments" style={animation_styles.bounceIn}>
                                        <span>Talk to our experts</span>
                                        {/* <br/> */}
                                        <span> about your requirements.</span>
                                    </h2>
                        </ScrollAnimation>
                   </StyleRoot> 
                </div>
            </Grid>
            <Grid xs={12}>
                <Grid container>
                    <Grid item xs={2}>
                        <div className="preview_services_container">
                           <div className="preview_service_revenue_cycle_management"> 
                                <Card className={classes.root}>
                                    <CardHeader
                                        avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            R
                                        </Avatar>
                                        }
                                    />
                                    <CardContent>
                                       <div> 
                                            <p className="preview_service_revenue_cycle_management_text">
                                                Revenue Cycle Management
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </Grid>
                    
                    <Grid item xs={2}>
                        <div className="preview_services_container">
                           <div className="preview_service_revenue_cycle_management"> 
                                <Card className={classes.root}>
                                    <CardHeader
                                        avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            R
                                        </Avatar>
                                        }
                                    />
                                    <CardContent>
                                       <div> 
                                            <p className="preview_service_revenue_cycle_management_text">
                                                Revenue Cycle Management
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={2}>
                        <div className="preview_services_container">
                           <div className="preview_service_revenue_cycle_management"> 
                                <Card className={classes.root}>
                                    <CardHeader
                                        avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            R
                                        </Avatar>
                                        }
                                    />
                                    <CardContent>
                                       <div> 
                                            <p className="preview_service_revenue_cycle_management_text">
                                                Revenue Cycle Management
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </Grid>
                    
                    <Grid item xs={2}>
                        <div className="preview_services_container">
                           <div className="preview_service_revenue_cycle_management"> 
                                <Card className={classes.root}>
                                    <CardHeader
                                        avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            R
                                        </Avatar>
                                        }
                                    />
                                    <CardContent>
                                       <div> 
                                            <p className="preview_service_revenue_cycle_management_text">
                                                Revenue Cycle Management
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </Grid>
                    
                    <Grid item xs={2}>
                        <div className="preview_services_container">
                           <div className="preview_service_revenue_cycle_management"> 
                                <Card className={classes.root}>
                                    <CardHeader
                                        avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            R
                                        </Avatar>
                                        }
                                    />
                                    <CardContent>
                                       <div> 
                                            <p className="preview_service_revenue_cycle_management_text">
                                                Revenue Cycle Management
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={2}>
                        <div className="preview_services_container">
                           <div className="preview_service_revenue_cycle_management"> 
                                <Card className={classes.root}>
                                    <CardHeader
                                        avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            R
                                        </Avatar>
                                        }
                                    />
                                    <CardContent>
                                       <div> 
                                            <p className="preview_service_revenue_cycle_management_text">
                                                Revenue Cycle Management
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </Grid>
                   
                    <Grid item xs={2}>
                        <div className="preview_services_container">
                           <div className="preview_service_revenue_cycle_management"> 
                                <Card className={classes.root}>
                                    <CardHeader
                                        avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            R
                                        </Avatar>
                                        }
                                    />
                                    <CardContent>
                                       <div> 
                                            <p className="preview_service_revenue_cycle_management_text">
                                                Revenue Cycle Management
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home
