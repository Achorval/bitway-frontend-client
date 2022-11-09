import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import PageTitle from "components/common/PageTitle";
import { 
    img1, 
    img2, 
    img3, 
    img4, 
    img5, 
    img6, 
    img7, 
    img8, 
    img99, 
    img101, 
} from "utility/helper/constant";

const HowToUse = (props) => {

    return (
        <Fragment>
            <PageTitle
                title="How To Use"
                history={props.history}
            />
            <section className="section pt-0">
                <div className="container mt-60">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
                                <h4 className="text-dark font-weight-bolder mb-3">How to Trade</h4>
                            <div className="section-title mb-30">
                                <p className="text-dark font-weight-bolder mb-3">STEP 1:</p>
                                <p className="text-muted mb-3">Log in to your account with your registered email/phone number and password.</p>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 mb-4 mb-lg-0">
                                        <img src={img1} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="section-title mb-30">
                                <p className="text-dark font-weight-bolder mb-3">STEP 2:</p>
                                <p className="text-muted mb-3">Click on the ACCOUNT, Click on SECURITY and set a WITHDRAWAL PIN by entering a new 4-digit number, add your login password then click DONE.</p>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 mb-4 mb-lg-0">
                                        <img src={img2} className="img-fluid" alt=""/>
                                    </div>
                                    <div className="col-lg-3 col-md-3 mb-4 mb-lg-0">
                                        <img src={img3} className="img-fluid" alt=""/>
                                    </div>
                                    <div className="col-lg-3 col-md-3 mb-4 mb-lg-0">
                                        <img src={img4} className="img-fluid" alt=""/>
                                    </div>
                                    <div className="col-lg-3 col-md-3 mb-4 mb-lg-0">
                                        <img src={img99} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="section-title mb-30">
                                <p className="text-dark font-weight-bolder mb-3">STEP 3:</p>
                                <p className="text-muted mb-3">
                                    Click on BANK ACCOUNT, Click on LINK BANK ACCOUNT, select your BANK NAME, enter your ACCOUNT NUMBER (your account name will automatically display), then click DONE to submit.
                                </p>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 mb-4 mb-lg-0">
                                        <img src={img5} className="img-fluid" alt=""/>
                                    </div>
                                    <div className="col-lg-3 col-md-3 mb-4 mb-lg-0">
                                        <img src={img6} className="img-fluid" alt=""/>
                                    </div>
                                    <div className="col-lg-3 col-md-3 mb-4 mb-lg-0">
                                        <img src={img7} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <p className="text-muted mt-3 mb-3">Return back to Dashboard by clicking, HOME,</p>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 mb-4 mb-lg-0">
                                        <img src={img8} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="section-title mb-30">
                                <p className="text-dark font-weight-bolder mb-3">STEP 4:</p>
                                <p className="text-muted mb-2">
                                    Select TRADE BITCOIN or TRADE USDT, Enter the amount you want to trade, copy the BTC or USDT wallet address and upload PROOF OF PAYMENT, review transaction then SUBMIT.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6 col-md-3 mb-4 mb-lg-0 mt-10">
                                        <ReactPlayer
                                            className="w-100"
                                            url="https://youtube.com/shorts/XyQTWPEWsds?feature=share"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="section-title mb-30">
                                <p className="text-dark font-weight-bolder mb-3">STEP 5:</p>
                                <p className="text-muted mb-3">
                                    Wait for SMS alert upon confirmation of your trade, refresh your DASHBOARD to see your wallet balance.
                                </p> 
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 mb-4 mb-lg-0">
                                        <img src={img101} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="section-title mb-30">
                                <p className="text-dark font-weight-bolder mb-3">STEP 6:</p>
                                <p className="text-muted mb-3">
                                    Click on WITHDRAW, enter SELECT YOUR BANK ACCOUNT, enter AMOUNT, enter WITHDRAWAL and then submit.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6 col-md-3 mb-4 mb-lg-0 mt-10">
                                        <ReactPlayer
                                            className="w-100"
                                            url="https://youtube.com/shorts/G4x8MQ1xCSo?feature=share"
                                        />
                                    </div>
                                </div>
                            </div>
                            <p className="mb-30">THAT'S ALL</p>
                            <div className="section-title mb-30">
                                <p className="text-dark font-weight-bolder mb-3">
                                    Please Note: Keep your withdrawal pin to yourself and don’t share it with any third-party user
                                </p>
                                <p className="text-muted">
                                    Step 1 & 2 is for new users, existing users don’t need to go through the process.
                                </p>
                                <p className="text-muted mt-10">
                                    If SMS alert did not come in due to poor network, please refresh your dashboard after few minutes you submitted your trade to view your trade balance.
                                </p>
                                <p className="text-muted mt-10">Every trade gets completed within 3 – 5 minutes </p>
                                <p className="text-muted mt-10">Thanks for trusting us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </Fragment>
    );
};

export default HowToUse;
