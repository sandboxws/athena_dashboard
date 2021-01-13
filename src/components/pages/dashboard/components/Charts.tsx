import React from "react";
import { Divider } from "semantic-ui-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ICommand } from "../../../../generated/graphql";

interface Props {
  stats: ICommand[];
  collections: ICommand[];
}

function Charts(props: Props) {
  const { stats, collections } = props;

  const operationsData = stats.map((stat) => ({
    name: stat.name,
    totalCount: stat.totalCount,
  }));
  const durationsData = stats.map((stat) => ({
    name: stat.name,
    maxDuration: stat.maxDuration,
  }));
  const collectionsData = collections.map((stat, idx) => ({
    name: stat.name,
    totalCount: stat.totalCount,
    maxDuration: stat.maxDuration,
  }));

  return (
    <>
      <div className="mt-10 px-5 py-4 bg-white shadow-md rounded-lg">
        <h3 className="ml-2 mb-0 pb-2 text-purple-500 border-b border-gray-200">
          Charts
        </h3>
        <div className="flex flex-wrap charts">
          <div className="w-1/2 pt-3 pr-3">
            <Divider horizontal>Queries Total Count</Divider>
            <BarChart
              width={650}
              height={300}
              data={operationsData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
              />
              {/* <YAxis label={
            <Text
              x={0}
              y={0}
              dx={30}
              dy={150}
              angle={-90}
              >Count
            </Text>
            }
          /> */}
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar
                dataKey="totalCount"
                fill="#B794F4"
                background={{ fill: "#eee" }}
              />
            </BarChart>
          </div>
          <div className="w-1/2 pt-3 pr-3">
            <Divider horizontal>Queries Max Duration</Divider>
            <BarChart
              width={650}
              height={300}
              data={durationsData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
              />
              {/* <YAxis label={
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
          /> */}
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar
                dataKey="maxDuration"
                fill="#F687B3"
                background={{ fill: "#eee" }}
              />
            </BarChart>
          </div>
          <div className="w-1/2 pt-3 pr-3">
            <Divider horizontal>Top Collections - Queries Count</Divider>
            <RadarChart
              cx={300}
              cy={250}
              outerRadius={150}
              width={500}
              height={500}
              data={collectionsData}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis />
              <Radar
                dataKey="totalCount"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
          </div>
          <div className="w-1/2 pt-3 pr-3">
            <Divider horizontal>Top Collections - Max Duration</Divider>
            <RadarChart
              cx={300}
              cy={250}
              outerRadius={150}
              width={500}
              height={500}
              data={collectionsData}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis />
              <Radar
                dataKey="maxDuration"
                stroke="#F687B3"
                fill="#F687B3"
                fillOpacity={0.6}
              />
            </RadarChart>
          </div>
        </div>
      </div>
    </>
  );
}

export default Charts;
