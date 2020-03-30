// React
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import PageTitle from '../../common/PageTitle';
import Charts from './components/Charts';
import LatestLogs from './components/LatestLogs';
import Stats from './components/Stats';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Dashboard" />
        <Stats />
        <Charts />
        <hr class="mt-2 border-b-1 border-gray-200 mt-10 mb-5" />
        <LatestLogs />
      </div>
    )
  }
}
