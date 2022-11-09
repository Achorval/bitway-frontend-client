import React, { useState, useEffect, useCallback, Fragment } from "react";
import ReactTableWrapper from "components/reacttable/reacttbl.style";
import { contentLoader, empty } from 'utility/helper/constant';
import axiosInstance from "utility/utils/useAxios";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Badge } from "reactstrap";
import SVG from "react-inlinesvg";
import moment from 'moment'

const RecentTransactions = props => {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [historyData, setHistoryData] = useState([]);

  const callApi = useCallback(() => {
    setIsLoading(true);
    const params = {
      page: page,
      perPage: perPage
    };
    axiosInstance.get('/transactions', {
      params 
    })
    .then((response) => {
      setIsLoading(false);
      setHistoryData(response.data.data.data);
    })
    .catch((error) => {
      setIsLoading(false);
      console.log(error.response);
    });
  }, [page, perPage]);

  useEffect(() => {
    // Call api here
      setPage(0);
      setPerPage(5);
      callApi();
  }, [page, callApi]);

  const activeColor = {
    color: "#563c91"
  };
  
  let sn = 1;

  // ** renders client status
  const renderStatus = value => { 
    var status;
    switch (value) {
    case 'success':
        status = <Badge className="c-success">Success</Badge>;
        break;
    case 'pending':
        status = <Badge className="c-warning">pending</Badge>;
        break;
    case 'processing':
        status = <Badge className="c-info">processing</Badge>;
        break;
    default:
        status = <Badge className="c-danger">Failed</Badge>;
        break;
    }
    return status;
  };

  return (
    <ReactTableWrapper {...props}>
      <div className="mb-15">
        <div className="introduction" style={activeColor}>
          Recent History
        </div>
      </div>
      <div className="roe-card-style mtb-15">
        <div className="roe-card-header module-header">
          <div className="flex-1">
            <span className="hash"># </span> Recent History List
          </div>
        </div>
        {!isLoading ? (Array.isArray(historyData) && historyData.length > 0) ? 
          <Fragment>
            <div className="table-container text-center overflow-auto">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>SN</th>
                    <th>Date</th>
                    <th>Service</th>
                    <th>Reference</th>
                    <th>Narration</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {historyData.map((e, i) => (
                    <tr key={i}>
                      <td>{sn++}</td>
                      <td>{moment.utc(e.createdAt).local().format('MM-DD-YYYY, h:mm a')}</td>
                      <td>{e.service.name}</td>
                      <td>{e.reference}</td>
                      <td>{e.narration}</td>
                      <td>
                        {e.type !== 'credit' ? (
                          <Badge className="c-danger">
                              ₦{e.amount}
                          </Badge>
                          ) : (
                          <Badge className="c-success">
                              ₦{e.amount}
                          </Badge>
                        )}
                      </td>
                      <td>{renderStatus(e.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Fragment> : 
          <div className="d-flex align-items-center flex-column justify-content-center text-center py-5">
            <SVG src={empty} />
            <div className="text-center">
              <span className="text-muted font-size-xl d-block mb-2">
                You haven’t made any trades yet.
              </span>
            </div>
          </div>
        : <div className="d-flex align-items-center flex-column justify-content-center text-center py-5">
        <SVG src={contentLoader} /></div>}
      </div>
    </ReactTableWrapper>
  );
};

const mapStateToProps = state => {
  return {
    ...state.themeChanger
  };
};

export default connect(mapStateToProps, null)(withRouter(RecentTransactions));
