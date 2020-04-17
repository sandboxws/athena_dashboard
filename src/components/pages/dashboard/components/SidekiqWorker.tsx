import React from "react";
import { Button, Table } from "semantic-ui-react";
import { ISidekiqWorker } from "../../../../generated/graphql";
import { Link } from "react-router-dom";

interface Props {
  sidekiqWorker: ISidekiqWorker;
}

export default function Controller(props: Props) {
  const {
    id,
    worker,
    queue,
    jid,
    logsCount,
    totalDuration,
    createdAt,
  } = props.sidekiqWorker;

  return (
    <Table.Row verticalAlign="middle">
      <Table.Cell>{worker}</Table.Cell>
      <Table.Cell>{queue}</Table.Cell>
      <Table.Cell>{jid}</Table.Cell>
      <Table.Cell>{logsCount}</Table.Cell>
      <Table.Cell>{totalDuration}s</Table.Cell>
      <Table.Cell>{createdAt}</Table.Cell>
      <Table.Cell>
        <Button
          as={Link}
          size="mini"
          color="blue"
          to={`/sidekiq_workers/${id}`}
        >
          Inspect
        </Button>
      </Table.Cell>
    </Table.Row>
  );
}
