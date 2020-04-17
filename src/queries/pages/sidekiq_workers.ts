import gql from "graphql-tag";

export const LATEST_SIDEKIQ_WORKERS_WITH_STATS_GQL = gql`
  query LatestSidekiqWorkersWithStats(
    $mode: String
    $limit: Int
    $page: Int
    $workers: [String!]
    $queues: [String!]
  ) {
    sidekiqWorkersWithStats(
      mode: $mode
      limit: $limit
      page: $page
      workers: $workers
      queues: $queues
    ) {
      queriesCount
      totalDuration
      workers
      queues
      workersStats {
        name
        value
      }
      queuesStats {
        name
        value
      }
      sidekiqWorkers {
        currentPage
        previousPage
        nextPage
        totalItems
        totalPages
        nodes {
          id
          worker
          queue
          jid
          params
          logsCount
          minDuration
          maxDuration
          avgDuration
        }
      }
    }
  }
`;

export const SHOW_SIDEKIQ_WORKER_GQL = gql`
  query SidekiqWorker($id: Int!) {
    sidekiqWorker(id: $id) {
      id
      worker
      queue
      jid
      params
      paramsExcerpt
      logsCount
      totalDuration
      minDuration
      maxDuration
      avgDuration
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
    }
  }
`;
