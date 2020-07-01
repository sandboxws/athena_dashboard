import React from "react";
import { Button, Table, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import operationColor from "../../../common/CommandColors";
import { ISqlQuery } from "../../../../generated/graphql";
import AwesomeAccordion from "../../../common/AwesomeAccordion";

type Props = {
  sqlQuery: ISqlQuery;
};

export default function Log(props: Props) {
  const {
    id,
    tableName,
    schemaName,
    operation,
    query,
    queryExcerpt,
    duration,
  } = props.sqlQuery;
  return (
    <Table.Row verticalAlign="middle">
      <Table.Cell>{`${schemaName}.${tableName}`}</Table.Cell>
      <Table.Cell>
        <Label color={operationColor(operation)} horizontal>
          {operation}
        </Label>
      </Table.Cell>
      <Table.Cell>
        <AwesomeAccordion excerpt={queryExcerpt} sqlContent={query} />
      </Table.Cell>
      <Table.Cell>{(duration / 1000).toFixed(5)}s</Table.Cell>
      <Table.Cell>
        <Button as={Link} size="mini" color="blue" to={`/sql_queries/${id}`}>
          Inspect
        </Button>
      </Table.Cell>
    </Table.Row>
  );
}
