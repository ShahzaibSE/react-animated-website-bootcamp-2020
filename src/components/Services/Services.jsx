import React from 'react'
import {StyleRoot} from 'radium'
import {Grid} from "@material-ui/core"
import {ScrollAnimation} from "react-animate-on-scroll"
import useWebAnimations, {fadeIn,fadeInLeft} from "@wellyshen/use-web-animations"
// Assets.
import "./Services.scss"
import "animate.css/animate.min.css" // Scroller dependency.

const ServicesComponent = () => {
    const {ref} = useWebAnimations({...fadeIn, timing:{duration: 4000}})
    return (
        <Grid container>
            <Grid item xs={12}>
                <div ref={ref} className="service_page_heading_container">
                    <StyleRoot>
                            <h2 className="service_page_heading">
                                <span>Impactful,<br/></span>
                                <span>Innovative and,<br/></span>
                                <span>Insightful<br/></span>
                            </h2>    
                    </StyleRoot>
                </div>
            </Grid>
        </Grid>
    )
}

export default ServicesComponent
