import React, {useEffect, useRef} from 'react'
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import {Grid} from "@material-ui/core"
// Component.
import Header from "./../Header/Header"
import Menu from "./../Menu/Menu"
import Home from "./../Home/Home"
import About from "./../About/About"

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
                    </Routes>
                </Grid>
            </Router>
        </Grid>
    )
}

export default GridComponent
