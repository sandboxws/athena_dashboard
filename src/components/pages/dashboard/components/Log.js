import React, { Component } from 'react';
import { Accordion, Button, Icon, Table } from 'semantic-ui-react'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import cb from 'react-syntax-highlighter/dist/esm/styles/prism/duotone-earth.js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light.js';

export default class Log extends Component {
  state = { activeIndex: -1 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { collection, operation, command, commandExcerpt, duration } = this.props.log;
    const { activeIndex } = this.state;
    const customStyle = {
      backgroundColor: 'blue'
    }
    return (
      <Table.Row verticalAlign="middle">
        <Table.Cell>{collection}</Table.Cell>
        <Table.Cell>{operation}</Table.Cell>
        <Table.Cell>
        <Accordion fluid styled>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            {commandExcerpt}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <SyntaxHighlighter language="ruby" className="border border-gray-300 rounded-lg" style={syntaxStyle} wrapLines={false}>
              {JSON.stringify(JSON.parse(command), null, 2)}
            </SyntaxHighlighter>
          </Accordion.Content>
        </Accordion>
        </Table.Cell>
        <Table.Cell>{duration}</Table.Cell>
        <Table.Cell>
          <Button size="mini" color="blue">View</Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}
