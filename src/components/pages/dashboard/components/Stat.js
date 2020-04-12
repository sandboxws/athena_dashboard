import React, { Component } from 'react';
import classNames from 'classnames';
// import { BarChart, Bar } from 'recharts';

export default class Stat extends Component {
  render() {
    const { color, operation, count, maxDuration } = this.props;
    // Tailwindcss colors
    const colors = {
      'gray': '#718096',
      'purple': '#805AD5',
      'teal': '#319795',
      'yellow': '#D69E2E',
      'red': '#E53E3E',
      'blue': '#3182CE',
      'indigo': '#5A67D8',
      'pink': '#D53F8C',
    }
    const chartData = [
      {
        name: 'Page A', session: 4000, amt: 2400,
      },
      {
        name: 'Page B', session: 3000, amt: 2210,
      },
      {
        name: 'Page C', session: 2000, amt: 2290,
      },
      {
        name: 'Page D', session: 2780, amt: 2000,
      },
      {
        name: 'Page E', session: 1890, amt: 2181,
      },
      {
        name: 'Page F', session: 2390, amt: 2500,
      },
      {
        name: 'Page G', session: 3490, amt: 2100,
      },
    ];
    return (
      <div className="w-1/4 pt-3 pr-3">
        <div className={classNames(`bg-gray-100`, 'border', 'rounded', 'px-1', 'py-2')}>
          <div className="flex flex-row items-center">
            <div className="flex-shrink"><i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
            <div className="flex-1 px-2">
              <h2 className={classNames(`text-${color}-600`, 'text-2xl')}>
                {operation}
              </h2>
              <hr className="border-b-1 border-gray-700 opacity-25" />
              <div className="flex justify-between">
                <div className={classNames(`text-${color}-700`, 'text-left', 'py-2')}>
                  <h3 className={classNames(`text-${color}-700`, 'text-white text-2xl')}>
                    <span className="block text-left text-sm m-0 p-0">Total Count</span>
                    {count}
                  </h3>
                </div>

                <div className="text-gray-700 text-left py-2 pr-2">
                  <h3 className={classNames(`text-${color}-700`, 'text-white text-2xl')}>
                    <span className="block text-left text-sm m-0 p-0">Max Duration</span>
                    {maxDuration}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
