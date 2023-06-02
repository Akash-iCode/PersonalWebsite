import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
  render() {
    return (
    <footer className="site-footer">
        <div className="container">
            <div className="row">
            <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">Akash-iCode <i>is an explorative developer and a student </i>, always look forward to contributing and collaborating to new peojects and taking on challelging tasks or learning new technologies.</p>
            </div>

            <div className="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul className="footer-links">
                <li><a href="#blank">React</a></li>
                <li><a href="#blank">Angular</a></li>
                <li><a href="#blank">Spring</a></li>
                <li><a href="#blank">UI Design</a></li>
                <li><a href="#blank">SQL</a></li>
                <li><a href="#blank">Java</a></li>
                <li><a href="#blank">Node</a></li>
                <li><a href="#blank">Templates</a></li>
                </ul>
            </div>

            <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                <li><a href="blank">About Us</a></li>
                <li><a href="blank">Contact Us</a></li>
                <li><a href="blank">Contribute</a></li>
                <li><a href="blank">Privacy Policy</a></li>
                <li><a href="blank">Sitemap</a></li>
                </ul>
            </div>
            </div>
            <hr />
        </div>
        <div className="container">
            <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
            <a href="#Scan">Akash-iCode</a>.
                </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                <li><a className="facebook" href="#Facebook"><i className="fa fa-facebook"></i></a></li>
                <li><a className="twitter" href="#twitter"><i className="fa fa-twitter"></i></a></li>
                <li><a className="dribbble" href="#dribble"><i className="fa fa-dribbble"></i></a></li>
                <li><a className="linkedin" href="#linkedin"><i className="fa fa-linkedin"></i></a></li>   
                </ul>
            </div>
            </div>
        </div>
    </footer>
    )
  }
}
