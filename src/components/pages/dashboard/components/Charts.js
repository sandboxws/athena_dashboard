import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react'
import { HorizontalBar } from 'react-chartjs-2';
import Stat from './Stat';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text
} from 'recharts';

function Charts(props) {
  const { stats } = props;

  const operationsData = stats.map(stat => ({name: stat.name, total_count: stat.totalCount}))
  // const operationsData = [
  //   {
  //     name: 'Find', total_count: stats.find.totalCount,
  //   },
  //   {
  //     name: 'Insert', total_count: stats.insert.totalCount,
  //   },
  //   {
  //     name: 'Update', total_count: stats.update.totalCount,
  //   },
  //   {
  //     name: 'Distinct', total_count: stats.distinct.totalCount,
  //   },
  //   {
  //     name: 'Delete', total_count: stats.delete.totalCount,
  //   },
  //   {
  //     name: 'Agg', total_count: stats.aggregate.totalCount,
  //   },
  //   {
  //     name: 'Count', total_count: stats.count.totalCount,
  //   },
  //   {
  //     name: 'GetMore', total_count: stats.getMore.totalCount,
  //   },
  // ];

  const durationsData = stats.map(stat => ({name: stat.name, max_duration: stat.maxDuration}))
  // const durationsData = [
  //   {
  //     name: 'Find', max_duration: stats.find.maxDuration,
  //   },
  //   {
  //     name: 'Insert', max_duration: stats.insert.maxDuration,
  //   },
  //   {
  //     name: 'Update', max_duration: stats.update.maxDuration,
  //   },
  //   {
  //     name: 'Distinct', max_duration: stats.distinct.maxDuration,
  //   },
  //   {
  //     name: 'Delete', max_duration: stats.delete.maxDuration,
  //   },
  //   {
  //     name: 'Agg', max_duration: stats.aggregate.maxDuration,
  //   },
  //   {
  //     name: 'Count', max_duration: stats.count.maxDuration,
  //   },
  //   {
  //     name: 'GetMore', max_duration: stats.getMore.maxDuration,
  //   },
  // ];
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
