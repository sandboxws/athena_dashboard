import gql from "graphql-tag";
declare module "*";

import { GraphQLDate, GraphQLTime, GraphQLDateTime } from "graphql-iso-date";

const typeDefs = gql`
  scalar Date
  scalar Time
  scalar DateTime
`;
