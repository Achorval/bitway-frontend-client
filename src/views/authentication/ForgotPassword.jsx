import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import classnames from 'classnames';
import { Spinner } from 'reactstrap';
import axiosInstance from "utility/utils/useAxios";
import { useToasts } from 'react-toast-notifications';
import { loginBack, ForgotIcon } from "utility/helper/constant";

const ForgotPassword = () => {
    const validationSchema = Yup.object({
        email: Yup.string().required('Please Enter Any Email')
    });

    const { addToast } = useToasts();
    
    // ** UseForm
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: validationSchema,
    onSubmit: ( values, { resetForm, setSubmitting }) => {
            setSubmitting(true);
            axiosInstance.post('/account/recover', {
                email: values.email 
            })
            .then((response) => {
                resetForm();
                setSubmitting(false);
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
                <div className="login-title">Forgot Password ?</div>
                <div className="text-center form-info-text plr-24 mt-16">
                    Provide your e-mail address to reset your password
                </div>
                <form className="pa-24" onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            className={classnames('form-control', { 'is-invalid': formik.errors.email && formik.touched.email && true })}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            placeholder="Enter Email"
                        />
                        {formik.errors.email && formik.touched.email && <span className="error-msg">{formik.errors.email}</span>}
                    </div>
                    <button type="submit" className="btn c-primary form-button">
                        {formik.isSubmitting ? <Spinner color='white' size='sm' /> : 'Reset Password'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
