import React, { Fragment } from "react";
import HorizontalSidebarWrapper from "./hor-sidebar.style";
import { NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";
import { HorizontalSidebarData } from "utility/utils/data/sidebar";
import IntlMessages from "utility/utils/intlMessages";
import { logoReversed } from "utility/helper/constant";
import { avatar } from "utility/helper/constant";
import { connect } from "react-redux";
import { compose } from "redux";
import AuthActions from "redux/auth/actions";
import { withRouter } from "react-router-dom";
import { UncontrolledPopover, PopoverBody } from "reactstrap";
const { logout } = AuthActions;

const HorizontalSidebar = props => {
  const userSignout = () => {
    props.logout();
  };

  return (
    <HorizontalSidebarWrapper {...props}>
      <div style={{background:'#014278'}}>
        <div className="container">
          <div className="horizontal-nav justify-content-between">
            <div className="hor_menu-icon">
              <i
                className="fas fa-bars"
                onClick={() => props.drawerMiniMethod()}
              ></i>
            </div>
            <img className="hor_logo" src={logoReversed} alt="logo" width="150px" 
              style={{cursor:'pointer'}}
              onClick={() => props.history.push("/dashboard")}
            />
            <div className="d-flex">
              {HorizontalSidebarData.map((nav, i) => {
                return (
                  <Fragment key={i}>
                    {!nav.hasOwnProperty("child") ? (
                      <NavLink to={nav.routepath} className="hor_nav-link text-upper">
                        <div className="mr-8">
                          <i className={nav.iconClass}></i>
                        </div>
                        <IntlMessages id={nav.name} />
                      </NavLink>
                    ) : (
                      <NavMenu {...props} data={nav} index={i} />
                    )}
                  </Fragment>
                );
              })}
            </div>
            <div className="main-screen-profile">
              <div id="profile">
                <img 
                  className="hor_profile" 
                  src={avatar} 
                  alt="notify" 
                  style={{cursor:'pointer'}} 
                />
              </div>
              <UncontrolledPopover
                className="roy-menu"
                innerClassName="roy-inner-content"
                placement="top-start"
                target="profile"
                trigger="legacy"
              >
                <PopoverBody>
                  <div
                    className="roy-menu-list"
                    onClick={() => props.history.push("/dashboard/account/profile")}
                  >
                    Profile
                  </div>
                  <div className="roy-menu-list"
                    onClick={() => props.history.push("/dashboard/support")}
                  >
                    Support
                  </div>
                  <div className="roy-menu-list" onClick={userSignout}>
                    Logout
                  </div>
                </PopoverBody>
              </UncontrolledPopover>
            </div>
          </div>
        </div>
      </div>
    </HorizontalSidebarWrapper>
  );
};

export default compose(
  withRouter,
  connect(
    null,
    { logout }
  )
)(HorizontalSidebar);
