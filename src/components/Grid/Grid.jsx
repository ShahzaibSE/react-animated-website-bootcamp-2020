import React, {useEffect, useRef} from 'react'
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import {Grid} from "@material-ui/core"
// Component.
import Menu from "./../Menu/Menu"
import Home from "./../Home/Home"
import About from "./../About/About"
import Footer from "./../Footer/Footer"
import ServicesComponent from './../Services/Services'
import ContactUs from "./../ContactUs/ContactUs"

const GridComponent = () => {
    return (
        <Grid container>
            <Router>
                <Grid item xs={12}>
                    <Menu />
                </Grid>
                <Grid item xs={12}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="services" element={<ServicesComponent/>} />
                        <Route path="contactus" element={<ContactUs/>} />
                    </Routes>
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Router>
        </Grid>
    )
}

export default GridComponent
