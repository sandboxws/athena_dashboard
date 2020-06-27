// React
import React from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import TopMenu from "./TopMenu";
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
import "./styles.scss";

function Template() {
  return (
    <Router>
      <Container className="ae-wide mt-10">
        <TopMenu />
        <Container className="ae-wide p-5 my-0 bg-white shadow rounded-md mb-10">
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/sql_queries" component={SqlQueries} />
          <Route exact path="/sql_queries/:id" component={SqlQuery} />
          <Route exact path="/queries" component={Logs} />
          <Route exact path="/queries/:id" component={Log} />
          <Route exact path="/controllers" component={Controllers} />
          <Route exact path="/controllers/:id" component={Controller} />
          <Route exact path="/stacktraces" component={Stacktraces} />
          <Route exact path="/stacktraces/:id" component={Stacktrace} />
          <Route exact path="/sidekiq_workers" component={SidekiqWorkers} />
          <Route exact path="/sidekiq_workers/:id" component={SidekiqWorker} />
        </Container>
        <div className="m-auto w-64 p-0 mb-5">
          Made with <span style={{ color: "#e25555" }}>&#9829;</span> in Toronto
        </div>
      </Container>
    </Router>
  );
}

export default Template;
