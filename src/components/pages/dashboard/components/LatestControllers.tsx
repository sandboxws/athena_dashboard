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
      <div className="px-5 py-4 mt-10 bg-white shadow-md rounded-lg">
        <h3 className="ml-2 mb-0 pb-2 text-purple-500 border-b border-gray-200">
          Latest Controllers
        </h3>
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
    </div>
  );
}
