import React from "react";
import { Divider, Label, Table } from "semantic-ui-react";
import chunk from "lodash/chunk";
import { useMongoDbControllerQuery, IStat } from "../../../generated/graphql";
import operationColor from "../../common/CommandColors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AwesomeAccordion from "../../common/AwesomeAccordion";
import AwesomeLogs from "../../common/AwesomeLogs";
import { useParams } from "react-router-dom";
import ApolloMessage from "../../common/ApolloMessage";

export default function Controller() {
  let { id } = useParams();
  id = parseInt(id);

  const { loading, error, data } = useMongoDbControllerQuery({
    variables: {
      id: id,
    },
  });

  if (loading || error)
    return <ApolloMessage loading={loading} error={error} />;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const controller = data?.mongodbController!;

  return (
    <>
      <h1 className="text-2xl text-gray-700 pb-0 mb-0">{`Controller #${id}`}</h1>
      <p className="mt-1 max-w-2xl text-base leading-5 text-gray-600">
        {`${controller.name}#${controller.action}`}
      </p>
      <div>
        {controller.collscans > 0 ? (
          <Label color="red" horizontal>
            COLLSCAN
          </Label>
        ) : (
          ""
        )}
        <Label color={controller.logsCount >= 100 ? "red" : "green"} horizontal>
          Queries
          <Label.Detail>
            <FontAwesomeIcon icon="database" className="mr-1" />
            {controller.logsCount}
          </Label.Detail>
        </Label>
        <Label
          color={controller.totalDuration >= 10 ? "red" : "green"}
          horizontal
        >
          Duration
          <Label.Detail>
            <FontAwesomeIcon icon="clock" className="mr-1" />
            {controller.totalDuration}
          </Label.Detail>
        </Label>
        {controller.opsStats.map((stat) => (
          <Label color="purple" key={stat.name} horizontal>
            {stat.name}
            <Label.Detail>{stat.value}</Label.Detail>
          </Label>
        ))}
      </div>
      <AwesomeAccordion
        title="Params"
        excerpt={controller.paramsExcerpt}
        jsonContent={controller.params}
      />
      <Divider horizontal>Stats</Divider>
      <Table>
        <Table.Body className="bg-gray-100">
          {chunk(controller.collectionsStats, 2).map((collectionsStats, i) => {
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
                    <Table.Cell colSpan={collectionsStats.length === 1 ? 3 : 0}>
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
          })}
        </Table.Body>
      </Table>
      <AwesomeLogs controllerId={id} />
    </>
  );
}
