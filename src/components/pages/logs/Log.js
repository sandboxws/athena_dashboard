import React, { Component } from 'react';
import { Icon, Label, Table, Divider, Accordion } from 'semantic-ui-react';
import { Query } from 'react-apollo';
import { SHOW_LOG_GQL } from '../../../queries/pages/logs';
import Log from './components/Log';
import PageTitle from '../../common/PageTitle';
import operationColor from '../../common/CommandColors';
import SyntaxHighlighter from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light.js';

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
            <>
              <PageTitle title={`Log#${log.id}`} />
              <Divider horizontal>Stats</Divider>
              <Table>
                <Table.Body className="bg-gray-100">
                  <Table.Row>
                    <Table.Cell className="font-medium">Collection</Table.Cell>
                    <Table.Cell><Label color='black' horizontal>{log.collection}</Label></Table.Cell>
                    <Table.Cell className="font-medium">Used Indexes</Table.Cell>
                    <Table.Cell><Label color='black' horizontal>{log.explain?.usedIndexes || 'N/A'}</Label></Table.Cell>
                    <Table.Cell className="font-medium">Duration</Table.Cell>
                    <Table.Cell><Label color='black' horizontal>{log.explain?.duration || 'N/A'}</Label></Table.Cell>
                    <Table.Cell className="font-medium">Documents Examined</Table.Cell>
                    <Table.Cell><Label color='black' horizontal>{log.explain?.documentsExamined || 'N/A'}</Label></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell className="font-medium">Documents Returned</Table.Cell>
                    <Table.Cell><Label color='black' horizontal>{log.explain?.documentsReturned || 'N/A'}</Label></Table.Cell>
                    <Table.Cell className="font-medium">Keys Examined</Table.Cell>
                    <Table.Cell><Label color='black' horizontal>{log.explain?.keysExamined || 'N/A'}</Label></Table.Cell>
                    <Table.Cell className="font-medium">Rejected Plans</Table.Cell>
                    <Table.Cell><Label color='black' horizontal>{log.explain?.rejectedPlans || 'N/A'}</Label></Table.Cell>
                    <Table.Cell className="font-medium">Stages Count</Table.Cell>
                    <Table.Cell><Label color='black' horizontal>{log.explain?.stagesCount || 'N/A'}</Label></Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              <Divider horizontal>Query Plan</Divider>
              <Divider horizontal>MongoDB Command</Divider>
              <SyntaxHighlighter language="ruby" className="border border-gray-300 rounded-lg" style={syntaxStyle} wrapLines={false}>
                {JSON.stringify(JSON.parse(log.command), null, 2)}
              </SyntaxHighlighter>
              <Divider horizontal>Ruby's Stacktrace</Divider>
              <SyntaxHighlighter language="ruby" className="border border-gray-300 rounded-lg" style={syntaxStyle} wrapLines={false}>
                {JSON.stringify(JSON.parse(log.stacktrace.stacktrace), null, 2)}
              </SyntaxHighlighter>
            </>
          )
        }}
      </Query>
    )
  }
}
