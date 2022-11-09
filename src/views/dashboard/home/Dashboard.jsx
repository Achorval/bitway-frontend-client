import React, { useState } from "react";
import { Spinner } from 'reactstrap';
import { connect } from "react-redux";
import TradeCoin from "components/home/TradeCoin";
import RecentTransactions from "./RecentTransactions";
import axiosInstance from "utility/utils/useAxios";
import { useToasts } from 'react-toast-notifications';
import WalletBalance from "components/home/WalletBalance";
import { refresh } from "utility/helper/constant";
import { Link } from 'react-router-dom'

const Home = props => {
  const [submitting, setSubmitting] = useState(false);
  
  const { addToast } = useToasts();

  const resendEmail = () => {
    setSubmitting(true);
    axiosInstance.post('/resend/email')
    .then((response) => {
      setSubmitting(false);
      addToast(response.data.message, { appearance: 'success' });
    })
    .catch((error) => {
      setSubmitting(false);
      addToast(error.response.data.message, { appearance: 'error' });
    });
  };

  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div>
      <div className="container p-0">
        <div className="row ma-0">
          {!props.userData.isEmailVerified  && props.userData.emailVerifiedAt === null &&
          <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 ptb-15">
            <div className="alert alert-danger p-2 d-flex align-items-center justify-content-between" role="alert">
              <span>Check the link sent to your email to verify your email account!</span>
              <button className="btn btn-danger pull-right btn-sm" onClick={() => resendEmail()}>
                {submitting ? <Spinner color='white' size='sm' /> : 'Resend Email'}
              </button>
            </div>
          </div>}
          <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 ptb-15">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted text-uppercase mb-1">Welcome back,</p>
                <h3 className="mb-2 fs-27 bold-text text-left">
                  {props.userData && `${props.userData.firstname} ${props.userData.lastname}`}
                </h3>
              </div>
              <img src={refresh} alt="icon" width="20px" height="20px"  onClick={() => refreshPage()} style={{cursor: 'pointer'}} />
            </div>
          </div>
        </div>
        <div className="row ma-0">
          <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <WalletBalance />
          </div>
        </div>
        <div className="card" style={{marginLeft: '15px', marginRight: '15px'}}>
          <div className="card-body">
            <div className="row ma-0">
              <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <Link to="/dashboard/how-to-use" className="btn btn-primary btn-sm pull-right">HOW TO USE</Link>
              </div>
            </div>
            <TradeCoin {...props} />
          </div>
        </div>
        <div className="row ma-0">
          <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 ptb-15">
            <RecentTransactions />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    ...state.auth,
    ...state.themeChanger
  };
};

export default connect(mapStateToProps, null)(Home);
