import React from "react";
import { Table } from "semantic-ui-react";
import operationColor from "../../../common/CommandColors";
import { ICommand } from "../../../../generated/graphql";
import { default as numeral } from "numeral";
import classNames from "classnames";

interface Props {
  stat: ICommand;
}

export default function Stat(props: Props) {
  const { stat } = props;

  return (
    <Table.Cell>
      <div className="flex flex-shrink-0 text-sm font-bold items-center pr-2">
        <div
          className={classNames(
            `bg-${operationColor(stat.name)}-600`,
            "text-white",
            "px-2",
            "py-1",
            "rounded-l"
          )}
        >
          {stat.name}
        </div>
        <div
          className={classNames(
            `bg-${operationColor(stat.name)}-400`,
            "text-white",
            "px-2",
            "py-1"
          )}
        >
          {numeral(stat.totalCount).format("0a")} Queries
        </div>
        <div
          className={classNames(
            "bg-gray-200",
            "text-gray-600",
            "px-2",
            "py-1",
            "rounded-r"
          )}
        >
          Max Duration: {stat.maxDuration}s
        </div>
      </div>
    </Table.Cell>
  );
}
