import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src="../Alburak-logo.png" alt="Dispatch Logo" />
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">How to Apply</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div className="contact-info">
                    <p>Call Us: +92 323 9866188</p>
                    <p>Email: alburakdispatch@gmail.com</p>
                    <div className="social-links">
                        <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
                        <a href="#"><img src="twitter-icon.png" alt="Twitter" /></a>
                        <a href="#"><img src="linkedin-icon.png" alt="LinkedIn" /></a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
