import React, { useState } from "react";
import { PassData } from "./PassData";

export const ShowFolder = ({ children, subFolder, subFile = [], flag }) => {
  const [open, setOpen] = useState(false);
  console.log(subFolder, subFile);
  return (
    <>
      <div className="folder" onClick={() => setOpen(!open)}>
        {[...Array(flag)].map(() => {
          return ">>> ";
        })}
        {children}
      </div>

      {open && subFolder?.length !== 0 && (
        <PassData
          flag={flag}
          structureOfFolder={subFolder}
          structureOfFile={subFile}
        />
      )}
    </>
  );
};
