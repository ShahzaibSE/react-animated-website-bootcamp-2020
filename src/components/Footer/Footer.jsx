import React from 'react'
import {Link} from "@material-ui/core"
import {Facebook, LinkedIn} from "@material-ui/icons"
// Assets.
import "./Footer.scss"

const Footer = () => {
    return (
       <footer> 
            <div className="footer_elements">
               <div className="footer_container"> 
                    <p className="follow_us">Follow us :</p>
                    <div className="reference_link_container">
                        <Facebook className="facebook_link"><Link href="#"/></Facebook>
                        <LinkedIn><Link href="https://www.linkedin.com/in/shahzaib-noor-0a1b71b4/"/></LinkedIn>
                    </div>
                </div>
                <div className="btmFootr">
                    <p style={{display:"inline"}}>All right reserved ©2020 cosmostechnologies.com</p>
                    <p id="desgined_by">Designed by: <Link style={{textDecoration:"none", color:"rgba(255,255,255,.5)"}} href="https://www.linkedin.com/in/shahzaib-noor-0a1b71b4/" target="blank">
                        &nbsp; Shahzaib Noor</Link> 
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
