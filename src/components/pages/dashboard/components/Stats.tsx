import React from "react";
import { Card } from "semantic-ui-react";
import Stat from "./Stat";
import { ICommand } from "../../../../generated/graphql";

interface Props {
  stats: ICommand[];
}

function Stats(props: Props) {
  const { stats } = props;
  return (
    <div className="px-5 py-4 bg-white shadow-md rounded-lg">
      <div className="stats">
        <h3 className="ml-2 m5-2 pb-2 text-purple-500 border-b border-gray-200">
          Operations Stats
        </h3>
        <Card.Group itemsPerRow={4}>
          {stats.slice(0, 4).map((stat) => (
            <Stat key={stat.name} stat={stat} />
          ))}
        </Card.Group>
        <Card.Group itemsPerRow={4}>
          {stats.slice(4).map((stat) => (
            <Stat key={stat.name} stat={stat} />
          ))}
        </Card.Group>
      </div>
    </div>
  );
}

export default Stats;
