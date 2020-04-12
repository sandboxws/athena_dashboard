import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react'
import { HorizontalBar } from 'react-chartjs-2';
import Stat from './Stat';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text
} from 'recharts';

function Charts(props) {
  const { dashboard } = props;

  const operationsData = [
    {
      name: 'Find', total_count: dashboard.find.totalCount,
    },
    {
      name: 'Insert', total_count: dashboard.insert.totalCount,
    },
    {
      name: 'Update', total_count: dashboard.update.totalCount,
    },
    {
      name: 'Distinct', total_count: dashboard.distinct.totalCount,
    },
    {
      name: 'Delete', total_count: dashboard.delete.totalCount,
    },
    {
      name: 'Agg', total_count: dashboard.aggregate.totalCount,
    },
    {
      name: 'Count', total_count: dashboard.count.totalCount,
    },
    {
      name: 'GetMore', total_count: dashboard.getMore.totalCount,
    },
  ];

  const durationsData = [
    {
      name: 'Find', max_duration: dashboard.find.maxDuration,
    },
    {
      name: 'Insert', max_duration: dashboard.insert.maxDuration,
    },
    {
      name: 'Update', max_duration: dashboard.update.maxDuration,
    },
    {
      name: 'Distinct', max_duration: dashboard.distinct.maxDuration,
    },
    {
      name: 'Delete', max_duration: dashboard.delete.maxDuration,
    },
    {
      name: 'Agg', max_duration: dashboard.aggregate.maxDuration,
    },
    {
      name: 'Count', max_duration: dashboard.count.maxDuration,
    },
    {
      name: 'GetMore', max_duration: dashboard.getMore.maxDuration,
    },
  ];
  return (
    <div className="flex flex-wrap mt-10 charts">
      <div className="w-1/2 pt-3 pr-3">
        <Divider horizontal>Queries Total Count</Divider>
        <BarChart
          width={650}
          height={300}
          data={operationsData}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis label={
            <Text
              x={0}
              y={0}
              dx={30}
              dy={150}
              offset={0}
              angle={-90}
              >Count
            </Text>
            }
          />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="total_count" fill="#B794F4" background={{ fill: '#eee' }} />
        </BarChart>
      </div>
      <div className="w-1/2 pt-3 pr-3">
        <Divider horizontal>Queries Max Duration</Divider>
        <BarChart
          width={650}
          height={300}
          data={durationsData}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis label={
            <Text
              x={0}
              y={0}
              dx={30}
              dy={150}
              offset={0}
              angle={-90}
              >Seconds
            </Text>
            }
          />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="max_duration" fill="#F687B3" background={{ fill: '#eee' }} />
        </BarChart>
      </div>
    </div>
  );
}

export default Charts;
