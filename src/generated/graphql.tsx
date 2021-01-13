import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

/** Awesome Rails Controller */
export type IAwesomeController = {
  __typename?: 'AwesomeController';
  /** Rails controller action */
  action: Scalars['String'];
  /** Controller stats */
  collectionsStats: Maybe<Array<ICollectionStats>>;
  /** Count of COLLSCAN queries */
  collscans: Maybe<Scalars['Int']>;
  /** Timestamp in UTC */
  createdAt: Scalars['DateTime'];
  /** Primary key */
  id: Scalars['ID'];
  /** Associated MongoDB Logs */
  logs: Maybe<ILogs>;
  /** Total count of logs per action per path */
  logsCount: Maybe<Scalars['Int']>;
  /** Name of a rails controller */
  name: Scalars['String'];
  /** Controller stats */
  opsStats: Maybe<Array<IStat>>;
  /** HTTP request params */
  params: Scalars['String'];
  /** Mini version of the HTTP request params */
  paramsExcerpt: Scalars['String'];
  /** Rails controller path */
  path: Scalars['String'];
  /** A unique id identifying a session during which queries are logged. */
  sessionId: Scalars['String'];
  /** Controller stats */
  sqlOpsStats: Maybe<Array<IStat>>;
  /** Associated SQL Queries */
  sqlQueries: Maybe<ISqlQueries>;
  /** Total count of queries per action per path */
  sqlQueriesCount: Maybe<Scalars['Int']>;
  /** Total duraiton of all sql queries */
  sqlTotalDuration: Maybe<Scalars['Float']>;
  /** Controller stats */
  tablesStats: Maybe<Array<ITableStats>>;
  /** Total duraiton of all sql queries */
  totalDuration: Maybe<Scalars['Float']>;
  /** Timestamp in UTC */
  updatedAt: Scalars['DateTime'];
};

export type IAwesomeControllers = IPageable & {
  __typename?: 'AwesomeControllers';
  currentPage: Maybe<Scalars['Int']>;
  firstPage: Maybe<Scalars['Boolean']>;
  lastPage: Maybe<Scalars['Boolean']>;
  nextPage: Maybe<Scalars['Int']>;
  nodes: Array<IAwesomeController>;
  previousPage: Maybe<Scalars['Int']>;
  size: Maybe<Scalars['Int']>;
  totalItems: Maybe<Scalars['Int']>;
  totalPages: Maybe<Scalars['Int']>;
};

export type ICollectionStats = {
  __typename?: 'CollectionStats';
  /** Collection name */
  name: Scalars['String'];
  /** Collection stats */
  stats: Array<IStat>;
};

/** MongoDB Command */
export type ICommand = {
  __typename?: 'Command';
  /** MongoDB command max execution duration */
  maxDuration: Scalars['Float'];
  /** MongoDB command name */
  name: Scalars['String'];
  /** MongoDB command total count */
  totalCount: Scalars['Int'];
};

/** MongoDB Query Controller */
export type IController = {
  __typename?: 'Controller';
  /** Rails controller action */
  action: Scalars['String'];
  /** Controller stats */
  collectionsStats: Array<ICollectionStats>;
  /** Count of COLLSCAN queries */
  collscans: Scalars['Int'];
  /** Timestamp in UTC */
  createdAt: Scalars['DateTime'];
  /** Log primary key */
  id: Scalars['ID'];
  /** Associated MongoDB Logs */
  logs: ILogs;
  /** Total count of logs per action per path */
  logsCount: Scalars['Int'];
  /** Name of a rails controller */
  name: Scalars['String'];
  /** Controller stats */
  opsStats: Array<IStat>;
  /** HTTP request params */
  params: Scalars['String'];
  /** Mini version of the HTTP request params */
  paramsExcerpt: Scalars['String'];
  /** Rails controller path */
  path: Scalars['String'];
  /** A unique id identifying a session during which queries are logged. */
  sessionId: Scalars['String'];
  /** Total duraiton of all logs */
  totalDuration: Scalars['Float'];
  /** Timestamp in UTC */
  updatedAt: Scalars['DateTime'];
};

/** MongoDB Dashboard */
export type IDashboard = {
  __typename?: 'Dashboard';
  latestSidekiqWorkers: Maybe<Array<ISidekiqWorker>>;
  mongodbLatestControllers: Maybe<Array<IController>>;
  mongodbLatestLogs: Array<ILog>;
  /** MongoDB commands stats */
  operationsStats: Array<ICommand>;
  /** MongoDB commands stats */
  topCollections: Array<ICommand>;
};


/** MongoDB Dashboard */
export type IDashboardLatestSidekiqWorkersArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** MongoDB Dashboard */
export type IDashboardMongodbLatestControllersArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** MongoDB Dashboard */
export type IDashboardMongodbLatestLogsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** MongoDB Query Explain */
export type IExplain = {
  __typename?: 'Explain';
  /** Collection name */
  collection: Scalars['String'];
  /** A COLLSCAN flag */
  collscan: Maybe<Scalars['Boolean']>;
  /** The command performed */
  command: Scalars['String'];
  /** Rails controller */
  controller: Maybe<IController>;
  /** Timestamp in UTC */
  createdAt: Scalars['DateTime'];
  /** Total number of MongoDB documents examined by the query */
  documentsExamined: Maybe<Scalars['Int']>;
  /** Total number of MongoDB documents returned by the query */
  documentsReturned: Maybe<Scalars['Int']>;
  /** Query duration in seconds */
  duration: Scalars['Float'];
  /** Log primary key */
  id: Scalars['ID'];
  /** Total number of MongoDB keys examined by the query */
  keysExamined: Maybe<Scalars['Int']>;
  /** Query log */
  log: ILog;
  /** Unique id generated by MonoDB server */
  lsid: Scalars['String'];
  /** Total number of rejected plans */
  rejectedPlans: Maybe<Scalars['Int']>;
  /** A unique id identifying a session during which queries are logged. */
  sessionId: Scalars['String'];
  /** Query originating source */
  sourceName: Scalars['String'];
  /** Rails Stacktrace */
  stacktrace: IStacktrace;
  /** Total number of rejected plans */
  stagesCount: Maybe<Scalars['Int']>;
  /** MongoDB's explain as JSON */
  treeviz: Maybe<Scalars['String']>;
  /** Timestamp in UTC */
  updatedAt: Scalars['DateTime'];
  /** MongoDB indexes used if any */
  usedIndexes: Scalars['String'];
  /** MongoDB winning plan */
  winningPlan: Scalars['String'];
  /** MongoDB winning plan raw json */
  winningPlanRaw: Scalars['String'];
};

/** MongoDB Query GlobalStats */
export type IGlobalStats = {
  __typename?: 'GlobalStats';
  /** List of queries collections */
  collections: Array<Scalars['String']>;
  /** List of MongoDB operations */
  operations: Array<Scalars['String']>;
};

/** MongoDB Query Log */
export type ILog = {
  __typename?: 'Log';
  /** The originating app */
  appName: Maybe<Scalars['String']>;
  /** Collection name */
  collection: Scalars['String'];
  /** A COLLSCAN flag */
  collscan: Maybe<Scalars['Boolean']>;
  /** The command performed */
  command: Scalars['String'];
  /** An excerpt of the command performed */
  commandExcerpt: Scalars['String'];
  /** Associated Controller */
  controller: Maybe<IAwesomeController>;
  /** Timestamp in UTC */
  createdAt: Scalars['DateTime'];
  /** Query duration in seconds */
  duration: Scalars['Float'];
  /** Associated Query Explain */
  explain: Maybe<IExplain>;
  /** Log primary key */
  id: Scalars['ID'];
  /** Unique id generated by MonoDB server */
  lsid: Scalars['String'];
  /** The operation performed */
  operation: Scalars['String'];
  /** A unique id identifying a session during which queries are logged. */
  sessionId: Scalars['String'];
  /** Sidekiq job args */
  sidekiqArgs: Maybe<Scalars['String']>;
  /** Associated Sidekiq Job */
  sidekiqWorker: Maybe<ISidekiqWorker>;
  /** Source of the query (ex: console, sidekiq, server, …) */
  sourceName: Scalars['String'];
  /** Associated Stacktrace */
  stacktrace: IStacktrace;
  /** Timestamp in UTC */
  updatedAt: Scalars['DateTime'];
};

export type ILogs = IPageable & {
  __typename?: 'Logs';
  currentPage: Maybe<Scalars['Int']>;
  firstPage: Maybe<Scalars['Boolean']>;
  lastPage: Maybe<Scalars['Boolean']>;
  nextPage: Maybe<Scalars['Int']>;
  nodes: Array<ILog>;
  previousPage: Maybe<Scalars['Int']>;
  size: Maybe<Scalars['Int']>;
  totalItems: Maybe<Scalars['Int']>;
  totalPages: Maybe<Scalars['Int']>;
};

/** MongoDB Query Logs */
export type ILogsWithStats = {
  __typename?: 'LogsWithStats';
  /** MongoDB collections list */
  collections: Array<Scalars['String']>;
  /** MongoDB collection stats */
  collectionsStats: Array<IStat>;
  logs: ILogs;
  /** MongoDB operations list */
  operations: Array<Scalars['String']>;
  /** MongoDB operation stats */
  operationsStats: Array<IStat>;
  /** Source names list */
  sourceNames: Array<Scalars['String']>;
  /** Queries total execution duration in seconds */
  totalDuration: Scalars['Float'];
};

export type IMutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

export type IPageable = {
  currentPage: Maybe<Scalars['Int']>;
  firstPage: Maybe<Scalars['Boolean']>;
  lastPage: Maybe<Scalars['Boolean']>;
  nextPage: Maybe<Scalars['Int']>;
  previousPage: Maybe<Scalars['Int']>;
  size: Maybe<Scalars['Int']>;
  totalItems: Maybe<Scalars['Int']>;
  totalPages: Maybe<Scalars['Int']>;
};

export type IQuery = {
  __typename?: 'Query';
  controller: IAwesomeController;
  controllers: IAwesomeControllers;
  dashboard: IDashboard;
  globalStats: IGlobalStats;
  logsWithStats: ILogsWithStats;
  mongodbExplains: Array<IExplain>;
  mongodbLog: ILog;
  mongodbLogs: ILogs;
  mongodbStacktrace: IStacktrace;
  sidekiqWorker: ISidekiqWorker;
  sidekiqWorkersWithStats: ISidekiqWorkersWithStats;
  sqlQueriesWithStats: ISqlQueriesWithStats;
  sqlQuery: ISqlQuery;
  stacktraces: IStacktraces;
};


export type IQueryControllerArgs = {
  id: Scalars['Int'];
  logsPage?: Maybe<Scalars['Int']>;
  sqlQueriesPage?: Maybe<Scalars['Int']>;
};


export type IQueryControllersArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  names?: Maybe<Array<Scalars['String']>>;
  mode?: Maybe<Scalars['String']>;
};


export type IQueryGlobalStatsArgs = {
  collections?: Maybe<Array<Scalars['String']>>;
  operations?: Maybe<Array<Scalars['String']>>;
};


export type IQueryLogsWithStatsArgs = {
  controllerId: Maybe<Scalars['Int']>;
  stacktraceId: Maybe<Scalars['Int']>;
  sidekiqWorkerId: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  collections?: Maybe<Array<Scalars['String']>>;
  operations?: Maybe<Array<Scalars['String']>>;
  sourceNames?: Maybe<Array<Scalars['String']>>;
  mode?: Maybe<Scalars['String']>;
};


export type IQueryMongodbExplainsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type IQueryMongodbLogArgs = {
  id: Scalars['Int'];
};


export type IQueryMongodbLogsArgs = {
  controllerId: Maybe<Scalars['Int']>;
  stacktraceId: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  collections?: Maybe<Array<Scalars['String']>>;
  operations?: Maybe<Array<Scalars['String']>>;
  sourceNames?: Maybe<Array<Scalars['String']>>;
  mode?: Maybe<Scalars['String']>;
};


export type IQueryMongodbStacktraceArgs = {
  id: Scalars['Int'];
  logsPage?: Maybe<Scalars['Int']>;
};


export type IQuerySidekiqWorkerArgs = {
  id: Scalars['Int'];
};


export type IQuerySidekiqWorkersWithStatsArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  workers?: Maybe<Array<Scalars['String']>>;
  queues?: Maybe<Array<Scalars['String']>>;
  mode?: Maybe<Scalars['String']>;
};


export type IQuerySqlQueriesWithStatsArgs = {
  controllerId: Maybe<Scalars['Int']>;
  stacktraceId: Maybe<Scalars['Int']>;
  sidekiqWorkerId: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  tables?: Maybe<Array<Scalars['String']>>;
  operations?: Maybe<Array<Scalars['String']>>;
  sourceNames?: Maybe<Array<Scalars['String']>>;
  mode?: Maybe<Scalars['String']>;
};


export type IQuerySqlQueryArgs = {
  id: Scalars['Int'];
};


export type IQueryStacktracesArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

/** Sidekiq Job */
export type ISidekiqWorker = {
  __typename?: 'SidekiqWorker';
  /** Average duration for a queries originating from this sidekiq worker */
  avgDuration: Scalars['Float'];
  /** Collections stats */
  collectionsStats: Array<ICollectionStats>;
  /** Timestamp in UTC */
  createdAt: Scalars['DateTime'];
  /** Sidekiq Job primary key */
  id: Scalars['ID'];
  /** Sidekiq worker jid */
  jid: Scalars['String'];
  /** Total count of logs originating from this sidekiq worker */
  logsCount: Scalars['Int'];
  /** Max duration for a queries originating from this sidekiq worker */
  maxDuration: Scalars['Float'];
  /** Min duration for a queries originating from this sidekiq worker */
  minDuration: Scalars['Float'];
  /** Operations stats */
  opsStats: Array<IStat>;
  /** Sidekiq worker params */
  params: Scalars['String'];
  /** Sidekiq worker params */
  paramsExcerpt: Scalars['String'];
  /** Sidekiq worker queue */
  queue: Scalars['String'];
  /** Total duration for a queries originating from this sidekiq worker */
  totalDuration: Scalars['Float'];
  /** Timestamp in UTC */
  updatedAt: Scalars['DateTime'];
  /** Sidekiq worker class */
  worker: Scalars['String'];
};

export type ISidekiqWorkers = IPageable & {
  __typename?: 'SidekiqWorkers';
  currentPage: Maybe<Scalars['Int']>;
  firstPage: Maybe<Scalars['Boolean']>;
  lastPage: Maybe<Scalars['Boolean']>;
  nextPage: Maybe<Scalars['Int']>;
  nodes: Array<ISidekiqWorker>;
  previousPage: Maybe<Scalars['Int']>;
  size: Maybe<Scalars['Int']>;
  totalItems: Maybe<Scalars['Int']>;
  totalPages: Maybe<Scalars['Int']>;
};

/** Sidekiq Workers with Stats */
export type ISidekiqWorkersWithStats = {
  __typename?: 'SidekiqWorkersWithStats';
  /** Total number of queries */
  queriesCount: Scalars['Int'];
  /** Sidekiq queues list */
  queues: Array<Scalars['String']>;
  /** Sidekiq queues stats */
  queuesStats: Array<IStat>;
  sidekiqWorkers: ISidekiqWorkers;
  /** Total duration of queries */
  totalDuration: Scalars['Float'];
  /** Sidekiq workers list */
  workers: Array<Scalars['String']>;
  /** Sidekiq workers stats */
  workersStats: Array<IStat>;
};

/** SQL Query Explain */
export type ISqlExplain = {
  __typename?: 'SqlExplain';
  /** Total actual loops */
  actualLoops: Scalars['Float'];
  /** Total actual rows */
  actualRows: Scalars['Float'];
  /** Total actual startup time */
  actualStartupTime: Scalars['Float'];
  /** Total actual total time */
  actualTotalTime: Scalars['Float'];
  /** Rails controller */
  controller: Maybe<IController>;
  /** Timestamp in UTC */
  createdAt: Scalars['DateTime'];
  /** The query performed */
  explainOutput: Scalars['String'];
  /** SQL Query primary key */
  id: Scalars['ID'];
  /** Total Rows */
  rows: Scalars['Float'];
  /** Seq Scans performed under any plan */
  seqScans: Scalars['Int'];
  /** A unique id identifying a session during which queries are logged. */
  sessionId: Scalars['String'];
  /** SQL Query log */
  sqlQuery: ISqlQuery;
  /** Rails Stacktrace */
  stacktrace: IStacktrace;
  /** Total Startup Cost */
  startupCost: Scalars['Float'];
  /** Total Cost */
  totalCost: Scalars['Float'];
  /** SQL's explain as JSON */
  treeviz: Maybe<Scalars['String']>;
  /** Timestamp in UTC */
  updatedAt: Scalars['DateTime'];
  /** Total width */
  width: Scalars['Float'];
};

export type ISqlQueries = IPageable & {
  __typename?: 'SqlQueries';
  currentPage: Maybe<Scalars['Int']>;
  firstPage: Maybe<Scalars['Boolean']>;
  lastPage: Maybe<Scalars['Boolean']>;
  nextPage: Maybe<Scalars['Int']>;
  nodes: Array<ISqlQuery>;
  previousPage: Maybe<Scalars['Int']>;
  size: Maybe<Scalars['Int']>;
  totalItems: Maybe<Scalars['Int']>;
  totalPages: Maybe<Scalars['Int']>;
};

/** MongoDB Query Logs */
export type ISqlQueriesWithStats = {
  __typename?: 'SqlQueriesWithStats';
  /** MongoDB operations list */
  operations: Array<Scalars['String']>;
  /** MongoDB operation stats */
  operationsStats: Array<IStat>;
  /** Source names list */
  sourceNames: Array<Scalars['String']>;
  sqlQueries: ISqlQueries;
  /** MongoDB tables list */
  tables: Array<Scalars['String']>;
  /** MongoDB collection stats */
  tablesStats: Array<IStat>;
  /** Queries total execution duration in seconds */
  totalDuration: Scalars['Float'];
};

/** SQL Query Log */
export type ISqlQuery = {
  __typename?: 'SqlQuery';
  /** The originating app */
  appName: Scalars['String'];
  /** Associated Controller */
  controller: Maybe<IAwesomeController>;
  /** Timestamp in UTC */
  createdAt: Scalars['DateTime'];
  /** Query duration in seconds */
  duration: Scalars['Float'];
  /** Log primary key */
  id: Scalars['ID'];
  /** The operation performed */
  operation: Scalars['String'];
  /** The operation performed */
  query: Scalars['String'];
  /** An excerpt of the query performed */
  queryExcerpt: Scalars['String'];
  /** Schema name */
  schemaName: Scalars['String'];
  /** A unique id identifying a session during which queries are logged. */
  sessionId: Scalars['String'];
  /** Sidekiq job args */
  sidekiqArgs: Maybe<Scalars['String']>;
  /** Associated Sidekiq Job */
  sidekiqWorker: Maybe<ISidekiqWorker>;
  /** Source of the query (ex: console, sidekiq, server, …) */
  sourceName: Scalars['String'];
  /** Associated Query Explain */
  sqlExplain: Maybe<ISqlExplain>;
  /** Associated Stacktrace */
  stacktrace: IStacktrace;
  /** Table name */
  tableName: Scalars['String'];
  /** Timestamp in UTC */
  updatedAt: Scalars['DateTime'];
};

/** MongoDB Query Stacktrace */
export type IStacktrace = {
  __typename?: 'Stacktrace';
  /** Average duration for a query originating from this stacktrace */
  avgDuration: Maybe<Scalars['Float']>;
  /** Timestamp in UTC */
  createdAt: Scalars['DateTime'];
  /** Stacktrace primary key */
  id: Scalars['ID'];
  /** Associated MongoDB Logs */
  logs: ILogs;
  /** Total count of logs originating from this stacktrace */
  logsCount: Maybe<Scalars['Int']>;
  /** Max duration for a query originating from this stacktrace */
  maxDuration: Maybe<Scalars['Float']>;
  /** Min duration for a query originating from this stacktrace */
  minDuration: Maybe<Scalars['Float']>;
  /** Sources stats */
  sourcesStats: Array<IStat>;
  /** Associated SQL Queries */
  sqlQueries: ISqlQueries;
  /** Average duration for a query originating from this stacktrace */
  sqlQueriesAvgDuration: Maybe<Scalars['Float']>;
  /** Total count of sql queries originating from this stacktrace */
  sqlQueriesCount: Maybe<Scalars['Int']>;
  /** Max duration for a query originating from this stacktrace */
  sqlQueriesMaxDuration: Maybe<Scalars['Float']>;
  /** Min duration for a query originating from this stacktrace */
  sqlQueriesMinDuration: Maybe<Scalars['Float']>;
  /** Sources stats */
  sqlQueriesSourcesStats: Array<IStat>;
  /** A minified version of a stacktrace */
  stacktrace: Scalars['String'];
  /** A minified version of a stacktrace */
  stacktraceExcerpt: Maybe<Scalars['String']>;
  /** Timestamp in UTC */
  updatedAt: Scalars['DateTime'];
};

export type IStacktraces = IPageable & {
  __typename?: 'Stacktraces';
  currentPage: Maybe<Scalars['Int']>;
  firstPage: Maybe<Scalars['Boolean']>;
  lastPage: Maybe<Scalars['Boolean']>;
  nextPage: Maybe<Scalars['Int']>;
  nodes: Array<IStacktrace>;
  previousPage: Maybe<Scalars['Int']>;
  size: Maybe<Scalars['Int']>;
  totalItems: Maybe<Scalars['Int']>;
  totalPages: Maybe<Scalars['Int']>;
};

export type IStat = {
  __typename?: 'Stat';
  /** Stat name */
  name: Scalars['String'];
  /** Stat value */
  value: Scalars['Int'];
};

export type ITableStats = {
  __typename?: 'TableStats';
  /** Table name */
  name: Scalars['String'];
  /** Table stats */
  stats: Array<IStat>;
};

export type ILatestControllersQueryVariables = {
  limit: Maybe<Scalars['Int']>;
  page: Maybe<Scalars['Int']>;
  names: Maybe<Array<Scalars['String']>>;
};


export type ILatestControllersQuery = { __typename?: 'Query', controllers: { __typename?: 'AwesomeControllers', currentPage: Maybe<number>, previousPage: Maybe<number>, nextPage: Maybe<number>, totalItems: Maybe<number>, totalPages: Maybe<number>, nodes: Array<{ __typename?: 'AwesomeController', id: string, name: string, action: string, path: string, logsCount: Maybe<number>, totalDuration: Maybe<number>, sqlTotalDuration: Maybe<number>, sqlQueriesCount: Maybe<number> }> } };

export type IControllerQueryVariables = {
  id: Scalars['Int'];
};


export type IControllerQuery = { __typename?: 'Query', controller: { __typename?: 'AwesomeController', id: string, name: string, action: string, path: string, params: string, paramsExcerpt: string, logsCount: Maybe<number>, sessionId: string, totalDuration: Maybe<number>, sqlTotalDuration: Maybe<number>, sqlQueriesCount: Maybe<number>, collscans: Maybe<number>, createdAt: any, updatedAt: any, opsStats: Maybe<Array<{ __typename?: 'Stat', name: string, value: number }>>, sqlOpsStats: Maybe<Array<{ __typename?: 'Stat', name: string, value: number }>>, collectionsStats: Maybe<Array<{ __typename?: 'CollectionStats', name: string, stats: Array<{ __typename?: 'Stat', name: string, value: number }> }>>, tablesStats: Maybe<Array<{ __typename?: 'TableStats', name: string, stats: Array<{ __typename?: 'Stat', name: string, value: number }> }>> } };

export type IAwesomeControllerLogsQueryVariables = {
  id: Scalars['Int'];
  logsPage: Maybe<Scalars['Int']>;
};


export type IAwesomeControllerLogsQuery = { __typename?: 'Query', controller: { __typename?: 'AwesomeController', logs: Maybe<{ __typename?: 'Logs', currentPage: Maybe<number>, previousPage: Maybe<number>, nextPage: Maybe<number>, totalItems: Maybe<number>, totalPages: Maybe<number>, nodes: Array<{ __typename?: 'Log', id: string, collection: string, command: string, commandExcerpt: string, operation: string, duration: number }> }> } };

export type IAwesomeControllerSqlQueriesQueryVariables = {
  id: Scalars['Int'];
  sqlQueriesPage: Maybe<Scalars['Int']>;
};


export type IAwesomeControllerSqlQueriesQuery = { __typename?: 'Query', controller: { __typename?: 'AwesomeController', sqlQueries: Maybe<{ __typename?: 'SqlQueries', currentPage: Maybe<number>, previousPage: Maybe<number>, nextPage: Maybe<number>, totalItems: Maybe<number>, totalPages: Maybe<number>, nodes: Array<{ __typename?: 'SqlQuery', id: string, tableName: string, schemaName: string, query: string, queryExcerpt: string, operation: string, duration: number }> }> } };

export type IDashboardQueryQueryVariables = {};


export type IDashboardQueryQuery = { __typename?: 'Query', dashboard: { __typename?: 'Dashboard', operationsStats: Array<{ __typename?: 'Command', name: string, totalCount: number, maxDuration: number }>, topCollections: Array<{ __typename?: 'Command', name: string, totalCount: number, maxDuration: number }>, mongodbLatestLogs: Array<{ __typename?: 'Log', id: string, collection: string, operation: string, appName: Maybe<string>, sourceName: string, command: string, commandExcerpt: string, duration: number, createdAt: any }>, mongodbLatestControllers: Maybe<Array<{ __typename?: 'Controller', id: string, action: string, name: string, path: string, logsCount: number, totalDuration: number, createdAt: any }>>, latestSidekiqWorkers: Maybe<Array<{ __typename?: 'SidekiqWorker', id: string, jid: string, worker: string, queue: string, logsCount: number, totalDuration: number, createdAt: any }>> } };

export type IDashboardLatestLogsQueryQueryVariables = {};


export type IDashboardLatestLogsQueryQuery = { __typename?: 'Query', dashboard: { __typename?: 'Dashboard', mongodbLatestLogs: Array<{ __typename?: 'Log', id: string, collection: string, operation: string, command: string, commandExcerpt: string, duration: number, createdAt: any }> } };

export type ILatestLogsQueryVariables = {
  controllerId: Maybe<Scalars['Int']>;
  stacktraceId: Maybe<Scalars['Int']>;
  mode: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  page: Maybe<Scalars['Int']>;
  collections: Maybe<Array<Scalars['String']>>;
  operations: Maybe<Array<Scalars['String']>>;
  sourceNames: Maybe<Array<Scalars['String']>>;
};


export type ILatestLogsQuery = { __typename?: 'Query', mongodbLogs: { __typename?: 'Logs', currentPage: Maybe<number>, previousPage: Maybe<number>, nextPage: Maybe<number>, totalItems: Maybe<number>, totalPages: Maybe<number>, nodes: Array<{ __typename?: 'Log', id: string, commandExcerpt: string, command: string, collection: string, operation: string, duration: number, controller: Maybe<{ __typename?: 'AwesomeController', id: string, action: string, name: string, path: string }> }> } };

export type ILatestLogsWithStatsQueryVariables = {
  controllerId: Maybe<Scalars['Int']>;
  stacktraceId: Maybe<Scalars['Int']>;
  sidekiqWorkerId: Maybe<Scalars['Int']>;
  mode: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  page: Maybe<Scalars['Int']>;
  collections: Maybe<Array<Scalars['String']>>;
  operations: Maybe<Array<Scalars['String']>>;
  sourceNames: Maybe<Array<Scalars['String']>>;
};


export type ILatestLogsWithStatsQuery = { __typename?: 'Query', logsWithStats: { __typename?: 'LogsWithStats', collections: Array<string>, operations: Array<string>, sourceNames: Array<string>, totalDuration: number, operationsStats: Array<{ __typename?: 'Stat', name: string, value: number }>, collectionsStats: Array<{ __typename?: 'Stat', name: string, value: number }>, logs: { __typename?: 'Logs', currentPage: Maybe<number>, previousPage: Maybe<number>, nextPage: Maybe<number>, totalItems: Maybe<number>, totalPages: Maybe<number>, nodes: Array<{ __typename?: 'Log', id: string, commandExcerpt: string, command: string, collection: string, operation: string, appName: Maybe<string>, sourceName: string, duration: number, createdAt: any, controller: Maybe<{ __typename?: 'AwesomeController', id: string, action: string, name: string, path: string }> }> } } };

export type IGlobalStatsQueryVariables = {
  collections: Maybe<Array<Scalars['String']>>;
  operations: Maybe<Array<Scalars['String']>>;
};


export type IGlobalStatsQuery = { __typename?: 'Query', globalStats: { __typename?: 'GlobalStats', collections: Array<string>, operations: Array<string> } };

export type ILogQueryVariables = {
  id: Scalars['Int'];
};


export type ILogQuery = { __typename?: 'Query', mongodbLog: { __typename?: 'Log', id: string, collection: string, collscan: Maybe<boolean>, command: string, commandExcerpt: string, operation: string, appName: Maybe<string>, sourceName: string, sidekiqArgs: Maybe<string>, createdAt: any, duration: number, stacktrace: { __typename?: 'Stacktrace', id: string, stacktrace: string }, explain: Maybe<{ __typename?: 'Explain', id: string, documentsExamined: Maybe<number>, documentsReturned: Maybe<number>, duration: number, keysExamined: Maybe<number>, rejectedPlans: Maybe<number>, usedIndexes: string, stagesCount: Maybe<number>, treeviz: Maybe<string> }>, controller: Maybe<{ __typename?: 'AwesomeController', id: string, action: string, path: string, params: string }>, sidekiqWorker: Maybe<{ __typename?: 'SidekiqWorker', id: string, worker: string, queue: string }> } };

export type ILatestSidekiqWorkersWithStatsQueryVariables = {
  mode: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  page: Maybe<Scalars['Int']>;
  workers: Maybe<Array<Scalars['String']>>;
  queues: Maybe<Array<Scalars['String']>>;
};


export type ILatestSidekiqWorkersWithStatsQuery = { __typename?: 'Query', sidekiqWorkersWithStats: { __typename?: 'SidekiqWorkersWithStats', queriesCount: number, totalDuration: number, workers: Array<string>, queues: Array<string>, workersStats: Array<{ __typename?: 'Stat', name: string, value: number }>, queuesStats: Array<{ __typename?: 'Stat', name: string, value: number }>, sidekiqWorkers: { __typename?: 'SidekiqWorkers', currentPage: Maybe<number>, previousPage: Maybe<number>, nextPage: Maybe<number>, totalItems: Maybe<number>, totalPages: Maybe<number>, nodes: Array<{ __typename?: 'SidekiqWorker', id: string, worker: string, queue: string, jid: string, params: string, logsCount: number, minDuration: number, maxDuration: number, avgDuration: number }> } } };

export type ISidekiqWorkerQueryVariables = {
  id: Scalars['Int'];
};


export type ISidekiqWorkerQuery = { __typename?: 'Query', sidekiqWorker: { __typename?: 'SidekiqWorker', id: string, worker: string, queue: string, jid: string, params: string, paramsExcerpt: string, logsCount: number, totalDuration: number, minDuration: number, maxDuration: number, avgDuration: number, opsStats: Array<{ __typename?: 'Stat', name: string, value: number }>, collectionsStats: Array<{ __typename?: 'CollectionStats', name: string, stats: Array<{ __typename?: 'Stat', name: string, value: number }> }> } };

export type ILatestSqlQueriesWithStatsQueryVariables = {
  controllerId: Maybe<Scalars['Int']>;
  stacktraceId: Maybe<Scalars['Int']>;
  sidekiqWorkerId: Maybe<Scalars['Int']>;
  mode: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  page: Maybe<Scalars['Int']>;
  tables: Maybe<Array<Scalars['String']>>;
  operations: Maybe<Array<Scalars['String']>>;
  sourceNames: Maybe<Array<Scalars['String']>>;
};


export type ILatestSqlQueriesWithStatsQuery = { __typename?: 'Query', sqlQueriesWithStats: { __typename?: 'SqlQueriesWithStats', tables: Array<string>, operations: Array<string>, sourceNames: Array<string>, totalDuration: number, operationsStats: Array<{ __typename?: 'Stat', name: string, value: number }>, tablesStats: Array<{ __typename?: 'Stat', name: string, value: number }>, sqlQueries: { __typename?: 'SqlQueries', currentPage: Maybe<number>, previousPage: Maybe<number>, nextPage: Maybe<number>, totalItems: Maybe<number>, totalPages: Maybe<number>, nodes: Array<{ __typename?: 'SqlQuery', id: string, queryExcerpt: string, query: string, tableName: string, schemaName: string, operation: string, appName: string, sourceName: string, duration: number, createdAt: any, controller: Maybe<{ __typename?: 'AwesomeController', id: string, action: string, name: string, path: string }> }> } } };

export type ISqlQueryQueryVariables = {
  id: Scalars['Int'];
};


export type ISqlQueryQuery = { __typename?: 'Query', sqlQuery: { __typename?: 'SqlQuery', id: string, tableName: string, schemaName: string, query: string, queryExcerpt: string, operation: string, appName: string, sourceName: string, sidekiqArgs: Maybe<string>, createdAt: any, duration: number, stacktrace: { __typename?: 'Stacktrace', id: string, stacktrace: string }, sqlExplain: Maybe<{ __typename?: 'SqlExplain', id: string, treeviz: Maybe<string>, startupCost: number, totalCost: number, rows: number, width: number, actualStartupTime: number, actualTotalTime: number, actualRows: number, actualLoops: number, seqScans: number }>, controller: Maybe<{ __typename?: 'AwesomeController', id: string, action: string, path: string, params: string }>, sidekiqWorker: Maybe<{ __typename?: 'SidekiqWorker', id: string, worker: string, queue: string }> } };

export type ILatestStacktracesQueryVariables = {
  limit: Maybe<Scalars['Int']>;
  page: Maybe<Scalars['Int']>;
};


export type ILatestStacktracesQuery = { __typename?: 'Query', stacktraces: { __typename?: 'Stacktraces', currentPage: Maybe<number>, previousPage: Maybe<number>, nextPage: Maybe<number>, totalItems: Maybe<number>, totalPages: Maybe<number>, nodes: Array<{ __typename?: 'Stacktrace', id: string, stacktrace: string, stacktraceExcerpt: Maybe<string>, logsCount: Maybe<number>, minDuration: Maybe<number>, maxDuration: Maybe<number>, avgDuration: Maybe<number>, sqlQueriesCount: Maybe<number>, sqlQueriesMinDuration: Maybe<number>, sqlQueriesMaxDuration: Maybe<number>, sqlQueriesAvgDuration: Maybe<number> }> } };

export type IMongodbStacktraceQueryVariables = {
  id: Scalars['Int'];
};


export type IMongodbStacktraceQuery = { __typename?: 'Query', mongodbStacktrace: { __typename?: 'Stacktrace', id: string, stacktrace: string, stacktraceExcerpt: Maybe<string>, logsCount: Maybe<number>, minDuration: Maybe<number>, maxDuration: Maybe<number>, avgDuration: Maybe<number>, sqlQueriesCount: Maybe<number>, sqlQueriesMinDuration: Maybe<number>, sqlQueriesMaxDuration: Maybe<number>, sqlQueriesAvgDuration: Maybe<number>, sourcesStats: Array<{ __typename?: 'Stat', name: string, value: number }>, sqlQueriesSourcesStats: Array<{ __typename?: 'Stat', name: string, value: number }> } };


export const LatestControllersDocument = gql`
    query LatestControllers($limit: Int, $page: Int, $names: [String!]) {
  controllers(limit: $limit, page: $page, names: $names) {
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
      sqlTotalDuration
      sqlQueriesCount
    }
  }
}
    `;
export type LatestControllersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ILatestControllersQuery, ILatestControllersQueryVariables>, 'query'>;

    export const LatestControllersComponent = (props: LatestControllersComponentProps) => (
      <ApolloReactComponents.Query<ILatestControllersQuery, ILatestControllersQueryVariables> query={LatestControllersDocument} {...props} />
    );
    
export type ILatestControllersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ILatestControllersQuery, ILatestControllersQueryVariables>
    } & TChildProps;
export function withLatestControllers<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ILatestControllersQuery,
  ILatestControllersQueryVariables,
  ILatestControllersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ILatestControllersQuery, ILatestControllersQueryVariables, ILatestControllersProps<TChildProps, TDataName>>(LatestControllersDocument, {
      alias: 'latestControllers',
      ...operationOptions
    });
};

/**
 * __useLatestControllersQuery__
 *
 * To run a query within a React component, call `useLatestControllersQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestControllersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestControllersQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *      names: // value for 'names'
 *   },
 * });
 */
export function useLatestControllersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ILatestControllersQuery, ILatestControllersQueryVariables>) {
        return ApolloReactHooks.useQuery<ILatestControllersQuery, ILatestControllersQueryVariables>(LatestControllersDocument, baseOptions);
      }
export function useLatestControllersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ILatestControllersQuery, ILatestControllersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ILatestControllersQuery, ILatestControllersQueryVariables>(LatestControllersDocument, baseOptions);
        }
export type LatestControllersQueryHookResult = ReturnType<typeof useLatestControllersQuery>;
export type LatestControllersLazyQueryHookResult = ReturnType<typeof useLatestControllersLazyQuery>;
export type LatestControllersQueryResult = ApolloReactCommon.QueryResult<ILatestControllersQuery, ILatestControllersQueryVariables>;
export const ControllerDocument = gql`
    query Controller($id: Int!) {
  controller(id: $id) {
    id
    name
    action
    path
    params
    paramsExcerpt
    logsCount
    sessionId
    totalDuration
    sqlTotalDuration
    sqlQueriesCount
    collscans
    opsStats {
      name
      value
    }
    sqlOpsStats {
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
    tablesStats {
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
export type ControllerComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IControllerQuery, IControllerQueryVariables>, 'query'> & ({ variables: IControllerQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ControllerComponent = (props: ControllerComponentProps) => (
      <ApolloReactComponents.Query<IControllerQuery, IControllerQueryVariables> query={ControllerDocument} {...props} />
    );
    
export type IControllerProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<IControllerQuery, IControllerQueryVariables>
    } & TChildProps;
export function withController<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IControllerQuery,
  IControllerQueryVariables,
  IControllerProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, IControllerQuery, IControllerQueryVariables, IControllerProps<TChildProps, TDataName>>(ControllerDocument, {
      alias: 'controller',
      ...operationOptions
    });
};

/**
 * __useControllerQuery__
 *
 * To run a query within a React component, call `useControllerQuery` and pass it any options that fit your needs.
 * When your component renders, `useControllerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useControllerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useControllerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IControllerQuery, IControllerQueryVariables>) {
        return ApolloReactHooks.useQuery<IControllerQuery, IControllerQueryVariables>(ControllerDocument, baseOptions);
      }
export function useControllerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IControllerQuery, IControllerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IControllerQuery, IControllerQueryVariables>(ControllerDocument, baseOptions);
        }
export type ControllerQueryHookResult = ReturnType<typeof useControllerQuery>;
export type ControllerLazyQueryHookResult = ReturnType<typeof useControllerLazyQuery>;
export type ControllerQueryResult = ApolloReactCommon.QueryResult<IControllerQuery, IControllerQueryVariables>;
export const AwesomeControllerLogsDocument = gql`
    query AwesomeControllerLogs($id: Int!, $logsPage: Int) {
  controller(id: $id, logsPage: $logsPage) {
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
export type AwesomeControllerLogsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IAwesomeControllerLogsQuery, IAwesomeControllerLogsQueryVariables>, 'query'> & ({ variables: IAwesomeControllerLogsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const AwesomeControllerLogsComponent = (props: AwesomeControllerLogsComponentProps) => (
      <ApolloReactComponents.Query<IAwesomeControllerLogsQuery, IAwesomeControllerLogsQueryVariables> query={AwesomeControllerLogsDocument} {...props} />
    );
    
export type IAwesomeControllerLogsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<IAwesomeControllerLogsQuery, IAwesomeControllerLogsQueryVariables>
    } & TChildProps;
export function withAwesomeControllerLogs<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IAwesomeControllerLogsQuery,
  IAwesomeControllerLogsQueryVariables,
  IAwesomeControllerLogsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, IAwesomeControllerLogsQuery, IAwesomeControllerLogsQueryVariables, IAwesomeControllerLogsProps<TChildProps, TDataName>>(AwesomeControllerLogsDocument, {
      alias: 'awesomeControllerLogs',
      ...operationOptions
    });
};

/**
 * __useAwesomeControllerLogsQuery__
 *
 * To run a query within a React component, call `useAwesomeControllerLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAwesomeControllerLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAwesomeControllerLogsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      logsPage: // value for 'logsPage'
 *   },
 * });
 */
export function useAwesomeControllerLogsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IAwesomeControllerLogsQuery, IAwesomeControllerLogsQueryVariables>) {
        return ApolloReactHooks.useQuery<IAwesomeControllerLogsQuery, IAwesomeControllerLogsQueryVariables>(AwesomeControllerLogsDocument, baseOptions);
      }
export function useAwesomeControllerLogsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IAwesomeControllerLogsQuery, IAwesomeControllerLogsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IAwesomeControllerLogsQuery, IAwesomeControllerLogsQueryVariables>(AwesomeControllerLogsDocument, baseOptions);
        }
export type AwesomeControllerLogsQueryHookResult = ReturnType<typeof useAwesomeControllerLogsQuery>;
export type AwesomeControllerLogsLazyQueryHookResult = ReturnType<typeof useAwesomeControllerLogsLazyQuery>;
export type AwesomeControllerLogsQueryResult = ApolloReactCommon.QueryResult<IAwesomeControllerLogsQuery, IAwesomeControllerLogsQueryVariables>;
export const AwesomeControllerSqlQueriesDocument = gql`
    query AwesomeControllerSqlQueries($id: Int!, $sqlQueriesPage: Int) {
  controller(id: $id, sqlQueriesPage: $sqlQueriesPage) {
    sqlQueries @connection(key: $sqlQueriesPage) {
      currentPage
      previousPage
      nextPage
      totalItems
      totalPages
      nodes {
        id
        tableName
        schemaName
        query
        queryExcerpt
        operation
        duration
      }
    }
  }
}
    `;
export type AwesomeControllerSqlQueriesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IAwesomeControllerSqlQueriesQuery, IAwesomeControllerSqlQueriesQueryVariables>, 'query'> & ({ variables: IAwesomeControllerSqlQueriesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const AwesomeControllerSqlQueriesComponent = (props: AwesomeControllerSqlQueriesComponentProps) => (
      <ApolloReactComponents.Query<IAwesomeControllerSqlQueriesQuery, IAwesomeControllerSqlQueriesQueryVariables> query={AwesomeControllerSqlQueriesDocument} {...props} />
    );
    
export type IAwesomeControllerSqlQueriesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<IAwesomeControllerSqlQueriesQuery, IAwesomeControllerSqlQueriesQueryVariables>
    } & TChildProps;
export function withAwesomeControllerSqlQueries<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IAwesomeControllerSqlQueriesQuery,
  IAwesomeControllerSqlQueriesQueryVariables,
  IAwesomeControllerSqlQueriesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, IAwesomeControllerSqlQueriesQuery, IAwesomeControllerSqlQueriesQueryVariables, IAwesomeControllerSqlQueriesProps<TChildProps, TDataName>>(AwesomeControllerSqlQueriesDocument, {
      alias: 'awesomeControllerSqlQueries',
      ...operationOptions
    });
};

/**
 * __useAwesomeControllerSqlQueriesQuery__
 *
 * To run a query within a React component, call `useAwesomeControllerSqlQueriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAwesomeControllerSqlQueriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAwesomeControllerSqlQueriesQuery({
 *   variables: {
 *      id: // value for 'id'
 *      sqlQueriesPage: // value for 'sqlQueriesPage'
 *   },
 * });
 */
export function useAwesomeControllerSqlQueriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IAwesomeControllerSqlQueriesQuery, IAwesomeControllerSqlQueriesQueryVariables>) {
        return ApolloReactHooks.useQuery<IAwesomeControllerSqlQueriesQuery, IAwesomeControllerSqlQueriesQueryVariables>(AwesomeControllerSqlQueriesDocument, baseOptions);
      }
export function useAwesomeControllerSqlQueriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IAwesomeControllerSqlQueriesQuery, IAwesomeControllerSqlQueriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IAwesomeControllerSqlQueriesQuery, IAwesomeControllerSqlQueriesQueryVariables>(AwesomeControllerSqlQueriesDocument, baseOptions);
        }
export type AwesomeControllerSqlQueriesQueryHookResult = ReturnType<typeof useAwesomeControllerSqlQueriesQuery>;
export type AwesomeControllerSqlQueriesLazyQueryHookResult = ReturnType<typeof useAwesomeControllerSqlQueriesLazyQuery>;
export type AwesomeControllerSqlQueriesQueryResult = ApolloReactCommon.QueryResult<IAwesomeControllerSqlQueriesQuery, IAwesomeControllerSqlQueriesQueryVariables>;
export const DashboardQueryDocument = gql`
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
export type DashboardQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IDashboardQueryQuery, IDashboardQueryQueryVariables>, 'query'>;

    export const DashboardQueryComponent = (props: DashboardQueryComponentProps) => (
      <ApolloReactComponents.Query<IDashboardQueryQuery, IDashboardQueryQueryVariables> query={DashboardQueryDocument} {...props} />
    );
    
export type IDashboardQueryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<IDashboardQueryQuery, IDashboardQueryQueryVariables>
    } & TChildProps;
export function withDashboardQuery<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IDashboardQueryQuery,
  IDashboardQueryQueryVariables,
  IDashboardQueryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, IDashboardQueryQuery, IDashboardQueryQueryVariables, IDashboardQueryProps<TChildProps, TDataName>>(DashboardQueryDocument, {
      alias: 'dashboardQuery',
      ...operationOptions
    });
};

/**
 * __useDashboardQueryQuery__
 *
 * To run a query within a React component, call `useDashboardQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useDashboardQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IDashboardQueryQuery, IDashboardQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<IDashboardQueryQuery, IDashboardQueryQueryVariables>(DashboardQueryDocument, baseOptions);
      }
export function useDashboardQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IDashboardQueryQuery, IDashboardQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IDashboardQueryQuery, IDashboardQueryQueryVariables>(DashboardQueryDocument, baseOptions);
        }
export type DashboardQueryQueryHookResult = ReturnType<typeof useDashboardQueryQuery>;
export type DashboardQueryLazyQueryHookResult = ReturnType<typeof useDashboardQueryLazyQuery>;
export type DashboardQueryQueryResult = ApolloReactCommon.QueryResult<IDashboardQueryQuery, IDashboardQueryQueryVariables>;
export const DashboardLatestLogsQueryDocument = gql`
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
export type DashboardLatestLogsQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IDashboardLatestLogsQueryQuery, IDashboardLatestLogsQueryQueryVariables>, 'query'>;

    export const DashboardLatestLogsQueryComponent = (props: DashboardLatestLogsQueryComponentProps) => (
      <ApolloReactComponents.Query<IDashboardLatestLogsQueryQuery, IDashboardLatestLogsQueryQueryVariables> query={DashboardLatestLogsQueryDocument} {...props} />
    );
    
export type IDashboardLatestLogsQueryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<IDashboardLatestLogsQueryQuery, IDashboardLatestLogsQueryQueryVariables>
    } & TChildProps;
export function withDashboardLatestLogsQuery<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IDashboardLatestLogsQueryQuery,
  IDashboardLatestLogsQueryQueryVariables,
  IDashboardLatestLogsQueryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, IDashboardLatestLogsQueryQuery, IDashboardLatestLogsQueryQueryVariables, IDashboardLatestLogsQueryProps<TChildProps, TDataName>>(DashboardLatestLogsQueryDocument, {
      alias: 'dashboardLatestLogsQuery',
      ...operationOptions
    });
};

/**
 * __useDashboardLatestLogsQueryQuery__
 *
 * To run a query within a React component, call `useDashboardLatestLogsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardLatestLogsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardLatestLogsQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useDashboardLatestLogsQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IDashboardLatestLogsQueryQuery, IDashboardLatestLogsQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<IDashboardLatestLogsQueryQuery, IDashboardLatestLogsQueryQueryVariables>(DashboardLatestLogsQueryDocument, baseOptions);
      }
export function useDashboardLatestLogsQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IDashboardLatestLogsQueryQuery, IDashboardLatestLogsQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IDashboardLatestLogsQueryQuery, IDashboardLatestLogsQueryQueryVariables>(DashboardLatestLogsQueryDocument, baseOptions);
        }
export type DashboardLatestLogsQueryQueryHookResult = ReturnType<typeof useDashboardLatestLogsQueryQuery>;
export type DashboardLatestLogsQueryLazyQueryHookResult = ReturnType<typeof useDashboardLatestLogsQueryLazyQuery>;
export type DashboardLatestLogsQueryQueryResult = ApolloReactCommon.QueryResult<IDashboardLatestLogsQueryQuery, IDashboardLatestLogsQueryQueryVariables>;
export const LatestLogsDocument = gql`
    query LatestLogs($controllerId: Int, $stacktraceId: Int, $mode: String, $limit: Int, $page: Int, $collections: [String!], $operations: [String!], $sourceNames: [String!]) {
  mongodbLogs(mode: $mode, limit: $limit, page: $page, controllerId: $controllerId, stacktraceId: $stacktraceId, collections: $collections, operations: $operations, sourceNames: $sourceNames) {
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
export type LatestLogsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ILatestLogsQuery, ILatestLogsQueryVariables>, 'query'>;

    export const LatestLogsComponent = (props: LatestLogsComponentProps) => (
      <ApolloReactComponents.Query<ILatestLogsQuery, ILatestLogsQueryVariables> query={LatestLogsDocument} {...props} />
    );
    
export type ILatestLogsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ILatestLogsQuery, ILatestLogsQueryVariables>
    } & TChildProps;
export function withLatestLogs<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ILatestLogsQuery,
  ILatestLogsQueryVariables,
  ILatestLogsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ILatestLogsQuery, ILatestLogsQueryVariables, ILatestLogsProps<TChildProps, TDataName>>(LatestLogsDocument, {
      alias: 'latestLogs',
      ...operationOptions
    });
};

/**
 * __useLatestLogsQuery__
 *
 * To run a query within a React component, call `useLatestLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestLogsQuery({
 *   variables: {
 *      controllerId: // value for 'controllerId'
 *      stacktraceId: // value for 'stacktraceId'
 *      mode: // value for 'mode'
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *      collections: // value for 'collections'
 *      operations: // value for 'operations'
 *      sourceNames: // value for 'sourceNames'
 *   },
 * });
 */
export function useLatestLogsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ILatestLogsQuery, ILatestLogsQueryVariables>) {
        return ApolloReactHooks.useQuery<ILatestLogsQuery, ILatestLogsQueryVariables>(LatestLogsDocument, baseOptions);
      }
export function useLatestLogsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ILatestLogsQuery, ILatestLogsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ILatestLogsQuery, ILatestLogsQueryVariables>(LatestLogsDocument, baseOptions);
        }
export type LatestLogsQueryHookResult = ReturnType<typeof useLatestLogsQuery>;
export type LatestLogsLazyQueryHookResult = ReturnType<typeof useLatestLogsLazyQuery>;
export type LatestLogsQueryResult = ApolloReactCommon.QueryResult<ILatestLogsQuery, ILatestLogsQueryVariables>;
export const LatestLogsWithStatsDocument = gql`
    query LatestLogsWithStats($controllerId: Int, $stacktraceId: Int, $sidekiqWorkerId: Int, $mode: String, $limit: Int, $page: Int, $collections: [String!], $operations: [String!], $sourceNames: [String!]) {
  logsWithStats(controllerId: $controllerId, stacktraceId: $stacktraceId, sidekiqWorkerId: $sidekiqWorkerId, mode: $mode, limit: $limit, page: $page, collections: $collections, operations: $operations, sourceNames: $sourceNames) {
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
export type LatestLogsWithStatsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ILatestLogsWithStatsQuery, ILatestLogsWithStatsQueryVariables>, 'query'>;

    export const LatestLogsWithStatsComponent = (props: LatestLogsWithStatsComponentProps) => (
      <ApolloReactComponents.Query<ILatestLogsWithStatsQuery, ILatestLogsWithStatsQueryVariables> query={LatestLogsWithStatsDocument} {...props} />
    );
    
export type ILatestLogsWithStatsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ILatestLogsWithStatsQuery, ILatestLogsWithStatsQueryVariables>
    } & TChildProps;
export function withLatestLogsWithStats<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ILatestLogsWithStatsQuery,
  ILatestLogsWithStatsQueryVariables,
  ILatestLogsWithStatsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ILatestLogsWithStatsQuery, ILatestLogsWithStatsQueryVariables, ILatestLogsWithStatsProps<TChildProps, TDataName>>(LatestLogsWithStatsDocument, {
      alias: 'latestLogsWithStats',
      ...operationOptions
    });
};

/**
 * __useLatestLogsWithStatsQuery__
 *
 * To run a query within a React component, call `useLatestLogsWithStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestLogsWithStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestLogsWithStatsQuery({
 *   variables: {
 *      controllerId: // value for 'controllerId'
 *      stacktraceId: // value for 'stacktraceId'
 *      sidekiqWorkerId: // value for 'sidekiqWorkerId'
 *      mode: // value for 'mode'
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *      collections: // value for 'collections'
 *      operations: // value for 'operations'
 *      sourceNames: // value for 'sourceNames'
 *   },
 * });
 */
export function useLatestLogsWithStatsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ILatestLogsWithStatsQuery, ILatestLogsWithStatsQueryVariables>) {
        return ApolloReactHooks.useQuery<ILatestLogsWithStatsQuery, ILatestLogsWithStatsQueryVariables>(LatestLogsWithStatsDocument, baseOptions);
      }
export function useLatestLogsWithStatsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ILatestLogsWithStatsQuery, ILatestLogsWithStatsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ILatestLogsWithStatsQuery, ILatestLogsWithStatsQueryVariables>(LatestLogsWithStatsDocument, baseOptions);
        }
export type LatestLogsWithStatsQueryHookResult = ReturnType<typeof useLatestLogsWithStatsQuery>;
export type LatestLogsWithStatsLazyQueryHookResult = ReturnType<typeof useLatestLogsWithStatsLazyQuery>;
export type LatestLogsWithStatsQueryResult = ApolloReactCommon.QueryResult<ILatestLogsWithStatsQuery, ILatestLogsWithStatsQueryVariables>;
export const GlobalStatsDocument = gql`
    query GlobalStats($collections: [String!], $operations: [String!]) {
  globalStats(collections: $collections, operations: $operations) {
    collections
    operations
  }
}
    `;
export type GlobalStatsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IGlobalStatsQuery, IGlobalStatsQueryVariables>, 'query'>;

    export const GlobalStatsComponent = (props: GlobalStatsComponentProps) => (
      <ApolloReactComponents.Query<IGlobalStatsQuery, IGlobalStatsQueryVariables> query={GlobalStatsDocument} {...props} />
    );
    
export type IGlobalStatsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<IGlobalStatsQuery, IGlobalStatsQueryVariables>
    } & TChildProps;
export function withGlobalStats<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IGlobalStatsQuery,
  IGlobalStatsQueryVariables,
  IGlobalStatsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, IGlobalStatsQuery, IGlobalStatsQueryVariables, IGlobalStatsProps<TChildProps, TDataName>>(GlobalStatsDocument, {
      alias: 'globalStats',
      ...operationOptions
    });
};

/**
 * __useGlobalStatsQuery__
 *
 * To run a query within a React component, call `useGlobalStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGlobalStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGlobalStatsQuery({
 *   variables: {
 *      collections: // value for 'collections'
 *      operations: // value for 'operations'
 *   },
 * });
 */
export function useGlobalStatsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IGlobalStatsQuery, IGlobalStatsQueryVariables>) {
        return ApolloReactHooks.useQuery<IGlobalStatsQuery, IGlobalStatsQueryVariables>(GlobalStatsDocument, baseOptions);
      }
export function useGlobalStatsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IGlobalStatsQuery, IGlobalStatsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IGlobalStatsQuery, IGlobalStatsQueryVariables>(GlobalStatsDocument, baseOptions);
        }
export type GlobalStatsQueryHookResult = ReturnType<typeof useGlobalStatsQuery>;
export type GlobalStatsLazyQueryHookResult = ReturnType<typeof useGlobalStatsLazyQuery>;
export type GlobalStatsQueryResult = ApolloReactCommon.QueryResult<IGlobalStatsQuery, IGlobalStatsQueryVariables>;
export const LogDocument = gql`
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
export type LogComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ILogQuery, ILogQueryVariables>, 'query'> & ({ variables: ILogQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const LogComponent = (props: LogComponentProps) => (
      <ApolloReactComponents.Query<ILogQuery, ILogQueryVariables> query={LogDocument} {...props} />
    );
    
export type ILogProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ILogQuery, ILogQueryVariables>
    } & TChildProps;
export function withLog<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ILogQuery,
  ILogQueryVariables,
  ILogProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ILogQuery, ILogQueryVariables, ILogProps<TChildProps, TDataName>>(LogDocument, {
      alias: 'log',
      ...operationOptions
    });
};

/**
 * __useLogQuery__
 *
 * To run a query within a React component, call `useLogQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLogQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ILogQuery, ILogQueryVariables>) {
        return ApolloReactHooks.useQuery<ILogQuery, ILogQueryVariables>(LogDocument, baseOptions);
      }
export function useLogLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ILogQuery, ILogQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ILogQuery, ILogQueryVariables>(LogDocument, baseOptions);
        }
export type LogQueryHookResult = ReturnType<typeof useLogQuery>;
export type LogLazyQueryHookResult = ReturnType<typeof useLogLazyQuery>;
export type LogQueryResult = ApolloReactCommon.QueryResult<ILogQuery, ILogQueryVariables>;
export const LatestSidekiqWorkersWithStatsDocument = gql`
    query LatestSidekiqWorkersWithStats($mode: String, $limit: Int, $page: Int, $workers: [String!], $queues: [String!]) {
  sidekiqWorkersWithStats(mode: $mode, limit: $limit, page: $page, workers: $workers, queues: $queues) {
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
export type LatestSidekiqWorkersWithStatsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ILatestSidekiqWorkersWithStatsQuery, ILatestSidekiqWorkersWithStatsQueryVariables>, 'query'>;

    export const LatestSidekiqWorkersWithStatsComponent = (props: LatestSidekiqWorkersWithStatsComponentProps) => (
      <ApolloReactComponents.Query<ILatestSidekiqWorkersWithStatsQuery, ILatestSidekiqWorkersWithStatsQueryVariables> query={LatestSidekiqWorkersWithStatsDocument} {...props} />
    );
    
export type ILatestSidekiqWorkersWithStatsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ILatestSidekiqWorkersWithStatsQuery, ILatestSidekiqWorkersWithStatsQueryVariables>
    } & TChildProps;
export function withLatestSidekiqWorkersWithStats<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ILatestSidekiqWorkersWithStatsQuery,
  ILatestSidekiqWorkersWithStatsQueryVariables,
  ILatestSidekiqWorkersWithStatsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ILatestSidekiqWorkersWithStatsQuery, ILatestSidekiqWorkersWithStatsQueryVariables, ILatestSidekiqWorkersWithStatsProps<TChildProps, TDataName>>(LatestSidekiqWorkersWithStatsDocument, {
      alias: 'latestSidekiqWorkersWithStats',
      ...operationOptions
    });
};

/**
 * __useLatestSidekiqWorkersWithStatsQuery__
 *
 * To run a query within a React component, call `useLatestSidekiqWorkersWithStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestSidekiqWorkersWithStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestSidekiqWorkersWithStatsQuery({
 *   variables: {
 *      mode: // value for 'mode'
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *      workers: // value for 'workers'
 *      queues: // value for 'queues'
 *   },
 * });
 */
export function useLatestSidekiqWorkersWithStatsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ILatestSidekiqWorkersWithStatsQuery, ILatestSidekiqWorkersWithStatsQueryVariables>) {
        return ApolloReactHooks.useQuery<ILatestSidekiqWorkersWithStatsQuery, ILatestSidekiqWorkersWithStatsQueryVariables>(LatestSidekiqWorkersWithStatsDocument, baseOptions);
      }
export function useLatestSidekiqWorkersWithStatsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ILatestSidekiqWorkersWithStatsQuery, ILatestSidekiqWorkersWithStatsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ILatestSidekiqWorkersWithStatsQuery, ILatestSidekiqWorkersWithStatsQueryVariables>(LatestSidekiqWorkersWithStatsDocument, baseOptions);
        }
export type LatestSidekiqWorkersWithStatsQueryHookResult = ReturnType<typeof useLatestSidekiqWorkersWithStatsQuery>;
export type LatestSidekiqWorkersWithStatsLazyQueryHookResult = ReturnType<typeof useLatestSidekiqWorkersWithStatsLazyQuery>;
export type LatestSidekiqWorkersWithStatsQueryResult = ApolloReactCommon.QueryResult<ILatestSidekiqWorkersWithStatsQuery, ILatestSidekiqWorkersWithStatsQueryVariables>;
export const SidekiqWorkerDocument = gql`
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
export type SidekiqWorkerComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ISidekiqWorkerQuery, ISidekiqWorkerQueryVariables>, 'query'> & ({ variables: ISidekiqWorkerQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SidekiqWorkerComponent = (props: SidekiqWorkerComponentProps) => (
      <ApolloReactComponents.Query<ISidekiqWorkerQuery, ISidekiqWorkerQueryVariables> query={SidekiqWorkerDocument} {...props} />
    );
    
export type ISidekiqWorkerProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ISidekiqWorkerQuery, ISidekiqWorkerQueryVariables>
    } & TChildProps;
export function withSidekiqWorker<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ISidekiqWorkerQuery,
  ISidekiqWorkerQueryVariables,
  ISidekiqWorkerProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ISidekiqWorkerQuery, ISidekiqWorkerQueryVariables, ISidekiqWorkerProps<TChildProps, TDataName>>(SidekiqWorkerDocument, {
      alias: 'sidekiqWorker',
      ...operationOptions
    });
};

/**
 * __useSidekiqWorkerQuery__
 *
 * To run a query within a React component, call `useSidekiqWorkerQuery` and pass it any options that fit your needs.
 * When your component renders, `useSidekiqWorkerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSidekiqWorkerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSidekiqWorkerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ISidekiqWorkerQuery, ISidekiqWorkerQueryVariables>) {
        return ApolloReactHooks.useQuery<ISidekiqWorkerQuery, ISidekiqWorkerQueryVariables>(SidekiqWorkerDocument, baseOptions);
      }
export function useSidekiqWorkerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ISidekiqWorkerQuery, ISidekiqWorkerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ISidekiqWorkerQuery, ISidekiqWorkerQueryVariables>(SidekiqWorkerDocument, baseOptions);
        }
export type SidekiqWorkerQueryHookResult = ReturnType<typeof useSidekiqWorkerQuery>;
export type SidekiqWorkerLazyQueryHookResult = ReturnType<typeof useSidekiqWorkerLazyQuery>;
export type SidekiqWorkerQueryResult = ApolloReactCommon.QueryResult<ISidekiqWorkerQuery, ISidekiqWorkerQueryVariables>;
export const LatestSqlQueriesWithStatsDocument = gql`
    query LatestSqlQueriesWithStats($controllerId: Int, $stacktraceId: Int, $sidekiqWorkerId: Int, $mode: String, $limit: Int, $page: Int, $tables: [String!], $operations: [String!], $sourceNames: [String!]) {
  sqlQueriesWithStats(controllerId: $controllerId, stacktraceId: $stacktraceId, sidekiqWorkerId: $sidekiqWorkerId, mode: $mode, limit: $limit, page: $page, tables: $tables, operations: $operations, sourceNames: $sourceNames) {
    tables
    operations
    sourceNames
    totalDuration
    operationsStats {
      name
      value
    }
    tablesStats {
      name
      value
    }
    sqlQueries {
      currentPage
      previousPage
      nextPage
      totalItems
      totalPages
      nodes {
        id
        queryExcerpt
        query
        tableName
        schemaName
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
export type LatestSqlQueriesWithStatsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ILatestSqlQueriesWithStatsQuery, ILatestSqlQueriesWithStatsQueryVariables>, 'query'>;

    export const LatestSqlQueriesWithStatsComponent = (props: LatestSqlQueriesWithStatsComponentProps) => (
      <ApolloReactComponents.Query<ILatestSqlQueriesWithStatsQuery, ILatestSqlQueriesWithStatsQueryVariables> query={LatestSqlQueriesWithStatsDocument} {...props} />
    );
    
export type ILatestSqlQueriesWithStatsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ILatestSqlQueriesWithStatsQuery, ILatestSqlQueriesWithStatsQueryVariables>
    } & TChildProps;
export function withLatestSqlQueriesWithStats<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ILatestSqlQueriesWithStatsQuery,
  ILatestSqlQueriesWithStatsQueryVariables,
  ILatestSqlQueriesWithStatsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ILatestSqlQueriesWithStatsQuery, ILatestSqlQueriesWithStatsQueryVariables, ILatestSqlQueriesWithStatsProps<TChildProps, TDataName>>(LatestSqlQueriesWithStatsDocument, {
      alias: 'latestSqlQueriesWithStats',
      ...operationOptions
    });
};

/**
 * __useLatestSqlQueriesWithStatsQuery__
 *
 * To run a query within a React component, call `useLatestSqlQueriesWithStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestSqlQueriesWithStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestSqlQueriesWithStatsQuery({
 *   variables: {
 *      controllerId: // value for 'controllerId'
 *      stacktraceId: // value for 'stacktraceId'
 *      sidekiqWorkerId: // value for 'sidekiqWorkerId'
 *      mode: // value for 'mode'
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *      tables: // value for 'tables'
 *      operations: // value for 'operations'
 *      sourceNames: // value for 'sourceNames'
 *   },
 * });
 */
export function useLatestSqlQueriesWithStatsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ILatestSqlQueriesWithStatsQuery, ILatestSqlQueriesWithStatsQueryVariables>) {
        return ApolloReactHooks.useQuery<ILatestSqlQueriesWithStatsQuery, ILatestSqlQueriesWithStatsQueryVariables>(LatestSqlQueriesWithStatsDocument, baseOptions);
      }
export function useLatestSqlQueriesWithStatsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ILatestSqlQueriesWithStatsQuery, ILatestSqlQueriesWithStatsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ILatestSqlQueriesWithStatsQuery, ILatestSqlQueriesWithStatsQueryVariables>(LatestSqlQueriesWithStatsDocument, baseOptions);
        }
export type LatestSqlQueriesWithStatsQueryHookResult = ReturnType<typeof useLatestSqlQueriesWithStatsQuery>;
export type LatestSqlQueriesWithStatsLazyQueryHookResult = ReturnType<typeof useLatestSqlQueriesWithStatsLazyQuery>;
export type LatestSqlQueriesWithStatsQueryResult = ApolloReactCommon.QueryResult<ILatestSqlQueriesWithStatsQuery, ILatestSqlQueriesWithStatsQueryVariables>;
export const SqlQueryDocument = gql`
    query SqlQuery($id: Int!) {
  sqlQuery(id: $id) {
    id
    tableName
    schemaName
    query
    queryExcerpt
    operation
    appName
    sourceName
    sidekiqArgs
    stacktrace {
      id
      stacktrace
    }
    sqlExplain {
      id
      treeviz
      startupCost
      totalCost
      rows
      width
      actualStartupTime
      actualTotalTime
      actualRows
      actualLoops
      seqScans
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
export type SqlQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ISqlQueryQuery, ISqlQueryQueryVariables>, 'query'> & ({ variables: ISqlQueryQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SqlQueryComponent = (props: SqlQueryComponentProps) => (
      <ApolloReactComponents.Query<ISqlQueryQuery, ISqlQueryQueryVariables> query={SqlQueryDocument} {...props} />
    );
    
export type ISqlQueryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ISqlQueryQuery, ISqlQueryQueryVariables>
    } & TChildProps;
export function withSqlQuery<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ISqlQueryQuery,
  ISqlQueryQueryVariables,
  ISqlQueryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ISqlQueryQuery, ISqlQueryQueryVariables, ISqlQueryProps<TChildProps, TDataName>>(SqlQueryDocument, {
      alias: 'sqlQuery',
      ...operationOptions
    });
};

/**
 * __useSqlQueryQuery__
 *
 * To run a query within a React component, call `useSqlQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSqlQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSqlQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSqlQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ISqlQueryQuery, ISqlQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<ISqlQueryQuery, ISqlQueryQueryVariables>(SqlQueryDocument, baseOptions);
      }
export function useSqlQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ISqlQueryQuery, ISqlQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ISqlQueryQuery, ISqlQueryQueryVariables>(SqlQueryDocument, baseOptions);
        }
export type SqlQueryQueryHookResult = ReturnType<typeof useSqlQueryQuery>;
export type SqlQueryLazyQueryHookResult = ReturnType<typeof useSqlQueryLazyQuery>;
export type SqlQueryQueryResult = ApolloReactCommon.QueryResult<ISqlQueryQuery, ISqlQueryQueryVariables>;
export const LatestStacktracesDocument = gql`
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
export type LatestStacktracesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ILatestStacktracesQuery, ILatestStacktracesQueryVariables>, 'query'>;

    export const LatestStacktracesComponent = (props: LatestStacktracesComponentProps) => (
      <ApolloReactComponents.Query<ILatestStacktracesQuery, ILatestStacktracesQueryVariables> query={LatestStacktracesDocument} {...props} />
    );
    
export type ILatestStacktracesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ILatestStacktracesQuery, ILatestStacktracesQueryVariables>
    } & TChildProps;
export function withLatestStacktraces<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ILatestStacktracesQuery,
  ILatestStacktracesQueryVariables,
  ILatestStacktracesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ILatestStacktracesQuery, ILatestStacktracesQueryVariables, ILatestStacktracesProps<TChildProps, TDataName>>(LatestStacktracesDocument, {
      alias: 'latestStacktraces',
      ...operationOptions
    });
};

/**
 * __useLatestStacktracesQuery__
 *
 * To run a query within a React component, call `useLatestStacktracesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestStacktracesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestStacktracesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useLatestStacktracesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ILatestStacktracesQuery, ILatestStacktracesQueryVariables>) {
        return ApolloReactHooks.useQuery<ILatestStacktracesQuery, ILatestStacktracesQueryVariables>(LatestStacktracesDocument, baseOptions);
      }
export function useLatestStacktracesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ILatestStacktracesQuery, ILatestStacktracesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ILatestStacktracesQuery, ILatestStacktracesQueryVariables>(LatestStacktracesDocument, baseOptions);
        }
export type LatestStacktracesQueryHookResult = ReturnType<typeof useLatestStacktracesQuery>;
export type LatestStacktracesLazyQueryHookResult = ReturnType<typeof useLatestStacktracesLazyQuery>;
export type LatestStacktracesQueryResult = ApolloReactCommon.QueryResult<ILatestStacktracesQuery, ILatestStacktracesQueryVariables>;
export const MongodbStacktraceDocument = gql`
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
export type MongodbStacktraceComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IMongodbStacktraceQuery, IMongodbStacktraceQueryVariables>, 'query'> & ({ variables: IMongodbStacktraceQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const MongodbStacktraceComponent = (props: MongodbStacktraceComponentProps) => (
      <ApolloReactComponents.Query<IMongodbStacktraceQuery, IMongodbStacktraceQueryVariables> query={MongodbStacktraceDocument} {...props} />
    );
    
export type IMongodbStacktraceProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<IMongodbStacktraceQuery, IMongodbStacktraceQueryVariables>
    } & TChildProps;
export function withMongodbStacktrace<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IMongodbStacktraceQuery,
  IMongodbStacktraceQueryVariables,
  IMongodbStacktraceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, IMongodbStacktraceQuery, IMongodbStacktraceQueryVariables, IMongodbStacktraceProps<TChildProps, TDataName>>(MongodbStacktraceDocument, {
      alias: 'mongodbStacktrace',
      ...operationOptions
    });
};

/**
 * __useMongodbStacktraceQuery__
 *
 * To run a query within a React component, call `useMongodbStacktraceQuery` and pass it any options that fit your needs.
 * When your component renders, `useMongodbStacktraceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMongodbStacktraceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMongodbStacktraceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IMongodbStacktraceQuery, IMongodbStacktraceQueryVariables>) {
        return ApolloReactHooks.useQuery<IMongodbStacktraceQuery, IMongodbStacktraceQueryVariables>(MongodbStacktraceDocument, baseOptions);
      }
export function useMongodbStacktraceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IMongodbStacktraceQuery, IMongodbStacktraceQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IMongodbStacktraceQuery, IMongodbStacktraceQueryVariables>(MongodbStacktraceDocument, baseOptions);
        }
export type MongodbStacktraceQueryHookResult = ReturnType<typeof useMongodbStacktraceQuery>;
export type MongodbStacktraceLazyQueryHookResult = ReturnType<typeof useMongodbStacktraceLazyQuery>;
export type MongodbStacktraceQueryResult = ApolloReactCommon.QueryResult<IMongodbStacktraceQuery, IMongodbStacktraceQueryVariables>;