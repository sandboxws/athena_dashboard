import React from 'react';
import { Menu, Statistic } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import Stat from './Stat';

function Stats(props) {
  const { dashboard } = props;
  return (
      <div className="stats">
        <div className="flex flex-wrap mb-2">
          <Stat color="gray" operation="Find" count={dashboard.find.totalCount} maxDuration={dashboard.find.maxDuration} />
          <Stat color="purple" operation="Insert" count={dashboard.insert.totalCount} maxDuration={dashboard.insert.maxDuration} />
          <Stat color="teal" operation="Update" count={dashboard.update.totalCount} maxDuration={dashboard.update.maxDuration} />
          <Stat color="yellow" operation="Distinct" count={dashboard.distinct.totalCount} maxDuration={dashboard.distinct.maxDuration} />
        </div>
        <div className="flex flex-wrap mb-2">
          <Stat color="red" operation="Delete" count={dashboard.delete.totalCount} maxDuration={dashboard.delete.maxDuration} />
          <Stat color="blue" operation="Aggregate" count={dashboard.aggregate.totalCount} maxDuration={dashboard.aggregate.maxDuration} />
          <Stat color="indigo" operation="Count" count={dashboard.count.totalCount} maxDuration={dashboard.count.maxDuration} />
          <Stat color="pink" operation="GetMore" count={dashboard.getMore.totalCount} maxDuration={dashboard.getMore.maxDuration} />
        </div>
      </div>
    );
}

export default Stats;
