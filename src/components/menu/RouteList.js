import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import _ from 'lodash';

import {moduleList} from './ModuleList';
import Notfound from "../shared/errors/not-found/NotFound";


const RouteList = ({ pageList }) => {

  const filteredPageList = _.filter(pageList, page => (page.moduleName !== "" && page.type !== "no-action"));
  const routes = filteredPageList.map(page => {
      return <Route key={page.id} path={page.action} exact component={moduleList.find(item=> item.moduleName === page.moduleName).module} />;
  });

  return (
    <Switch>
      {routes}
      <Route component={Notfound} />
    </Switch>
  );
};

const mapStateToProps = state => {
  return { pageList: state.pageList };
};
export default connect(mapStateToProps)(RouteList);
