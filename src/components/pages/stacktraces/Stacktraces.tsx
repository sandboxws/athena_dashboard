import React, { useState, SyntheticEvent } from "react";
import { Table, Pagination, PaginationProps } from "semantic-ui-react";
import PageTitle from "../../common/PageTitle";
import {
  useLatestStacktracesQuery,
  IStacktrace,
} from "../../../generated/graphql";
import Stacktrace from "./components/Stacktrace";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface State {
  activePage?: string | number | undefined;
  boundaryRange?: number;
  siblingRange?: number;
  showEllipsis?: boolean;
  showFirstAndLastNav?: boolean;
  showPreviousAndNextNav?: boolean;
  totalPages?: number;
  selectedNames?: string[];
}

const initialState = {
  activePage: 1,
  showEllipsis: true,
  showFirstAndLastNav: true,
  showPreviousAndNextNav: true,
  totalPages: 0,
  selectedNames: [],
} as State;

export default function Stacktraces() {
  const [state, setState] = useState(initialState);

  const { loading, error, data } = useLatestStacktracesQuery({
    variables: {
      page: state.activePage as number,
      limit: 25,
    },
    fetchPolicy: "cache-and-network",
  });
  if (loading) return <div>Fetching data</div>;
  if (error) return <div>Error: {error}</div>;

  const awesomeStacktraces = data?.stacktraces;
  const stacktraces = awesomeStacktraces?.nodes as IStacktrace[];
  const totalPages = awesomeStacktraces?.totalPages || 0;

  const handlePaginationChange = (
    _e: SyntheticEvent,
    data: PaginationProps
  ) => {
    setState({ ...state, activePage: data.activePage });
  };

  return (
    <>
      <PageTitle title="Stacktraces" />
      <div className="mt-10">
        <Table basic="very" stripped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell className="sortable">
                Stacktrace
              </Table.HeaderCell>
              <Table.HeaderCell>Queries Count</Table.HeaderCell>
              <Table.HeaderCell>Min Duration</Table.HeaderCell>
              <Table.HeaderCell>Max Duration</Table.HeaderCell>
              <Table.HeaderCell>Average Duration</Table.HeaderCell>
              <Table.HeaderCell>&nbsp;</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {stacktraces.map((stacktrace) => (
              <Stacktrace key={stacktrace.id} stacktrace={stacktrace} />
            ))}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="6">
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
    </>
  );
}
