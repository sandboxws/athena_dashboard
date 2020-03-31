import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';

// function Controller(props) {
  export default class Controller extends Component {
    constructor(props) {
      super(props);
      this.state = {
        controller: props.controller.controller,
        action: props.controller.action,
        path: props.controller.path,
        logs: props.controller.logs,
        duration: props.controller.duration
      };
    }
  // const { controller, action, path, logs, duration } = props.controller;
  render() {
    return (
      <Table.Row verticalAlign="middle">
        <Table.Cell>{this.state.controller}</Table.Cell>
        <Table.Cell>{this.state.action}</Table.Cell>
        <Table.Cell>{this.state.path}</Table.Cell>
        <Table.Cell>{this.state.logs}</Table.Cell>
        <Table.Cell>{this.state.duration}</Table.Cell>
        <Table.Cell>
          <Button>Inspect</Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}
// export default Controller;
