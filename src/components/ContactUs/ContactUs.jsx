import React from 'react'
import Grid from "@material-ui/core/Grid"
import {TextField} from "@material-ui/core"
import Button from '@material-ui/core/Button';
// Assets.
import "./ContactUs.scss"
import {contactUsStyle} from "./ContactUs.style"
import contact_us_gif from "./../../images/contact-us-1.gif"

const ContactUs = () => {
    const contact_us_styles = contactUsStyle()
    return (
        <Grid container>
            <Grid xs={6}>
                <div className="contact_us_gif_container">
                    <img src={contact_us_gif} alt="Contact Us" />
                </div>
            </Grid>
            <Grid xs={6}>
               <div className="contact_us_form_container"> 
                    <h1 className="contact_us_form_heading">Get In Touch</h1>
                    <p className="contact_us_form_heading_description">
                        Our team is ready to answer your queries
                    </p>
                    <form className={contact_us_styles.root}>
                        <TextField label="Name" /><br/>
                        <TextField className={contact_us_styles.textFields} label="Email" /><br/>
                        <TextField className={contact_us_styles.textFields} label="Phone Number" /><br/>
                        <TextField className={contact_us_styles.textFields} label="Area Of Interest" /><br/>
                        <Button className={contact_us_styles.submitBtn} variant="contained" color="primary">SUBMIT</Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}

export default ContactUs
