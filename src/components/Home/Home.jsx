import React from 'react'
import Typography from "@material-ui/core"
import useWebAnimations, {fadeIn} from "@wellyshen/use-web-animations"
// Slider
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
// Assets.
import "./Home.scss"
import landing_page from "./../../images/landing-page.jpg"


const Home = () => {
    let slides = [
        { line1: 'Scale Extended', line2: 'business office', line3: 'services'},
        { line1: 'Innovation and', line2: 'Intelligent technology', line3: 'solutions and services'},
        { line1: 'Customized solutions', line2: 'to meet the needs of', line3: 'changing market'}
    ];
    return (
        <div>
            <div>
                <img id="home_landing_image" src={landing_page} alt="home_landing_pic" />
                <Slider autoplay={5} infinite={true} slideIndex={2}>
                {slides.map((slide, index) => <div key={index}>
                    <h2 className="h2_container">
                        <div className="h2_text">
                            <span>{slide.line1}</span>
                        </div>
                        <div className="h2_text">
                            <span>{slide.line2}</span>
                        </div>
                        <div className="h2_text">
                            <span>{slide.line3}</span>
                        </div>
                    </h2>
                </div>)}
                </Slider>
            </div>
        </div>
    )
}

export default Home
