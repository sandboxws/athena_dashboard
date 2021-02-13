import React, { useState, SyntheticEvent } from "react";
import {
  Dropdown,
  DropdownProps,
  Label,
  Pagination,
  PaginationProps,
  Table,
} from "semantic-ui-react";
import PageTitle from "../../common/PageTitle";
import {
  ISqlQuery,
  useLatestSqlQueriesWithStatsQuery,
} from "../../../generated/graphql";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SqlQuery from "./components/SqlQuery";

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

export default function SqlQueries() {
  const [state, setState] = useState(initialState);

  const { loading, error, data } = useLatestSqlQueriesWithStatsQuery({
    variables: {
      tables: state.selectedTables as string[],
      controllerId: null,
      limit: 25,
      mode: "latest",
      operations: state.selectedOperations as string[],
      page: state.activePage as number,
      sidekiqWorkerId: null,
      delayedJobId: null,
      sourceNames: state.selectedSourceNames as string[],
      stacktraceId: null,
    },
    fetchPolicy: "cache-and-network",
  });
  if (loading) return <div>Fetching data</div>;
  if (error) return <div>Error: {error}</div>;

  const sqlQueriesWithStats = data?.sqlQueriesWithStats;
  const sqlQueries = sqlQueriesWithStats?.sqlQueries.nodes as ISqlQuery[];
  const totalDuration = sqlQueriesWithStats?.totalDuration || 0;
  const totalPages = sqlQueriesWithStats?.sqlQueries.totalPages || 0;
  const totalItems = sqlQueriesWithStats?.sqlQueries.totalItems || 0;
  const tables = sqlQueriesWithStats?.tables;
  const operations = sqlQueriesWithStats?.operations;
  const sourceNames = sqlQueriesWithStats?.sourceNames;

  const handlePaginationChange = (
    _e: SyntheticEvent,
    data: PaginationProps
  ) => {
    setState({ ...state, activePage: data.activePage });
  };

  return (
    <div className="px-5 py-4 bg-white shadow-md rounded-lg">
      <PageTitle title="SQL Queries" />
      <Label
        className="mr-3"
        horizontal
        color={totalItems >= 10000 ? "red" : "purple"}
      >
        Total Count
        <Label.Detail>
          <FontAwesomeIcon icon="database" className="mr-1" />
          {totalItems}
        </Label.Detail>
      </Label>
      <Label
        className="mr-3"
        horizontal
        color={totalDuration >= 7200 ? "red" : "green"}
      >
        Total Duration
        <Label.Detail>
          <FontAwesomeIcon icon="clock" className="mr-1" />
          {totalDuration}s
        </Label.Detail>
      </Label>
      <div className="mt-10">
        <Dropdown
          className="mr-5"
          options={tables?.map((collection) => ({
            key: collection,
            value: collection,
            text: collection,
          }))}
          placeholder="Filter tables"
          search
          clearable
          multiple
          selection
          defaultValue={state.selectedTables}
          onChange={(_e: SyntheticEvent, optionsObj: DropdownProps) =>
            setState({
              ...state,
              activePage: 1,
              selectedTables: optionsObj.value as string[],
            })
          }
        />

        <Dropdown
          className="mr-5"
          options={operations?.map((operation) => ({
            key: operation,
            value: operation,
            text: operation,
          }))}
          placeholder="Filter operations"
          search
          clearable
          multiple
          selection
          defaultValue={state.selectedOperations}
          onChange={(_e: SyntheticEvent, optionsObj: DropdownProps) =>
            setState({
              ...state,
              activePage: 1,
              selectedOperations: optionsObj.value as string[],
            })
          }
        />

        <Dropdown
          options={sourceNames?.map((sourceName) => ({
            key: sourceName,
            value: sourceName,
            text: sourceName,
          }))}
          placeholder="Filter sources"
          search
          clearable
          multiple
          selection
          defaultValue={state.selectedSourceNames}
          onChange={(_e: SyntheticEvent, optionsObj: DropdownProps) =>
            setState({
              ...state,
              activePage: 1,
              selectedSourceNames: optionsObj.value as string[],
            })
          }
        />

        <Table celled striped sortable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Collection</Table.HeaderCell>
              <Table.HeaderCell>Operation</Table.HeaderCell>
              <Table.HeaderCell>App</Table.HeaderCell>
              <Table.HeaderCell>Source</Table.HeaderCell>
              <Table.HeaderCell>Query</Table.HeaderCell>
              <Table.HeaderCell>Duration</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell width="one">…</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {sqlQueries?.map((log) => (
              <SqlQuery key={log.id} sqlQuery={log} />
            ))}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="8">
                <Pagination
                  floated="right"
                  activePage={state.activePage}
                  onPageChange={handlePaginationChange}
                  size="mini"
                  totalPages={totalPages}
                />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    </div>
  );
}
