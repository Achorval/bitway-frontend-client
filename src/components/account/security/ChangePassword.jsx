import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import classnames from 'classnames'
import { Spinner } from 'reactstrap';
import axiosInstance from "utility/utils/useAxios";
import { useToasts } from 'react-toast-notifications';

const ChangePassword = ({ titleStyle }) => {
    // ** Validation
    const validationSchema = Yup.object({
        currentPassword: Yup.string().required('Please Enter Any Current Password'),
        newPassword: Yup.string().required('Please Enter Any New Password'),
        retypeNewPassword: Yup.string().when("newPassword", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("newPassword")],
                "Both password need to be the same"
            )
        })
    });

    const { addToast } = useToasts();

    // ** UseForm
    const formik = useFormik({
        initialValues: {
            currentPassword: '',
            newPassword: '',
            retypeNewPassword: ''
        },
        validationSchema: validationSchema,
        onSubmit: ( values, { setSubmitting, resetForm }) => {
            axiosInstance.post('/security/change-password', 
                values
            )
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

    return (
        <div className="card my-0 h-100">
            <div className="card-header" style={titleStyle}>
                Profile
            </div>
            <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label>Current Password</label>
                        <input
                            type="password"
                            name="currentPassword"
                            className={classnames('form-control', { 'is-invalid': formik.errors.currentPassword && formik.touched.currentPassword && true })}
                            onChange={formik.handleChange}
                            value={formik.values.currentPassword}
                            onBlur={formik.handleBlur}
                            placeholder="Current Password"
                        />
                        {formik.errors.currentPassword && formik.touched.currentPassword && <span className="error-msg">{formik.errors.currentPassword}</span>}
                    </div>

                    <div className="form-group">
                        <label>New Password</label>
                        <input
                            type="password"
                            name="newPassword"
                            className={classnames('form-control', { 'is-invalid': formik.errors.newPassword && formik.touched.newPassword && true })}
                            onChange={formik.handleChange}
                            value={formik.values.newPassword}
                            onBlur={formik.handleBlur}
                            placeholder="New Password"
                        />
                        {formik.errors.newPassword && formik.touched.newPassword && <span className="error-msg">{formik.errors.newPassword}</span>}
                    </div>

                    <div className="form-group">
                        <label>Retype New Password</label>
                        <input
                            type="password"
                            name="retypeNewPassword"
                            className={classnames('form-control', { 'is-invalid': formik.errors.retypeNewPassword && formik.touched.retypeNewPassword && true })}
                            onChange={formik.handleChange}
                            value={formik.values.retypeNewPassword}
                            onBlur={formik.handleBlur}
                            placeholder="Retype New Password"
                        />
                        {formik.errors.retypeNewPassword && formik.touched.retypeNewPassword && <span className="error-msg">{formik.errors.retypeNewPassword}</span>}
                    </div>
                    <button type="submit" disabled={!(formik.isValid && formik.dirty)} className="c-btn c-primary w-100 py-3 mt-2">
                        {formik.isSubmitting ? <Spinner color='white' size='sm' /> : 'Done'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;
