import * as Yup from "yup";
import { useFormik } from "formik";
import classnames from 'classnames';
import { connect } from "react-redux";
import Button from "components/button/Button";
import React, { Fragment, useState } from "react";
import { addZeroes } from "utility/helper/methods";
import axiosInstance from "utility/utils/useAxios";
import { useToasts } from 'react-toast-notifications';
import { Modal, ModalHeader, ModalBody, Spinner } from "reactstrap";

const validationSchema = Yup.object({
  account: Yup.string().required('Please Enter Any Account'),
  amount: Yup.string().required('Please Enter Any Amount')
  .matches(/^[0-9]+$/, "Must be only digits"),
  pin: Yup.string().required('Please Enter PIN')
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(4, 'Must be exactly 4 digits')
    .max(4, 'Must be exactly 4 digits')
});

const WalletBalance = props => {
  const [modal, setmodal] = useState(false);
  const [hidden, setHidden] = useState(false);
  const toggleBalance = () => setHidden(!hidden);
  const [bankAccounts, setBankAccounts] = useState([]);

  const { addToast } = useToasts();

  // ** Close form button
  const closeBtn = (
    <button className="close" onClick={() => setmodal(!modal)}>
      &times;
    </button>
  );

  const getBankAccounts = async () => {
    const response = await axiosInstance.get('/bank/accounts');
    setBankAccounts(response.data.data);
  }

  // ** UseForm
  const formik = useFormik({
    initialValues: {
      account: '',
      amount: '', 
      pin: ''
    },
    validationSchema: validationSchema,
      onSubmit: (values, { setSubmitting, resetForm }) => {
        axiosInstance.post('/withdraw', {
          service: 3,
          bankAccount: values.account, 
          amount: values.amount,
          pin: values.pin
        })
        .then((response) => {
          setSubmitting(false);
          resetForm();
          setmodal(!modal);
          addToast(response.data.message, { appearance: 'success' });
        })
        .catch((error) => {
          setSubmitting(false);
          addToast(error.response.data.message, { appearance: 'error' });
        })
    }
  });

  // ** Handle modal closed
  const handleModalClosed = () => {
    const fields = ['account', 'amount'];
    fields.forEach(field => formik.setFieldValue(field, '', false));
  };

  return (
    <Fragment>
      <div className="line-card-widget text-center">
        <div className="card roe-shadow-2">
          <div className="card-body c-dark">
            <div className="d-flex justify-content-end">
              <p className="mb-0 fs-14 bold-text" 
                style={{cursor: 'pointer'}}
                onClick={toggleBalance}
              >
                {hidden ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
              </p>
            </div>
            <h4 className="fs-20 text-muted">Wallet Balance</h4>
            <p className="text-white display-4">
              ₦{hidden ? '****' : (props.userData && props.userData.balance) && addZeroes(props.userData.balance.current)}
            </p>
            <div className="align-items-center mt-3">
              <button type="submit" className="btn c-primary w-50" onClick={() => { 
                setmodal(!modal) 
                getBankAccounts()
              }}>
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal onClosed={handleModalClosed} isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader toggle={() => setmodal(!modal)} close={closeBtn}>
            <span className='mb-1'>Withdraw Funds</span>
        </ModalHeader>
        <ModalBody className='p-0'>
          <form className="pa-24" onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label>Account</label>
              <select
                  className={classnames('form-control', { 'is-invalid': formik.errors.account && formik.touched.account && true })}
                  name="account"
                  onChange={formik.handleChange}
                  value={formik.values.account}
                  onBlur={formik.handleBlur}
                  placeholder="Account"
              >
                <option>...Select Account...</option>
                {bankAccounts.map(n => 
                  <option value={n.id} key={n.id}>{n.bankName +'-'+n.accountNumber}</option>  
                )}
              </select>
              {formik.errors.account && formik.touched.account && <span className="error-msg">{formik.errors.account}</span>}
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input
                type="text"
                className={classnames('form-control', { 'is-invalid': formik.errors.amount && formik.touched.amount && true })}
                name="amount"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Amount"
              />
              {formik.errors.amount && formik.touched.amount && <span className="error-msg">{formik.errors.amount}</span>}
            </div>
            <div className="form-group">
              <label>Enter PIN</label>
              <input
                  type="password"
                  className={classnames('form-control', { 'is-invalid': formik.errors.pin && formik.touched.pin && true })}
                  name="pin"
                  value={formik.values.pin}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Pin"
              />
              {formik.errors.pin && formik.touched.pin && <span className="error-msg">{formik.errors.pin}</span>}
            </div>
            <Button type="submit" className="c-primary mt-4 w-100 py-2">
              {formik.isSubmitting ? <Spinner color='white' size='sm' /> : 'Done'}
            </Button>
          </form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    ...state.auth
  };
};

export default connect(mapStateToProps, null)(WalletBalance);

