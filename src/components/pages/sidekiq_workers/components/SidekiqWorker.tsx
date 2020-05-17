import React from "react";
import { Button, Table, Label } from "semantic-ui-react";
import { ISidekiqWorker } from "../../../../generated/graphql";
import { Link } from "react-router-dom";

type State = {
  activeIndex: number;
};

interface Props {
  sidekiqWorker: ISidekiqWorker;
}

export default function SidekiqWorker(props: Props) {
  const {
    id,
    worker,
    queue,
    jid,
    logsCount,
    minDuration,
    maxDuration,
    avgDuration,
  } = props.sidekiqWorker;
  return (
    <Table.Row verticalAlign="middle">
      <Table.Cell>{worker}</Table.Cell>
      <Table.Cell>
        <Label>{queue}</Label>
      </Table.Cell>
      <Table.Cell>{jid}</Table.Cell>
      <Table.Cell>{logsCount}</Table.Cell>
      <Table.Cell>{minDuration}s</Table.Cell>
      <Table.Cell>{maxDuration}s</Table.Cell>
      <Table.Cell>{avgDuration}s</Table.Cell>
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
