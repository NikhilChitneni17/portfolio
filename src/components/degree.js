import React from 'react'
import kits from '../images/kits.jpeg'
import gsu from '../images/gsu.jpeg'

const degree = () => {
    return (
        <section id="degree" className="degree">
            <div className="container">
                <div className="section-title">
                    <h2>Education</h2>
                </div>
                <div className="row  justify-content-center">
                
                <div class="card1">
                    <div class="card-header1">
                    <img src={gsu} alt="rover" />
                    </div>
                    <div class="card-body1">
                    <span class="tag1 tag-teal1 .bg-danger">Georgia State University</span>
                    <div className="row col-12">
                        <div className="col-4">
                            <p className="card_side_header">Course</p>
                        </div>
                        <div className="col-8">
                        <p>Master's in Data Science and Analytics</p>
                            
                        </div>
                    </div>
                    <div className="row col-12">
                        <div className="col-4">
                        <p className="card_side_header">Major</p>
                            
                        </div>
                        <div className="col-8">
                        <p>Data Science</p>
                            
                        </div>
                    </div>
                    <div className="row col-12">
                        <div className="col-4">
                        <p className="card_side_header">CGPA</p>
                            
                        </div>
                        <div className="col-8">
                        <p>4.09/4.3</p>
                            
                        </div>
                    </div>
                    </div>
                </div>
                <div class="card1">
                    <div class="card-header1">
                    <img src={kits} alt="rover" />
                    </div>
                    <div class="card-body1">
                    <span class="tag1 tag-teal1">KITS Warangal</span>
                    <div className="row col-12">
                        <div className="col-4">
                            <p className="card_side_header">Course</p>
                        </div>
                        <div className="col-8">
                        <p>Bachelor's in Technology</p>
                            
                        </div>
                    </div>
                    <div className="row col-12">
                        <div className="col-4">
                        <p className="card_side_header">Major</p>
                            
                        </div>
                        <div className="col-8">
                        <p>Computer Science</p>
                            
                        </div>
                    </div>
                    <div className="row col-12">
                        <div className="col-4">
                        <p className="card_side_header">CGPA</p>
                            
                        </div>
                        <div className="col-8">
                        <p>8.6/10</p>
                            
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default degree
