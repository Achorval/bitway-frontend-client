import React from "react";
import SVG from 'react-inlinesvg';
import { Link } from "react-router-dom";
import { bitcoin, usdt } from "utility/helper/constant";

const TradeCoin = () => {
  
  return (
    <div className="row ma-0">
      <div className="col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12 ptb-15">
        <Link to="/dashboard/trade/bitcoin">
          <div className="card roe-shadow-2 fill-height">
            <div className="card-body p-0 c-info">
              <div className="px-4 py-5">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="wrapper d-flex flex-column justify-content-center absolute absolute-center middle-block">
                    <h4 className="d-block text-center text-white">Trade Bitcoin</h4>
                  </div>
                  <h6 className="font-weight-bold">
                    <div className="d-flex align-items-center justify-content-center rounded-pill shadow-xxl">
                      <SVG src={bitcoin} title="Bitcoin" width={50} height={50} />
                    </div>
                  </h6>
                </div>
              </div>
              <div className="border-bottom"></div>
              <div className="px-4 py-3 shadow-none d-flex justify-content-between align-items-center">
                <span>Get Started</span>
                <span><i className="fas fa-angle-right"></i></span>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12 ptb-15">
        <Link to="/dashboard/trade/usdt">
          <div className="card roe-shadow-2 fill-height">
            <div className="card-body p-0 c-primary">
              <div className="px-4 py-5">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="wrapper d-flex flex-column justify-content-center absolute absolute-center middle-block">
                    <h4 className="d-block text-center text-white">Trade USDT</h4>
                  </div>
                  <h6 className="font-weight-bold">
                    <div className="d-flex align-items-center justify-content-center rounded-pill shadow-xxl">
                      <SVG src={usdt} title="Bitcoin"  width={50} height={50} />
                    </div>
                  </h6>
                </div>
              </div>
              <div className="border-bottom"></div>
              <div className="px-4 py-3 shadow-none d-flex justify-content-between align-items-center">
                <span>Get Started</span>
                <span><i className="fas fa-angle-left"></i></span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TradeCoin;
