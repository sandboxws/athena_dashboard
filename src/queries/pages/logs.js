import gql from 'graphql-tag'

export const LATEST_LOGS_GQL = gql `
  query($mode: String, $limit: Int, $page: Int, $collections: [String!], $operations: [String!]) {
    mongodbLogs(mode: $mode, limit: $limit, page: $page, collections: $collections, operations: $operations) {
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
`

export const LATEST_LOGS_WITH_STATS_GQL = gql `
  query($mode: String, $limit: Int, $page: Int, $collections: [String!], $operations: [String!]) {
    logsWithStats(mode: $mode, limit: $limit, page: $page, collections: $collections, operations: $operations) {
      collections
      operations
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
  }
`

export const GLOBAL_STATS_GQL = gql `
  query($collections: [String!], $operations: [String!]) {
    globalStats(collections: $collections, operations: $operations) {
      collections
      operations
    }
  }
`

export const SHOW_LOG_GQL = gql `
  query($id: Int!) {
    mongodbLog(id: $id) {
      id
      collection
      collscan
      command
      commandExcerpt
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
      }
      controller {
        id
        action
        path
        params
      }
      createdAt
      duration
    }
  }
`
