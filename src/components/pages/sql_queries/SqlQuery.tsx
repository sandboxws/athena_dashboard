/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from "react";
import PageTitle from "../../common/PageTitle";
import { Label, Table, Divider } from "semantic-ui-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import syntaxStyle from "react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-blue";
import { useSqlQueryQuery } from "../../../generated/graphql";
import SidekiqLogo from "../../../assets/icons/sidekiq.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApolloMessage from "../../common/ApolloMessage";
import AwesomeAccordion from "../../common/AwesomeAccordion";
import { TreevizReact } from "treeviz-react";

type Props = {
  match: {
    params: {
      id: string;
    };
  };
};

export default function SqlQuery(props: Props) {
  const [isToggled, setToggled] = useState(true);

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
  const sqlExplain = sqlQuery.sqlExplain!;
  const treeData = sqlExplain !== null ? JSON.parse(sqlExplain.treeviz!) : "";

  return (
    <>
      <div className="px-5 py-4 bg-white shadow-md rounded-lg">
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


      </div>

      <Divider horizontal>Stats</Divider>
      <div className="px-5 py-4 bg-white shadow-md rounded-lg">
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
            <Table.Cell className="font-medium">Startup Cost</Table.Cell>
            <Table.Cell>
              <Label horizontal>{sqlExplain?.startupCost || 0}</Label>
            </Table.Cell>
            <Table.Cell className="font-medium">Total Cost</Table.Cell>
            <Table.Cell>
              <Label horizontal>{sqlExplain?.totalCost || 0}</Label>
            </Table.Cell>
            <Table.Cell className="font-medium">Rows</Table.Cell>
            <Table.Cell>
              <Label horizontal>{sqlExplain?.rows || 0}</Label>
            </Table.Cell>
            <Table.Cell className="font-medium">Actual Startup Time</Table.Cell>
            <Table.Cell>
              <Label horizontal>{sqlExplain?.actualStartupTime || 0}</Label>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="font-medium">Actual Total Time</Table.Cell>
            <Table.Cell>
              <Label horizontal>{sqlExplain?.actualTotalTime || 0}</Label>
            </Table.Cell>
            <Table.Cell className="font-medium">Actual Rows</Table.Cell>
            <Table.Cell>
              <Label horizontal>{sqlExplain?.actualRows || 0}</Label>
            </Table.Cell>
            <Table.Cell className="font-medium">Actual Loops</Table.Cell>
            <Table.Cell>
              <Label horizontal>{sqlExplain?.actualLoops || 0}</Label>
            </Table.Cell>
            <Table.Cell className="font-medium">Seq Scans</Table.Cell>
            <Table.Cell>
              <Label horizontal>{sqlExplain?.seqScans}</Label>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
</div>


      <Divider horizontal>SQL Query</Divider>
      <AwesomeAccordion
        excerpt={sqlQuery.queryExcerpt}
        sqlContent={sqlQuery.query}
      />

      <Divider horizontal>Stacktrace</Divider>
      <div className="px-5 py-4 bg-white shadow-md rounded-lg">
      <SyntaxHighlighter
        language="ruby"
        className="border border-gray-300 rounded-lg"
        style={syntaxStyle}
        wrapLines={false}
      >
        {JSON.stringify(JSON.parse(sqlQuery?.stacktrace.stacktrace!), null, 2)}
      </SyntaxHighlighter>
      </div>

      {treeData != "" ? (
        <>
          <Divider horizontal>Query Plan</Divider>
          <div className="px-5 py-4 bg-white shadow-md rounded-lg">
          <div className="overflow-y-auto">
            <TreevizReact
              data={treeData}
              areaWidth={1250}
              areaHeight={700}
              idKey={"id"}
              hasFlatData={true}
              relationnalField={"father"}
              nodeHeight={230}
              mainAxisNodeSpacing={3.5}
              hasPan={true}
              hasZoom={false}
              linkColor={() => "#B0BEC5"}
              secondaryAxisNodeSpacing={4}
              isHorizontal={false}
              onNodeClick={() => setToggled(isToggled ? false : true)}
              renderNode={(
                node: any
              ) => `<div class='break-words overflow-y-auto text-sm py-2 px-4 text-gray-800 border w-56 border-gray-400 rounded-sm shadow' style='cursor:pointer;height:${node.settings.nodeHeight}px;width:250px;display:flex;flex-direction:column;justify-content:left;align-items:left;background-color:
        ${node.data.color}
      ;border-radius:5px;'><div><span class='font-semibold text-base border-b-1 border-gray-200 border-b-2 block'>
  ${node.data.text_1}
  </span></div><div></div><div><i>
  ${node.data.text_2}</i></div></div>`}
              linkShape="curve"
              linkWidth={() => 2}
            />
          </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
