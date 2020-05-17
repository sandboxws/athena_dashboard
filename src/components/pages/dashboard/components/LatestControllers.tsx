import React from "react";
import { Table, Divider } from "semantic-ui-react";
import Controller from "./Controller";
import { IController } from "../../../../generated/graphql";

interface Props {
  mongodbLatestControllers: IController[];
}

export default function LatestControllers(props: Props) {
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
            <Table.HeaderCell>Queries Count</Table.HeaderCell>
            <Table.HeaderCell>Total Duration</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell width="one">…</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {mongodbLatestControllers.map((controller) => (
            <Controller key={controller.id} controller={controller} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
