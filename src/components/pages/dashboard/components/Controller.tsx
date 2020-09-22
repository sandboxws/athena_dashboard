import React from "react";
import { Button, Table } from "semantic-ui-react";
import { IController } from "../../../../generated/graphql";
import { Link } from "react-router-dom";
import voca from "voca";

interface Props {
  controller: IController;
}

export default function Controller(props: Props) {
  const {
    id,
    name,
    action,
    path,
    logsCount,
    totalDuration,
    createdAt,
  } = props.controller;

  return (
    <Table.Row verticalAlign="middle">
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{action}</Table.Cell>
      <Table.Cell>{voca.truncate(path, 99)}</Table.Cell>
      <Table.Cell>{logsCount}</Table.Cell>
      <Table.Cell>{totalDuration}s</Table.Cell>
      <Table.Cell>{createdAt}</Table.Cell>
      <Table.Cell>
        <Button as={Link} size="mini" color="purple" to={`/controllers/${id}`}>
          Inspect
        </Button>
      </Table.Cell>
    </Table.Row>
  );
}
