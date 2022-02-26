import React, { useMemo } from "react";
import styled from "styled-components";
import { FileData } from "types";
import { getFileSize } from "utils/getFileSize";
import { handleImageError } from "utils/handleImageError";

interface Props {
  file: FileData;
}

export const DetailFileListItem = ({ file }: Props) => {
  const fileSize = useMemo(() => getFileSize(file.size), [file]);
  return (
    <FileListItem>
      <FileItemInfo>
        <FileImage
          src={file.thumbnailUrl}
          onError={(e) => handleImageError(e)}
        />
        <span>{file.name}</span>
      </FileItemInfo>
      <FileItemSize>{fileSize}</FileItemSize>
    </FileListItem>
  );
};

const FileListItem = styled.li`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FileItemInfo = styled.div`
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;
  display: flex;
  align-items: center;
`;

const FileImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 12px;
  display: inline-block;
`;

const FileItemSize = styled.div``;
