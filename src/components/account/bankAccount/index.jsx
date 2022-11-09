import * as Yup from "yup";
import SVG from "react-inlinesvg";
import { useFormik } from "formik";
import classnames from 'classnames';
import { Spinner } from 'reactstrap';
import Button from "components/button/Button";
import React, { useState, useEffect } from "react";
import axiosInstance from "utility/utils/useAxios";
import { useToasts } from 'react-toast-notifications';
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { threeDots, empty, contentLoader } from "utility/helper/constant";

const BankAccount = () => {
    const [modal, setModal] = useState(false);
    const [bankCode, setBankCode] = useState('');
    const [accounts, setAccounts] = useState([]);
    const [bankList, setBankList] = useState([]);
    const [display, setDisplay] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { addToast } = useToasts();

    // ** Validation
    const validationSchema = Yup.object({
        bankName: Yup.string().required('Please Select your Bank'),
        accountNumber: Yup.string().required('Please Enter your Account Number'),
        accountName: Yup.string().required('Please Enter your Amount Name')
    });

    // ** Close form button
    const closeBtn = (
        <button className="close" onClick={() => setModal(!modal)}>
            &times;
        </button>
    );

    // ** Open modal
    const openAddModal = () => {
        setModal(true)
        getBankList();
    }
    
    // ** Bank list function
    const getBankList = () => {
        axiosInstance.get('/bank/list').then((response) => {
            setBankList(response.data.data)
        });
    };

    // ** Get bankAccounts on mount
    useEffect(() => {
        getBankAccounts();
    }, []);

    // ** Bank account function
    const getBankAccounts = () => {
        setIsLoading(true);
        axiosInstance.get('/bank/accounts')
        .then((response) => {
            setIsLoading(false);
            setAccounts(response.data.data);
        })
        .catch((error) => {
            setIsLoading(false);
            console.log(error.response);
        });
    };
    
    // ** UseForm
    const formik = useFormik({
        initialValues: {
            bankName: '',
            accountNumber: '',
            accountName: ''
        },
        validationSchema: validationSchema,
        onSubmit: ( values, { setSubmitting, resetForm } ) => {
            axiosInstance.post('/bank/account/create', {
                bankName: values.bankName,
                accountNumber: values.accountNumber,
                accountName: values.accountName,
                bankCode: bankCode,
                type: 'own'
            })
            .then((response) => {
                resetForm();
                setModal(!modal);
                setSubmitting(false);
                setDisplay(false);
                getBankAccounts();
                addToast(response.data.message, { appearance: 'success' });
            })
            .catch((error) => {
                if (error.response) {
                    setSubmitting(false);
                    addToast(error.response.data.message, { appearance: 'error' });
                }
            });
        }
    });

    // ** Verify Bank account function
    const verifyBankAccount = (payload) => {
        setIsLoading(true)
        axiosInstance.post('/bank/account/verify', payload).then((response) => {
            formik.setFieldValue('accountName', response.data.data.data.account_name)
            setIsLoading(false)
            setDisplay(true)
        })
        .catch((error) => {
            formik.setFieldValue('accountName', '')
            setIsLoading(false);
            setDisplay(false);
            addToast(error.response.data.message, { appearance: 'error' });
        });
    };

     // ** Filter bankCode
    useEffect(() => {
        if (formik.values.bankName) {
            for (let i = 0; i < bankList.length; i++) {
                if (bankList[i].slug === formik.values.bankName) {
                setBankCode(bankList[i].code);
              }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formik.values.bankName]);

    // ** Verify account number on watch
    useEffect(() => {
        if (formik.values.bankName && formik.values.accountNumber.length === 10) {
            verifyBankAccount({
                accountNumber: formik.values.accountNumber,
                bankCode: bankCode
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formik.values.bankName, formik.values.accountNumber]);
    
    // ** Handle modal closed
    const handleModalClosed = () => {
        const fields = ['account', 'amount'];
        fields.forEach(field => formik.setFieldValue(field, '', false));
    };
    
    return (
        <div className="mtb-10">
            <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom">
                <div className="text-uppercase font-weight-bold text-primary">Bank Accounts</div>
                <Button className="btn c-primary py-2" onClick={() => openAddModal()}>
                    Link Bank Account
                </Button>
            </div>
            {!isLoading ? (Array.isArray(accounts) && accounts.length > 0) ? 
                <div className="row">
                    {accounts &&
                        accounts.map((e, i) => {
                            return (
                                <div key={i} className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <div className="card btn rounded text-left p-4 mb-5">
                                        <div className="d-flex align-items-center">
                                            <div className="rounded-circle text-white mr-3 text-center">
                                                <img
                                                    className="media-image"
                                                    src={e.media}
                                                    alt="media"
                                                    width={60}
                                                    height={60}
                                                />
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="text-black text-uppercase font-size-md pb-1">{e.accountName}</div>
                                                <div className="text-black-50">
                                                    *** *** {e.accountNumber.substring(e.accountNumber.length - 4)}
                                                    <br/>{e.bankName}
                                                </div>
                                            </div>
                                            <div className="grey--text ptb-10 pl-15">Delete</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div> :
                <div className="d-flex align-items-center flex-column justify-content-center text-center py-5">
                    <SVG src={empty} />
                    <div className="text-center">
                        <span className="text-muted font-size-xl d-block mb-2">
                            You haven’t link any bank account yet.
                        </span>
                        <Button className="btn c-primary py-2" onClick={() => openAddModal()}>
                            Link Bank Account
                        </Button>
                    </div>
                </div>
            : <div className="d-flex align-items-center flex-column justify-content-center text-center py-5">
            <SVG src={contentLoader} /></div>}

            <Modal onClosed={handleModalClosed} isOpen={modal} toggle={() => setModal(!modal)}>
                <ModalHeader toggle={() => setModal(!modal)} close={closeBtn}>
                    <span className='mb-1'>Add Bank Account</span>
                </ModalHeader>
                <ModalBody className='p-0'>
                    <form className="pa-24" onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label>Select Bank</label>
                            <select
                                className={classnames('form-control', { 'is-invalid': formik.errors.bankName && formik.touched.bankName && true })}
                                name="bankName"
                                onChange={formik.handleChange}
                                value={formik.values.bankName}
                            >
                                <option>...Select Bank...</option>
                                {bankList.map((e, i) => (
                                    <option key={i} value={e.slug}>{e.name}</option>
                                ))}
                            </select>
                            {formik.errors.bankName && formik.touched.bankName && <span className="error-msg">{formik.errors.bankName}</span>}
                        </div>
                        <div className="form-group">
                            <label>Account Number</label>
                            <input
                                type="text"
                                className={classnames('form-control', { 'is-invalid': formik.errors.accountNumber && formik.touched.accountNumber && true })}
                                name="accountNumber"
                                value={formik.values.accountNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Account Number"
                            />
                            {formik.errors.accountNumber && formik.touched.accountNumber && <span className="error-msg">{formik.errors.accountNumber}</span>}
                        </div>
                        {isLoading && <div className="text-center"><SVG src={threeDots} width={30} height={30} /></div>}
                        {display && (
                        <div className="form-group">
                            <label>Account Name</label>
                            <input
                                type="text"
                                readOnly
                                className={classnames('form-control', { 'is-invalid': formik.errors.accountName && formik.touched.accountName && true })}
                                name="accountName"
                                value={formik.values.accountName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Account Name"
                            />
                            {formik.errors.accountName && formik.touched.accountName && <span className="error-msg">{formik.errors.accountName}</span>}
                        </div>)}
                        <Button type="submit" disabled={!(formik.isValid && formik.dirty)} className="c-primary mt-4 w-100 py-2">
                            {formik.isSubmitting ? <Spinner color='white' size='sm' /> : 'Done'}
                        </Button>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default BankAccount;
