import React from 'react'
// Assets.
import "./Home.scss"
import landing_page from "./../../images/landing-page.jpg"

const Home = () => {
    return (
        <div className="home_container">
            <div id="home_landing_container">
                <img src={landing_page} alt="home_landing_pic" />
            </div>
        </div>
    )
}

export default Home
