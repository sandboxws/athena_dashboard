import gql from "graphql-tag";

export const LATEST_CONTROLLERS_GQL = gql`
  query LatestControllers($limit: Int, $page: Int, $names: [String!]) {
    mongodbControllers(limit: $limit, page: $page, names: $names) {
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
      }
    }
  }
`;

export const SHOW_CONTROLLER_GQL = gql`
  query MongoDBController($id: Int!) {
    mongodbController(id: $id) {
      id
      name
      action
      path
      params
      paramsExcerpt
      logsCount
      sessionId
      totalDuration
      collscans
      opsStats {
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
      createdAt
      updatedAt
    }
  }
`;

export const SHOW_CONTROLLER_LOGS_GQL = gql`
  query MongoDBControllerLogs($id: Int!, $logsPage: Int) {
    mongodbController(id: $id, logsPage: $logsPage) {
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
