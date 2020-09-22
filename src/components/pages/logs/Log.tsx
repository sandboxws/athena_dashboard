/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import PageTitle from "../../common/PageTitle";
import { Label, Table, Divider } from "semantic-ui-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import syntaxStyle from "react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-blue";
import { useLogQuery } from "../../../generated/graphql";
import { TreevizReact } from "treeviz-react";
import SidekiqLogo from "../../../assets/icons/sidekiq.svg";
import "./logs.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApolloMessage from "../../common/ApolloMessage";

type Props = {
  match: {
    params: {
      id: string;
    };
  };
};

type ExplainTreeNode = {
  data: {
    color: string;
  };
};

export default function Log(props: Props) {
  const {
    match: { params },
  } = props;

  const { loading, error, data } = useLogQuery({
    variables: {
      id: parseInt(params.id),
    },
  });
  if (loading || error)
    return <ApolloMessage loading={loading} error={error} />;

  const log = data?.mongodbLog!;
  const explain = log.explain!;
  const treeData = explain !== null ? JSON.parse(explain.treeviz!) : "";

  return (
    <>
      <div className="px-5 py-4 bg-white shadow-md rounded-lg">
        <PageTitle title={`Query #${params.id}`} />
        {log.collscan ? (
          <Label color="red" horizontal>
            COLLSCAN
          </Label>
        ) : (
          ""
        )}

        {log.sourceName === "server" ? (
          <Label horizontal>
            <FontAwesomeIcon icon="server" className="mr-1" />
            <Label.Detail className="align-middle">
              {log?.sourceName}
            </Label.Detail>
          </Label>
        ) : (
          ""
        )}

        {log.sourceName === "console" ? (
          <Label horizontal>
            <FontAwesomeIcon icon="terminal" className="mr-1" />
            <Label.Detail className="align-middle">
              {log?.sourceName}
            </Label.Detail>
          </Label>
        ) : (
          ""
        )}

        {log.sidekiqWorker !== null ? (
          <Label className="sidekiq-label" horizontal>
            <img src={SidekiqLogo} alt="sidekiq-logo" />
            <Label.Detail className="align-middle">
              {log?.sidekiqWorker?.worker}
            </Label.Detail>
          </Label>
        ) : (
          ""
        )}
      </div>
      <div className="px-5 py-4 mt-10 bg-white shadow-md rounded-lg">
        <h3 className="ml-2 m5-2 pb-2 text-purple-500 border-b border-gray-200">
          Stats
        </h3>
        <Table>
          <Table.Body className="bg-gray-100">
            <Table.Row>
              <Table.Cell className="font-medium">Collection</Table.Cell>
              <Table.Cell>
                <Label horizontal>{log?.collection}</Label>
              </Table.Cell>
              <Table.Cell className="font-medium">Used Indexes</Table.Cell>
              <Table.Cell>
                <Label horizontal>{log?.explain?.usedIndexes || "N/A"}</Label>
              </Table.Cell>
              <Table.Cell className="font-medium">Duration</Table.Cell>
              <Table.Cell>
                <Label horizontal>{log?.explain?.duration || "N/A"}</Label>
              </Table.Cell>
              <Table.Cell className="font-medium">
                Documents Examined
              </Table.Cell>
              <Table.Cell>
                <Label horizontal>{log?.explain?.documentsExamined || 0}</Label>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-medium">
                Documents Returned
              </Table.Cell>
              <Table.Cell>
                <Label horizontal>{log?.explain?.documentsReturned || 0}</Label>
              </Table.Cell>
              <Table.Cell className="font-medium">Keys Examined</Table.Cell>
              <Table.Cell>
                <Label horizontal>{log?.explain?.keysExamined || 0}</Label>
              </Table.Cell>
              <Table.Cell className="font-medium">Rejected Plans</Table.Cell>
              <Table.Cell>
                <Label
                  horizontal
                  color={
                    (log?.explain?.rejectedPlans || 0) >= 5 ? "red" : undefined
                  }
                >
                  {log?.explain?.rejectedPlans || 0}
                </Label>
              </Table.Cell>
              <Table.Cell className="font-medium">Stages Count</Table.Cell>
              <Table.Cell>
                <Label horizontal>{log?.explain?.stagesCount || "N/A"}</Label>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <div className="mt-10 px-5 py-4 bg-white shadow-md rounded-lg">
        <h3 className="ml-2 m5-2 pb-2 text-purple-500 border-b border-gray-200">
          MongoDB Command
        </h3>
        <SyntaxHighlighter
          language="json"
          className="border border-gray-300 rounded-lg"
          style={syntaxStyle}
          wrapLines={false}
        >
          {JSON.stringify(JSON.parse(log?.command!), null, 2)}
        </SyntaxHighlighter>
      </div>

      <div className="mt-10 px-5 py-4 bg-white shadow-md rounded-lg">
        <h3 className="ml-2 m5-2 pb-2 text-purple-500 border-b border-gray-200">
          Stacktrace
        </h3>
        <SyntaxHighlighter
          language="ruby"
          className="border border-gray-300 rounded-lg"
          style={syntaxStyle}
          wrapLines={false}
        >
          {JSON.stringify(JSON.parse(log?.stacktrace.stacktrace!), null, 2)}
        </SyntaxHighlighter>
      </div>

      <div className="mt-10 px-5 py-4 bg-white shadow-md rounded-lg">
        <h3 className="ml-2 m5-2 pb-2 text-purple-500 border-b border-gray-200">
          Query Plan
        </h3>
        <TreevizReact
          data={treeData}
          areaWidth={1250}
          areaHeight={500}
          idKey={"id"}
          hasFlatData={true}
          relationnalField={"father"}
          nodeHeight={150}
          mainAxisNodeSpacing={2.2}
          hasPan={true}
          hasZoom={false}
          linkColor={() => "#B0BEC5"}
          secondaryAxisNodeSpacing={2}
          isHorizontal={false}
          renderNode={(
            node: any
          ) => `<div class='text-sm py-2 px-4 text-gray-800 border w-56 border-gray-400 rounded-sm shadow' style='cursor:pointer;height:${node.settings.nodeHeight}px;display:flex;flex-direction:column;justify-content:left;align-items:left;background-color:
        ${node.data.color}
      ;border-radius:5px;'><div><span class='font-semibold text-base border-b-1 border-gray-200 border-b-2 block'>
  ${node.data.text_1}
  </span></div><div></div><div><i>
  ${node.data.text_2}
  "</i></div></div>`}
          linkShape="curve"
          linkWidth={() => 2}
        />
      </div>
    </>
  );
}
