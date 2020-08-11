import React from 'react'
import Grid from "@material-ui/core/Grid"
// Assets.
import "./ContactUs.scss"
import contact_us_gif from "./../../images/contact-us-1.gif"

const ContactUs = () => {
    return (
        <Grid container>
            <Grid xs={6}>
                <div className="contact_us_gif_container">
                    <img src={contact_us_gif} alt="Contact Us" />
                </div>
            </Grid>
        </Grid>
    )
}

export default ContactUs
