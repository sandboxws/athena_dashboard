import React, { useState, SyntheticEvent } from "react";
import Log from "../pages/dashboard/components/Log";
import { Button, Pagination, PaginationProps, Table } from "semantic-ui-react";
import { ILog, useLatestLogsWithStatsQuery } from "../../generated/graphql";
import DropdownFilter from "./DropdownFilter";

type Props = {
  controllerId?: number;
  stacktraceId?: number;
  sidekiqWorkerId?: number;
  limit?: number;
};

interface State {
  activePage?: string | number | undefined;
  boundaryRange?: number;
  siblingRange?: number;
  showEllipsis?: boolean;
  showFirstAndLastNav?: boolean;
  showPreviousAndNextNav?: boolean;
  totalPages?: number;
  selectedCollections?: string[];
  selectedOperations?: string[];
  selectedSourceNames?: string[];
}

const initialState = {
  activePage: 1,
  showEllipsis: true,
  showFirstAndLastNav: true,
  showPreviousAndNextNav: true,
  totalPages: 0,
  selectedCollections: [],
  selectedOperations: [],
  selectedSourceNames: [],
} as State;

export default function AwesomeLogs(props: Props) {
  const [state, setState] = useState(initialState);
  const { controllerId, stacktraceId, sidekiqWorkerId, limit } = props;

  const handlePaginationChange = (
    _e: SyntheticEvent,
    data: PaginationProps
  ) => {
    setState({ ...state, activePage: data.activePage });
  };

  const variables = {
    collections: state.selectedCollections as string[],
    controllerId: controllerId ?? null,
    limit: limit ?? 10,
    mode: "latest",
    operations: state.selectedOperations as string[],
    page: state.activePage as number,
    sidekiqWorkerId: sidekiqWorkerId ?? null,
    sourceNames: state.selectedSourceNames as string[],
    stacktraceId: stacktraceId ?? null,
  };

  const { loading, error, data } = useLatestLogsWithStatsQuery({
    variables: variables,
  });

  if (loading) return <div>Fetching data</div>;
  if (error) return <div>Error: {error}</div>;

  const logsWithStats = data?.logsWithStats;
  const totalPages = logsWithStats?.logs.totalPages;
  const logs = logsWithStats?.logs.nodes as ILog[];
  const collections = logsWithStats?.collections;
  const operations = logsWithStats?.operations;
  const sourceNames = logsWithStats?.sourceNames;

  return (
    <>
      {logs.length > 0 ? (
        <>
          <div className="mt-10 px-5 py-4 bg-white shadow-md rounded-lg">
            <h3 className="ml-2 m5-2 pb-2 text-purple-500 border-b border-gray-200">
              MongoDB Queries
            </h3>
            <DropdownFilter
              state={state}
              setState={setState}
              type="collections"
              items={collections}
              selectedItems={state.selectedCollections}
              selectedItemsName="selectedCollections"
            />

            <DropdownFilter
              state={state}
              setState={setState}
              type="operations"
              items={operations}
              selectedItems={state.selectedOperations}
              selectedItemsName="selectedOperations"
            />

            <DropdownFilter
              state={state}
              setState={setState}
              type="sources"
              items={sourceNames}
              selectedItems={state.selectedSourceNames}
              selectedItemsName="selectedSourceNames"
            />

            <Button
              size="mini"
              className="float-right"
              color="black"
              onClick={() => {
                setState({
                  ...state,
                  selectedCollections: [],
                  selectedOperations: [],
                  selectedSourceNames: [],
                });
              }}
            >
              Clear Filters
            </Button>

            <Table celled striped sortable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Collection</Table.HeaderCell>
                  <Table.HeaderCell>Operation</Table.HeaderCell>
                  <Table.HeaderCell>Command</Table.HeaderCell>
                  <Table.HeaderCell>Duration</Table.HeaderCell>
                  <Table.HeaderCell width="one">Action</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {logs?.map((log) => (
                  <Log key={log.id} log={log as ILog} />
                ))}
              </Table.Body>
              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan="5">
                    <Pagination
                      floated="right"
                      activePage={state.activePage}
                      onPageChange={handlePaginationChange}
                      size="mini"
                      totalPages={totalPages || 0}
                    />
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
