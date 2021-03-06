import React from "react";
import { Table, Divider } from "semantic-ui-react";
import SidekiqWorker from "./SidekiqWorker";
import { ISidekiqWorker } from "../../../../generated/graphql";

interface Props {
  sidekiqWorkers: ISidekiqWorker[];
}

export default function LatestSidekiqWorkers(props: Props) {
  const { sidekiqWorkers } = props;
  return (
    <div className="mt-10">
      <Divider horizontal>Latest Sidekiq Workers</Divider>
      <Table celled striped sortable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Worker</Table.HeaderCell>
            <Table.HeaderCell>Queue</Table.HeaderCell>
            <Table.HeaderCell>JID</Table.HeaderCell>
            <Table.HeaderCell>Queries Count</Table.HeaderCell>
            <Table.HeaderCell>Total Duration</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell width="one">…</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {sidekiqWorkers.map((sidekiqWorker) => (
            <SidekiqWorker
              key={sidekiqWorker.id}
              sidekiqWorker={sidekiqWorker}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
