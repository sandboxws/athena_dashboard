import React from "react";
import { Button, Table, Label } from "semantic-ui-react";
import { IDelayedJob } from "../../../../generated/graphql";
import { Link } from "react-router-dom";

type State = {
  activeIndex: number;
};

interface Props {
  delayedJob: IDelayedJob;
}

export default function DelayedJob(props: Props) {
  const {
    id,
    job,
    queue,
    jid,
    queriesCount,
    minDuration,
    maxDuration,
    avgDuration,
  } = props.delayedJob;
  return (
    <Table.Row verticalAlign="middle">
      <Table.Cell>{job}</Table.Cell>
      <Table.Cell>
        <Label>{queue}</Label>
      </Table.Cell>
      <Table.Cell>{jid}</Table.Cell>
      <Table.Cell>{queriesCount}</Table.Cell>
      <Table.Cell>{minDuration}s</Table.Cell>
      <Table.Cell>{maxDuration}s</Table.Cell>
      <Table.Cell>{avgDuration}s</Table.Cell>
      <Table.Cell>
        <Button as={Link} size="mini" color="blue" to={`/delayed_jobs/${id}`}>
          Inspect
        </Button>
      </Table.Cell>
    </Table.Row>
  );
}
