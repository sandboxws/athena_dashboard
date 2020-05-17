import gql from "graphql-tag";

export const LATEST_LOGS_GQL = gql`
  query LatestLogs(
    $controllerId: Int
    $stacktraceId: Int
    $mode: String
    $limit: Int
    $page: Int
    $collections: [String!]
    $operations: [String!]
    $sourceNames: [String!]
  ) {
    mongodbLogs(
      mode: $mode
      limit: $limit
      page: $page
      controllerId: $controllerId
      stacktraceId: $stacktraceId
      collections: $collections
      operations: $operations
      sourceNames: $sourceNames
    ) {
      currentPage
      previousPage
      nextPage
      totalItems
      totalPages
      nodes {
        id
        commandExcerpt
        command
        collection
        operation
        duration
        controller {
          id
          action
          name
          path
        }
      }
    }
  }
`;

export const LATEST_LOGS_WITH_STATS_GQL = gql`
  query LatestLogsWithStats(
    $controllerId: Int
    $stacktraceId: Int
    $sidekiqWorkerId: Int
    $mode: String
    $limit: Int
    $page: Int
    $collections: [String!]
    $operations: [String!]
    $sourceNames: [String!]
  ) {
    logsWithStats(
      controllerId: $controllerId
      stacktraceId: $stacktraceId
      sidekiqWorkerId: $sidekiqWorkerId
      mode: $mode
      limit: $limit
      page: $page
      collections: $collections
      operations: $operations
      sourceNames: $sourceNames
    ) {
      collections
      operations
      sourceNames
      totalDuration
      operationsStats {
        name
        value
      }
      collectionsStats {
        name
        value
      }
      logs {
        currentPage
        previousPage
        nextPage
        totalItems
        totalPages
        nodes {
          id
          commandExcerpt
          command
          collection
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

export const GLOBAL_STATS_GQL = gql`
  query GlobalStats($collections: [String!], $operations: [String!]) {
    globalStats(collections: $collections, operations: $operations) {
      collections
      operations
    }
  }
`;

export const SHOW_LOG_GQL = gql`
  query Log($id: Int!) {
    mongodbLog(id: $id) {
      id
      collection
      collscan
      command
      commandExcerpt
      operation
      appName
      sourceName
      sidekiqArgs
      stacktrace {
        id
        stacktrace
      }
      explain {
        id
        documentsExamined
        documentsReturned
        duration
        keysExamined
        rejectedPlans
        usedIndexes
        stagesCount
        treeviz
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
