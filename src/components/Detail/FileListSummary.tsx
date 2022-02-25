import React from "react";
import styled from "styled-components";
import colors from "styles/colors";
import { FileType } from "types";
import { getFileSize } from "utils/getFileSize";

interface Props {
  detailData: FileType;
}

export const FileListSummary = ({ detailData }: Props) => {
  const fileLength = detailData.files ? detailData.files.length : 0;
  const fileSizes = detailData.files?.map((file) => file.size);
  const totalFileSize = fileSizes?.reduce((prev, cur) => prev + cur, 0);
  const fileSizeResult = getFileSize(totalFileSize!);
  return (
    <ListSummary>
      <div>{`총 ${fileLength}개의 파일`}</div>
      <div>{fileSizeResult}</div>
    </ListSummary>
  );
};

const ListSummary = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 36px;
  font-weight: 600;
  border-top: 1px solid;
  border-color: ${colors.grey200};

  @media (max-width: 768px) {
    padding: 12px 24px;
  }
`;
