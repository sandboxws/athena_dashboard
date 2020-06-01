import React, { useState, SyntheticEvent } from "react";
import {
  Table,
  Pagination,
  PaginationProps,
  DropdownProps,
  // Checkbox,
} from "semantic-ui-react";
import PageTitle from "../../common/PageTitle";
import { Dropdown } from "semantic-ui-react";
import {
  useLatestControllersQuery,
  IController,
} from "../../../generated/graphql";
import Controller from "./components/Controller";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

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

export default function Controllers() {
  const [state, setState] = useState(initialState);

  const { loading, error, data } = useLatestControllersQuery({
    variables: {
      page: state.activePage as number,
      limit: 25,
      names: state.selectedNames as string[],
    },
    fetchPolicy: "cache-and-network",
  });
  if (loading) return <div>Fetching data</div>;
  if (error) return <div>Error: {error}</div>;

  const mongodbControllers = data?.mongodbControllers;
  const controllers = mongodbControllers?.nodes as IController[];
  const totalPages = mongodbControllers?.totalPages || 0;
  const names: string[] = []; // controllersWithStats?.collections

  const handlePaginationChange = (
    _e: SyntheticEvent,
    data: PaginationProps
  ) => {
    setState({ ...state, activePage: data.activePage });
  };

  return (
    <>
      <PageTitle title="Controllers" />
      <div className="mt-10">
        <Dropdown
          options={names?.map((name) => ({
            key: name,
            value: name,
            text: name,
          }))}
          placeholder="Filter controllers"
          search
          clearable
          multiple
          selection
          defaultValue={state.selectedNames}
          onChange={(_e: SyntheticEvent, optionsObj: DropdownProps) =>
            setState({
              ...state,
              activePage: 1,
              selectedNames: optionsObj.value as string[],
            })
          }
        />
        <Table basic="very" stripped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell className="sortable">
                Controller
                {/* <ul>
                  <li>
                    <FontAwesomeIcon
                      icon="sort-amount-up"
                      className="hover:text-gray-800"
                    />
                  </li>
                  <li>
                    <Dropdown icon="filter" className="icon">
                      <Dropdown.Menu>
                        <Checkbox label="ajkdnakdjnakdandskjnajkdnakdn akdsnakjdnaksjn" />
                        <Dropdown.Divider />
                        <div>
                          <div className="float-left">Select All</div>
                          <div className="float-right">Clear</div>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul> */}
              </Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
              <Table.HeaderCell>Path</Table.HeaderCell>
              <Table.HeaderCell>Queries</Table.HeaderCell>
              <Table.HeaderCell>Duration</Table.HeaderCell>
              <Table.HeaderCell>&nbsp;</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {controllers.map((controller) => (
              <Controller key={controller.id} controller={controller} />
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
