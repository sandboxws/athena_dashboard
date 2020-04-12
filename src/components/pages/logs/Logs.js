// React
import React, { Component } from 'react';
import { Label, Table, Menu, Icon, Pagination, Divider } from 'semantic-ui-react';
import { Query } from 'react-apollo';
import { range, uniqBy, prop } from 'ramda/src';
import { LATEST_LOGS_WITH_STATS_GQL, GLOBAL_STATS_GQL } from '../../../queries/pages/logs';
import Log from './components/Log';
import PageTitle from '../../common/PageTitle';
import { Dropdown, Input } from 'semantic-ui-react'
import operationColor from '../../common/CommandColors';


export default class Logs extends Component {
  state = {
    activePage: 1,
    // boundaryRange: 1,
    // siblingRange: 1,
    showEllipsis: true,
    showFirstAndLastNav: true,
    showPreviousAndNextNav: true,
    totalPages: 0,
    selectedCollections: [],
    selectedOperations: [],
  }

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

  render() {
    const {
      activePage,
      boundaryRange,
      siblingRange,
      showEllipsis,
      showFirstAndLastNav,
      showPreviousAndNextNav,
      totalPages
    } = this.state;

    return (
      <>
        <PageTitle title="Logs" />
        <Query query={LATEST_LOGS_WITH_STATS_GQL} variables={{ page: this.state.activePage, collections: this.state.selectedCollections, operations: this.state.selectedOperations }}>
          {({loading, error, data}) => {
            if (loading) return <div>Fetching data</div>
            if (error) return <div>Error: {error}</div>

            const logsWithStats = data.logsWithStats;
            const logs = logsWithStats.logs.nodes;
            const activePage = logsWithStats.logs.currentPage
            const totalPages = logsWithStats.logs.totalPages
            const collectionsStats = logsWithStats.collectionsStats
            const operationsStats = logsWithStats.operationsStats
            const collections = logsWithStats.collections
            const operations = logsWithStats.operations
            return (
              <div className="mt-10">
                <Dropdown
                  options={collections.map(collection => ({ key: collection, value: collection, text: collection }))}
                  placeholder="Filter collections"
                  search
                  clearable
                  multiple
                  selection
                  defaultValue={this.state.selectedCollections}
                  onChange={(e,optionsObj) => this.setState({selectedCollections: optionsObj.value})}
                />

                <Dropdown
                  options={operations.map(operation => ({ key: operation, value: operation, text: operation }))}
                  placeholder="Filter operations"
                  search
                  clearable
                  multiple
                  selection
                  defaultValue={this.state.selectedOperations}
                  onChange={(e,optionsObj) => this.setState({selectedOperations: optionsObj.value})}
                />
                {/* <div>
                  <Divider horizontal>collections stats</Divider>
                  {collectionsStats.map(stat =>
                    <Label key={stat.name}>
                      {stat.name}
                      <Label.Detail>{stat.value}</Label.Detail>
                    </Label>
                  )}
                </div>

                <div className="mt-10 mb-10">
                  <Divider horizontal>operations stats</Divider>
                  {operationsStats.map(stat =>
                    <Label key={stat.name} color={operationColor(stat.name)} horizontal>
                      {stat.name}
                      <Label.Detail>{stat.value}</Label.Detail>
                    </Label>
                  )}
                </div> */}

                <Table celled striped sortable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Collection</Table.HeaderCell>
                      <Table.HeaderCell>Operation</Table.HeaderCell>
                      <Table.HeaderCell>Command</Table.HeaderCell>
                      <Table.HeaderCell>Duration</Table.HeaderCell>
                      <Table.HeaderCell width='one'>Action</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    {logs.map(log => <Log key={log.id} log={log} />)}
                  </Table.Body>
                  <Table.Footer>
                    <Table.Row>
                      <Table.HeaderCell colSpan='5'>
                        <Pagination
                          floated='right'
                          activePage={activePage}
                          boundaryRange={boundaryRange}
                          onPageChange={this.handlePaginationChange}
                          size='mini'
                          siblingRange={siblingRange}
                          totalPages={totalPages}
                          // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
                          ellipsisItem={showEllipsis ? undefined : null}
                          firstItem={showFirstAndLastNav ? undefined : null}
                          lastItem={showFirstAndLastNav ? undefined : null}
                          prevItem={showPreviousAndNextNav ? undefined : null}
                          nextItem={showPreviousAndNextNav ? undefined : null}
                        />
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Footer>
                </Table>
              </div>
            )
          }}
        </Query>
      </>
    )
  }
}
