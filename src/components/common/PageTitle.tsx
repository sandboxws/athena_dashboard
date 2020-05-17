import React from "react";

type Props = {
  title: string;
  subTitle?: string;
};

export default function PageTitle(props: Props) {
  let subTitle;

  if (props.subTitle !== null) {
    subTitle = (
      <p className="mt-1 max-w-2xl text-base leading-5 text-gray-600">
        {props.subTitle}
      </p>
    );
  }
  return (
    <div>
      <h1 className="text-2xl text-gray-700">{props.title}</h1>
      {subTitle}
    </div>
  );
}
