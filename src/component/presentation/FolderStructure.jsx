import React from "react";
import FolderStructureContainer from "../container/folderStructure.container";
import { ShowFolder } from "./ShowFolder";
import { ShowFolderContainer } from "../container/showFolder.container";
import { PassData } from "./PassData";

export default function FolderStructure() {
  const { structureOfFolder } = FolderStructureContainer();
  return (
    <>
      <div>
        <PassData structureOfFolder={structureOfFolder} />
      </div>
    </>
  );
}
