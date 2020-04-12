import React from 'react';
import { Table, Divider } from 'semantic-ui-react'
import Controller from './Controller';
import { Query } from 'react-apollo';
import { DASHBOARD_LATEST_LOGS_GQL } from '../../../../queries/pages/dashboard';

function LatestControllers(props) {
  const { mongodbLatestControllers } = props;
  return (
    <div className="mt-10">
      <Divider horizontal>Latest Controllers</Divider>
      <Table celled striped sortable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Controller</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
            <Table.HeaderCell>Path</Table.HeaderCell>
            <Table.HeaderCell>Logs Count</Table.HeaderCell>
            <Table.HeaderCell width='one'>…</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {mongodbLatestControllers.map(controller => <Controller key={controller.path} controller={controller} />)}
        </Table.Body>
      </Table>
    </div>
  );
}

export default LatestControllers;
