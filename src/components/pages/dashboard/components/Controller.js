import React, { Component } from 'react';
import { Accordion, Button, Icon, Table } from 'semantic-ui-react'

export default class Controller extends Component {
  render() {
    const { name, action, path, logsCount } = this.props.controller;

    return (
      <Table.Row verticalAlign="middle">
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{action}</Table.Cell>
        <Table.Cell>{path}</Table.Cell>
        <Table.Cell>{logsCount}</Table.Cell>
        <Table.Cell>
          <Button size="mini" color="blue">Inspect</Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}
