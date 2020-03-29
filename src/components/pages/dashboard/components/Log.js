import React from 'react';
import { Button, Table } from 'semantic-ui-react'

function Log(props) {
  const { collection, operation, command, duration } = props.log;
  return (
    <Table.Row verticalAlign="middle">
      <Table.Cell>{collection}</Table.Cell>
      <Table.Cell>{operation}</Table.Cell>
      <Table.Cell>{command}</Table.Cell>
      <Table.Cell>{duration}</Table.Cell>
      <Table.Cell>
        <Button size="mini">Tiny</Button>
      </Table.Cell>
    </Table.Row>
  );
}

export default Log;
