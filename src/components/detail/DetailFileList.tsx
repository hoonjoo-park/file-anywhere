import React from "react";
import styled from "styled-components";
import colors from "styles/colors";
import { FileType } from "types";
import { DetailFileListItem } from "components/detail/DetailFileListItem";

interface Props {
  detailData: FileType;
}

export const DetailFileList = ({ detailData }: Props) => {
  const files = detailData.files;
  return (
    <FileList>
      {files &&
        files.map((file, i) => (
          <DetailFileListItem key={`file-${i}`} file={file} />
        ))}
    </FileList>
  );
};

const FileList = styled.ul`
  border-top: 1px solid;
  border-color: ${colors.grey200};
  padding: 0;
  margin: 0;
  padding: 0 36px;
  color: ${colors.grey700};

  @media (max-width: 768px) {
    padding: 0 24px;
  }

  & > li + li {
    border-top: 1px solid;
    border-color: ${colors.grey200};
  }
`;
