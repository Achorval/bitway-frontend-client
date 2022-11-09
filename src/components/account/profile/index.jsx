import * as Yup from "yup";
import { useFormik } from "formik";
import classnames from 'classnames'
import { Spinner } from 'reactstrap';
import React, { useEffect, useState } from "react";
import axiosInstance from "utility/utils/useAxios";
import { useToasts } from 'react-toast-notifications';

const Profile = ({ titleStyle, userData }) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const { addToast } = useToasts();

    // ** Validation
    const validationSchema = Yup.object({
        firstName: Yup.string().required('Please Enter Any Firstname'),
        lastName: Yup.string().required('Please Enter Any Lastname'),
        email: Yup.string().required('Please Enter Any Email'),
        phone: Yup.string().required('Please Enter Any Phone Number'),
    });

    // ** UseForm
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, { setSubmitting, resetForm }) => {
            axiosInstance
                .post('/profile/update', { 
                    firstname: values.firstName, 
                    lastname: values.lastName 
                })
                .then(response => {
                    resetForm();
                    setSubmitting(false);
                    setIsDisabled(true);
                    addToast(response.data.message, { appearance: 'success' });
                })
                .catch((error) => {
                    setSubmitting(false);
                    addToast(error.response.data.message, { appearance: 'error' });
                });
        }
    });

    // ** Trigger form submit
    const triggerSubmit = () => {
        formik.handleSubmit();
    };

    useEffect(() => {
        formik.setFieldValue('firstName', userData.firstname);
        formik.setFieldValue('lastName', userData.lastname);
        formik.setFieldValue('email', userData.email);
        formik.setFieldValue('phone', userData.phone);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="row">
            <div className="col-md-12 col-xl-6 mx-auto">
                <div className="work-card">
                    <div className="Work-header" style={titleStyle}>
                        Profile
                    </div>
                    <div className="work-body pa-24">
                        <form>
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
                                    disabled={isDisabled}
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
                                    disabled={isDisabled}
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
                                    placeholder="alice@gmail.com"
                                    disabled={true}
                                />
                                {formik.errors.email && formik.touched.email && <span className="error-msg">{formik.errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    type="text"
                                    name="phone"
                                    className={classnames('form-control', { 'is-invalid': formik.errors.phone && formik.touched.phone && true })}
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                    onBlur={formik.handleBlur}
                                    placeholder="198 876 7897"
                                    disabled={true}
                                />
                                {formik.errors.phone && formik.touched.phone && <span className="error-msg">{formik.errors.phone}</span>}
                            </div>
                        </form>
                        <div>
                            {!isDisabled ? <button type="submit" className="c-btn c-primary w-100 py-3" onClick={() => triggerSubmit()}>
                                {formik.isSubmitting ? <Spinner color='white' size='sm' /> : 'Done'}
                            </button> : '' }
                            <button className="c-btn c-outline-primary w-100 mt-3 py-3" onClick={() => setIsDisabled(!isDisabled)}>
                                {isDisabled ? 'Edit' : 'Cancel'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
