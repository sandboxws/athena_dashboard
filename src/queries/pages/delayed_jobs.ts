import gql from "graphql-tag";

export const LATEST_DELAYED_JOBS_WITH_STATS_GQL = gql`
  query LatestDelayedJobsWithStats(
    $mode: String
    $limit: Int
    $page: Int
    $jobs: [String!]
  ) {
    delayedJobsWithStats(mode: $mode, limit: $limit, page: $page, jobs: $jobs) {
      queriesCount
      totalDuration
      jobs
      jobsStats {
        name
        value
      }
      delayedJobs {
        currentPage
        previousPage
        nextPage
        totalItems
        totalPages
        nodes {
          id
          job
          jid
          params
          queriesCount
          minDuration
          maxDuration
          avgDuration
        }
      }
    }
  }
`;

export const SHOW_DELAYED_JOB_GQL = gql`
  query DelayedJob($id: Int!) {
    delayedJob(id: $id) {
      id
      job
      jid
      params
      paramsExcerpt
      queriesCount
      totalDuration
      minDuration
      maxDuration
      avgDuration
      opsStats {
        name
        value
      }
      tablesStats {
        name
        stats {
          name
          value
        }
      }
    }
  }
`;
