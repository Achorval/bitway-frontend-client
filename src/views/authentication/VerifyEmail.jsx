import React, { useState, useEffect } from "react";
import axiosInstance from "utility/utils/useAxios";
import { useToasts } from 'react-toast-notifications';
import { loginBack, logoBlack } from "utility/helper/constant";

const VerifyEmail = props => {
  const [message, setMessage] = useState('');
  const [setSubmitting] = useState(false);

  const { addToast } = useToasts();

  // ** UseForm
  useEffect(() => {
    axiosInstance.post('/validate/email', {
      token: props.match.params.token
    })
    .then((response) => {
      props.history.push('/dashboard');
      setMessage(response.data.message);
      addToast(response.data.message, { appearance: 'success' });
    })
    .catch((error) => {
      setMessage(error.response.data.message);
      addToast(error.response.data.message, { appearance: 'error' });
    });
  }, [props.match.params.token, addToast, setSubmitting, props.history]);

  const loginContainer = {
    backgroundImage: `url(${loginBack})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "fixed",
    overflow: "auto",
    top: 0,
    bottom: 0
  };

  return (
    <div className="container-fluid" style={loginContainer}>
      <div className="form-container" style={{height: '400px'}}>
        <div className="login-icon">
          <img src={logoBlack} alt="icon" width="120px" height="auto" />
        </div>
        <div className="login-title d-flex align-items-center justify-content-center text-success" style={{height: '200px'}}>
          {message && message}
        </div>
        <div
          className="text-center link-label"
          onClick={() => props.history.push("/login")}
        >
          Want to Login ?
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
