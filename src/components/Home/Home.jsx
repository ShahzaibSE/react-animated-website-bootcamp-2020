import React from 'react'
import Typography from "@material-ui/core"
import useWebAnimations, {fadeIn,fadeInLeft} from "@wellyshen/use-web-animations"
import { bounceIn, shake } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import ScrollAnimation from 'react-animate-on-scroll';
import {Grid} from "@material-ui/core";
// Slider
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
// Assets.
import "./Home.scss"
import landing_page from "./../../images/landing-page.jpg"
import "animate.css/animate.min.css" // Scroller dependency.
import meeting_in_motion from "./../../images/meeting.gif";

const styles = {
    bounceIn: {
      animation: 'x 3s',
      animationName: Radium.keyframes(bounceIn, 'bounceIn')
    },
    shake: {
        animation: 'x 3s',
        animationName: Radium.keyframes(shake, 'shake')   
    }
}

const Home = () => {
    // Web Animation API config.
    const {ref} = useWebAnimations({...fadeIn, timing:{duration: 4000}})
    const {fade_in_left_ref} = useWebAnimations({...fadeInLeft, timing:{duration: 2000}})
    //
    let slides = [
        { line1: 'Scale Extended', line2: 'business office', line3: 'services'},
        { line1: 'Innovation and', line2: 'Intelligent technology', line3: 'solutions and services'},
        { line1: 'Customized solutions', line2: 'to meet the needs of', line3: 'changing market'}
    ];
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
                <div className="meeting_svg" style={styles.shake}>
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
                                <h2 className="talk_to_experts_about_requirments" style={styles.bounceIn}>
                                        <span>Talk to our experts</span>
                                        {/* <br/> */}
                                        <span> about your requirements.</span>
                                    </h2>
                        </ScrollAnimation>
                   </StyleRoot> 
                </div>
            </Grid>
        </Grid>
    )
}

export default Home
