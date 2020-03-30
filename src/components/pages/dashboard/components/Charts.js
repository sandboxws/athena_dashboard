import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import Stat from './Stat';

export default class Charts extends Component {
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
          label: 'MongoDB Durations',
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
      <div className="flex flex-wrap mb-2 charts">
        <div className="w-1/2 pt-3 pr-3">
          <HorizontalBar data={operationsData} />
        </div>
        <div className="w-1/2 pt-3 pr-3">
          <HorizontalBar data={durationsData} />
        </div>
      </div>
    );
  }
}
