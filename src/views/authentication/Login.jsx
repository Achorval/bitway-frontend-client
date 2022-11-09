import React from "react";
import * as Yup from "yup";
import { compose } from "redux";
import classnames from 'classnames'
import { useFormik } from "formik";
import { Spinner } from 'reactstrap';
import { connect } from "react-redux";
import AuthActions from "redux/auth/actions";
import axiosInstance from "utility/utils/useAxios";
import { useToasts } from 'react-toast-notifications';
import { loginBack, logoBlack } from "utility/helper/constant";

const { login } = AuthActions;

const Login = props => {
    const validationSchema = Yup.object({
        username: Yup.string().required('Please Enter Any Email or Phone'),
        password: Yup.string().required('Please Enter Any Password')
    });

    const { addToast } = useToasts();

    // ** UseForm
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: ( values, { setSubmitting }) => {
            axiosInstance.post('/login', {
                username: values.username, password: values.password
            }, {
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET',
                    'Access-Control-Allow-Headers': 'Content-Type'
                }
              })
            .then((response) => {
                const data = {
                    accessToken: response.data.data.accessToken,
                    refreshToken: response.data.data.refreshToken,
                    userData: response.data.data.userData
                };
                setSubmitting(false);
                props.login(data);
                props.history.push("/dashboard");
            })
            .catch((error) => {
                setSubmitting(false);
                addToast(error.response.data.message, { appearance: 'error' });
            });
        }
    });

    const loginContainer = {
        backgroundImage: `url(${loginBack})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        position: "fixed",
        overflow: "auto",
        top: 0,
        bottom: 0,
    };

    return (
        <div className="container-fluid" style={loginContainer}>
            <div className="form-container">
                <div className="login-icon">
                    <img src={logoBlack} alt="icon" width="120px" height="auto" />
                </div>
                <div className="login-title">Sign in to your account</div>
                <form className="pa-24" onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            className={classnames('form-control', { 'is-invalid': formik.errors.username && formik.touched.username && true })}
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            onBlur={formik.handleBlur}
                            placeholder="Email or Phone"
                        />
                        {formik.errors.username && formik.touched.username && <span className="error-msg">{formik.errors.username}</span>}
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className={classnames('form-control', { 'is-invalid': formik.errors.password && formik.touched.password && true })}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                            placeholder="Password"
                        />
                        {formik.errors.password && formik.touched.password && <span className="error-msg">{formik.errors.password}</span>}
                    </div>

                    <div className="form-check text-center mtb-16">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                        >
                            Remember me
                        </label>
                    </div>

                    <button type="submit" className="btn c-primary form-button" disabled={formik.isSubmitting || !formik.dirty}>
                        {formik.isSubmitting ? <Spinner color='white' size='sm' /> : 'Login'}
                    </button>
                    <div
                        className="text-center link-label"
                        onClick={() => props.history.push("/forgotPassword")}
                    >
                        Forgot Password ?
                    </div>
                    <div
                        className="text-center link-label"
                        onClick={() => props.history.push("/register")}
                    >
                        Don't have an account? 
                    </div>
                </form>
            </div>
        </div>
    );
};

export default compose(
    connect(
        null,
        { login }
    )
)(Login);
