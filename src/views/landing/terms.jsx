import React, { useState } from "react";
import {  Link } from "react-router-dom";
import { Collapse } from 'reactstrap';
import { logoBlack, logoReversed } from "utility/helper/constant";

const Terms = () => {
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
                        <Collapse   isOpen={collapse}>
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
                            <h3 className="heading font-weight-bolder display-4 text-white">Privacy <span className="text-primary">Policy</span> </h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section pt-0">
                <div className="container mt-60">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
                            <div className="section-title mb-30">
                                <h4 className="text-dark font-weight-bolder mb-3">Introduction</h4>
                                <p className="mb-10">Last updated: August 16, 2022</p>
                                <p className="text-muted">
                                    This privacy policy describes our policies and procedures on the collection, 
                                    use and disclosure of your information when you use the service and tells you 
                                    about your privacy rights and how the law protects you. We use your personal 
                                    data to provide and improve the service. by using the service, you agree to 
                                    the collection and use of information in accordance with this privacy policy.
                                </p>
                            </div>
                            <div className="section-title mb-30">
                                <h4 className="text-dark font-weight-bolder mb-3">Definitions</h4>
                                <p className="text-muted">For the purposes of this Privacy Policy:</p>
                                <ul>
                                    <li className="p-2"> 
                                        <span className="font-weight-bolder">Account</span> means a unique account created for 
                                        you to access our service or parts of our service.
                                    </li>
                                    <li className="p-2">
                                        <span className="font-weight-bolder">Company</span> (referred to as either "the Company", 
                                        "We", "Us" or "Our" in this Agreement) refers to BitWay Technologies.
                                    </li>
                                    <li className="p-2">
                                        <span className="font-weight-bolder">Personal Data</span> is any information that relates 
                                        to an identified or identifiable individual.
                                    </li>
                                    <li className="p-2">
                                        <span className="font-weight-bolder">Service Provider</span> means any natural or legal 
                                        person who processes the data on behalf of the Company. It refers to third-party companies 
                                        or individuals employed by the Company to facilitate the Service, to provide the Service 
                                        on behalf of the Company, to perform services related to the Service or to assist the 
                                        Company in analyzing how the Service is used.
                                    </li>
                                </ul>
                            </div>
                            <div className="section-title mb-30">
                                <h4 className="text-dark font-weight-bolder mb-3">Types of Data Collected</h4>
                                <h5 className="mb-3">Personal Data</h5>
                                <p className="text-muted">
                                    While using our service, We may ask you to provide us with certain personally 
                                    identifiable information that can be used to contact or identify you. Personally 
                                    identifiable information may include, but is not limited to:
                                </p>
                                <ul>
                                    <li className="p-2">Email address</li>
                                    <li className="p-2">First name and last name</li>
                                    <li className="p-2">Phone number</li>
                                </ul>
                            </div>
                            <div className="section-title mb-30">
                                <h4 className="text-dark font-weight-bolder mb-3">Use of Your Personal Data</h4>
                                <p className="text-muted">
                                    The Company may use Personal Data for the following purposes:
                                </p>
                                <ul>
                                    <li className="p-2"><span className="font-weight-bolder">To provide and maintain our service,</span> including to monitor the usage of our Service.</li>
                                    <li className="p-2">
                                        <span className="font-weight-bolder">To manage Your Account:</span> to manage your registration as a user of the service. 
                                        The personal data you provide can give you access to different functionalities
                                        of the Service that are available to you as a registered user.
                                    </li>
                                    <li className="p-2">
                                        <span className="font-weight-bolder">To contact You:</span> To contact You by email, telephone calls, SMS, or other equivalent 
                                        forms of electronic communication, such as a mobile application's push notifications 
                                        regarding updates or informative communications related to the functionalities, products 
                                        or contracted services, including the security updates, when necessary or reasonable for 
                                        their implementation.
                                    </li>
                                    <li className="p-2">
                                        <span className="font-weight-bolder">To manage your requests:</span> To attend and manage your requests to us.
                                    </li>
                                </ul>
                            </div>
                            <div className="section-title mb-30">
                                <h4 className="text-dark font-weight-bolder mb-3">DATA POLICY</h4>
                                <p className="text-muted">
                                    BitWay Data Protection Policy refers to our commitment to treat information 
                                    of employees, customers, stakeholders and other interested parties with the 
                                    utmost care and confidentiality. With this policy, we ensure that we gather, 
                                    store and handle data fairly, transparently and with respect towards individual 
                                    rights.
                                </p>
                            </div>
                            <div className="section-title mb-30">
                                <h4 className="text-dark font-weight-bolder mb-3">Security of Your Personal Data</h4>
                                <p className="text-muted">
                                    The security of your personal data is important to us. We strive to use 
                                    our private personal server to protect your personal data, We guarantee 
                                    its absolute security.
                                </p>
                                <h5 className="text-dark font-weight-bolder mt-3 mb-3">Our data will be:</h5>
                                <ul>
                                    <li className="p-2">Accurate and kept up-to-date</li>
                                    <li className="p-2"> Collected fairly and for lawful purposes only</li>
                                    <li className="p-2">Processed by the company within its legal and moral boundaries</li>
                                    <li className="p-2">Protected against any unauthorized or illegal access by internal or external parties</li>
                                </ul>
                                <h5 className="text-dark font-weight-bolder mb-3">Our data will not be:</h5>
                                <ul>
                                    <li className="p-2">Communicated informally</li>
                                    <li className="p-2">Transferred to organizations, states or countries that do not have adequate data protection policies</li>
                                    <li className="p-2">Distributed to any parties</li>
                                </ul>
                            </div>
                            <div className="section-title">
                                <h4 className="text-dark font-weight-bolder mb-3">Changes to this Privacy Policy</h4>
                                <p className="text-muted">
                                    We may update Our Privacy Policy from time to time. We will notify you of 
                                    any changes by posting the new Privacy Policy on this page.We will let you 
                                    know via email and/or a prominent notice on our service, prior to the change 
                                    becoming effective and update the "Last updated" date at the top of this 
                                    Privacy Policy.
                                </p>
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

export default Terms;
