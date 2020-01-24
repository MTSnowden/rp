import React, { Component } from 'react'
import trainingBanner from '../img/frontera-training.jpg'

class Training extends Component {
    componentDidMount() {
        console.log('Loading the Training component...')
    }
    render() {
        return (
            <div className="training-container">

                <div className="training-banner-container">
                    <img className="training-banner image-responsive" 
                        style={trainingBannerStyle} 
                        src={trainingBanner} 
                    /> 
                </div>

                <div className="page-content">

                <div className="row">
                    

                <div className="col-xs-12 col-sm-8 col-md-9">

                    <h2 style={{margin: "25px 0px 20px 0px", fontWeight: "bold"}}>TRAINING</h2>

                    <h4 style={{marginBottom: "15px",lineHeight: "1.4"}}>Frontera leverages TACC and its partners’ innovative approach to education, outreach, and training to encourage, educate, and develop the next generation of leadership-class computational science researchers.</h4>

                    <h3>Upcoming &amp; Archived Training</h3>

                    <table border="1" width="100%">
                    <tbody>
                        <tr>
                            <td style={{padding: "10px"}}><b>11/17</b></td>
                            <td style={{padding: "10px", width:"30%"}}><a target="_blank" href="https://sc19.supercomputing.org/presentation/?sess=sess208&amp;id=tut144#038;id=tut144">Tools and Best Practices for Distributed Deep Learning on Supercomputers</a></td>
                            <td sstyle={{padding: "10px"}}>This tutorial is a practical guide on how to run distributed deep learning over multiple compute nodes effectively. Deep Learning (DL) has emerged as an effective analysis method and has adapted quickly across many scientific domains in recent years. Domain scientists are embracing DL as both a standalone data science method and an effective approach to reducing dimensionality in the traditional simulation.</td>
                        </tr>
                        <tr>
                            <td style={{padding: "10px"}}><b>11/7</b></td>
                            <td style={{padding: "10px", width:"30%"}}><a target="_blank" href="https://learn.tacc.utexas.edu/enrol/index.php?id=72">High Performance Computing on Frontera Day 2</a></td>
                            <td style={{padding: "10px"}}>On the second day of this 2-day training event,  the focus shifts to MPI, again covering an introduction and some advanced topics. We also discuss hybrid computing and the interplay between OpenMP and MPI within a single code. The day ends with a session on parallel I/O.</td>
                        </tr>
                        <tr>
                            <td style={{padding: "10px"}}><b>10/31</b></td>
                            <td style={{padding: "10px", width:"30%"}}><a target="_blank" href="https://learn.tacc.utexas.edu/enrol/index.php?id=71">High Performance Computing on Frontera Day 1</a></td>
                            <td style={{padding: "10px"}}>During the first day of this 2-day training event, we focus on parallel programming with OpenMP. We provide an introduction to OpenMP in the morning and delve into advanced topics in the afternoon. Participants will need to bring their laptops to participate in the hands-on session.</td>
                        </tr>
                        <tr>
                            <td style={{padding: "10px"}}><b>9/13</b></td>
                            <td style={{padding: "10px"}}><a target="_blank" href="https://learn.tacc.utexas.edu/enrol/index.php?id=66">C++ for C Programmers</a></td>
                            <td style={{padding: "10px"}}>C++ can be considered as a superset of C, but this view often leads to un-idiomatic C++ programming. In this short course we both show the new mechanisms of C++, and we explain what C mechanisms, while available, should no longer be used.</td>
                        </tr>
                        <tr>
                            <td style={{padding: "10px"}}><b>8/27</b></td>
                            <td style={{padding: "10px", width:"30%"}}><a target="_blank" href="https://learn.tacc.utexas.edu/mod/page/view.php?id=78">Getting Ready for Frontera</a></td>
                            <td style={{padding: "10px"}}>We invite you to join us at TACC for a full day of presentations and discussions focused on Frontera’s outstanding capabilities. We will introduce the system and its new and innovative components, and will discuss how to optimally compile, launch, and execute scientific applications at large scale.</td>
                        </tr>
                        <tr>
                            <td style={{padding: "10px"}}><b>7/8</b></td>
                            <td style={{padding: "10px"}} width="30%"><a target="_blank" href="https://www.tacc.utexas.edu/education/institutes/designing-and-administering-large-scale-systems">TACC INSTITUTE - Designing and Administering Large-scale Systems</a></td>
                            <td style={{padding: "10px"}}>Spend a week learning from TACC's expert and experienced systems administrators about the tools, techniques, and practices that are used at TACC to build out some of the largest and highest performing clusters in the world.</td>
                        </tr>
                        <tr>
                            <td style={{padding: "10px"}}><b>7/29</b></td>
                            <td style={{padding: "10px"}}><a target="_blank" href="https://learn.tacc.utexas.edu/mod/page/view.php?id=72">PEARC ‘19 TUTORIAL - Portable, Reproducible High Performance Computing in the Cloud</a></td>
                            <td style={{padding: "10px"}}>This tutorial will focus on providing attendees exposure to state-of-the-art techniques for portable, reproducible research computing, enabling them to easily transport analyses from cloud to HPC resources.</td>
                        </tr>
                        <tr>
                            <td style={{padding: "10px"}}><b>7/29</b></td>
                            <td style={{padding: "10px"}}><a target="_blank" href="https://learn.tacc.utexas.edu/mod/page/view.php?id=73">PEARC ‘19 TUTORIAL - Modern Tools for Supercomputers</a></td>
                            <td style={{padding: "10px"}}>In this tutorial, we will present and practice with supercomputer tools specifically designed for complex user environment (LMod, Sanity Tool), tools for job monitoring and profiling (Remora, TACC-Stat, etc.), tools for large-scale IO work (OOOPS, FanStore), and several other convenient tools.</td>
                        </tr>
                        <tr>
                            <td style={{padding: "10px"}}><b>3/28</b></td>
                            <td style={{padding: "10px"}} width="30%"><a target="_blank" href="https://learn.tacc.utexas.edu/mod/page/view.php?id=54">Welcome to Frontera</a></td>
                            <td style={{padding: "10px"}}>A brief overview of system plans and the broader project that surrounds it, the architectural design choices, and a discussion of application community that will run on it.</td>
                        </tr>
                    </tbody>
                    </table>

                    <p>&nbsp;</p>

                </div>

                <div className="col-xs-12 hidden-xs col-sm-4 col-md-3">

	                <div style={{marginTop: "0px", borderLeft: "solid 5px #000000", padding: "80px 0px 0px 20px"}}>
                        <a className="btn btn-block btn-primary dropdown-toggle" 
                           style={{backgroundColor: "#ffffff", color: "#000000", margin: "0px 0px 20px 0px"}} 
                           href="https://portal.tacc.utexas.edu/user-news/-/news/Frontera" 
                           target="_blank">User News
                        </a>
                        <a className="btn btn-block btn-primary dropdown-toggle" 
                           style={{backgroundColor: "#ffffff", color: "#000000", margin: "20px 0px"}}
                           href="https://portal.tacc.utexas.edu/user-guides/frontera" 
                           target="_blank">User Guide
                        </a>
                        <a className="btn btn-block btn-primary dropdown-toggle" 
                           style={{backgroundColor: "#ffffff", color: "#000000", margin: "20px 0px"}} 
                           href="/about/media-toolkit">Media Toolkit
                        </a>
                    </div>

                </div>




            </div>


                </div>
                  
            </div>

        

        



        )
    
    }
    
}

const trainingBannerStyle = {
    margin: '0px',
    padding: '0px',
    width: '100%', 
    backgroundColor: '#ffffff'
}

export default Training
