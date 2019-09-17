import React, { Component } from 'react';
import { Cell, Grid, CardText, Card, CardActions, Button, CardTitle } from 'react-mdl'
import Countdown from './countdown'

class Home extends Component {
    render() {
        return(
            <div className="home-page">
                <Grid className="home-grid">
                    <Cell col={9}>
                        <h4>ABOUT ME</h4>
                        <img height={200} width={200} alt="" src="https://cdn.impactinit.com/cdn/x/x@bfd9c7719d/smss52/smsimg30/pv/ingimagecontributors/ing_47129_23357.jpg"/>
                        <p>I'm a student, fullstack developer, tutor, aspiring engineer, and environmental enthusiast.</p>
                        <br />
                        <hr />

                        <h4>DAYS UNTIL GRADUATION</h4>
                        <Countdown date={`2020-01-24T00:00:00`} />
                        <hr />

                        <h4>SOCIAL MEDIA</h4>
                        <div className="contact-grid">
                            <a target="_blank" href="http://linkedin.com/in/phuuvle">
                                <i style={{paddingLeft: '8px', color: '#0077B5'}} class="fa fa-linkedin-square" />
                            </a>
                            <a target="_blank" href="https://www.instagram.com/phuuvle/">
                                <i style={{color: 'blue'}} class="fa fa-instagram" />
                            </a>
                            <a target="_blank" href="http://github.com/phuuvle">
                                <i style={{color: 'black'}} class="fa fa-github" />
                            </a>
                            <a target="_blank" href="https://open.spotify.com/user/phuuvle?si=sGqQoTJrRGCPruX2LMqwEA">
                                <i style={{color: '#1ED761'}} class="fa fa-spotify" />
                            </a>
                            <a target="_blank" href="https://vsco.co/phuuvle">
                                <i style={{paddingRight: '8px', color: 'black'}} class="fa fa-camera-retro" />
                            </a>
                            
                        </div>
                        <hr />
    
                        <h4>PROJECTS</h4>

                        <div className="project-grid">
                        <Card shadow={0} style={{width: '260px', height: '260px', margin: 'auto'}}>
                            <CardTitle expand style={{fontSize: '15px', fontFamily: 'Open Sans Bold', color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>phuuvle</CardTitle>
                                <CardText style={{fontFamily: 'Open Sans', color: '#3E3E3E'}}>
                                    My portfolio and personal website
                                </CardText>
                                <CardActions border>
                                    <Button colored><a target="_blank" href='https://phuuvle.herokuapp.com/'>View</a></Button>
                                    <Button colored><a target="_blank" href='https://github.com/phuuvle/phuuvle'>Source</a></Button>
                                </CardActions>
                        </Card>

                        <Card shadow={0} style={{width: '260px', height: '260px', margin: 'auto'}}>
                            <CardTitle expand style={{fontSize: '15px', fontFamily: 'Open Sans Bold', color: '#fff', background: 'url(https://images.pond5.com/lots-cartoon-money-alpha-footage-023142644_prevstill.jpeg) bottom right 30% no-repeat #46B6AC'}}>crowdvest</CardTitle>
                                <CardText style={{fontFamily: 'Open Sans', color: '#3E3E3E'}}>
                                Networking for pooled investments
                                </CardText>
                                <CardActions border>
                                    <Button colored><a target="_blank" href='https://crowdvest-84514.firebaseapp.com/'>View</a></Button>
                                    <Button colored><a target="_blank" href='https://github.com/phuuvle/CrowdVest'>Source</a></Button>
                                </CardActions>
                        </Card>

                        <Card shadow={0} style={{width: '260px', height: '260px', margin: 'auto'}}>
                            <CardTitle expand style={{fontSize: '15px', fontFamily: 'Open Sans Bold', color: '#fff', background: 'url(https://fsa.zobj.net/crop.php?r=SXkcusnnDpOYeLTUiS8aQcfhIx_f2hLjcLHsE3qAI0wm116OxMnalrYMpPWhjbFLRSHmwpnthdpVK0-WpKUchg01q_H5usrcmBgew5LOzFqRI5xZP2_WuCwVWkkVnMGy-XWF-DghiO85OdMG) center 50% no-repeat #46B6AC'}}>router</CardTitle>
                                <CardText style={{fontFamily: 'Open Sans', color: '#3E3E3E'}}>
                                Simple IPV4 Router w/ Firewalls
                                </CardText>
                                <CardActions border>
                                    <Button colored><a target="_blank" href='http://github.com'>Source</a></Button>
                                </CardActions>
                        </Card>
                        </div>
                        
                    </Cell>
                    <Cell col={3}>
                        <h4>WORK</h4>
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}

export default Home;