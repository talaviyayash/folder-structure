import React from "react";

export const ShowFile = ({ flag, children }) => {
  //   console.log("ShowFile", children);
  return (
    <>
      <div className="file">
        {[...Array(flag)].map(() => {
          return ">>> ";
        })}
        {children}
      </div>
    </>
  );
};
