import React from "react";
import { Button, Table, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { ISqlQuery } from "../../../../generated/graphql";
import operationColor from "../../../common/CommandColors";
import AwesomeAccordion from "../../../common/AwesomeAccordion";

type Props = {
  sqlQuery: ISqlQuery;
};

export default function SqlQuery(props: Props) {
  const {
    id,
    tableName,
    schemaName,
    operation,
    appName,
    sourceName,
    query,
    queryExcerpt,
    duration,
    createdAt,
  } = props.sqlQuery;

  return (
    <Table.Row verticalAlign="middle">
      <Table.Cell>{`${schemaName}.${tableName}`}</Table.Cell>
      <Table.Cell>
        <Label color={operationColor(operation)} horizontal>
          {operation}
        </Label>
      </Table.Cell>
      <Table.Cell>{appName}</Table.Cell>
      <Table.Cell>{sourceName}</Table.Cell>
      <Table.Cell>
        <AwesomeAccordion excerpt={queryExcerpt} sqlContent={query} />
      </Table.Cell>
      <Table.Cell>{duration}s</Table.Cell>
      <Table.Cell>{createdAt}</Table.Cell>
      <Table.Cell>
        <Button as={Link} size="mini" color="blue" to={`/sql_queries/${id}`}>
          Inspect
        </Button>
      </Table.Cell>
    </Table.Row>
  );
}
