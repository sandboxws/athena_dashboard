import React from "react";
import { Button, Table, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import operationColor from "../CommandColors";
import { ILog } from "../../../generated/graphql";
import AwesomeAccordion from "../AwesomeAccordion";

type Props = {
  log: ILog;
};

export default function Log(props: Props) {
  const {
    id,
    collection,
    operation,
    appName,
    sourceName,
    command,
    commandExcerpt,
    duration,
    createdAt,
  } = props.log;

  return (
    <Table.Row verticalAlign="middle">
      <Table.Cell>{collection}</Table.Cell>
      <Table.Cell>
        <Label color={operationColor(operation)} horizontal>
          {operation}
        </Label>
      </Table.Cell>
      <Table.Cell>{appName}</Table.Cell>
      <Table.Cell>{sourceName}</Table.Cell>
      <Table.Cell>
        <AwesomeAccordion excerpt={commandExcerpt} jsonContent={command} />
      </Table.Cell>
      <Table.Cell>{duration}s</Table.Cell>
      <Table.Cell>{createdAt}</Table.Cell>
      <Table.Cell>
        <Button as={Link} size="mini" color="blue" to={`/queries/${id}`}>
          Inspect
        </Button>
      </Table.Cell>
    </Table.Row>
  );
}
