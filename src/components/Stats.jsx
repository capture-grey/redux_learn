import React from "react";

function Stats({ totalCount = 0 }) {
  return (
    <div className="w-full h-7 border">
      <p className="text-center">{totalCount}</p>
    </div>
  );
}

export default Stats;
