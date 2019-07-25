import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Menu } from "@progress/kendo-react-layout";
import _ from "lodash";

class MenuHorizontal extends React.Component {
  listRender = [];

  componentDidMount() {
    this.loadMenus();
    console.log(this.listRender);
  }

  loadMenus = () => {
    const topLevels = _.filter(
      this.props.pageList,
      page => page.parentId === null
    );
    _.forEach(topLevels, page => {
      const menu = { text: page.name, data: { route: page.action }, items: [] };
      this.addChilds(page, menu);
      this.listRender.push(menu);
    });
  };

  addChilds = (pageItem, menu) => {
    const children = _.filter(
      this.props.pageList,
      page => page.parentId === pageItem.id
    );
    _.forEach(children, page => {
      const temp = { text: page.name, data: { route: page.action }, items: [] };
      menu.items.push(temp);
      this.addChilds(page, temp);
    });
  };

  onSelect = event => {
    if (event.item.data.route !== "") {
      this.props.history.push(event.item.data.route);
    }
  };

  render() {
    return (
      <div class="navigation">
        <div class="navigation__navbar">
          <Menu items={this.listRender} onSelect={this.onSelect} />
        </div>
        <div class="navigation__drawer">
          <h4 class="heading-3 heading-3--dark">
            <localize word-code="@typeof(WC_UI_Web_Common.CompanyRelating.CompanyFullName)" />
          </h4>
          <div id="btnDrawerTriger" class="navigation__drawer-btn">
            <i class="fas fa-bars fa-2x" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { pageList: state.pageList };
};
export default connect(mapStateToProps)(withRouter(MenuHorizontal));
