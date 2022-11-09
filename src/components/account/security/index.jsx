import React from "react";
import WithdrawalPIN from "./WithdrawalPIN";
import ChangePassword from "./ChangePassword";

const Feed = ({ titleStyle }) => {
    return (
        <div className="row ma-0">
            <div className="col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12 ptb-15">
                <ChangePassword  titleStyle={titleStyle} />
            </div>
            <div className="col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12 ptb-15">
                <WithdrawalPIN titleStyle={titleStyle} />
            </div>
        </div>
    );
};

export default Feed;
