import React from "react";
import PageTitle from "components/common/PageTitle";

const Support = (props) => {
    const titleStyle = {
        background: '#014278',
        color: 'white',
        fontWeight: 600
    };

    return (
        <div>
            <PageTitle
                title="sidebar.support"
                history={props.history}
            />
            <div className="container">
                <div className="card">
                    <div className="card-header" style={titleStyle}>
                        <div className="card-title mb-0">
                            Help Desk
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="pa-10">
                            <p className="font-weight-bold">Phone Number</p>
                            <span>+2348069936564</span>
                        </div>
                        <div className="pa-10">
                            <p className="font-weight-bold">Support Email</p>
                            <span>support@bitway.ng</span>
                        </div>
                        <div className="pa-10">
                            <p className="font-weight-bold">Report a Bug</p>
                            <span>Dev@bitway.ng</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;