import React from "react";
import FolderStructureContainer from "../../container/folder-structure/folderStructure.container";
import { ShowFolder } from "../folder-structure/ShowFolder";
import { ShowFolderContainer } from "../../container/folder-structure/folderStructure.container";
import { PassData } from "./PassData";

export default function FolderStructure() {
  const { structureOfFolder } = FolderStructureContainer();
  return (
    <>
      <div className="container">
        <PassData
          structureOfFile={structureOfFolder.file}
          structureOfFolder={structureOfFolder.folder}
        />
      </div>
    </>
  );
}
