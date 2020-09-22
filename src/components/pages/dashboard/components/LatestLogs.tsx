import React from "react";
import { Table, Divider } from "semantic-ui-react";
import Log from "../../../common/logs/Log";
import { ILog } from "../../../../generated/graphql";

interface Props {
  mongodbLatestLogs: ILog[];
}

export default function LatestLogs(props: Props) {
  const { mongodbLatestLogs } = props;
  return (
    <div className="mt-10">
      <div className="px-5 py-4 mt-10 bg-white shadow-md rounded-lg">
        <h3 className="ml-2 mb-0 pb-2 text-purple-500 border-b border-gray-200">
          Latest Queries
        </h3>
        <Table celled striped sortable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Collection</Table.HeaderCell>
              <Table.HeaderCell>Operation</Table.HeaderCell>
              <Table.HeaderCell>App</Table.HeaderCell>
              <Table.HeaderCell>Source</Table.HeaderCell>
              <Table.HeaderCell>Command</Table.HeaderCell>
              <Table.HeaderCell>Duration</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell width="one">Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {mongodbLatestLogs.map((log) => (
              <Log key={log.id} log={log} />
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
