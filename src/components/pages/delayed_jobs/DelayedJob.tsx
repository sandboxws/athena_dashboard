import React from "react";
import { Label, Table, Divider } from "semantic-ui-react";
import chunk from "lodash/chunk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import operationColor from "../../common/CommandColors";
import { useDelayedJobQuery, IStat } from "../../../generated/graphql";
import AwesomeAccordion from "../../common/AwesomeAccordion";
import AwesomeSqlQueries from "../../common/AwesomeSqlQueries";
import ApolloMessage from "../../common/ApolloMessage";

type Props = {
  match: {
    params: {
      id: string;
    };
  };
};

export default function DelayedJob(props: Props) {
  const {
    match: { params },
  } = props;

  const id = parseInt(params.id);

  const { loading, error, data } = useDelayedJobQuery({
    variables: { id: id },
  });
  if (loading || error)
    return <ApolloMessage loading={loading} error={error} />;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const delayedJob = data?.delayedJob!;

  return (
    <>
      <div className="mb-10 px-5 py-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl text-gray-700 pb-0 mb-3">{`${delayedJob.job} \u00BB #${params.id}`}</h1>
        <div>
          <Label
            color={delayedJob.queriesCount >= 100 ? "red" : "green"}
            horizontal
          >
            Queries
            <Label.Detail>
              <FontAwesomeIcon icon="database" className="mr-1" />
              {delayedJob.queriesCount}
            </Label.Detail>
          </Label>
          <Label
            color={delayedJob.totalDuration >= 10 ? "red" : "green"}
            horizontal
          >
            Duration
            <Label.Detail>
              <FontAwesomeIcon icon="clock" className="mr-1" />
              {delayedJob.totalDuration}
            </Label.Detail>
          </Label>
        </div>
      </div>
      <AwesomeAccordion
        title="Params"
        excerpt={delayedJob.paramsExcerpt}
        jsonContent={delayedJob.params}
      />

      <Divider horizontal>Stats</Divider>
      <div className="px-5 py-4 bg-white shadow-md rounded-lg">
        <Table>
          <Table.Body className="bg-gray-100">
            {chunk(delayedJob.tablesStats, 2).map((tableStats, i) => {
              return (
                <Table.Row key={i}>
                  {tableStats.map((tableStats) => (
                    <>
                      <Table.Cell className="font-medium">
                        {tableStats.name}
                      </Table.Cell>
                      <Table.Cell>
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
                    </>
                  ))}
                  {tableStats.length === 1 ? (
                    <>
                      <Table.Cell>&nbsp;</Table.Cell>
                      <Table.Cell>&nbsp;</Table.Cell>
                    </>
                  ) : (
                    ""
                  )}
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
      <AwesomeSqlQueries delayedJobId={id} />
    </>
  );
}
