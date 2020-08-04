import React from 'react'
import Typography from "@material-ui/core"
import useWebAnimations, {fadeIn,fadeInLeft} from "@wellyshen/use-web-animations"
// Slider
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
// Assets.
import "./Home.scss"
import landing_page from "./../../images/landing-page.jpg"


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
        <div>
            <div ref={ref}>
                <img id="home_landing_image" src={landing_page} alt="home_landing_pic" />
                <div>
                    <h2 className="landing_page_heading" >
                        Where Innovation Happens
                    </h2>    
                </div>
            </div>
        </div>
    )
}

export default Home
