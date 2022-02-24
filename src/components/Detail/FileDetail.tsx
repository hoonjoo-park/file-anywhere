import React from "react";
import styled from "styled-components";
import Button from "components/commons/Button";
import colors from "styles/colors";
import { DetailHeader } from "./DetailHeader";
import { DetailFileList } from "./DetailFileList";
import { FileType } from "types";

interface Props {
  fileData: FileType[] | null;
}

export const FileDetail = ({ fileData }: Props) => {
  return (
    <>
      <DetailHeader />
      <Article>
        <Descrition>
          <Texts>
            <Top>링크 생성일</Top>
            <Bottom>2022년 1월 12일 22:36 +09:00</Bottom>
            <Top>메세지</Top>
            <Bottom>로고파일 전달 드립니다.</Bottom>
            <Top>다운로드 횟수</Top>
            <Bottom>1</Bottom>
          </Texts>
          <LinkImage>
            <Image />
          </LinkImage>
        </Descrition>
        <ListSummary>
          <div>총 1개의 파일</div>
          <div>10.86KB</div>
        </ListSummary>
        <DetailFileList />
      </Article>
    </>
  );
};

const Article = styled.article`
  border-radius: 4px;
  border-color: ${colors.grey200};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0 0 0 1px rgb(0 20 61 / 8%), 0 3px 3px 0 rgb(0 20 61 / 4%);
  background-color: ${colors.white};
  color: ${colors.grey600};
  font-size: 14px;
  font-weight: 400;
`;

const Descrition = styled.div`
  display: flex;
  padding: 36px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 24px;
  }
`;

const Texts = styled.div`
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Top = styled.label`
  font-weight: 600;
  line-height: 20px;
`;

const Bottom = styled.p`
  color: ${colors.grey700};
  margin: 8px 0 24px;
`;

const LinkImage = styled.div`
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  border-radius: 4px;
  justify-content: center;
  background-color: ${colors.grey50};

  @media (max-width: 768px) {
    margin-bottom: 32px;
    max-width: 100%;
  }
`;

const Image = styled.span`
  width: 120px;
  display: inline-block;
  background-image: url(/svgs/default.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  padding-bottom: 100%;
`;

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
