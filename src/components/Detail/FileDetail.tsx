import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import colors from "styles/colors";
import { DetailHeader } from "./DetailHeader";
import { DetailFileList } from "./DetailFileList";
import { FileType } from "types";
import { useLocation, useParams } from "react-router-dom";
import { getExpDate } from "utils/getExpDate";
import { format } from "date-fns";
import { FileListSummary } from "./FileListSummary";
import { handleImageError } from "utils/handleImageError";

interface Props {
  fileData: FileType[] | null;
}

export const FileDetail = ({ fileData }: Props) => {
  const [detailData, setDetailData] = useState<FileType | null>(null);
  const { id } = useParams();
  const location = useLocation();

  const expDate = useMemo(() => {
    if (detailData) return getExpDate(detailData!.expires_at);
  }, [detailData]);

  const createdAt = useMemo(() => {
    if (detailData)
      return format(
        new Date(detailData.created_at * 1000),
        "yyyy년 M월 d일 hh:mm"
      );
  }, [detailData]);

  useEffect(() => {
    if (!fileData) return;
    if (location.state) {
      const propsData = location.state;
      setDetailData(propsData as FileType);
      return;
    }
    const matchToKeyData = fileData?.filter((data) => data.key === id);
    setDetailData(matchToKeyData[0]);
  }, [fileData]);

  return (
    detailData && (
      <>
        <DetailHeader detailData={detailData} expDate={expDate} />
        <Article>
          <Descrition>
            <Texts>
              <Top>링크 생성일</Top>
              <Bottom>{createdAt}</Bottom>
              <Top>메세지</Top>
              <Bottom>{detailData.sent ? detailData.sent.content : "-"}</Bottom>
              <Top>다운로드 횟수</Top>
              <Bottom>{detailData.download_count}</Bottom>
            </Texts>
            <LinkImage>
              <Image
                src={detailData.thumbnailUrl}
                onError={(e) => handleImageError(e)}
              />
            </LinkImage>
          </Descrition>
          <FileListSummary detailData={detailData} />
          {expDate !== "expired" && <DetailFileList detailData={detailData} />}
        </Article>
      </>
    )
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
  overflow: hidden;
  border-radius: 4px;
  background-color: ${colors.grey50};

  @media (max-width: 768px) {
    margin-bottom: 32px;
    max-width: 100%;
  }
`;

const Image = styled.img`
  width: 120px;
  height: 100%;
  padding: 50% 0;
`;
