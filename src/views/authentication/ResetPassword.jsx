import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import classnames from 'classnames';
import { Spinner } from 'reactstrap';
import axiosInstance from "utility/utils/useAxios";
import { useToasts } from 'react-toast-notifications';
import { loginBack, ForgotIcon } from "utility/helper/constant";

const ResetPassword = (props) => {
    const validationSchema = Yup.object({
        newPassword: Yup.string().required('Please Enter A New Password'),
        cNewPassword: Yup.string().required('Please Enter Confirm New Password')
    });

    const { addToast } = useToasts();
    
    // ** UseForm
    const formik = useFormik({
        initialValues: {
            newPassword: '',
            cNewPassword: ''
        },
        validationSchema: validationSchema,
        onSubmit: ( values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            axiosInstance.post('/reset/password', {
                token: props.match.params.token,
                newPassword: values.newPassword, 
                retypeNewPassword: values.cNewPassword 
            })
            .then((response) => {
                resetForm();
                setSubmitting(false);
                props.history.push('/login');
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
            <div className="form-container">
                <div className="login-icon">
                    <img src={ForgotIcon} alt="icon" />
                </div>
                <div className="login-title">Reset Password</div>
                <form className="pa-24" onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label>New Password</label>
                        <input
                            type="password"
                            name="newPassword"
                            className={classnames('form-control', { 'is-invalid': formik.errors.newPassword && formik.touched.newPassword && true })}
                            onChange={formik.handleChange}
                            value={formik.values.newPassword}
                            onBlur={formik.handleBlur}
                            placeholder="Enter New Password"
                        />
                        {formik.errors.newPassword && formik.touched.newPassword && <span className="error-msg">{formik.errors.newPassword}</span>}
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="cNewPassword"
                            className={classnames('form-control', { 'is-invalid': formik.errors.cNewPassword && formik.touched.cNewPassword && true })}
                            onChange={formik.handleChange}
                            value={formik.values.cNewPassword}
                            onBlur={formik.handleBlur}
                            placeholder="Enter Confirm New Password"
                        />
                        {formik.errors.cNewPassword && formik.touched.cNewPassword && <span className="error-msg">{formik.errors.cNewPassword}</span>}
                    </div>
                    <button type="submit" className="btn c-primary form-button">
                        {formik.isSubmitting ? <Spinner color='white' size='sm' /> : 'Reset Password'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
