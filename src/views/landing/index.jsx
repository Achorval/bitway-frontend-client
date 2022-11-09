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
    frame1,
    frame2,
    frame3 
} from "utility/helper/constant";

const PricingStyle2 = () => {
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
                                    <li className="has-submenu parent-menu-item"><Link to="about"> About </Link><span className="submenu-arrow"></span></li>
                                    <li className="has-submenu parent-menu-item"><Link to="#"> Contact </Link><span className="submenu-arrow"></span></li>
                                    <li className="has-submenu parent-menu-item"><Link to="#"> Careers </Link><span className="submenu-arrow"></span></li>
                                </ul>
                            </li>
                            <li className="has-submenu parent-parent-menu-item">
                                <Link to="faqs">FAQs</Link>
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
                                            <Link to="faqs">FAQs</Link>
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
                    <div className="row mt-2 align-items-center">
                        <div className="col-lg-7 col-md-7 p-3">
                            <div className="title-heading me-lg-4">
                                <h4 className="h5 text-warning">100% GUARANTEED & TRUSTED</h4>
                                <h1 className="heading mb-3 font-weight-bolder display-3 text-white">TRADE CYPTOCURRENCY <span className="text-primary">WITH EASE</span> </h1>
                                <p className="para-desc text-muted">Bitway offer you the fastest and simplest way to trade your cryptocurrency to local fiat with the best rate with zero fees.</p>
                                <div className="mt-4">
                                    <Link to="/register" className="btn btn-primary mt-2 mr-4">Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 mt-4 pt-4 mt-sm-0 pt-sm-0">
                            <img src={frame1} className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section mt-0 mt-md-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center mb-4 pb-2">
                                <h3 className="title mb-4 font-weight-bolder">Why People are <span className="text-primary">Choosing Bitway</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="card p-5 bg-white mt-4 mt-lg-0 mt-md-0 d-flex align-items-center justify-content-center">
                                <div className="d-inline-block bg-danger text-white rounded-circle mb-3 text-center d-60">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                                </div>
                                <h3 className="h5">Easy to Use</h3>
                                <p className="text-muted mb-0 text-center">We make it super easy to trade your Crypto.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mt-5 mt-sm-0">
                            <div className="card p-5 bg-white mt-4 mt-lg-0 mt-md-0 d-flex align-items-center justify-content-center">
                                <div className="d-inline-block bg-warning text-white rounded-circle mb-3 text-center d-60">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                </div>
                                <h5 className="h5">Secured Transactions</h5>
                                <p className="text-muted mb-0 text-center">Transactions are completely safe and secure.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mt-5 mt-sm-0">
                            <div className="card p-5 bg-white mt-4 mt-lg-0 mt-md-0 d-flex align-items-center justify-content-center">
                                <div className="d-inline-block bg-primary text-white rounded-circle mb-3 text-center d-60">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                                </div>
                                <h5 className="h5">Very Fast</h5>
                                <p className="text-muted mb-0 text-center">Executing Trade happens within minutes.</p>
                            </div>
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
                                <h5 className="title text-primary mb-2">HOW IT WORKS</h5>
                                <h1 className="text-dark font-weight-bolder mb-4">Start Trading Cryptocurrency in Three Steps</h1>
                                <ul className="work-process-list list-unstyled">
                                    <li className="d-flex align-items-start mb-5">
                                        <div className="icon-content">
                                            <span className="text-primary font-weight-bold h6">Step 1</span>
                                            <h3 className="h5 mb-2 font-weight-bolder">Create an Account</h3>
                                            <p>Create a new account or Log In to your existing profile through our mobile or web.</p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-start mb-5">
                                        <div className="icon-content">
                                            <span className="text-primary font-weight-bold h6">Step 2</span>
                                            <h3 className="h5 mb-2 font-weight-bolder">Make Deposit</h3>
                                            <p>Make deposit with different option and add your payment details.</p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-start mb-5">
                                        <div className="icon-content">
                                            <span className="text-primary font-weight-bold h6">Step 3</span>
                                            <h3 className="h5 mb-2 font-weight-bolder">Start Transacting</h3>
                                            <p>Submit trade to start trasacting.</p>
                                        </div>
                                    </li>
                                </ul>
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
                                <h5 className="title text-primary mb-2">100% GUARANTEED & TRUSTED</h5>
                                <h1 className="text-dark font-weight-bolder mb-3">Sell your Bitcoins for Cash <br /> Instantly</h1>
                                <p className="text-muted">Trade your bitcoins and get paid to your bank account instantly. No stress.</p>
                                <Link to="/register" className="mt-3 btn btn-primary">Get Started </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section mt-0 mt-md-5">
                <div className="container">
                    <div className="p-5" style={{background: '#0b163f'}}>
                        <div className="row justify-content-center p-0 p-md-5">
                            <div className="col-lg-7 col-md-8">
                                <div className="subscribe-info-wrap text-center">
                                    <div className="section-heading">
                                        <h2 className="text-white font-weight-bolder mb-3">Explore our Free Crypto Training.</h2>
                                        <p className="text-muted">Getting started with Your Crypto Journey?</p>
                                    </div>
                                    <div className="form-block-banner mt-5">
                                        <a className="btn btn-primary py-2"  href="https://academy.bitway.ng" target="_blank" rel="noopener noreferrer">Start Learning Crypto Here</a>
                                    </div>
                                </div>
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
                                                    <li><Link to="about" className="text-foot">About us</Link></li>
                                                    <li><Link to="#" className="text-foot">Contact</Link></li>
                                                    <li><a href="https://bitwaytechnologies.bamboohr.com/jobs" target="_blank" rel="noopener noreferrer" className="text-foot">Careers</a></li>
                                                    <li><a href="https://blog.bitway.ng" target="_blank" rel="noopener noreferrer" className="text-foot">Blog</a></li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-4 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                                <h5 className="footer-head">Legal</h5>
                                                <ul className="list-unstyled footer-list mt-4">
                                                    <li><Link to="#" className="text-foot">Helpdesk</Link></li>
                                                    <li><Link to="terms" className="text-foot">Customer Protection Policy</Link></li>
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
                                    <li className="list-inline-item mr-2"><Link to="terms">Privacy Policy</Link></li>
                                    <li className="list-inline-item ml-2"><Link to="terms">Terms of Service</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PricingStyle2;
