import React from 'react';
import { connect } from 'react-redux';
import { withRouter  } from "react-router-dom";
import { Menu , MenuItem } from '@progress/kendo-react-layout';

class MenuHorizontal extends React.Component {

  list = this.props.pageList.map(page => {
    return (
        <MenuItem key={page.id} text={page.name} data={{ route: page.action }} />
      );
  });

  onSelect = (event) => {
    this.props.history.push(event.item.data.route);
  } 

  render(){
    return (
      <Menu onSelect={this.onSelect}>
        {this.list}
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return { pageList: state.pageList };
};
export default connect(
  mapStateToProps
)(withRouter(MenuHorizontal));