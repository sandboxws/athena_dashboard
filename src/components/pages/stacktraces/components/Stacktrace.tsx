import React from "react";
import { Button, Table } from "semantic-ui-react";
import { IStacktrace } from "../../../../generated/graphql";
import { Link } from "react-router-dom";
import AwesomeAccordion from "../../../common/AwesomeAccordion";

interface Props {
  stacktrace: IStacktrace;
}

export default function Controller(props: Props) {
  const {
    id,
    stacktrace,
    stacktraceExcerpt,
    logsCount,
    minDuration,
    maxDuration,
    avgDuration,
  } = props.stacktrace;

  return (
    <Table.Row verticalAlign="middle">
      <Table.Cell>
        <AwesomeAccordion
          excerpt={stacktraceExcerpt}
          jsonContent={stacktrace}
        />
      </Table.Cell>
      <Table.Cell>{logsCount}</Table.Cell>
      <Table.Cell>{minDuration}s</Table.Cell>
      <Table.Cell>{maxDuration}s</Table.Cell>
      <Table.Cell>{avgDuration}s</Table.Cell>
      <Table.Cell>
        <Button as={Link} size="mini" color="blue" to={`/stacktraces/${id}`}>
          Inspect
        </Button>
      </Table.Cell>
    </Table.Row>
  );
}
