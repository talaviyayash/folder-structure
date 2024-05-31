import React from "react";
import { ShowFolder } from "./ShowFolder";
import { ShowFile } from "./ShowFile";

export const PassData = ({
  color,
  structureOfFile,
  structureOfFolder,
  flag = 0,
}) => {
  flag = flag + 1;
  return (
    <>
      {structureOfFolder?.map((value, index) => {
        return (
          <>
            <ShowFolder
              key={index}
              flag={flag}
              subFile={value.subFile}
              subFolder={value.subfolder}
              color={
                color === "black" ? "red" : color === "red" ? "blue" : "black"
              }
            >
              {value.name}
            </ShowFolder>
          </>
        );
      })}
      {structureOfFile?.map((value, index) => {
        return (
          <>
            <ShowFile
              key={index.id}
              flag={flag}
              color={
                color === "black" ? "red" : color === "red" ? "blue" : "black"
              }
            >
              {value.name}
            </ShowFile>
          </>
        );
      })}
    </>
  );
};
