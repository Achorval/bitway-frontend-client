import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import classnames from 'classnames';
import { locakscreenBack, ProfileLockScreen } from "utility/helper/constant";

const LockScreen = (props) => {
    const validationSchema = Yup.object({
        password: Yup.string().required('Please Enter Any Password')
    });

    // ** UseForm
    const formik = useFormik({
        initialValues: {
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            // if (isValid) {
                console.log("Here is your form value", values);
                props.history.push("/login");
            // }
        }
    });
    
    const loginContainer = {
        backgroundImage: `url(${locakscreenBack})`,
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
                <div className="login-icon lock-screen-profile">
                    <img src={ProfileLockScreen} alt="icon" />
                </div>
                <div className="login-title">Alice Blue</div>
                <div className="text-center form-info-text plr-24 mt-16">
                    Your session is locked due to no activity. Enter your
                    password to continue.
                </div>
                <form className="pa-24" onSubmit={formik.handleSubmit}>
                    <div className="form-group">
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
                    <button type="submit" className="btn c-primary form-button">
                        Login
                    </button>
                    <div
                        className="text-center link-label"
                        onClick={() => props.history.push("/login")}
                    >
                        Use Another Account ?
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LockScreen;
