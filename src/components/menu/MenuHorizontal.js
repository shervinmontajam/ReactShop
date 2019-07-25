import React from 'react';
import { connect } from 'react-redux';
import { withRouter  } from "react-router-dom";
import { Menu } from '@progress/kendo-react-layout';
import _ from 'lodash';

class MenuHorizontal extends React.Component {


listRender = [];

componentDidMount(){
  this.loadMenus();
  console.log(this.listRender);
}


  loadMenus = () => {

    const topLevels = _.filter(this.props.pageList, page=> page.parentId === null);

    _.forEach(topLevels, page => {

      const hasChild = _.some(this.props.pageList, {parentId : page.id});

      if(!hasChild) {
        this.listRender.push({"text" : page.name, data: { route: page.action }});
      }
      else {
        this.listRender.push({"text" : page.name, data: { route: page.action }, items : this.loadRecursive(page)});
      }

    });
  }

  loadRecursive = (pageItem) => {
    const temp = [];
    const children = _.filter(this.props.pageList, page => page.parentId === pageItem.id);

    _.forEach(children, page => {
      const hasChild = _.some(this.props.pageList, {parentId : page.id});
      if(!hasChild) {
        temp.push({"text" : page.name, data: { route: page.action }});
      }

      return temp;

    });
  }

  onSelect = (event) => {
    if(event.item.data.route !== "") {
      this.props.history.push(event.item.data.route);
    }
  } 

  render(){
    return (
      <Menu items={this.listRender} onSelect={this.onSelect} />
    );
  }
}

const mapStateToProps = state => {
  return { pageList: state.pageList };
};
export default connect(
  mapStateToProps
)(withRouter(MenuHorizontal));