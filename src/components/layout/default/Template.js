// React
import React from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Components
import TopMenu from './TopMenu';
import Dashboard from '../../pages/dashboard/Dashboard';
import Logs from '../../pages/logs/Logs';

// Styles
import './styles.scss'

function Template() {
  return (
    <Router>
      <Container className="mt-10">
        <TopMenu />
        <Container className="container p-5 my-0 mx-auto bg-white border border-gray-400 mb-10">
            <Route exact path="/" component={Dashboard} />
            <Route path="/logs" component={Logs} />
        </Container>
      </Container>
    </Router>
  );
}

export default Template;
