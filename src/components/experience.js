import React from 'react'
import acs from '../images/acs-icon.jpeg'
import edcast from '../images/edcast-icon.png'
import gsu from '../images/gsu.jpeg'
const experience = () => {
    return (
        <section id="experience" className="experience section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Experience</h2>
                </div>
                <div className="row  justify-content-center">
                <div class="card1 card2">
                    <div class="card-header1">
                    <img src={gsu} alt="rover" />
                    </div>
                    <div class="card-body1">
                    <span class="tag1 tag-teal1">Georgia State University</span>
                    <div className="row col-12">
                        <div className="col-4">
                            <p className="card_side_header">Role</p>
                        </div>
                        <div className="col-8">
                        <p>Graduate Research Assistant</p>
                            
                        </div>
                    </div>
                    <div className="row col-12">
                        <div className="col-4">
                        <p className="card_side_header">Time Period</p>
                            
                        </div>
                        <div className="col-8">
                        <p>08/2022 (current) </p>
                            
                        </div>
                    </div>
                    </div>
                </div>
                <div class="card1 card2">
                    <div class="card-header1">
                    <img src={edcast} alt="rover" />
                    </div>
                    <div class="card-body1">
                    <span class="tag1 tag-teal1">Edcast(Linksoft Technology)</span>
                    <div className="row col-12">
                        <div className="col-4">
                            <p className="card_side_header">Role</p>
                        </div>
                        <div className="col-8">
                        <p>Software Engineer</p>
                            
                        </div>
                    </div>
                    <div className="row col-12">
                        <div className="col-4">
                        <p className="card_side_header">Time Period</p>
                            
                        </div>
                        <div className="col-8">
                        <p>12/2021 - 08/2022</p>
                            
                        </div>
                    </div>
                    </div>
                </div>
                <div class="card1 card2">
                    <div class="card-header1">
                    <img src={acs} alt="rover" />
                    </div>
                    <div class="card-body1">
                    <span class="tag1 tag-teal1">GGK Technologies</span>
                    <div className="row col-12">
                        <div className="col-4">
                            <p className="card_side_header">Role</p>
                        </div>
                        <div className="col-8">
                        <p>Associate Software Engineer</p>    
                        </div>
                    </div>
                    <div className="row col-12">
                        <div className="col-4">
                        <p className="card_side_header">Time Period</p>
                            
                        </div>
                        <div className="col-8">
                        <p>12/2019 - 12/2021</p>   
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default experience
