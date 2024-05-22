import React from "react";
import { ShowFolder } from "./ShowFolder";
import { ShowFile } from "./ShowFile";

export const PassData = ({ structureOfFolder, flag = 0 }) => {
  flag = flag + 1;
  console.log(structureOfFolder);
  return (
    <>
      {structureOfFolder.map((value, index) => {
        return (
          <>
            <ShowFolder
              key={index}
              flag={flag}
              subFile={value.subFile}
              subFolder={value.subfolder}
            >
              {value.name}
            </ShowFolder>
          </>
        );
      })}
      {structureOfFolder.subFile?.map((value, index) => {
        return (
          <>
            <ShowFile key={index.id} flag={flag}>
              {value.name}
            </ShowFile>
          </>
        );
      })}
    </>
  );
};
