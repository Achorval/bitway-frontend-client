import * as Yup from "yup";
import { Spinner } from 'reactstrap';
import classnames from 'classnames';
import { Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import axiosInstance from "utility/utils/useAxios";
import { useToasts } from 'react-toast-notifications';
import { bitcoinQrcode } from "utility/helper/constant"; 

export default function TradeBitcoin(props) {  
    // ** useState 
    const [rate, setRate] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [amountToReceive, setAmountToReceive] = useState(0);
    const [address, setAddress] = useState('15jP9A4pjw12PTRLst3RTgvBbSYZoyJsYV');

    const { addToast } = useToasts();

    // ** Initial values
    const [data, setData] = useState({
        amount: ''
    });

    // ** Make request ands submit form
    const MakeRequest = (formData) => {
        setIsLoading(true)
        axiosInstance
        .post('/trade/bitcoin', { 
            service: 1, 
            rate: rate, 
            address: address, 
            imageUrl: formData.file, 
            amountToReceive: amountToReceive,
            amount: parseFloat(formData.amount) })
        .then(response => {
            setIsLoading(false);
            props.history.push('/dashboard/home');
            addToast(response.data.message, { appearance: 'success' });
        })
        .catch((error) => {
            if (error.response) { 
                setIsLoading(false);
                addToast(error.response.data.message, { appearance: 'error' });
            }
        }); 
    };

    // ** handle next step
    const handleNextStep = (newData, final = false) => {
        setData(prev => ({...prev, ...newData}));

        if (final) {
            MakeRequest(newData);
            return true;
        };

        setCurrentStep(prev => prev + 1); 
    };

    // ** Handle prev step
    const handlePrevStep = (newData) => {
        setData(prev => ({...prev, ...newData}));
        setCurrentStep(prev => prev - 1); 
    };

    // ** Calc amount to receive
    

    // useEffect(() => {
    //     if (amount || rate) {
    //         setAmountToReceive(amount * rate);
    //     } else {
    //         setAmountToReceive(0);
    //     }
    // }, [amount])

    // ** Filter rate on component mount
    useEffect(() => {
        axiosInstance.get('/service', { params: { slug: 'trade-bitcoin' }})
        .then((response) => {
            setRate(response.data.data.rate);
        })
    }, []);

    // ** Steps
    const steps = [
        <StepOne next={handleNextStep} data={data} amountToReceive={amountToReceive} setAmountToReceive={setAmountToReceive} rate={rate} />, 
        <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} address={address} setAddress={setAddress} />,
        <StepThree next={handleNextStep} prev={handlePrevStep} data={data} amountToReceive={amountToReceive} address={address} isLoading={isLoading} />
    ];
    
    return (
        <div className="container p-2 mb-4">
            <div className="title d-flex align-items-center" style={{marginTop: '1rem', marginBottom: '1rem'}}>
                <span className="title-icon" style={{paddingRight: '1rem'}} onClick={() => props.history.goBack()}><i className="fas fa-angle-left"></i></span>
                <span>Home</span>
            </div>
            <div className="mb-15">
                <div className="introduction">
                    Trade Bitcoin
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="stepper-wrapper">
                                <div className={classnames("stepper-item c1ompleted", { 
                                        "activ1e": currentStep === 0
                                    })}>
                                    <div className="step-counter">01</div>
                                    <div className="step-name text-center">Transaction <br /> Details</div>
                                </div>
                                <div className={classnames("stepper-item", { 
                                        "active": currentStep === 1
                                    })}>
                                    <div className="step-counter">02</div>
                                    <div className="step-name text-center">Payment <br /> Details</div>
                                </div>
                                <div className={classnames("stepper-item", { 
                                        "active": currentStep === 2
                                    })}>
                                    <div className="step-counter">03</div>
                                    <div className="step-name text-center">Review & <br /> Confirm</div>
                                </div>
                            </div>
                            {steps[currentStep]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ** Handle step one
const StepOne = (props) => {
    const handleSubmit = (values) => {
        props.next(values);
    };

    const stepOneValidationSchema = Yup.object({
        amount: Yup.string()
            .required('Please Enter Amount')
            .matches(/^[0-9]+$/, "Must be only digits")
    });

    return (
        <Formik
            validationSchema={stepOneValidationSchema}
            initialValues={props.data}
            onSubmit={handleSubmit}
        >
            
            {({values, errors, touched, handleChange, handleBlur}) => (
                <div>
                    <div className="form-group mt-5">
                        <button className="d-flex justify-content-center rounded shadow-none py-3 px-3 px-xl-5 btn btn-outline-dark btn-block">
                            <div className="d-flex">
                                <div>
                                    <div className="font-size-lg font-weight-bold">Today' Rate</div>
                                    <div className="opacity-8">₦{props.rate} / USD</div>
                                </div>
                            </div>
                        </button>
                    </div>
                    <Form>
                        <div className="form-group" style={{marginBottom: '2rem'}}>
                            <label className="mb-1">Amount</label>
                            <input
                                min="10"
                                type="text"
                                name="amount"
                                className={classnames('form-control', { 'is-invalid': errors.amount && touched.amount && true })}
                                onChange={handleChange}
                                value={props.setAmountToReceive(values.amount * props.rate)}
                                onBlur={handleBlur}
                                placeholder="Amount"
                            />
                            {errors.amount && touched.amount && <span className="error-msg">{errors.amount}</span>}
                        </div>
                        <div className="text-center">
                            <small className="font-weight-bold text-black-50 text-uppercase">
                                Amount to be Received
                            </small>
                            <h3 className="display-4 my-3 font-weight-bold">
                                ₦{props.amountToReceive && props.amountToReceive.toLocaleString()}
                            </h3>
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit">Continue</button> 
                    </Form>
                </div>
            )}
        </Formik>
    )
};

// ** handle step two
const StepTwo = (props) => {
    const { addToast } = useToasts();

    const handleSubmit = (values) => {
        props.next(values);
    };

    const stepTwoValidationSchema = Yup.object({
        file: Yup.mixed().required('Please Upload Proof of Payment')
    });

    const copyToClipboard = (value) => {
        navigator.clipboard.writeText(value);
        addToast('Address copied to clipboard', { appearance: 'success' });
    };
    
    return (
        <Formik
            validationSchema={stepTwoValidationSchema}
            initialValues={props.data}
            onSubmit={handleSubmit}
        >
            {({values, errors, touched, handleChange, handleBlur, setFieldValue}) => (
                <Form>
                    <div className="form-group" style={{marginBottom: '2rem'}}>
                        <div className="mx-auto" style={{width:'150px'}}>
                            <img className="img-fluid" alt="Bitcoin" src={bitcoinQrcode} />
                        </div>
                        <p className="error-msg text-center mt-2">Please send only Bitcoin to this wallet</p>
                    </div>
                    <div className="form-group" style={{marginBottom: '2rem'}}>
                        <div className="input-group">
                            <input className="form-control form-control-lg" readOnly value={props.address}/>
                            <div className="input-group-append">
                                <button type="button" className="btn-transition-none btn btn-info btn-sm" onClick={() => copyToClipboard(props.address)}>
                                    Copy Now 
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="form-group" style={{marginBottom: '2rem'}}>
                        <label>Proof of Payment</label>
                        <input id="file" name="file" type="file"
                            className={classnames('form-control', { 'is-invalid': errors.file && true })}
                            onChange={(e) => {
                                const fileReader = new FileReader();
                                fileReader.onload = () => {
                                    if (fileReader.readyState === 2) {
                                        setFieldValue('file', fileReader.result);
                                    }
                                };
                                fileReader.readAsDataURL(e.target.files[0]);
                            }}
                        />
                        {values.file && <div className="card-images"><img src={values.file} alt='' /></div>}
                        {errors.file && <span className="error-msg">{errors.file}</span>}
                    </div>
                    <div className="d-flex justify-content-betweem mt-4">
                        <button className="btn btn-outline-primary mr-3 w-100 py-2" type="button" onClick={() => props.prev(values)}>Back</button>
                        <button className="btn btn-primary w-100 py-2" type="submit">Continue</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
};

// ** handle step two
const StepThree = (props) => {

    const handleSubmit = (values) => {
        props.next(values, true);
    };

    return (
        <Formik
            initialValues={props.data}
            onSubmit={handleSubmit}
        >
            {({values}) => (
                <Form>
                    <div className="mb-3 text-center">
                        <h5 className="text-uppercase text-primary mb-3 font-size-xs">Review Transaction</h5>
                        <div className="mb-3">
                            <p className="mb-1 font-weight-bold">Wallet Address</p>
                            <span className="text-black-50">{props.address}</span>
                        </div>
                        <div className="mb-3">
                            <p className="mb-1 font-weight-bold">Amount to Receive</p>
                            <span className="text-black-50">₦{props.amountToReceive && props.amountToReceive.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-betweem mt-4">
                        <button className="btn btn-outline-primary mr-3 w-100 py-2" type="button" onClick={() => props.prev(values)}>Back</button>
                        <button className="btn btn-primary w-100 py-2" type="submit">{props.isLoading ? <Spinner color='white' size='sm' /> : 'Submit'}</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
};