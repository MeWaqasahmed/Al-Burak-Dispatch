import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <h1>Dispatch Digital Skill Program</h1>
                <p>Our course is designed to give you the skills you need to succeed in the logistics industry...</p>
                <a href="#" className="btn">Start Learning</a>
            </div>
            <div className="hero-video">
                <video src="../selectted.mp4" controls></video>
            </div>
        </section>
    );
};

export default Hero;
