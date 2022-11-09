import React, { useState } from "react";
import {  Link } from "react-router-dom";
import SVG from "react-inlinesvg";
import { Collapse } from 'reactstrap';
import { 
    envelope, 
    playStore, 
    appleStore,
    logoBlack,
    logoReversed,
    frame2,
    frame3 
} from "utility/helper/constant";

const About = () => {
    const [collapse, setCollapse] = useState(false);
    const toggle = () => setCollapse(!collapse);

    return (
        <div id="main-panel" className="main-panel flex-y overflow-auto" style={{width: '100%', backgroundColor: 'rgb(249, 249, 249)'}}>
            <header id="topnav" className="defaultscroll sticky nav-sticky">
                <div className="container">
                    <Link className="logo" to="/">
                        <img src={logoBlack} className="logo-light-mode" width="120px" height="auto" alt=""/>
                    </Link>                
                    <div className="menu-extras">
                        <div className="menu-item">
                            <button className="navbar-toggle" id="isToggle" onClick={toggle}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <ul className="buy-button list-inline mb-0 d-lg-block d-none">
                        <li className="list-inline-item mb-0">
                            <Link to="/login" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <div className="btn btn-pills btn-soft-primary">Login</div>
                            </Link>
                        </li>
                
                        <li className="list-inline-item ps-1 mb-0">
                            <Link to="/register">
                                <div className="btn btn-pills btn-primary">Get Started</div>
                            </Link>
                        </li>
                    </ul>
                    <div id="navigation"> 
                        <ul className="navigation-menu">
                            <li className="has-submenu parent-parent-menu-item">
                                <Link to="#">Product</Link><span className="menu-arrow"></span>
                                <ul className="submenu">
                                    <li className="has-submenu parent-menu-item"><Link to="/dashboard/trade/bitcoin"> Bitcoin </Link><span className="submenu-arrow"></span></li>
                                    <li className="has-submenu parent-menu-item"><Link to="/dashboard/trade/usdt"> USDT </Link><span className="submenu-arrow"></span></li>
                                    <li className="has-submenu parent-menu-item"><a href="https://academy.bitway.ng" target="_blank" rel="noopener noreferrer"> Academy </a><span className="submenu-arrow"></span></li>
                                </ul>
                            </li>
                            <li className="has-submenu parent-parent-menu-item">
                                <Link to="#">Company</Link><span className="menu-arrow"></span>
                                <ul className="submenu">
                                    <li className="has-submenu parent-menu-item"><Link to="#"> About </Link><span className="submenu-arrow"></span></li>
                                    <li className="has-submenu parent-menu-item"><Link to="#"> Contact </Link><span className="submenu-arrow"></span></li>
                                    <li className="has-submenu parent-menu-item"><Link to="#"> Careers </Link><span className="submenu-arrow"></span></li>
                                </ul>
                            </li>
                            <li className="has-submenu parent-parent-menu-item">
                                <Link to="#">FAQs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex d-lg-none">
                        <Collapse
                            isOpen={collapse}>
                                <div id="nav-mobile"> 
                                    <ul className="navigation-menu">
                                        <li className="has-submenu parent-parent-menu-item">
                                            <Link to="#">Product</Link><span className="menu-arrow"></span>
                                            <ul className="submenu">
                                                <li className="has-submenu parent-menu-item"><Link to="/dashboard/trade/bitcoin"> Bitcoin </Link><span className="submenu-arrow"></span></li>
                                                <li className="has-submenu parent-menu-item"><Link to="/dashboard/trade/usdt"> USDT </Link><span className="submenu-arrow"></span></li>
                                                <li className="has-submenu parent-menu-item"><a href="https://academy.bitway.ng" target="_blank" rel="noopener noreferrer"> Academy </a><span className="submenu-arrow"></span></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu parent-parent-menu-item">
                                            <Link to="#">Company</Link><span className="menu-arrow"></span>
                                            <ul className="submenu">
                                                <li className="has-submenu parent-menu-item"><Link to="#"> About </Link><span className="submenu-arrow"></span></li>
                                                <li className="has-submenu parent-menu-item"><Link to="#"> Contact </Link><span className="submenu-arrow"></span></li>
                                                <li className="has-submenu parent-menu-item"><Link to="#"> Careers </Link><span className="submenu-arrow"></span></li>
                                                
                                            </ul>
                                        </li>
                                        <li className="has-submenu parent-parent-menu-item">
                                            <Link to="#">FAQs</Link>
                                        </li>
                                    </ul>
                                    <ul className="buy-button list-inline p-3" style={{float:'left'}}>
                                        <li className="list-inline-item">
                                            <Link to="/login" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                                <div className="btn btn-pills btn-soft-primary">Login</div>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item ps-1">
                                            <Link to="/register">
                                                <div className="btn btn-pills btn-primary">Get Started</div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                        </Collapse>
                    </div>
                </div>
            </header>

            <section className="bg-half-170 d-table w-100" style={{background: '#070919'}}>
                <div className="container">
                    <div className="mt-2">
                        <div className="title-heading text-center mt-20 mb-20">
                            <h3 className="heading font-weight-bolder display-4 text-white">About <span className="text-primary">Us</span> </h3>
                            <p className="para-desc text-muted mt-20">
                                BitWay started as Pacesetter.ng on the 5th of July, 2021 with the sole aim of providing a wide range solution to Bitcoin and other cryptocurrency exchange to local fiat currency at the best market rate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section mt-0 mt-md-5">
                <div className="container mt-60">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
                            <img src={frame2} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title ms-lg-5">
                                <h1 className="text-dark font-weight-bolder mb-4">Our Goal</h1>
                                <p>
                                    Our goal is to become a leading cryptocurrency exchange in Nigeria and Africa at large, 
                                    we also have a great plan to educate over 100,000 Africans on how to get started with 
                                    Bitcoin and the blockchain tech through our crypto academy. At BitWay.ng, we make our
                                    transactions easy, fast, safe and secure. We dish out perfect daily market rates and 
                                    make our transactions swift.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-60">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 order-1 order-md-2">
                            <img src={frame3} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
                            <div className="section-title me-lg-5">
                                <h1 className="text-dark font-weight-bolder mb-3">Our Vision</h1>
                                <p className="text-muted">
                                    Our vision is to become a leading player in the blockchain industry in Nigeria and 
                                    across Africa. We would like to become your Number One Vendor for cryptocurrency 
                                    exchange to local fiat currency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container mt-100 mt-60">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-5 col-12">
                            <img src={envelope} className="img-fluid mx-auto d-block" alt="" />
                        </div>
                        <div className="col-lg-7 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title">
                                <h4 className="title mb-4 display-4 font-weight-bold">BitWay on the Go for Smart Phone? <span className="display-5">Coming soon!</span></h4>
                                <div className="crypto-btn-wrapper my-4">
                                    <Link className="crypto-app-btn ml-3 text-decoration-none mb-3 mb-xl-0" to="#">
                                        <span className="crypto-btn-content-wrapper">
                                            <span className="crypto-btn-icon">
                                                <SVG src={playStore} alt="" />
                                            </span>
                                            <span className="text-wrapper">
                                                <span className="btn-tagline">Download on the </span>
                                                <span className="crypto-btn-text">App Store</span>
                                            </span>
                                        </span>
                                    </Link>
                                    <Link className="crypto-app-btn ml-3 text-decoration-none" to="#">
                                        <span className="crypto-btn-content-wrapper">
                                            <span className="crypto-btn-icon">
                                                <SVG src={appleStore} alt="" />
                                            </span>
                                            <span className="text-wrapper">
                                                <span className="btn-tagline">Get it on </span>
                                                <span className="crypto-btn-text">Google Play</span>
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">    
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-py-60">
                                <div className="row">
                                    <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                        <Link to="#" className="logo-footer">
                                            <img src={logoReversed} height="34" alt=""/>
                                        </Link>
                                        <p className="mt-4">Sell Bitcoin Safely in Nigeria.</p>
                                        {/* <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                            <li className="list-inline-item"><a href="#" className="rounded"><i data-feather="facebook" className="fea icon-sm fea-social"></i></a></li>
                                            <li className="list-inline-item"><a href="#" className="rounded"><i data-feather="instagram" className="fea icon-sm fea-social"></i></a></li>
                                            <li className="list-inline-item"><a href="#" className="rounded"><i data-feather="twitter" className="fea icon-sm fea-social"></i></a></li>
                                            <li className="list-inline-item"><a href="#" className="rounded"><i data-feather="linkedin" className="fea icon-sm fea-social"></i></a></li>
                                        </ul> */}
                                    </div>
                                    <div className="col-lg-8 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                                <h5 className="footer-head">Products</h5>
                                                <ul className="list-unstyled footer-list mt-4">
                                                    <li><Link to="/dashboard/trade/bitcoin" className="text-foot">Bitcoin</Link></li>
                                                    <li><Link to="/dashboard/trade/usdt" className="text-foot">USDT</Link></li>
                                                    <li><a href="https://academy.bitway.ng" target="_blank" rel="noopener noreferrer" className="text-foot">Academy</a></li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-4 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                                <h5 className="footer-head">Company</h5>
                                                <ul className="list-unstyled footer-list mt-4">
                                                    <li><Link to="#" className="text-foot">About us</Link></li>
                                                    <li><Link to="#" className="text-foot">Contact</Link></li>
                                                    <li><a href="https://bitwaytechnologies.bamboohr.com/jobs" target="_blank" rel="noopener noreferrer" className="text-foot">Careers</a></li>
                                                    <li><a href="https://blog.bitway.ng" target="_blank" rel="noopener noreferrer" className="text-foot">Blog</a></li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-4 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                                <h5 className="footer-head">Legal</h5>
                                                <ul className="list-unstyled footer-list mt-4">
                                                    <li><Link to="#" className="text-foot">Helpdesk</Link></li>
                                                    <li><Link to="#" className="text-foot">Customer Protection Policy</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-py-30 footer-bar">
                    <div className="container text-center">
                        <div className="d-lg-flex align-items-center justify-content-between">
                            <div className="text-sm-start">
                                <p className="mb-0">© {new Date().getFullYear()} Bitway Technologies, All rights reserved.</p>
                            </div>
                            <div className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <ul className="list-unstyled text-sm-end mb-0">
                                    <li className="list-inline-item mr-2"><Link to="#">Privacy Policy</Link></li>
                                    <li className="list-inline-item ml-2"><Link to="#">Terms of Service</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default About;
