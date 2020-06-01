import React from "react";
import { Label, Table, Divider } from "semantic-ui-react";
import chunk from "lodash/chunk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import operationColor from "../../common/CommandColors";
import { useSidekiqWorkerQuery, IStat } from "../../../generated/graphql";
import AwesomeAccordion from "../../common/AwesomeAccordion";
import AwesomeLogs from "../../common/AwesomeLogs";
import ApolloMessage from "../../common/ApolloMessage";

type Props = {
  match: {
    params: {
      id: string;
    };
  };
};

export default function SidekiqWorker(props: Props) {
  const {
    match: { params },
  } = props;

  const id = parseInt(params.id);

  const { loading, error, data } = useSidekiqWorkerQuery({
    variables: { id: id },
  });
  if (loading || error)
    return <ApolloMessage loading={loading} error={error} />;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const sidekiqWorker = data?.sidekiqWorker!;

  return (
    <>
      <h1 className="text-2xl text-gray-700 pb-0 mb-3">{`${sidekiqWorker.worker} \u00BB #${params.id}`}</h1>
      <div>
        <Label
          color={sidekiqWorker.logsCount >= 100 ? "red" : "green"}
          horizontal
        >
          Queries
          <Label.Detail>
            <FontAwesomeIcon icon="database" className="mr-1" />
            {sidekiqWorker.logsCount}
          </Label.Detail>
        </Label>
        <Label
          color={sidekiqWorker.totalDuration >= 10 ? "red" : "green"}
          horizontal
        >
          Duration
          <Label.Detail>
            <FontAwesomeIcon icon="clock" className="mr-1" />
            {sidekiqWorker.totalDuration}
          </Label.Detail>
        </Label>
        <Label color="purple" horizontal>
          {sidekiqWorker.queue}
        </Label>
      </div>
      <AwesomeAccordion
        title="Params"
        excerpt={sidekiqWorker.paramsExcerpt}
        jsonContent={sidekiqWorker.params}
      />

      <Divider horizontal>Stats</Divider>
      <Table>
        <Table.Body className="bg-gray-100">
          {chunk(sidekiqWorker.collectionsStats, 2).map(
            (collectionStats, i) => {
              return (
                <Table.Row key={i}>
                  {collectionStats.map((collectionStats) => (
                    <>
                      <Table.Cell className="font-medium">
                        {collectionStats.name}
                      </Table.Cell>
                      <Table.Cell>
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
                    </>
                  ))}
                  {collectionStats.length === 1 ? (
                    <>
                      <Table.Cell>&nbsp;</Table.Cell>
                      <Table.Cell>&nbsp;</Table.Cell>
                    </>
                  ) : (
                    ""
                  )}
                </Table.Row>
              );
            }
          )}
        </Table.Body>
      </Table>
      <AwesomeLogs sidekiqWorkerId={id} />
    </>
  );
}
