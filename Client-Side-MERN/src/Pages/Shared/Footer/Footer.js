import React from 'react';
import './footer.css';

const Footer = () => {
    const handleForm = e => {
        e.preventDefault();
    }
    return (
        <div className='section p-3 mt-5'>
            <div className="container footer-container">
                <div className="footer-left-info">
                    <h1 className="nav-logo">One <span className="nav-color">Stop</span> <span>Shop</span></h1>
                    <p>We provide the <strong>best quality</strong> of products with <strong>best handy touch</strong>.You are Welcome with your family anytime.</p>
                    <address>
                        <h5>Shop Address: </h5>
                        <p>
                            221 jockey hollow, Suite 600 <br />
                            Shibpur,Dhaka 1100
                        </p>
                    </address>
                    <p>
                        <b>Phone : </b> (10)+990123323 <br />
                        <b>Fax : </b> 01888344443 <br />
                        <b>Email : </b>nsuonestop@hotmail.com <br />
                    </p>
                    <ul className="social-icon">
                        <li><a href="none"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="none"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="none"><i className="fab fa-youtube"></i></a></li>
                        <li><a href="none"><i className="fab fa-google-plus-g"></i></a></li>

                    </ul>
                    <p className=" mt-3"><small className="copyright mt-2">&copy; Irfanul Haque Sajid || 2023</small></p>
                </div>
                <div className="footer-right-form">
                    <h2 className="fw-light">Any Complain? </h2>
                    <form onSubmit={handleForm}>
                        <input type="text" name="full-name" id="" placeholder="Full Name" className=" footer-form form-control" />
                        <input type="email" name="email" id="" placeholder="Email Address " className=" footer-form form-control" />
                        <textarea rows="5" name="message" placeholder="Message..." class="form-control footer-form"></textarea>
                        <button type="submit" className="send-btn ">Send</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Footer;