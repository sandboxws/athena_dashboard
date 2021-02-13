import gql from "graphql-tag";

// export const LATEST_SQL_QUERIES_GQL = gql`
//   query LatestSqlQueries(
//     $controllerId: Int
//     $stacktraceId: Int
//     $mode: String
//     $limit: Int
//     $page: Int
//     $tables: [String!]
//     $operations: [String!]
//     $sourceNames: [String!]
//   ) {
//     mongodbLogs(
//       mode: $mode
//       limit: $limit
//       page: $page
//       controllerId: $controllerId
//       stacktraceId: $stacktraceId
//       tables: $tables
//       operations: $operations
//       sourceNames: $sourceNames
//     ) {
//       currentPage
//       previousPage
//       nextPage
//       totalItems
//       totalPages
//       nodes {
//         id
//         queryExcerpt
//         query
//         tableName
//         schemaName
//         operation
//         duration
//         controller {
//           id
//           action
//           name
//           path
//         }
//       }
//     }
//   }
// `;

export const LATEST_SQL_QUERIES_WITH_STATS_GQL = gql`
  query LatestSqlQueriesWithStats(
    $controllerId: Int
    $stacktraceId: Int
    $sidekiqWorkerId: Int
    $delayedJobId: Int
    $mode: String
    $limit: Int
    $page: Int
    $tables: [String!]
    $operations: [String!]
    $sourceNames: [String!]
  ) {
    sqlQueriesWithStats(
      controllerId: $controllerId
      stacktraceId: $stacktraceId
      sidekiqWorkerId: $sidekiqWorkerId
      delayedJobId: $delayedJobId
      mode: $mode
      limit: $limit
      page: $page
      tables: $tables
      operations: $operations
      sourceNames: $sourceNames
    ) {
      tables
      operations
      sourceNames
      totalDuration
      operationsStats {
        name
        value
      }
      tablesStats {
        name
        value
      }
      sqlQueries {
        currentPage
        previousPage
        nextPage
        totalItems
        totalPages
        nodes {
          id
          queryExcerpt
          query
          tableName
          schemaName
          operation
          appName
          sourceName
          duration
          createdAt
          controller {
            id
            action
            name
            path
          }
        }
      }
    }
  }
`;

export const SHOW_SQL_QUERY_GQL = gql`
  query SqlQuery($id: Int!) {
    sqlQuery(id: $id) {
      id
      tableName
      schemaName
      query
      queryExcerpt
      operation
      appName
      sourceName
      sidekiqArgs
      stacktrace {
        id
        stacktrace
      }
      sqlExplain {
        id
        treeviz
        startupCost
        totalCost
        rows
        width
        actualStartupTime
        actualTotalTime
        actualRows
        actualLoops
        seqScans
      }
      controller {
        id
        action
        path
        params
      }
      sidekiqWorker {
        id
        worker
        queue
      }
      createdAt
      duration
    }
  }
`;
