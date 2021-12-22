import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Main, Company, History } from './pages';
import { Layout } from 'components/layout';

/**
 * @title Routes
 * @description Main Router
 */
const Routes = (props) => {
  useEffect(() => {
    const unlisten = props.history.listen(() => {
        window.scrollTo(0, 0);
    });
    return () => {
        unlisten();
    };
  }, [props.history]);
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/aboutus" component={Company} />
        <Route path="/history" component={History} />
      </Switch>
    </Layout>
  );
};

export default withRouter(Routes);
