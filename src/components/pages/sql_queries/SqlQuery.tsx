/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import PageTitle from "../../common/PageTitle";
import { Label, Table, Divider } from "semantic-ui-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import syntaxStyle from "react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-blue";
import { useSqlQueryQuery } from "../../../generated/graphql";
import SidekiqLogo from "../../../assets/icons/sidekiq.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApolloMessage from "../../common/ApolloMessage";
import AwesomeAccordion from "../../common/AwesomeAccordion";

type Props = {
  match: {
    params: {
      id: string;
    };
  };
};

export default function SqlQuery(props: Props) {
  const {
    match: { params },
  } = props;

  const { loading, error, data } = useSqlQueryQuery({
    variables: {
      id: parseInt(params.id),
    },
  });
  if (loading || error)
    return <ApolloMessage loading={loading} error={error} />;

  const sqlQuery = data?.sqlQuery!;
  const explain = sqlQuery.explain!;

  return (
    <>
      <PageTitle title={`Query #${params.id}`} />
      {sqlQuery.sourceName === "server" ? (
        <Label horizontal>
          <FontAwesomeIcon icon="server" className="mr-1" />
          <Label.Detail className="align-middle">
            {sqlQuery?.sourceName}
          </Label.Detail>
        </Label>
      ) : (
        ""
      )}

      {sqlQuery.sourceName === "console" ? (
        <Label horizontal>
          <FontAwesomeIcon icon="terminal" className="mr-1" />
          <Label.Detail className="align-middle">
            {sqlQuery?.sourceName}
          </Label.Detail>
        </Label>
      ) : (
        ""
      )}

      {sqlQuery.sidekiqWorker !== null ? (
        <Label className="sidekiq-label" horizontal>
          <img src={SidekiqLogo} alt="sidekiq-sqlQueryo" />
          <Label.Detail className="align-middle">
            {sqlQuery?.sidekiqWorker?.worker}
          </Label.Detail>
        </Label>
      ) : (
        ""
      )}

      <Divider horizontal>Stats</Divider>
      <Table>
        <Table.Body className="bg-gray-100">
          <Table.Row>
            <Table.Cell className="font-medium">Table</Table.Cell>
            <Table.Cell>
              <Label horizontal>{sqlQuery?.tableName}</Label>
            </Table.Cell>
            <Table.Cell className="font-medium">Schema Name</Table.Cell>
            <Table.Cell>
              <Label horizontal>{sqlQuery?.schemaName}</Label>
            </Table.Cell>
            <Table.Cell className="font-medium">Operation</Table.Cell>
            <Table.Cell>
              <Label horizontal>{sqlQuery?.operation}</Label>
            </Table.Cell>
            <Table.Cell className="font-medium">Duration</Table.Cell>
            <Table.Cell>
              <Label horizontal>{sqlQuery?.duration || "N/A"}s</Label>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="font-medium">Documents Returned</Table.Cell>
            <Table.Cell>
              {/* <Label horizontal>{log?.explain?.documentsReturned || 0}</Label> */}
            </Table.Cell>
            <Table.Cell className="font-medium">Keys Examined</Table.Cell>
            <Table.Cell>
              {/* <Label horizontal>{log?.explain?.keysExamined || 0}</Label> */}
            </Table.Cell>
            <Table.Cell className="font-medium">Rejected Plans</Table.Cell>
            <Table.Cell>
              {/* <Label
                horizontal
                color={
                  (log?.explain?.rejectedPlans || 0) >= 5 ? "red" : undefined
                }
              >
                {log?.explain?.rejectedPlans || 0}
              </Label> */}
            </Table.Cell>
            <Table.Cell className="font-medium">Stages Count</Table.Cell>
            <Table.Cell>
              {/* <Label horizontal>{log?.explain?.stagesCount || "N/A"}</Label> */}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Divider horizontal>SQL Query</Divider>
      <AwesomeAccordion
        excerpt={sqlQuery.queryExcerpt}
        sqlContent={sqlQuery.query}
      />

      <Divider horizontal>Stacktrace</Divider>
      <SyntaxHighlighter
        language="ruby"
        className="border border-gray-300 rounded-lg"
        style={syntaxStyle}
        wrapLines={false}
      >
        {JSON.stringify(JSON.parse(sqlQuery?.stacktrace.stacktrace!), null, 2)}
      </SyntaxHighlighter>
    </>
  );
}
