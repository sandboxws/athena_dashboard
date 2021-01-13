import React from "react";
import classNames from "classnames";

type Props = {
  title: string;
  stat: string | number | undefined;
  color: string;
};

export default function AwesomeLable(props: Props) {
  return (
    <div className="flex flex-shrink-0 text-sm font-bold items-center pr-2">
      <div
        className={classNames(
          `bg-${props.color}-600`,
          "text-white",
          "px-2",
          "py-1",
          "rounded-l"
        )}
      >
        {props.title}
      </div>
      <div
        className={classNames(
          `bg-${props.color}-400`,
          "text-white",
          "px-2",
          "py-1"
        )}
      >
        {props.stat}
      </div>
    </div>
  );
}
