import React from 'react'
import {StyleRoot} from 'radium'
import {Grid} from "@material-ui/core"
import {ScrollAnimation} from "react-animate-on-scroll"
import useWebAnimations, {fadeIn,fadeInLeft} from "@wellyshen/use-web-animations"
// For Services List Details.
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
// Assets.
import "./Services.scss"
import "animate.css/animate.min.css" // Scroller dependency.
import service_landing_animation from "./../../images/services-landing-animation.gif"
import {services_animations} from "./Services.style"
import {serviceUseStyles} from "./Services.style";
import list_number_1 from "./../../images/number-1.gif"
import list_number_2 from "./../../images/number-2.gif"
import list_number_3 from "./../../images/number-3.gif"

const ServicesComponent = () => {
    const {ref} = useWebAnimations({...fadeIn, timing:{duration: 4000}})
    const classes = serviceUseStyles();
    const [open_1, setOpen1] = React.useState(false);
    const [open_2, setOpen2] = React.useState(false);
    const [open_3, setOpen3] = React.useState(false);
    // Collapser.
    const handleClick = (list_number) => {
       if (list_number === 1) {
           setOpen1(!open_1)
           setOpen2(false)
           setOpen3(false)
           console.log(`List Number ${list_number} expanded`)
       }
       if (list_number === 2) {
           setOpen2(!open_2)
           setOpen1(false)
           setOpen3(false)
           console.log(`List Number ${list_number} expanded`)
       }
       if(list_number === 3){
           setOpen3(!open_3);
           setOpen1(false);
           setOpen2(false);
           console.log(`List Number ${list_number} expanded`)
       }
    };
    //
    return (
        <Grid container>
            <Grid item xs={6}>
                <div ref={ref} className="service_page_heading_container">
                    <StyleRoot>
                            <h2 className="service_page_heading" 
                                style={services_animations.service_landing_heading_animation}>
                                <span>Impactful,<br/></span>
                                <span>Innovative and,<br/></span>
                                <span>Insightful<br/></span>
                            </h2>    
                    </StyleRoot>
                </div>
            </Grid>
            <Grid item xs={6}>
            <StyleRoot>  
                    <div className="telling_about_services">
                            <div>
                                <img src={service_landing_animation} alt="Services we provide"/>
                            </div>
                    </div>
                </StyleRoot> 
            </Grid>
            <Grid item xs={12}>
                <div className="list-container">
                    <List component="nav" aria-labelledby="nested-list-subheader"
                       className={classes.root}
                >
                <ListItem button onClick={()=>{handleClick(1)}}>
                    <ListItemIcon>
                        <img className="list-item-number" src={list_number_1} alt="List Item 1" /> 
                    </ListItemIcon>
                    <ListItemText><h5 className="list_text">Revenue Cycle Management</h5></ListItemText>
                    {open_1 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open_1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemText><p className="list_item_desc">
                    Revenue Cycle Management – Within the wide spectrum of RCM, we can provide specific and 
                    tailored support into targeted areas that have a broad impact to the 
                    organization’s efficiency and bottom-line.
                        </p></ListItemText>
                        <ListItem style={{paddingLeft:"15%"}}>
                           <ListItemIcon><StarBorder/></ListItemIcon>
                            <ListItemText>
                                    <h6 className="nested_list_item_desc">Payment Posting</h6>
                            </ListItemText>
                        </ListItem>    
                        <ListItem style={{paddingLeft:"15%"}}>
                            <ListItemText><p className="nested_list_item_explaination">
                            Update your accounts receivable efficiently so that downstream processes 
                            such as denials processing, patient payments, and collections are not delayed.
                                </p></ListItemText>
                        </ListItem>
                        <ListItem style={{paddingLeft:"15%"}}>
                           <ListItemIcon><StarBorder/></ListItemIcon>
                           <ListItemText><h6 className="nested_list_item_desc">Correspondance Management</h6></ListItemText>
                        </ListItem>    
                        <ListItem style={{paddingLeft:"15%"}}>
                            <ListItemText><p className="nested_list_item_explaination">
                            Process and sort correspondence into organized buckets for efficient review and action.
                                </p></ListItemText>
                        </ListItem>
                        <ListItem style={{paddingLeft:"15%"}}>
                           <ListItemIcon><StarBorder/></ListItemIcon>
                           <ListItemText><h6 className="nested_list_item_desc">Reason Code Mapping</h6></ListItemText>
                        </ListItem>    
                        <ListItem style={{paddingLeft:"15%"}}>
                            <ListItemText><p className="nested_list_item_explaination">
                            Standardize all payer specific proprietary codes and descriptions into ANSI standard CARCs and RARCs 
                            and thereby improving denials reporting and management.
                                </p></ListItemText>
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={()=>{handleClick(2)}}>
                    <ListItemIcon>
                    <img className="list-item-number" src={list_number_2} alt="List Item 2" /> 
                    </ListItemIcon>
                    <ListItemText><h5 className="list_text">Staff Augmentation</h5></ListItemText>
                    {open_2 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open_2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemText><p className="list_item_desc">
                    Managing an inhouse workforce has its challenges. By becoming your extended business office, 
                    we reduce your effort and allow you to focus on your core business by providing:
                        </p></ListItemText>
                        <ListItem style={{paddingLeft:"15%"}}>
                           <ListItemIcon><StarBorder/></ListItemIcon>
                           <ListItemText><h6 className="nested_list_item_desc">Throughput</h6></ListItemText>
                        </ListItem>    
                        <ListItem style={{paddingLeft:"15%"}}>
                           <ListItemIcon><StarBorder/></ListItemIcon>
                           <ListItemText><h6 className="nested_list_item_desc">Efficiency</h6></ListItemText>
                        </ListItem>    
                        <ListItem style={{paddingLeft:"15%"}}>
                           <ListItemIcon><StarBorder/></ListItemIcon>
                           <ListItemText><h6 className="nested_list_item_desc">Scale</h6></ListItemText>
                        </ListItem>    
                        <br/>
                        <ListItem style={{paddingLeft:"15%"}}>
                            <ListItemText><p className="nested_list_item_explaination">
                            Once we understand your process, we can take over identifying and hiring staff with the right skill set, 
                            training and managing certified staff to meet your expectation.
                                </p></ListItemText>
                        </ListItem>
                        <ListItem style={{paddingLeft:"15%"}}>
                           <ListItemIcon><StarBorder/></ListItemIcon>
                           <ListItemText><h6 className="nested_list_item_desc">Enrollement</h6></ListItemText>
                        </ListItem>    
                        <ListItem style={{paddingLeft:"15%"}}>
                           <ListItemIcon><StarBorder/></ListItemIcon>
                           <ListItemText><h6 className="nested_list_item_desc">Demographic Entry</h6></ListItemText>
                        </ListItem>    
                        <ListItem style={{paddingLeft:"15%"}}>
                           <ListItemIcon><StarBorder/></ListItemIcon>
                           <ListItemText><h6 className="nested_list_item_desc">Data Transcription / Translation</h6></ListItemText>
                        </ListItem> 
                        <br/>   
                        <ListItem style={{paddingLeft:"15%"}}>
                            <ListItemText><p className="nested_list_item_explaination">
                            With today’s global market, productivity is highly valued. 
                            Virtual Assistants can offer that extra pair of hands to help assist with any daily, routine tasks.
                                </p></ListItemText>
                        </ListItem>
                        <ListItem style={{paddingLeft:"15%"}}>
                           <ListItemIcon><StarBorder/></ListItemIcon>
                           <ListItemText><h6 className="nested_list_item_desc">Scheduling appointments with reminders</h6></ListItemText>
                        </ListItem>    
                        <ListItem style={{paddingLeft:"15%"}}>
                           <ListItemIcon><StarBorder/></ListItemIcon>
                           <ListItemText><h6 className="nested_list_item_desc">Travel arrangements (hotel, flight, conference registration)</h6></ListItemText>
                        </ListItem>    
                        <ListItem style={{paddingLeft:"15%"}}>
                           <ListItemIcon><StarBorder/></ListItemIcon>
                           <ListItemText><h6 className="nested_list_item_desc">Creating presentations (content given)</h6></ListItemText>
                        </ListItem>    
                        <ListItem style={{paddingLeft:"15%"}}>
                           <ListItemIcon><StarBorder/></ListItemIcon>
                           <ListItemText><h6 className="nested_list_item_desc">Tracking expenses</h6></ListItemText>
                        </ListItem>    
                        <ListItem style={{paddingLeft:"15%"}}>
                           <ListItemIcon><StarBorder/></ListItemIcon>
                           <ListItemText><h6 className="nested_list_item_desc">Updating resumes</h6></ListItemText>
                        </ListItem>    
                    </List>
                </Collapse>

                <ListItem button onClick={()=>{handleClick(3)}}>
                    <ListItemIcon>
                    <img className="list-item-number" src={list_number_3} alt="List Item 3" /> 
                    </ListItemIcon>
                    <ListItemText><h5 className="list_text">Product Management</h5></ListItemText>
                    {open_3 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open_3} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemText><p class="list_item_desc">
                    Operational improvements through technology enhancements and/or service functions, we provide a fresh lens in helping you achieve your goals. 
                    Having specified, designed, and implemented proven market tools, 
                    we can get you where you need to go through:
                        </p></ListItemText>
                        <ListItem style={{paddingLeft:"15%"}}>
                           <ListItemIcon><StarBorder/></ListItemIcon>
                           <ListItemText><h6 className="nested_list_item_desc">Process Refinement</h6></ListItemText>
                        </ListItem>    
                        <ListItem style={{paddingLeft:"15%"}}>
                           <ListItemIcon><StarBorder/></ListItemIcon>
                           <ListItemText><h6 className="nested_list_item_desc">Workflow Optimization</h6></ListItemText>
                        </ListItem>    
                        <ListItem style={{paddingLeft:"15%"}}>
                           <ListItemIcon><StarBorder/></ListItemIcon>
                           <ListItemText><h6 className="nested_list_item_desc">Product/Software Testing</h6></ListItemText>
                        </ListItem>    
                    </List>
                </Collapse>
                </List>
                </div>
            </Grid>
        </Grid>
    )
}

export default ServicesComponent
