import React, {useEffect, useRef, useState} from 'react'
import {Link, BrowserRouter as Router} from "react-router-dom";
import {AddCircle, AddAPhoto} from '@material-ui/icons'
import {Button} from "@material-ui/core"
// Assets.
import "./Menu.scss"

const Menu = () => {
    const [toggleButtonClass, setToggleButtonClass] = useState(false)
    const [overlayClass, setOverlayClass] = useState(false)
    const [menuClass, setMenuClass] = useState(false)
    // const toggleButton = useRef(null);
    // const overlay = useRef(null);
    // const menu = useRef(null);

    const handleClassChange = () => {
        console.log("Change class")
        setToggleButtonClass(!toggleButtonClass)
        setOverlayClass(!overlayClass)
        setMenuClass(!menuClass)
    }

    // useEffect(()=>{
    //     var expandMenu = () =>{
    //         toggleButton.current.toggleClass('active')
    //         toggleButton.current.toggleClass('active')
    //         toggleButton.current.toggleClass('active')
    //     }
    //     toggleButton.current.addEventListener('click',expandMenu, false)
    // },[])

    return (
        <div id="menu_container">
            {/* <Button className={toggleButtonClass ? "toggle_active":"toggle"} onClick={handleClassChange}><AddCircle/></Button> */}
            <div className="toggle" onClick={handleClassChange}></div>
            <div className={toggleButtonClass ? "overlay_active":"overlay"}></div>
            <div className={toggleButtonClass ? "menu_active":"menu"}>
                    <ul>
                        <li><Link to="/" onClick={handleClassChange}>Home</Link></li>
                        <li><Link to="about" onClick={handleClassChange}>About</Link></li>
                        <li><Link to="service" onClick={handleClassChange}>Services</Link></li>
                        <li><Link to="contactus" onClick={handleClassChange}>Contact Us</Link></li>
                    </ul>
            </div>
        </div>
    )
}

export default Menu
