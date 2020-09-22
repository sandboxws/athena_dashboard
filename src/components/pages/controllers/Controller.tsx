import React from "react";
import { Divider, Label, Table } from "semantic-ui-react";
import chunk from "lodash/chunk";
import { useControllerQuery, IStat } from "../../../generated/graphql";
import operationColor from "../../common/CommandColors";
import AwesomeAccordion from "../../common/AwesomeAccordion";
import AwesomeLogs from "../../common/AwesomeLogs";
import AwesomeSqlQueries from "../../common/AwesomeSqlQueries";
import { useParams } from "react-router-dom";
import ApolloMessage from "../../common/ApolloMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Controller() {
  let { id } = useParams();
  id = parseInt(id);

  const { loading, error, data } = useControllerQuery({
    variables: {
      id: id,
    },
  });

  if (loading || error)
    return <ApolloMessage loading={loading} error={error} />;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const controller = data?.controller!;
  const collectionsStats = controller.collectionsStats || [];
  const tablesStats = controller.tablesStats || [];
  const count =
    (controller?.logsCount || 0) + (controller?.sqlQueriesCount || 0);
  const duration =
    (controller.totalDuration || 0) + (controller.sqlTotalDuration || 0);

  return (
    <>
      <div className="px-5 py-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl text-gray-700 pb-0 mb-0">{`Controller #${id}`}</h1>
        <p className="mt-1 max-w-2xl text-base leading-5 text-gray-600">
          {`${controller.name}#${controller.action}`}
        </p>

        <Label color={count >= 100 ? "red" : "green"} horizontal>
          Queries
          <Label.Detail>
            <FontAwesomeIcon icon="database" className="mr-1" />
            {count}
          </Label.Detail>
        </Label>
        <Label color={duration / 1000 >= 10 ? "red" : "green"} horizontal>
          Duration
          <Label.Detail>
            <FontAwesomeIcon icon="clock" className="mr-1" />
            {(duration / 1000).toFixed(5)}
          </Label.Detail>
        </Label>
      </div>

      <AwesomeAccordion
        title="Params"
        excerpt={controller.paramsExcerpt}
        jsonContent={controller.params}
      />
      {collectionsStats.length > 0 ? (
        <>
          <Divider horizontal>MongoDB Stats</Divider>
          <div className="px-5 py-4 bg-white shadow-md rounded-lg">
            <Table>
              <Table.Body className="bg-gray-100">
                {chunk(controller.collectionsStats, 2).map(
                  (collectionsStats, i) => {
                    return (
                      <Table.Row key={i}>
                        {collectionsStats.map((collectionStats) => (
                          <React.Fragment key={`${collectionStats.name}_${i}`}>
                            <Table.Cell
                              key={collectionStats.name}
                              className="font-medium"
                            >
                              {collectionStats.name}
                            </Table.Cell>
                            <Table.Cell
                              colSpan={collectionsStats.length === 1 ? 3 : 0}
                            >
                              {collectionStats.stats.map((stat: IStat) => (
                                <Label
                                  key={stat.name}
                                  color={operationColor(stat.name)}
                                >
                                  {stat.name}
                                  <Label.Detail>{stat.value}</Label.Detail>
                                </Label>
                              ))}
                            </Table.Cell>
                          </React.Fragment>
                        ))}
                      </Table.Row>
                    );
                  }
                )}
              </Table.Body>
            </Table>
          </div>
        </>
      ) : (
        ""
      )}

      {tablesStats.length > 0 ? (
        <>
          <Divider horizontal>SQL Stats</Divider>
          <div className="px-5 py-4 bg-white shadow-md rounded-lg">
            <Table>
              <Table.Body className="bg-gray-100">
                {chunk(controller.tablesStats, 2).map((tablesStats, i) => {
                  return (
                    <Table.Row key={i}>
                      {tablesStats.map((tableStats) => (
                        <React.Fragment key={`${tableStats.name}_${i}`}>
                          <Table.Cell
                            key={tableStats.name}
                            className="font-medium"
                          >
                            {tableStats.name}
                          </Table.Cell>
                          <Table.Cell
                            colSpan={tablesStats.length === 1 ? 3 : 0}
                          >
                            {tableStats.stats.map((stat: IStat) => (
                              <Label
                                key={stat.name}
                                color={operationColor(stat.name)}
                              >
                                {stat.name}
                                <Label.Detail>{stat.value}</Label.Detail>
                              </Label>
                            ))}
                          </Table.Cell>
                        </React.Fragment>
                      ))}
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </div>
        </>
      ) : (
        ""
      )}
      <AwesomeLogs controllerId={id} />
      <AwesomeSqlQueries controllerId={id} />
    </>
  );
}
