import gql from 'graphql-tag'

export const DASHBOARD_GQL = gql `
  query {
    dashboard {
      mongodbLatestLogs(limit: 10) {
        id
        collection
        operation
        command
        commandExcerpt
        duration
        controller {
          name
          action
        }
        createdAt
      },
      find {
        totalCount
        maxDuration
      },
      insert {
        totalCount
        maxDuration
      },
      update {
        totalCount
        maxDuration
      },
      distinct {
        totalCount
        maxDuration
      },
      delete {
        totalCount
        maxDuration
      },
      aggregate {
        totalCount
        maxDuration
      },
      count {
        totalCount
        maxDuration
      },
      getMore {
        totalCount
        maxDuration
      }
    }
  }
`

export const DASHBOARD_LATEST_LOGS_GQL = gql `
  query {
    dashboard {
      mongodbLatestLogs(limit: 10) {
        collection
        operation
        command
        commandExcerpt
        duration
        controller {
          name
          action
        }
        createdAt
      }
    }
  }
`
