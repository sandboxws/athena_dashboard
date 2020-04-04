import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import Stat from './Stat';

function Charts(props) {
  const { dashboard } = props;
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
          data: [
            `${dashboard.find.totalCount}`,
            `${dashboard.insert.totalCount}`,
            `${dashboard.update.totalCount}`,
            `${dashboard.distinct.totalCount}`,
            `${dashboard.delete.totalCount}`,
            `${dashboard.aggregate.totalCount}`,
            `${dashboard.count.totalCount}`,
            `${dashboard.getMore.totalCount}`,
          ]
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
          data: [
            `${dashboard.find.maxDuration}`,
            `${dashboard.insert.maxDuration}`,
            `${dashboard.update.maxDuration}`,
            `${dashboard.distinct.maxDuration}`,
            `${dashboard.delete.maxDuration}`,
            `${dashboard.aggregate.maxDuration}`,
            `${dashboard.count.maxDuration}`,
            `${dashboard.getMore.maxDuration}`,
          ]
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

export default Charts;
