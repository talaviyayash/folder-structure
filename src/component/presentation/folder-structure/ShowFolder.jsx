import React, { useState } from "react";
import { PassData } from "./PassData";
import { FaFolder, FaFolderOpen } from "react-icons/fa";

export const ShowFolder = ({
  color,
  children,
  subFolder,
  subFile = [],
  flag,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="folder"
        onClick={() => setOpen(!open)}
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
        {open ? <FaFolderOpen /> : <FaFolder />}
        <div>{children}</div>
      </div>

      {open && subFolder?.length !== 0 && (
        <PassData
          flag={flag}
          structureOfFolder={subFolder}
          structureOfFile={subFile}
          color={color}
        />
      )}
    </>
  );
};
