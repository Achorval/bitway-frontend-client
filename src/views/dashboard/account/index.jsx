import React from "react";
import { connect } from "react-redux";
import Profile from "components/account/profile";
import Security from "components/account/security";
import BankAccount from "components/account/bankAccount";
import { Route, Switch, Redirect } from "react-router-dom";

const UserProfile = ({ history, userData }) => {

    const activePanel = url => {
        return history.push(url)
    };

    const titleStyle = {
        background: '#014278',
        color: 'white',
        fontWeight: 600
    };

    const profileTabLink = {
        borderBottom: `2px solid`,
        borderColor: '#014278',
        color: '#014278'
    };

    return (
        <div className="Profile-component">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-xl-12">
                        <div className="card">
                            <div className="card-header">
                                <ul className="list-inline theme-color mb-0">
                                    <li
                                        style={history.location.pathname === '/dashboard/account/profile' ? profileTabLink : {}}
                                        className="list-inline-item profile-list"
                                        onClick={() => activePanel("/dashboard/account/profile")}
                                    >
                                        Profile
                                    </li>
                                    <li
                                        style={history.location.pathname === '/dashboard/account/security' ? profileTabLink : {}}
                                        className="list-inline-item profile-list"
                                        onClick={() => activePanel("/dashboard/account/security")}
                                    >
                                        Security
                                    </li>
                                    <li
                                        style={history.location.pathname === '/dashboard/account/bankAccounts' ? profileTabLink : {}}
                                        className="list-inline-item profile-list"
                                        onClick={() => activePanel("/dashboard/account/bankAccounts")}
                                    >
                                        Bank Account
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <Switch>
                                    <Route path='/dashboard/account/profile'>
                                        <Profile titleStyle={titleStyle} userData={userData} />
                                    </Route>
                                    <Route path='/dashboard/account/security'>
                                        <Security titleStyle={titleStyle} />
                                    </Route>
                                    <Route path='/dashboard/account/bankAccounts'>
                                        <BankAccount />
                                    </Route>
                                    <Route
                                        exact
                                        path="/dashboard/account"
                                        render={() => <Redirect to="/dashboard/account/profile" />}
                                    />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ...state.auth,
        ...state.themeChanger
    };
};

export default connect(
    mapStateToProps,
    null
)(UserProfile);
