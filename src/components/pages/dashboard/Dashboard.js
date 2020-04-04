// React
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import PageTitle from '../../common/PageTitle';
import Charts from './components/Charts';
import LatestLogs from './components/LatestLogs';
import Stats from './components/Stats';
import { Query } from 'react-apollo';
import { DASHBOARD_GQL } from '../../../queries/pages/dashboard';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Dashboard" />
        <Query query={DASHBOARD_GQL}>
          {({loading, error, data}) => {
            if (loading) return <div>Fetching data</div>
            if (error) return <div>Error: {error}</div>

            const dashboard = data.dashboard;
            return (
              <>
                <Stats dashboard={dashboard} />
                <Charts dashboard={dashboard} />
                <hr className="mt-2 border-b-1 border-gray-200 mt-10 mb-5" />
                <LatestLogs mongodbLatestLogs={dashboard.mongodbLatestLogs} />
              </>
            )
          }}
        </Query>
      </div>
    )
  }
}
