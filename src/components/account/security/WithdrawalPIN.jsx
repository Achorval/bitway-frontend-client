import * as Yup from "yup";
import { useFormik } from "formik";
import classnames from 'classnames';
import { Spinner } from 'reactstrap';
import Button from "components/button/Button";
import React, { Fragment, useState } from "react";
import { shield } from "utility/helper/constant";
import axiosInstance from "utility/utils/useAxios";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useToasts } from 'react-toast-notifications';

const WithdrawalPIN = ({ titleStyle }) => {
    const [modal, setmodal] = useState(false);

    const { addToast } = useToasts();

    const validationSchema = Yup.object({
        pin: Yup.string()
            .required('Please Enter PIN')
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(4, 'Must be exactly 4 digits')
            .max(4, 'Must be exactly 4 digits'),
        password: Yup.string().required('Please Enter you Current Password')
    });

    // ** Close form button
    const closeBtn = (
        <button className="close" onClick={() => setmodal(!modal)}>
            &times;
        </button>
    );

    // ** UseForm
    const formik = useFormik({
        initialValues: {
            pin: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: ( values, { setSubmitting, resetForm }) => {
            axiosInstance.post('/security/pin', {
                pin: values.pin,
                password: values.password
            })
            .then((response) => {
                resetForm();
                setmodal(!modal);
                setSubmitting(false);
                addToast(response.data.message, { appearance: 'success' });
            })
            .catch((error) => {
                setSubmitting(false);
                addToast(error.response.data.message, { appearance: 'error' });
            });
        }
    });

    // ** Handle modal closed
    const handleModalClosed = () => {
        const fields = ['password', 'pin'];
        fields.forEach(field => formik.setFieldValue(field, '', false));
    };

    return (
        <Fragment>
            <div className="card h-100">
                <div className="card-header" style={titleStyle}>
                    Withdrawal PIN
                </div>
                <div className="card-body">
                    <div className="body-description ptb-15">Manage your withdrawal PIN</div>
                    <div className="text-center">
                        <img src={shield} alt="shield" />
                        <div className="ptb-15">Set your withdrawal PIN here</div>
                    </div>
                </div>
                <div className="card-footer">
                    <button className="c-btn c-primary w-100 py-3" onClick={() => setmodal(!modal)}>
                        Set Withdrawal PIN
                    </button>
                </div>
            </div>
            <Modal onClosed={handleModalClosed} isOpen={modal} toggle={() => setmodal(!modal)}>
                <ModalHeader className="text-center" toggle={() => setmodal(!modal)} close={closeBtn}>
                </ModalHeader>
                <ModalBody className='p-0'>
                    <div className="text-center">
                        <h4 className='mb-1'>Set your withdrawal PIN</h4>
                        <small className="text-muted">For extra security, you'll need to set a withdrawal pin</small>
                    </div>
                    <form className="pa-24" onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label>Enter PIN</label>
                            <input
                                type="text"
                                className={classnames('form-control', { 'is-invalid': formik.errors.pin && formik.touched.pin && true })}
                                name="pin"
                                value={formik.values.pin}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Pin"
                            />
                            {formik.errors.pin && formik.touched.pin && <span className="error-msg">{formik.errors.pin}</span>}
                        </div>
                        <div className="form-group">
                            <label>Current Password</label>
                            <input
                                type="password"
                                className={classnames('form-control', { 'is-invalid': formik.errors.password && formik.touched.password && true })}
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Password"
                            />
                            {formik.errors.password && formik.touched.password && <span className="error-msg">{formik.errors.password}</span>}
                        </div>
                        <Button type="submit" disabled={!(formik.isValid && formik.dirty)} className="c-primary mt-4 w-100 py-2">
                            {formik.isSubmitting ? <Spinner color='white' size='sm' /> : 'Done'}
                        </Button>
                    </form>
                </ModalBody>
            </Modal>
        </Fragment>
    );
};

export default WithdrawalPIN;