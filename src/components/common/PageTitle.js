import React from 'react';

function PageTitle(props) {
  return (
    <div>
      <h1 className="text-2xl text-gray-700">{props.title}</h1>
      <hr className="mt-2 border-b-1 border-gray-200" />
    </div>
  );
}

export default PageTitle;
