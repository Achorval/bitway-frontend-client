import SVG from "react-inlinesvg";
import React, { Fragment } from 'react';
import { loader } from 'utility/helper/constant';

const SuspenseLoading = props => {
    return (
        <Fragment>
            {
                props.loading &&
                <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
                    <div className="d-flex align-items-center flex-column px-4">
                        <SVG src={loader} />
                    </div>
                </div>
            }
        </Fragment>
    );
};

export default SuspenseLoading;