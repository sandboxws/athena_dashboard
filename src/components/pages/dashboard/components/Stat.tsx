import React from "react";
import { Card, Statistic, Label } from "semantic-ui-react";
import operationColor from "../../../common/CommandColors";
import { ICommand } from "../../../../generated/graphql";
import { default as numeral } from "numeral";

interface Props {
  stat: ICommand;
}

export default function Stat(props: Props) {
  const { stat } = props;

  return (
    <>
      <Card className="w-40">
        <Card.Content>
          <Label horizontal color={operationColor(stat.name)}>
            {stat.name}
          </Label>
        </Card.Content>
        <Card.Content extra centered="true">
          <Statistic
            color={operationColor(stat.name)}
            label="Total Count"
            value={numeral(stat.totalCount).format("0a")}
            size="small"
          />
          <Statistic
            color={operationColor(stat.name)}
            label="Max Duration"
            value={stat.maxDuration}
            size="small"
          />
        </Card.Content>
      </Card>
    </>
  );
}
