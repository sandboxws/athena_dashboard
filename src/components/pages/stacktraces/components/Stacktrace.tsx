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
    sqlQueriesCount,
    sqlQueriesMinDuration,
    sqlQueriesMaxDuration,
    sqlQueriesAvgDuration,
  } = props.stacktrace;

  const queriesCount = (logsCount || 0) + (sqlQueriesCount || 0);
  const minDurations = (minDuration || 0) + (sqlQueriesMinDuration || 0);
  const maxDurations = (maxDuration || 0) + (sqlQueriesMaxDuration || 0);
  const avgDurations = (avgDuration || 0) + (sqlQueriesAvgDuration || 0);

  return (
    <Table.Row verticalAlign="middle">
      <Table.Cell>
        <AwesomeAccordion
          excerpt={stacktraceExcerpt || undefined}
          jsonContent={stacktrace}
        />
      </Table.Cell>
      <Table.Cell>{queriesCount}</Table.Cell>
      <Table.Cell>{minDurations}s</Table.Cell>
      <Table.Cell>{maxDurations}s</Table.Cell>
      <Table.Cell>{avgDurations}s</Table.Cell>
      <Table.Cell>
        <Button as={Link} size="mini" color="purple" to={`/stacktraces/${id}`}>
          Inspect
        </Button>
      </Table.Cell>
    </Table.Row>
  );
}
