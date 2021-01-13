import gql from "graphql-tag";

export const LATEST_CONTROLLERS_GQL = gql`
  query LatestControllers($limit: Int, $page: Int, $names: [String!]) {
    controllers(limit: $limit, page: $page, names: $names) {
      currentPage
      previousPage
      nextPage
      totalItems
      totalPages
      nodes {
        id
        name
        action
        path
        logsCount
        totalDuration
        sqlTotalDuration
        sqlQueriesCount
      }
    }
  }
`;

export const SHOW_CONTROLLER_GQL = gql`
  query Controller($id: Int!) {
    controller(id: $id) {
      id
      name
      action
      path
      params
      paramsExcerpt
      logsCount
      sessionId
      totalDuration
      sqlTotalDuration
      sqlQueriesCount
      collscans
      opsStats {
        name
        value
      }
      sqlOpsStats {
        name
        value
      }
      collectionsStats {
        name
        stats {
          name
          value
        }
      }
      tablesStats {
        name
        stats {
          name
          value
        }
      }
      createdAt
      updatedAt
    }
  }
`;

export const SHOW_CONTROLLER_LOGS_GQL = gql`
  query AwesomeControllerLogs($id: Int!, $logsPage: Int) {
    controller(id: $id, logsPage: $logsPage) {
      logs @connection(key: $logsPage) {
        currentPage
        previousPage
        nextPage
        totalItems
        totalPages
        nodes {
          id
          collection
          command
          commandExcerpt
          operation
          duration
        }
      }
    }
  }
`;

export const SHOW_CONTROLLER_SQL_QUERIES_GQL = gql`
  query AwesomeControllerSqlQueries($id: Int!, $sqlQueriesPage: Int) {
    controller(id: $id, sqlQueriesPage: $sqlQueriesPage) {
      sqlQueries @connection(key: $sqlQueriesPage) {
        currentPage
        previousPage
        nextPage
        totalItems
        totalPages
        nodes {
          id
          tableName
          schemaName
          query
          queryExcerpt
          operation
          duration
        }
      }
    }
  }
`;
