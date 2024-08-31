import React from 'react';

const CourseCards = () => {
    return (
        <section className="course-cards">
            <div className="container">
                <div className="card">
                    <img src="../" alt="Course 1" />
                    <h3>Truck Dispatch Sales Training</h3>
                    <a href="#" className="btn">View Details</a>
                </div>
                <div className="card">
                    <img src="course2.jpg" alt="Course 2" />
                    <h3>Consulting & Advice Call</h3>
                    <a href="#" className="btn">View Details</a>
                </div>
                <div className="card">
                    <img src="course3.jpg" alt="Course 3" />
                    <h3>Complete Dispatch & Sales Training</h3>
                    <a href="#" className="btn">View Details</a>
                </div>
                <div className="card">
                    <img src="course4.jpg" alt="Course 4" />
                    <h3>Truck Dispatch Training</h3>
                    <a href="#" className="btn">View Details</a>
                </div>
            </div>
        </section>
    );
};

export default CourseCards;
