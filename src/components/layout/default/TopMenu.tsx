import React, { Component, SyntheticEvent } from "react";
import { Menu, MenuItemProps } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class TopMenu extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e: SyntheticEvent, data: MenuItemProps) =>
    this.setState({ activeItem: data.name });

  render() {
    const { activeItem } = this.state;

    return (
      <>
        <Menu inverted>
          <Menu.Item header>Awesome Explain</Menu.Item>
          <Menu.Item
            as={Link}
            name="dashboard"
            to="/"
            active={activeItem === "dashboard"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            name="queries"
            to="/queries"
            active={activeItem === "queries"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            name="SQL queries"
            to="/sql_queries"
            active={activeItem === "sql_queries"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            name="controllers"
            to="/controllers"
            active={activeItem === "controllers"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            name="Sidekiq Workers"
            to="/sidekiq_workers"
            active={activeItem === "sidekiq_workers"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            name="stacktraces"
            to="/stacktraces"
            active={activeItem === "stacktraces"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </>
    );
  }
}
