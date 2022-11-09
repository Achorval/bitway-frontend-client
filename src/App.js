import React, { Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "styled-components";
// Redux store provider
import { Provider } from "react-redux";
import { store, history, persistor } from "./redux/store";
// Style Root for making media queries to inline css
import { StyleRoot } from "radium";
// Layout Routes
import layoutRoutes from "./routes/index.jsx";
import themes from "./settings/themes";
import AppLocale from "./languageProvider";
import { themeConfig } from "./settings";
import AuthInit from './utility/utils/AuthInit';
import config, { getCurrentLanguage } from "./settings/languageConfig";
import { PersistGate } from "redux-persist/integration/react";
import SuspenseLoading from 'components/common/SuspenseLoading';
import "./assets/scss/app.scss";
import "pretty-checkbox/src/pretty-checkbox.scss";
import { ToastProvider } from 'react-toast-notifications';

const currentAppLocale =
  AppLocale[getCurrentLanguage(config.defaultLanguage || "english").locale];

const App = props => {
  return (
    <Fragment>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <ThemeProvider theme={themes[themeConfig.theme]}>
          <StyleRoot>
            <Provider store={store}>
              <PersistGate loading={<SuspenseLoading loading={true} />} persistor={persistor}>
                <AuthInit>
                  <ToastProvider>
                    {/*Start layout routes */}
                    <Router history={history}>
                      <Switch>
                        {layoutRoutes.map((prop, key) => {
                          return (
                            <Route 
                              path={prop.path}
                              component={prop.component}
                              key={key}
                              history={history}
                            />
                          );
                        })}
                      </Switch>
                    </Router>
                    {/*End layout routes */}
                  </ToastProvider>
                </AuthInit>
              </PersistGate>
            </Provider>
          </StyleRoot>
        </ThemeProvider>
      </IntlProvider>
    </Fragment>
  );
};

export default App;

