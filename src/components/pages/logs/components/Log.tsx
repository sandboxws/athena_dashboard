import React, { Component } from "react";
import { Accordion, Button, Icon, Table, Label } from "semantic-ui-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import syntaxStyle from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light";
import operationColor from "../../../common/CommandColors";
import { Link } from "react-router-dom";
import { ILog } from "../../../../generated/graphql";

interface Props {
  log: ILog;
}

export default class LogPage extends Component<Props> {
  state = { activeIndex: -1 };

  // handleClick = (e, titleProps) => {
  //   const { index } = titleProps;
  //   const { activeIndex } = this.state;
  //   const newIndex = activeIndex === index ? -1 : index;

  //   this.setState({ activeIndex: newIndex });
  // }

  render() {
    const {
      id,
      collection,
      operation,
      appName,
      sourceName,
      command,
      commandExcerpt,
      duration,
    } = this.props.log;
    const { activeIndex } = this.state;
    const customStyle = {
      backgroundColor: "blue",
    };
    return (
      <Table.Row verticalAlign="top">
        <Table.Cell>{collection}</Table.Cell>
        <Table.Cell>
          <Label
            color={operationColor(operation)}
            horizontal
            verticalAlign="middle"
          >
            {operation}
          </Label>
        </Table.Cell>
        <Table.Cell>{appName}</Table.Cell>
        <Table.Cell>{sourceName}</Table.Cell>
        <Table.Cell>
          <Accordion fluid styled>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              // onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              {commandExcerpt}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <SyntaxHighlighter
                language="ruby"
                className="border border-gray-300 rounded-lg"
                style={syntaxStyle}
                wrapLines={false}
              >
                {JSON.stringify(JSON.parse(command), null, 2)}
              </SyntaxHighlighter>
            </Accordion.Content>
          </Accordion>
        </Table.Cell>
        <Table.Cell>{duration}</Table.Cell>
        <Table.Cell>
          <Button as={Link} size="mini" color="blue" to={`/queries/${id}`}>
            Inspect
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}
