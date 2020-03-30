import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Stat from './Stat';

export default class Stats extends Component {
  render() {
    return (
      <div className="stats">
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
      </div>
    );
  }
}
