import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class TopMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item
          as={Link}
          name='dashboard'
          to="/"
          active={activeItem === 'dashboard'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          name='logs'
          to='logs'
          active={activeItem === 'logs'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          name='controllers'
          to='controllers'
          active={activeItem === 'controllers'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          name='stacktraces'
          to='stacktraces'
          active={activeItem === 'stacktraces'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
