import React from 'react';
import { Menu, Statistic } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import Stat from './Stat';

function Stats(props) {
  const { stats } = props;
  return (
    <div className="stats">
      <div className="flex flex-wrap mb-2">
        {
          stats.slice(0,4).map(stat => <Stat operation={stat.name} count={stat.totalCount} maxDuration={stat.maxDuration} />)
        }
      </div>
      <div className="flex flex-wrap mb-2">
        {
          stats.slice(4).map(stat => <Stat operation={stat.name} count={stat.totalCount} maxDuration={stat.maxDuration} />)
        }
      </div>
    </div>

  );
}

export default Stats;
