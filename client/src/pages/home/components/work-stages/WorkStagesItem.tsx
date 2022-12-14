import React from "react";

export const WorkStagesItem = ({ item }: any) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <span>{item.description}</span>
    </div>
  );
};
