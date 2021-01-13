import React from "react";
import { Button, Table } from "semantic-ui-react";
import { IAwesomeController } from "../../../../generated/graphql";
import { Link } from "react-router-dom";
import voca from "voca";

interface Props {
  controller: IAwesomeController;
}

export default function Controller(props: Props) {
  const {
    id,
    name,
    action,
    path,
    logsCount,
    sqlQueriesCount,
    totalDuration,
    sqlTotalDuration,
  } = props.controller;
  return (
    <Table.Row verticalAlign="middle">
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{action}</Table.Cell>
      <Table.Cell>{voca.truncate(path, 99)}</Table.Cell>
      <Table.Cell>{(logsCount || 0) + (sqlQueriesCount || 0)}</Table.Cell>
      <Table.Cell>{(totalDuration || 0) + (sqlTotalDuration || 0)}s</Table.Cell>
      <Table.Cell>
        <Button as={Link} size="mini" color="purple" to={`/controllers/${id}`}>
          Inspect
        </Button>
      </Table.Cell>
    </Table.Row>
  );
}
