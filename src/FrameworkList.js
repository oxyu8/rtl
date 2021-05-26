import React from "react";

const FrameworkList = (props) => {
  if (!props.frameworks || !props.frameworks.length === 0) {
    return <h1>no data</h1>;
  }
  return (
    <div>
      <ul>
        {props.frameworks.map(({ id, item }) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FrameworkList;
