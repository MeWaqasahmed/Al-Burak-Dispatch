import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="logo-footer">
                        <img src="logo-footer.png" alt="Dispatch Logo" />
                    </div>
                    <div className="latest-courses">
                        <h3>Latest Courses</h3>
                        <ul>
                            <li><a href="#">Dispatch & Sales Training</a></li>
                            <li><a href="#">Truck Dispatch Sales Training</a></li>
                            <li><a href="#">USA Truck Dispatch Training</a></li>
                        </ul>
                    </div>
                    <div className="important-links">
                        <h3>Important Links</h3>
                        <ul>
                            <li><a href="#">Dispatch.pk</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Courses</a></li>
                        </ul>
                    </div>
                    <div className="contact-footer">
                        <h3>Contact Us</h3>
                        <p>Address: Office No: 35, First floor, Kohinoor Plaza, Faisalabad, 38000</p>
                        <p>Email: contact@dispatch.pk</p>
                        <p>Phone: +92 328 1678122</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
