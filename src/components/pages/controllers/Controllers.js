// React
import React, { Component } from 'react';
import { Container, Table } from 'semantic-ui-react';
import PageTitle from '../../common/PageTitle';
import Controller from './Controller';

export default class Controllers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controllers: [
        { controller: 'GraphqlController', action: 'execute', path: '/graphql', logs: 259, duration: 0.503 },
        { controller: 'Api::V2::ListingsController', action: 'show', path: '/api/v2/listings/0CTPZ8', logs: 0.314, duration: 0.314 }
      ]
    };
  }
  render() {
    return (
      <>
        <PageTitle title="Controllers" />
        <Table celled striped sortable>
          <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Controller</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
            <Table.HeaderCell>Path</Table.HeaderCell>
            <Table.HeaderCell>Logs</Table.HeaderCell>
            <Table.HeaderCell>Duration</Table.HeaderCell>
            <Table.HeaderCell>...</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.controllers.map(controller => <Controller controller={controller} />)}
          </Table.Body>
        </Table>
      </>

    )
  }
}
