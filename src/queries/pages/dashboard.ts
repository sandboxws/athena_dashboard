import gql from "graphql-tag";

export const DASHBOARD_GQL = gql`
  query DashboardQuery {
    dashboard {
      operationsStats {
        name
        totalCount
        maxDuration
      }
      topCollections {
        name
        totalCount
        maxDuration
      }
      mongodbLatestLogs(limit: 10) {
        id
        collection
        operation
        appName
        sourceName
        command
        commandExcerpt
        duration
        createdAt
      }
      mongodbLatestControllers(limit: 10) {
        id
        action
        name
        path
        logsCount
        totalDuration
        createdAt
      }
      latestSidekiqWorkers {
        id
        jid
        worker
        queue
        logsCount
        totalDuration
        createdAt
      }
    }
  }
`;

export const DASHBOARD_LATEST_LOGS_GQL = gql`
  query DashboardLatestLogsQuery {
    dashboard {
      mongodbLatestLogs(limit: 10) {
        id
        collection
        operation
        command
        commandExcerpt
        duration
        createdAt
      }
    }
  }
`;
