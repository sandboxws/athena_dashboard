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
  useLatestSidekiqWorkersWithStatsQuery,
  ISidekiqWorker,
} from "../../../generated/graphql";
import SidekiqWorker from "./components/SidekiqWorker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface State {
  activePage?: string | number | undefined;
  boundaryRange?: number;
  selectedQueues?: string[];
  selectedWorkers?: string[];
  showEllipsis?: boolean;
  showFirstAndLastNav?: boolean;
  showPreviousAndNextNav?: boolean;
  siblingRange?: number;
  totalPages?: number;
}

const initialState = {
  activePage: 1,
  selectedQueues: [],
  selectedWorkers: [],
  showEllipsis: true,
  showFirstAndLastNav: true,
  showPreviousAndNextNav: true,
  totalPages: 0,
} as State;

export default function SidekiqWorkers() {
  const [state, setState] = useState(initialState);

  const { loading, error, data } = useLatestSidekiqWorkersWithStatsQuery({
    variables: {
      page: state.activePage as number,
      limit: 25,
      workers: state.selectedWorkers as string[],
      queues: state.selectedQueues as string[],
      mode: "aggregate",
    },
    fetchPolicy: "cache-and-network",
  });
  if (loading) return <div>Fetching data</div>;
  if (error) return <div>Error: {error}</div>;

  const sidekiqWorkersWithStats = data?.sidekiqWorkersWithStats;
  const sidekiqWorkers = sidekiqWorkersWithStats?.sidekiqWorkers
    .nodes as ISidekiqWorker[];
  const totalPages = sidekiqWorkersWithStats?.sidekiqWorkers.totalPages || 0;
  const totalItems = sidekiqWorkersWithStats?.sidekiqWorkers.totalItems || 0;
  const queriesCount = sidekiqWorkersWithStats?.queriesCount || 0;
  const totalDuration = sidekiqWorkersWithStats?.totalDuration || 0;
  const workers = sidekiqWorkersWithStats?.workers;
  const queues = sidekiqWorkersWithStats?.queues;

  const handlePaginationChange = (
    _e: SyntheticEvent,
    data: PaginationProps
  ) => {
    setState({ ...state, activePage: data.activePage });
  };

  return (
    <>
      <PageTitle title="Sidekiq Workers" />
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
          options={workers?.map((worker) => ({
            key: worker,
            value: worker,
            text: worker,
          }))}
          placeholder="Filter workers"
          search
          clearable
          multiple
          selection
          defaultValue={state.selectedWorkers}
          onChange={(_e: SyntheticEvent, optionsObj: DropdownProps) =>
            setState({
              ...state,
              activePage: 1,
              selectedWorkers: optionsObj.value as string[],
            })
          }
        />

        <Dropdown
          options={queues?.map((queue) => ({
            key: queue,
            value: queue,
            text: queue,
          }))}
          placeholder="Filter queues"
          search
          clearable
          multiple
          selection
          defaultValue={state.selectedQueues}
          onChange={(_e: SyntheticEvent, optionsObj: DropdownProps) =>
            setState({
              ...state,
              activePage: 1,
              selectedQueues: optionsObj.value as string[],
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
            {sidekiqWorkers.map((sidekiqWorker) => (
              <SidekiqWorker
                key={sidekiqWorker.id}
                sidekiqWorker={sidekiqWorker}
              />
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
    </>
  );
}
