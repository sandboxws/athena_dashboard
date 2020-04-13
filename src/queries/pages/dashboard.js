import gql from 'graphql-tag'

export const DASHBOARD_GQL = gql `
  query {
    dashboard {
      stats {
        name,
        totalCount,
        maxDuration
      }
      mongodbLatestLogs(limit: 10) {
        id
        collection
        operation
        command
        commandExcerpt
        duration
        createdAt
      },
      mongodbLatestControllers {
        action
        name
        path
        logsCount
      }
    }
  }
`

export const DASHBOARD_LATEST_LOGS_GQL = gql `
  query {
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
`
