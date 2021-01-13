import gql from "graphql-tag";

export const LATEST_STACKTRACES_GQL = gql`
  query LatestStacktraces($limit: Int, $page: Int) {
    stacktraces(limit: $limit, page: $page) {
      currentPage
      previousPage
      nextPage
      totalItems
      totalPages
      nodes {
        id
        stacktrace
        stacktraceExcerpt
        logsCount
        minDuration
        maxDuration
        avgDuration
        sqlQueriesCount
        sqlQueriesMinDuration
        sqlQueriesMaxDuration
        sqlQueriesAvgDuration
      }
    }
  }
`;

export const SHOW_MONOGODB_STRACKTRACE_GQL = gql`
  query MongodbStacktrace($id: Int!) {
    mongodbStacktrace(id: $id) {
      id
      stacktrace
      stacktraceExcerpt
      logsCount
      minDuration
      maxDuration
      avgDuration
      sqlQueriesCount
      sqlQueriesMinDuration
      sqlQueriesMaxDuration
      sqlQueriesAvgDuration
      sourcesStats {
        name
        value
      }
      sqlQueriesSourcesStats {
        name
        value
      }
    }
  }
`;
