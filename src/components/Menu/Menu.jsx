import React, {useEffect, useRef, useState} from 'react'
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
        <div>
            {/* <Button className={toggleButtonClass ? "toggle_active":"toggle"} onClick={handleClassChange}><AddCircle/></Button> */}
            <div className="toggle" onClick={handleClassChange}></div>
            <div className={toggleButtonClass ? "overlay_active":"overlay"}></div>
            <div className={toggleButtonClass ? "menu_active":"menu"}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Portfolio</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu
