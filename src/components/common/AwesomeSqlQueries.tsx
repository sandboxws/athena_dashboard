import React, { useState, SyntheticEvent } from "react";
import SqlQuery from "../pages/dashboard/components/SqlQuery";
import {
  Button,
  Divider,
  Pagination,
  PaginationProps,
  Table,
} from "semantic-ui-react";
import {
  ISqlQuery,
  useLatestSqlQueriesWithStatsQuery,
} from "../../generated/graphql";
import DropdownFilter from "./DropdownFilter";

type Props = {
  controllerId?: number;
  stacktraceId?: number;
  sidekiqWorkerId?: number;
  delayedJobId?: number;
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
  selectedTables?: string[];
  selectedOperations?: string[];
  selectedSourceNames?: string[];
}

const initialState = {
  activePage: 1,
  showEllipsis: true,
  showFirstAndLastNav: true,
  showPreviousAndNextNav: true,
  totalPages: 0,
  selectedTables: [],
  selectedOperations: [],
  selectedSourceNames: [],
} as State;

export default function AwesomeSqlQueries(props: Props) {
  const [state, setState] = useState(initialState);
  const {
    controllerId,
    stacktraceId,
    sidekiqWorkerId,
    delayedJobId,
    limit,
  } = props;

  const handlePaginationChange = (
    _e: SyntheticEvent,
    data: PaginationProps
  ) => {
    setState({ ...state, activePage: data.activePage });
  };

  const variables = {
    tables: state.selectedTables as string[],
    controllerId: controllerId ?? null,
    limit: limit ?? 10,
    mode: "latest",
    operations: state.selectedOperations as string[],
    page: state.activePage as number,
    sidekiqWorkerId: sidekiqWorkerId ?? null,
    delayedJobId: delayedJobId ?? null,
    sourceNames: state.selectedSourceNames as string[],
    stacktraceId: stacktraceId ?? null,
  };

  const { loading, error, data } = useLatestSqlQueriesWithStatsQuery({
    variables: variables,
  });

  if (loading) return <div>Fetching data</div>;
  if (error) return <div>Error: {error}</div>;

  const sqlQueriesWithStats = data?.sqlQueriesWithStats;
  const totalPages = sqlQueriesWithStats?.sqlQueries.totalPages;
  const sqlQueries = sqlQueriesWithStats?.sqlQueries.nodes as ISqlQuery[];
  const tables = sqlQueriesWithStats?.tables;
  const operations = sqlQueriesWithStats?.operations;
  const sourceNames = sqlQueriesWithStats?.sourceNames;

  return (
    <>
      <div className="mt-10 px-5 py-4 bg-white shadow-md rounded-lg">
        <h3 className="ml-2 m5-2 pb-2 text-purple-500 border-b border-gray-200">
          SQL Queries
        </h3>
        <DropdownFilter
          state={state}
          setState={setState}
          type="tables"
          items={tables}
          selectedItems={state.selectedTables}
          selectedItemsName="selectedTables"
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
              selectedTables: [],
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
            {sqlQueries?.map((sqlQuery) => (
              <SqlQuery key={sqlQuery.id} sqlQuery={sqlQuery as ISqlQuery} />
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
  );
}
