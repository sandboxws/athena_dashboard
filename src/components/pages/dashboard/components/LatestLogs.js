import React from 'react';
import { Table } from 'semantic-ui-react'
import Log from './Log';
import { Query } from 'react-apollo';
import { DASHBOARD_LATEST_LOGS_GQL } from '../../../../queries/pages/dashboard';

function LatestLogs(props) {
  const { mongodbLatestLogs } = props;
  return (
    <div>
      <h2 className="text-xl mb-3 text-gray-700">
        Latest Logs
      </h2>
      <Table celled striped sortable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Collection</Table.HeaderCell>
            <Table.HeaderCell>Operation</Table.HeaderCell>
            <Table.HeaderCell>Command</Table.HeaderCell>
            <Table.HeaderCell>Duration</Table.HeaderCell>
            <Table.HeaderCell width='one'>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {mongodbLatestLogs.map(log => <Log key={log.id} log={log} />)}
        </Table.Body>
      </Table>
    </div>
  );
}

export default LatestLogs;
