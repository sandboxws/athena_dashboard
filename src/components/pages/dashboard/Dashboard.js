// React
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Stat from './components/Stat';
import PageTitle from '../../common/PageTitle';
import { HorizontalBar } from 'react-chartjs-2';
import LatestLogs from './components/LatestLogs';

export default class Dashboard extends Component {
  render() {
    const operationsData = {
      labels: ['Find', 'Insert', 'Update', 'Distinct', 'Delete', 'Aggregate', 'Count', 'GetMore'],
      datasets: [
        {
          label: 'MongoDB Operations',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [1023, 33, 138, 8, 0, 70, 95, 0]
        }
      ]
    };
    const durationsData = {
      labels: ['Find', 'Insert', 'Update', 'Distinct', 'Delete', 'Aggregate', 'Count', 'GetMore'],
      datasets: [
        {
          label: 'MongoDB Operations',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [0.188025, 0.18, 1.1, 0.01, 0.003, 0, 0.02, 0]
        }
      ]
    };
    return (
      <div>
        <PageTitle title="Dashboard" />
        <div className="flex flex-wrap mb-2">
          <Stat color="gray" operation="Find" count="1023" maxDuration="0.188025" />
          <Stat color="purple" operation="Insert" count="1023" maxDuration="0.188025" />
          <Stat color="teal" operation="Update" count="1023" maxDuration="0.188025" />
          <Stat color="yellow" operation="Distinct" count="1023" maxDuration="0.188025" />
        </div>
        <div className="flex flex-wrap mb-2">
          <Stat color="red" operation="Delete" count="1023" maxDuration="0.188025" />
          <Stat color="blue" operation="Aggregate" count="1023" maxDuration="0.188025" />
          <Stat color="indigo" operation="Count" count="1023" maxDuration="0.188025" />
          <Stat color="pink" operation="GetMore" count="1023" maxDuration="0.188025" />
        </div>
        <div className="flex flex-wrap mb-2">
          <div className="w-1/2 pt-3 pr-3">
            <HorizontalBar data={operationsData} />
          </div>
          <div className="w-1/2 pt-3 pr-3">
            <HorizontalBar data={durationsData} />
          </div>
        </div>

        <hr class="mt-2 border-b-1 border-gray-200 mt-10 mb-5" />
        <LatestLogs />
      </div>
    )
  }
}
