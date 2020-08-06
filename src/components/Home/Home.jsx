import React from 'react'
import useWebAnimations, {fadeIn,fadeInLeft} from "@wellyshen/use-web-animations"
import ScrollAnimation from 'react-animate-on-scroll';
import {StyleRoot} from 'radium';
import {Grid, Card, CardContent, Typography, CardHeader} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import {useStyles, animation_styles} from "./Home.style";
// Assets.
import "./Home.scss"
import landing_page from "./../../images/landing-page.jpg"
import "animate.css/animate.min.css" // Scroller dependency.
import meeting_in_motion from "./../../images/meeting.gif";
import { styles } from 'react-animations/lib/swing';

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
                       <StyleRoot> 
                            <h2 className="landing_page_heading" style={animation_styles.landing_heading_animation}>
                                Where Innovation Happens
                            </h2>    
                        </StyleRoot>
                    </div>
                </div>
            </Grid>
            <Grid item xs={6}>
              <StyleRoot>  
                <div className="meeting_svg" style={animation_styles.shake_meeting}>
                    <ScrollAnimation animateIn="fadeInLeft" duration={3} offset={100}>
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
                                        <Avatar aria-label="recipe" className={classes.revenue_cycle_management}>
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
                                        <Avatar aria-label="recipe" className={classes.staff_augmentation}>
                                            S
                                        </Avatar>
                                        }
                                    />
                                    <CardContent>
                                       <div> 
                                            <p className="preview_service_revenue_cycle_management_text">
                                                Staff Augmentation
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </Grid>
    
                    <Grid item xs={6}>
                        <StyleRoot> 
                            <ScrollAnimation animateIn="fadeInRight" duration={3}>
                                    <h2 className="services_heading" style={animation_styles.bounceIn}>
                                            <span>Services.</span>
                                    </h2>
                                    <p className="services_overview">
                                    We offer customized digital services and scalable operational strategies 
                                    to prepare your Organization ride through the waves of uncertainty in 
                                    the form of disruptive technology and government regulations so you 
                                    can deliver accelerated and cost-effective services for your consumers
                                    </p> 
                            </ScrollAnimation>
                        </StyleRoot>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={2}>
                        <div className="preview_services_container">
                           <div className="preview_service_revenue_cycle_management"> 
                                <Card className={classes.root}>
                                    <CardHeader
                                        avatar={
                                        <Avatar aria-label="recipe" className={classes.payment_posting}>
                                            P
                                        </Avatar>
                                        }
                                    />
                                    <CardContent>
                                       <div> 
                                            <p className="preview_service_revenue_cycle_management_text">
                                                Payment Posting
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
                                        <Avatar aria-label="recipe" className={classes.reason_code_mapping}>
                                            R
                                        </Avatar>
                                        }
                                    />
                                    <CardContent>
                                       <div> 
                                            <p className="preview_service_revenue_cycle_management_text">
                                                Reason Code Maping
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
                                        <Avatar aria-label="recipe" className={classes.product_management}>
                                            P
                                        </Avatar>
                                        }
                                    />
                                    <CardContent>
                                       <div> 
                                            <p className="preview_service_revenue_cycle_management_text">
                                                Product Management
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </Grid>

                    {/* <Grid item xs={6}>
                            <StyleRoot>
                                <ScrollAnimation animateIn="fadeInRight" duration={3}>
                                <p className="services_overview">
                                    We offer customized digital services and scalable operational strategies 
                                    to prepare your Organization ride through the waves of uncertainty in 
                                    the form of disruptive technology and government regulations so you 
                                    can deliver accelerated and cost-effective services for your consumers
                                </p> 
                                </ScrollAnimation>  
                            </StyleRoot>    
                    </Grid>   */}
                </Grid>

                <Grid container>
                    <Grid item xs={2}>
                        <div className="preview_services_container">
                           <div className="preview_service_revenue_cycle_management"> 
                                <Card className={classes.root}>
                                    <CardHeader
                                        avatar={
                                        <Avatar aria-label="recipe" className={classes.virtual_assistant}>
                                            V
                                        </Avatar>
                                        }
                                    />
                                    <CardContent>
                                       <div> 
                                            <p className="preview_service_revenue_cycle_management_text">
                                                Virtual Assistant
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
                                        <Avatar aria-label="recipe" className={classes.correspondence_management}>
                                            C
                                        </Avatar>
                                        }
                                    />
                                    <CardContent>
                                       <div> 
                                            <p className="preview_service_revenue_cycle_management_text">
                                                Correspondence Management
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
