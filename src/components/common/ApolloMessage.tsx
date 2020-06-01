import React from "react";
import { Message } from "semantic-ui-react";
import { ApolloError } from "@apollo/client";

type Props = {
  loading: boolean;
  error: ApolloError | undefined | null;
};

export default function ApolloMessage(props: Props) {
  const { loading, error } = props;
  if (loading) return <div>Fetching data</div>;
  if (error)
    return (
      <Message warning>
        {error.graphQLErrors.map((e) => (
          <p key={e.name}>{e.message}</p>
        ))}
      </Message>
    );
  return <></>;
}
