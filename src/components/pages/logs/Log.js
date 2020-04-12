import React, { Component } from 'react';
import { Label, Table, Menu, Icon, Pagination, Divider } from 'semantic-ui-react';
import { Query } from 'react-apollo';
import { range, uniqBy, prop } from 'ramda/src';
import { SHOW_LOG_GQL } from '../../../queries/pages/logs';
import Log from './components/Log';
import PageTitle from '../../common/PageTitle';
import { Dropdown, Input } from 'semantic-ui-react'
import operationColor from '../../common/CommandColors';
import { useParams } from 'react-router-dom';


export default class LogPage extends Component {
  state = {
    log: null
  }

  render() {
    const id = parseInt(this.props.match.params.id);
    console.log(id);

    return (
      <Query query={SHOW_LOG_GQL} variables={{ id: id }}>
        {({loading, error, data}) => {
          if (loading) return <div>Fetching data</div>
          if (error) return <div>Error: {error}</div>
          const log = data.mongodbLog;
          return (
            <PageTitle title={`Log#${log.id}`} />
          )
        }}
      </Query>
    )
  }
}
