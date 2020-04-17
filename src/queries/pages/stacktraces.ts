import gql from "graphql-tag";

export const LATEST_STACKTRACES_GQL = gql`
  query LatestStacktraces($limit: Int, $page: Int) {
    mongodbStacktraces(limit: $limit, page: $page) {
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
      sourcesStats {
        name
        value
      }
    }
  }
`;
