// React
import React from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import TopMenu from './TopMenu';
import Dashboard from '../../pages/dashboard/Dashboard';
import Logs from '../../pages/logs/Logs';
import Log from '../../pages/logs/Log';
import Controllers from '../../pages/controllers/Controllers';

// Styles
import './styles.scss'

function Template() {
  return (
    <Router>
      <Container className="ae-wide mt-10">
        <TopMenu />
        <Container className="ae-wide p-5 my-0 bg-white border border-gray-300 rounded-md mb-10">
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/logs" component={Logs} />
            <Route exact path="/logs/:id" component={Log} />
            <Route path="/controllers" component={Controllers} />
        </Container>
      </Container>
    </Router>
  );
}

export default Template;
