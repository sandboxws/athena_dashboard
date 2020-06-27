import React from "react";
import { Divider, Label, Table } from "semantic-ui-react";
import { useMongodbStacktraceQuery } from "../../../generated/graphql";
import AwesomeLogs from "../../common/AwesomeLogs";
import SyntaxHighlighter from "react-syntax-highlighter";
import syntaxStyle from "react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-blue";
import ApolloMessage from "../../common/ApolloMessage";

type Props = {
  match: {
    params: {
      id: string;
    };
  };
};

export default function Stacktrace(props: Props) {
  const {
    match: { params },
  } = props;

  const id = parseInt(params.id);

  const { loading, error, data } = useMongodbStacktraceQuery({
    variables: {
      id: id,
    },
  });
  if (loading || error)
    return <ApolloMessage loading={loading} error={error} />;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const awesomeStacktrace = data?.mongodbStacktrace!;

  const logsCount = awesomeStacktrace.logsCount || 0;
  const sqlQueriesCount = awesomeStacktrace.sqlQueriesCount || 0;
  const {
    stacktrace,
    minDuration,
    maxDuration,
    avgDuration,
    sqlQueriesMinDuration,
    sqlQueriesMaxDuration,
    sqlQueriesAvgDuration,
    sourcesStats,
    sqlQueriesSourcesStats,
  } = awesomeStacktrace;

  const queriesCount = (logsCount || 0) + (sqlQueriesCount || 0);
  const minDurations = (minDuration || 0) + (sqlQueriesMinDuration || 0);
  const maxDurations = (maxDuration || 0) + (sqlQueriesMaxDuration || 0);
  const avgDurations = (avgDuration || 0) + (sqlQueriesAvgDuration || 0);

  return (
    <>
      <h1 className="text-2xl text-gray-700 pb-0 mb-2">{`Stacktrace #${params.id}`}</h1>
      {sourcesStats.map((stat) => (
        <Label key={stat.name} horizontal>
          {stat.name}
          <Label.Detail>{stat.value}</Label.Detail>
        </Label>
      ))}

      {sqlQueriesSourcesStats.map((stat) => (
        <Label key={stat.name} horizontal>
          {stat.name}
          <Label.Detail>{stat.value}</Label.Detail>
        </Label>
      ))}

      <SyntaxHighlighter
        language="json"
        className="mt-3 border border-gray-300 rounded-lg"
        style={syntaxStyle}
        wrapLines={false}
      >
        {JSON.stringify(JSON.parse(stacktrace), null, 2)}
      </SyntaxHighlighter>
      {logsCount > 0 ? (
        <>
          <Divider horizontal>Mongodb Stats</Divider>
          <Table>
            <Table.Body className="bg-gray-100">
              <Table.Row>
                <Table.Cell className="font-medium">
                  Queries Total Count
                </Table.Cell>
                <Table.Cell>
                  <Label horizontal>{logsCount}</Label>
                </Table.Cell>
                <Table.Cell className="font-medium">
                  Min Query Execution Duration
                </Table.Cell>
                <Table.Cell>
                  <Label horizontal>{minDuration}s</Label>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="font-medium">
                  Max Query Execution Duration
                </Table.Cell>
                <Table.Cell>
                  <Label horizontal>{maxDuration}s</Label>
                </Table.Cell>
                <Table.Cell className="font-medium">
                  Average Query Execution Duration
                </Table.Cell>
                <Table.Cell>
                  <Label horizontal>{avgDuration}s</Label>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </>
      ) : (
        ""
      )}
      <AwesomeLogs stacktraceId={id} />

      {sqlQueriesCount > 0 ? (
        <>
          <Divider horizontal>SQL Stats</Divider>
          <Table>
            <Table.Body className="bg-gray-100">
              <Table.Row>
                <Table.Cell className="font-medium">
                  Queries Total Count
                </Table.Cell>
                <Table.Cell>
                  <Label horizontal>{sqlQueriesCount}</Label>
                </Table.Cell>
                <Table.Cell className="font-medium">
                  Min Query Execution Duration
                </Table.Cell>
                <Table.Cell>
                  <Label horizontal>{sqlQueriesMinDuration}s</Label>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="font-medium">
                  Max Query Execution Duration
                </Table.Cell>
                <Table.Cell>
                  <Label horizontal>{sqlQueriesMaxDuration}s</Label>
                </Table.Cell>
                <Table.Cell className="font-medium">
                  Average Query Execution Duration
                </Table.Cell>
                <Table.Cell>
                  <Label horizontal>{sqlQueriesAvgDuration}s</Label>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </>
      ) : (
        ""
      )}
    </>
  );
}
