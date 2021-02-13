// React
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Sidebar from "./Sidebar";
import Dashboard from "../../pages/dashboard/Dashboard";
import Logs from "../../pages/logs/Logs";
import SqlQueries from "../../pages/sql_queries/SqlQueries";
import SqlQuery from "../../pages/sql_queries/SqlQuery";
import Log from "../../pages/logs/Log";
import Controllers from "../../pages/controllers/Controllers";
import Controller from "../../pages/controllers/Controller";
import Stacktraces from "../../pages/stacktraces/Stacktraces";
import Stacktrace from "../../pages/stacktraces/Stacktrace";
import SidekiqWorkers from "../../pages/sidekiq_workers/SidekiqWorkers";
import SidekiqWorker from "../../pages/sidekiq_workers/SidekiqWorker";
import DelayedJobs from "../../pages/delayed_jobs/DelayedJobs";
import DelayedJob from "../../pages/delayed_jobs/DelayedJob";
import "./styles.scss";

function Template() {
  return (
    <Router>
      <div className="outer-container sfont-sans text-gray-900 antialiased">
        <div className="inner-container min-h-screen flex bg-gray-200">
          <Sidebar />
          <div className="main flex-grow flex flex-col">
            <div className="mx-5">
              <div className="px-5 py-4 mt-5 w-full">
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/sql_queries" component={SqlQueries} />
                <Route exact path="/sql_queries/:id" component={SqlQuery} />
                <Route exact path="/queries" component={Logs} />
                <Route exact path="/queries/:id" component={Log} />
                <Route exact path="/controllers" component={Controllers} />
                <Route exact path="/controllers/:id" component={Controller} />
                <Route exact path="/stacktraces" component={Stacktraces} />
                <Route exact path="/stacktraces/:id" component={Stacktrace} />
                <Route
                  exact
                  path="/sidekiq_workers"
                  component={SidekiqWorkers}
                />
                <Route
                  exact
                  path="/sidekiq_workers/:id"
                  component={SidekiqWorker}
                />
                <Route exact path="/delayed_jobs" component={DelayedJobs} />
                <Route exact path="/delayed_jobs/:id" component={DelayedJob} />
              </div>
            </div>
            <div className="m-auto w-64 p-0 mb-5">
              Made with <span style={{ color: "#e25555" }}>&#9829;</span> in
              Toronto
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Template;
