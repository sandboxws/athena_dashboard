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
import sqlFormatter from "sql-formatter";

type Props = {
  title?: string;
  excerpt: string | undefined;
  jsonContent?: string | undefined;
  sqlContent?: string | undefined;
};

type State = {
  activeIndex: number;
};

const initialState = {
  activeIndex: 1,
} as State;

export default function AwesomeAccordion(props: Props) {
  const { jsonContent, title, excerpt, sqlContent } = props;
  const [state, setState] = useState(initialState);

  const { activeIndex } = state;

  const handleClick = (_e: SyntheticEvent, titleProps: AccordionTitleProps) => {
    const { index } = titleProps;
    const { activeIndex } = state;
    const newIndex = activeIndex === index ? -1 : (index as number);
    setState({ activeIndex: newIndex });
  };

  const formattedSql =
    sqlContent !== undefined ? sqlFormatter.format(sqlContent) : sqlContent;

  return (
    <>
      <div className="px-5 py-4 bg-white shadow-md rounded-lg">
        {title !== null && title !== undefined ? (
          <h3 className="ml-2 m5-2 pb-2 text-purple-500 border-b border-gray-200">
            {title}
          </h3>
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
              language={jsonContent !== undefined ? "json" : "sql"}
              className="border border-gray-300 rounded-lg"
              style={syntaxStyle}
              wrapLines={false}
            >
              {jsonContent !== undefined
                ? JSON.stringify(JSON.parse(jsonContent), null, 2)
                : formattedSql}
            </SyntaxHighlighter>
          </Accordion.Content>
        </Accordion>
      </div>
    </>
  );
}
