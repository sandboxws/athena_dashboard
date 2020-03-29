import React from 'react';
import { Table } from 'semantic-ui-react'
import Log from './Log';

function LatestLogs(props) {
  // To be fetched from GQL
  const latestLogs = [
    { collection: 'passes', operation: 'find', command: '{}', duration: 0.18805 },
    { collection: 'stripe_connect_permissions', operation: 'find', command: '{}', duration: 0.17716 },
  ];
  return (
    <div>
      <h2 class="text-xl mb-3 text-gray-700">
        Latest Logs
      </h2>
      <Table celled striped>
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
          { latestLogs.map(log => <Log log={log} />) }
        </Table.Body>
      </Table>
    </div>
  );
}

export default LatestLogs;
