import React from "react";
import styled from "styled-components";
import colors from "styles/colors";
import { FileType } from "types";
import { handleCopy } from "utils/handleCopy";
import Button from "components/commons/Button";
import { format } from "date-fns";

interface Props {
  detailData: FileType;
  expDate: string | undefined;
}

export const DetailHeader = ({ detailData, expDate }: Props) => {
  const handleDownload = () => {
    window.alert("다운로드 되었습니다.");
  };
  return (
    <Header>
      <LinkInfo>
        <Title>{detailData.summary}</Title>
        {expDate === "expired" ? (
          <span>만료됨</span>
        ) : (
          <Url
            onClick={(e) => handleCopy(e)}
          >{`https://file-anywhere.herokuapp.com/${detailData.key}`}</Url>
        )}
      </LinkInfo>
      <DownloadButton onClick={handleDownload}>
        <img referrerPolicy="no-referrer" src="/svgs/download.svg" alt="" />
        받기
      </DownloadButton>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  color: ${colors.grey600};
  margin-bottom: 32px;
`;

const LinkInfo = styled.div`
  overflow: hidden;
  flex-grow: 1;
`;

const Title = styled.h3`
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 28px;
  color: ${colors.grey700};
  font-size: 20px;
`;
const Url = styled.a`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  text-decoration: underline;
  line-height: 20px;
  font-size: 14px;
  :hover {
    color: ${colors.teal700};
  }
`;

const DownloadButton = styled(Button)`
  font-size: 16px;

  img {
    margin-right: 8px;
  }
`;
