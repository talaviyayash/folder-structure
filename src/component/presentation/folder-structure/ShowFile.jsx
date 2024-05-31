import React from "react";
import { FaFile } from "react-icons/fa";

export const ShowFile = ({ flag, children, color }) => {
  return (
    <>
      <div
        className="file"
        style={{
          color,
          marginLeft: `${flag * 30}px`,
          maxWidth: "250px",
          backgroundColor: "rgb(158 163 244)",
        }}
      >
        {/* {[...Array(flag)].map(() => {
          return ">>> ";
        })} */}
        <FaFile />

        {children}
      </div>
    </>
  );
};
