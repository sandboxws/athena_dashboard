import React, { useState, SyntheticEvent } from "react";
import {
  Accordion,
  AccordionTitleProps,
  Divider,
  Icon,
} from "semantic-ui-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import syntaxStyle from "react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-blue";
import voca from "voca";

type Props = {
  title?: string;
  excerpt: string | undefined;
  jsonContent: string;
};

type State = {
  activeIndex: number;
};

const initialState = {
  activeIndex: 1,
} as State;

export default function AwesomeAccordion(props: Props) {
  const { jsonContent, title, excerpt } = props;
  const [state, setState] = useState(initialState);

  const { activeIndex } = state;

  const handleClick = (_e: SyntheticEvent, titleProps: AccordionTitleProps) => {
    const { index } = titleProps;
    const { activeIndex } = state;
    const newIndex = activeIndex === index ? -1 : (index as number);
    setState({ activeIndex: newIndex });
  };

  return (
    <>
      {title !== null && title !== undefined ? (
        <Divider horizontal>{title}</Divider>
      ) : (
        ""
      )}
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          {voca.truncate(excerpt, 99)}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <SyntaxHighlighter
            language="json"
            className="border border-gray-300 rounded-lg"
            style={syntaxStyle}
            wrapLines={false}
          >
            {JSON.stringify(JSON.parse(jsonContent), null, 2)}
          </SyntaxHighlighter>
        </Accordion.Content>
      </Accordion>
    </>
  );
}
