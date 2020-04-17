import React from "react";
import { Divider, Card } from "semantic-ui-react";
import Stat from "./Stat";
import { ICommand } from "../../../../generated/graphql";

interface Props {
  stats: ICommand[];
}

function Stats(props: Props) {
  const { stats } = props;
  return (
    <div className="stats">
      <Divider horizontal>Operations Stats</Divider>
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
  );
}

export default Stats;
