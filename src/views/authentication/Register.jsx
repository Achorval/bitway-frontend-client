import React from "react";
import * as Yup from "yup";
import { compose } from "redux";
import { useFormik } from "formik";
import classnames from 'classnames';
import { Spinner } from 'reactstrap';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AuthActions from "redux/auth/actions";
import axiosInstance from "utility/utils/useAxios";
import { useToasts } from 'react-toast-notifications';
import { loginBack, logoBlack } from "utility/helper/constant";

const { login } = AuthActions;

const Register = props => {
    const validationSchema = Yup.object({
        firstName: Yup.string().required('Please Enter Any FirstName'),
        lastName: Yup.string().required('Please Enter Any LastName'),
        email: Yup.string().required('Please Enter Any Email'),
        phone: Yup.string().required('Please Enter Any Phone'),
        password: Yup.string().required('Please Enter Any Password'),
        acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required')
    });

    const { addToast } = useToasts();

    // ** UseForm
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            acceptTerms: false
        },
        validationSchema: validationSchema,
        onSubmit: ( values, { setSubmitting }) => {
            axiosInstance.post('/register', {
                firstname: values.firstName, 
                lastname: values.lastName,
                email: values.email,
                phone: values.phone,
                password: values.password
            })
            .then((response) => {
                setSubmitting(false);
                props.history.push("/login");
                addToast(response.data.message, { appearance: 'success' });
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
        bottom: 0
    };

    return (
        <div className="container-fluid" style={loginContainer}>
            <div>
                <div className="form-container">
                    <div className="login-icon">
                        <img src={logoBlack} alt="icon" width="120px" height="auto" />
                    </div>
                    <div className="login-title">Create Account</div>
                    <form className="pa-24" onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                className={classnames('form-control', { 'is-invalid': formik.errors.firstName && formik.touched.firstName && true })}
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                                onBlur={formik.handleBlur}
                                placeholder="First Name"
                            />
                            {formik.errors.firstName && formik.touched.firstName && <span className="error-msg">{formik.errors.firstName}</span>}
                        </div>

                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                className={classnames('form-control', { 'is-invalid': formik.errors.lastName && formik.touched.lastName && true })}
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                                onBlur={formik.handleBlur}
                                placeholder="Last Name"
                            />
                            {formik.errors.lastName && formik.touched.lastName && <span className="error-msg">{formik.errors.lastName}</span>}
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                className={classnames('form-control', { 'is-invalid': formik.errors.email && formik.touched.email && true })}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                placeholder="Email"
                            />
                            {formik.errors.email && formik.touched.email && <span className="error-msg">{formik.errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label>Phone</label>
                            <input
                                type="text"
                                name="phone"
                                className={classnames('form-control', { 'is-invalid': formik.errors.phone && formik.touched.phone && true })}
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                                onBlur={formik.handleBlur}
                                placeholder="Phone Number"
                            />
                            {formik.errors.phone && formik.touched.phone && <span className="error-msg">{formik.errors.phone}</span>}
                        </div>

                        <div className="form-group">
                            <label>Create Password</label>
                            <input
                                type="password"
                                name="password"
                                className={classnames('form-control', { 'is-invalid': formik.errors.password && formik.touched.password && true })}
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                onBlur={formik.handleBlur}
                                placeholder="Create Password"
                            />
                            {formik.errors.password && formik.touched.password && <span className="error-msg">{formik.errors.password}</span>}
                        </div>

                        <div className="form-group mtb-16">
                            <div className="form-check text-center">
                                <input
                                    type="checkbox"
                                    id="acceptTerms"
                                    name="acceptTerms"
                                    onChange={formik.handleChange}
                                    defaultChecked={formik.values.acceptTerms}
                                    className={classnames('form-check-input', { 'is-invalid': formik.errors.acceptTerms && formik.touched.acceptTerms && true })}
                                />
                                <label
                                    className="form-check-label register-privacy-text"
                                    htmlFor="exampleCheck1"
                                >
                                    Agree to{" "}
                                    <Link to="/terms">terms & privacy policy</Link>
                                </label>
                            </div>
                            {formik.errors.acceptTerms && formik.touched.acceptTerms && <span className="error-msg">{formik.errors.acceptTerms}</span>}
                        </div>

                        <button type="submit" className="btn c-primary form-button" disabled={formik.isSubmitting || !formik.dirty}
                        >
                            {formik.isSubmitting ? <Spinner color='white' size='sm' /> : 'Register'}
                        </button>
                        <div
                            className="text-center link-label"
                            onClick={() => props.history.push("/login")}
                        >
                            Login ?
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default compose(
    connect(
        null,
        { login }
    )
)(Register);