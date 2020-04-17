// React
import React from "react";
import PageTitle from "../../common/PageTitle";
import Charts from "./components/Charts";
import LatestLogs from "./components/LatestLogs";
import LatestControllers from "./components/LatestControllers";
import LatestSidekiqWorkers from "./components/LatestSidekiqWorkers";
import Stats from "./components/Stats";
import {
  useDashboardQueryQuery,
  ILog,
  ICommand,
  IController,
  ISidekiqWorker,
} from "../../../generated/graphql";

export default function Dashboard() {
  const { loading, error, data } = useDashboardQueryQuery();
  if (loading) return <div>Loading…</div>;
  if (error) return <div>Error: {error}</div>;
  const dashboard = data?.dashboard;
  const mongodbLatestLogs = dashboard?.mongodbLatestLogs as ILog[];
  const operationsStats = dashboard?.operationsStats as ICommand[];
  const topCollections = dashboard?.topCollections as ICommand[];
  const mongodbLatestControllers = dashboard?.mongodbLatestControllers as IController[];
  const latestSidekiqWorkers = dashboard?.latestSidekiqWorkers as ISidekiqWorker[];

  return (
    <div>
      <PageTitle title="Dashboard" />
      <>
        <Stats stats={operationsStats} />
        <Charts stats={operationsStats} collections={topCollections} />
        <LatestLogs mongodbLatestLogs={mongodbLatestLogs} />
        <LatestControllers
          mongodbLatestControllers={mongodbLatestControllers}
        />
        <LatestSidekiqWorkers sidekiqWorkers={latestSidekiqWorkers} />
      </>
    </div>
  );
}
