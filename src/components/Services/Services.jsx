import React from 'react'
import {StyleRoot} from 'radium'
import {Grid} from "@material-ui/core"
import {ScrollAnimation} from "react-animate-on-scroll"
import useWebAnimations, {fadeIn,fadeInLeft} from "@wellyshen/use-web-animations"
// Assets.
import "./Services.scss"
import "animate.css/animate.min.css" // Scroller dependency.
import service_landing_animation from "./../../images/services-landing-animation.gif"
import {services_animations} from "./Services.style"

const ServicesComponent = () => {
    const {ref} = useWebAnimations({...fadeIn, timing:{duration: 4000}})
    return (
        <Grid container>
            <Grid item xs={6}>
                <div ref={ref} className="service_page_heading_container">
                    <StyleRoot>
                            <h2 className="service_page_heading" 
                                style={services_animations.service_landing_heading_animation}>
                                <span>Impactful,<br/></span>
                                <span>Innovative and,<br/></span>
                                <span>Insightful<br/></span>
                            </h2>    
                    </StyleRoot>
                </div>
            </Grid>
            <Grid item xs={6}>
            <StyleRoot>  
                    <div className="telling_about_services">
                            <div>
                                <img src={service_landing_animation} alt="Services we provide"/>
                            </div>
                    </div>
                </StyleRoot> 
            </Grid>
        </Grid>
    )
}

export default ServicesComponent
