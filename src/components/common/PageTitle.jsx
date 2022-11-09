import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import IntlMessages from "utility/utils/intlMessages";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const PageTitle = ({ title, sidebarTheme, className, breadCrumb, history }) => {
    return (
        <Fragment>
            <div className="new-page-title">
                <div className="container">
                    <div className={classNames("Page-title", className)}>
                        <div className="title d-flex align-items-center">
                            <span className="title-icon" onClick={() => history.goBack()}><i className="fas fa-angle-left"></i></span>
                            <IntlMessages id={title} />
                        </div>
                    </div>
                    {breadCrumb && (
                        <div>
                            <Breadcrumb className="custom-breadcumb">
                                {breadCrumb &&
                                    breadCrumb.map((e, i) => {
                                        if (i === breadCrumb.length - 1) {
                                            return (
                                                <BreadcrumbItem key={i} active>
                                                    <IntlMessages id={e.name} />
                                                </BreadcrumbItem>
                                            );
                                        } else {
                                            return (
                                                <BreadcrumbItem
                                                    className="breadcumb-color"
                                                    key={i}
                                                >
                                                    <IntlMessages id={e.name} />
                                                </BreadcrumbItem>
                                            );
                                        }
                                    })
                                }
                            </Breadcrumb>
                        </div>
                    )}
                </div>
            </div>
        </Fragment>
    );
};

PageTitle.propTypes = {
    title: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    return {
        ...state.themeChanger
    };
};

export default connect(
    mapStateToProps,
    null
)(PageTitle);
