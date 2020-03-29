import React, { Component } from 'react';
import classNames from 'classnames';

export default class Stat extends Component {
  render() {
    const { color, operation, count, maxDuration } = this.props;
    return (
      <div className="w-1/4 pt-3 pr-3">
        <div className={classNames(`bg-${color}-500`, 'border', 'rounded', 'px-1', 'py-2')}>
          <div className="flex flex-row items-center">
            <div className="flex-shrink"><i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
            <div className="flex-1 px-2">
              <h2 className="text-white text-2xl">{operation}</h2>
              <hr className="border-b-1 border-white-100 opacity-25" />
              <div className="flex justify-between">
                <div className="text-gray-700 text-left py-2">
                  <h3 className="text-white text-2xl">
                    <span className="block text-left text-sm m-0 p-0">Total Count</span>
                    {count}
                  </h3>
                </div>

                <div className="text-gray-700 text-left py-2 pr-2">
                  <h3 className="text-white text-2xl">
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
