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
  useLatestDelayedJobsWithStatsQuery,
  IDelayedJob,
} from "../../../generated/graphql";
import DelayedJob from "./components/DelayedJob";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface State {
  activePage?: string | number | undefined;
  boundaryRange?: number;
  selectedQueues?: string[];
  selectedJobs?: string[];
  showEllipsis?: boolean;
  showFirstAndLastNav?: boolean;
  showPreviousAndNextNav?: boolean;
  siblingRange?: number;
  totalPages?: number;
}

const initialState = {
  activePage: 1,
  selectedQueues: [],
  selectedJobs: [],
  showEllipsis: true,
  showFirstAndLastNav: true,
  showPreviousAndNextNav: true,
  totalPages: 0,
} as State;

export default function DelayedJobs() {
  const [state, setState] = useState(initialState);

  const { loading, error, data } = useLatestDelayedJobsWithStatsQuery({
    variables: {
      page: state.activePage as number,
      limit: 25,
      jobs: state.selectedJobs as string[],
      mode: "aggregate",
    },
    fetchPolicy: "cache-and-network",
  });
  if (loading) return <div>Fetching data</div>;
  if (error) return <div>Error: {error}</div>;

  const delayedJobsWithStats = data?.delayedJobsWithStats;
  const delayedJobs = delayedJobsWithStats?.delayedJobs.nodes as IDelayedJob[];
  const totalPages = delayedJobsWithStats?.delayedJobs.totalPages || 0;
  const totalItems = delayedJobsWithStats?.delayedJobs.totalItems || 0;
  const queriesCount = delayedJobsWithStats?.queriesCount || 0;
  const totalDuration = delayedJobsWithStats?.totalDuration || 0;
  const jobs = delayedJobsWithStats?.jobs;
  // const queues = DelayedJobsWithStats?.queues;

  const handlePaginationChange = (
    _e: SyntheticEvent,
    data: PaginationProps
  ) => {
    setState({ ...state, activePage: data.activePage });
  };

  return (
    <div className="px-5 py-4 bg-white shadow-md rounded-lg">
      <PageTitle title="Delayed Jobs" />
      <Label horizontal color="teal">
        Total Jobs Count
        <Label.Detail>
          <FontAwesomeIcon icon="check-circle" className="mr-1" />
          {totalItems}
        </Label.Detail>
      </Label>
      <Label horizontal color="pink">
        Total Queries Count
        <Label.Detail>
          <FontAwesomeIcon icon="database" className="mr-1" />
          {queriesCount}
        </Label.Detail>
      </Label>
      <Label horizontal color="black">
        Queries Duration
        <Label.Detail>
          <FontAwesomeIcon icon="clock" className="mr-1" />
          {totalDuration} seconds
        </Label.Detail>
      </Label>
      <div className="mt-10">
        <Dropdown
          className="mr-5"
          options={jobs?.map((job) => ({
            key: job,
            value: job,
            text: job,
          }))}
          placeholder="Filter jobs"
          search
          clearable
          multiple
          selection
          defaultValue={state.selectedJobs}
          onChange={(_e: SyntheticEvent, optionsObj: DropdownProps) =>
            setState({
              ...state,
              activePage: 1,
              selectedJobs: optionsObj.value as string[],
            })
          }
        />

        <Table basic="very" stripped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell className="sortable">Worker</Table.HeaderCell>
              <Table.HeaderCell>Queue</Table.HeaderCell>
              <Table.HeaderCell>JID</Table.HeaderCell>
              <Table.HeaderCell>Queries Count</Table.HeaderCell>
              <Table.HeaderCell>Min Duration</Table.HeaderCell>
              <Table.HeaderCell>Max Duration</Table.HeaderCell>
              <Table.HeaderCell>Average Duration</Table.HeaderCell>
              <Table.HeaderCell>&nbsp;</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {delayedJobs.map((delayedJob) => (
              <DelayedJob key={delayedJob.id} delayedJob={delayedJob} />
            ))}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="7">
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
