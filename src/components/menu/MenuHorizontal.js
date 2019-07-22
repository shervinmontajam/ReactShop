import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const MenuHorizontal = ({ pageList }) => {
  console.log(pageList);

  const list = pageList.map(page => {
    return (
      <li key={page.id}>
        <Link to={page.action}>{page.name}</Link>
      </li>
      );
  });


  return (
    <ul>
      {list}
    </ul>
  );
}

const mapStateToProps = state => {
  return { pageList: state.pageList };
};
export default connect(
  mapStateToProps
)(MenuHorizontal);