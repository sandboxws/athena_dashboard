/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import PageTitle from "../../common/PageTitle";
import { Label, Table } from "semantic-ui-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import syntaxStyle from "react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-blue";
import { useLogQuery } from "../../../generated/graphql";
import { TreevizReact } from "treeviz-react";
import SidekiqLogo from "../../../assets/icons/sidekiq.svg";
import "./logs.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApolloMessage from "../../common/ApolloMessage";
import AwesomeLable from "../../common/AwesomeLabel";

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
      <div className="grid grid-cols-12">
        <div className="mt-10 px-5 py-4 mr-5 bg-white shadow-md rounded-lg col-span-7">
          <h3 className="ml-2 m5-2 pb-2 text-purple-500 border-b border-gray-200">
            MongoDB Command
          </h3>
          <SyntaxHighlighter
            language="json"
            className="mongodb-command border border-gray-300 rounded-lg"
            style={syntaxStyle}
            wrapLines={false}
          >
            {JSON.stringify(JSON.parse(log?.command!), null, 2)}
          </SyntaxHighlighter>
        </div>

        <div className="px-5 py-4 mt-10 bg-white shadow-md rounded-lg col-span-5">
          <h3 className="ml-2 m5-2 pb-2 text-purple-500 border-b border-gray-200">
            Stats
          </h3>
          <Table basic="very">
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <AwesomeLable
                    title="Collection"
                    stat={log?.collection}
                    color="purple"
                  />
                </Table.Cell>
                <Table.Cell>
                  <AwesomeLable
                    title="Used Indexes"
                    stat={log?.explain?.usedIndexes || "N/A"}
                    color="purple"
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <AwesomeLable
                    title="Duration"
                    stat={log?.explain?.duration || "N/A"}
                    color="indigo"
                  />
                </Table.Cell>

                <Table.Cell>
                  <AwesomeLable
                    title="Keys Examined"
                    stat={log?.explain?.keysExamined || 0}
                    color="indigo"
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <AwesomeLable
                    title="Documents Returned"
                    stat={log?.explain?.documentsReturned || 0}
                    color="blue"
                  />
                </Table.Cell>

                <Table.Cell>
                  <AwesomeLable
                    title="Documents Examined"
                    stat={log?.explain?.documentsExamined || 0}
                    color="blue"
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <AwesomeLable
                    title="Rejected Plans"
                    stat={log?.explain?.rejectedPlans || 0}
                    color="pink"
                  />
                </Table.Cell>
                <Table.Cell>
                  <AwesomeLable
                    title="Stages Count"
                    stat={log?.explain?.stagesCount || "N/A"}
                    color="pink"
                  />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>

      <div className="grid grid-cols-12">
        <div className="mt-10 mr-2 px-5 py-4 bg-white shadow-md rounded-lg col-span-7">
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

        <div className="mt-10 px-5 py-4 bg-white shadow-md rounded-lg col-span-5">
          <h3 className="ml-2 m5-2 pb-2 text-purple-500 border-b border-gray-200">
            Query Plan
          </h3>
          <TreevizReact
            data={treeData}
            areaWidth={550}
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
      </div>
    </>
  );
}
