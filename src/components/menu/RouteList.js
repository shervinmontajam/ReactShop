import React from 'react';
import { connect } from 'react-redux';

const RouteList = ({ pageList }) => {
    return (
        <h3>RouteList</h3>
    );
}

const mapStateToProps = state => {
    return { pageList: state.pageList };
  };
  export default connect(
    mapStateToProps
  )(RouteList);