import Avatar from "components/commons/Avatar";
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import colors from "styles/colors";
import { FileType } from "types";
import { getExpDate } from "utils/getExpDate";
import { getFileSize } from "utils/getFileSize";

interface Props {
  data: FileType;
}

export const TableRow = ({ data }: Props) => {
  const innerFileLength = useMemo(
    () => data.files?.length.toLocaleString(),
    [data]
  );
  const expDate = useMemo(() => getExpDate(data.expires_at), [data]);
  const fileSize = useMemo(() => getFileSize(data.size), [data]);
  const navigate = useNavigate();

  const handleCopy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const text = e.currentTarget.innerHTML;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`${text}주소가 복사 되었습니다.`);
      })
      .catch((err) => {
        console.log(err);
      });
    return;
  };

  const handleNavigate = (e: React.MouseEvent<HTMLTableRowElement>) => {
    const target = e.target as HTMLElement;
    if (target.id === "linkToCopy") return;
    navigate(`/${data.key}`, { state: data });
  };

  return (
    <TRow onClick={(e) => handleNavigate(e)}>
      <TableCell>
        <LinkInfo>
          <LinkImage>
            <img referrerPolicy="no-referrer" src={data.thumbnailUrl} alt="" />
          </LinkImage>
          <LinkTexts>
            <LinkTitle>{data.summary}</LinkTitle>
            {expDate === "expired" ? (
              <span>만료됨</span>
            ) : (
              <LinkUrl
                id="linkToCopy"
                onClick={(e) => handleCopy(e)}
              >{`https://file-anywhere.herokuapp.com/${data.key}`}</LinkUrl>
            )}
          </LinkTexts>
        </LinkInfo>
        <span />
      </TableCell>
      <TableCell>
        <span>파일개수</span>
        <span>{innerFileLength}</span>
      </TableCell>
      <TableCell>
        <span>파일사이즈</span>
        <span>{fileSize}</span>
      </TableCell>
      <TableCell>
        <span>유효기간</span>
        <span>{expDate === "expired" ? "만료됨" : expDate}</span>
      </TableCell>
      <TableCell>
        <span>받은사람</span>
        <LinkReceivers>
          {data.sent
            ? data.sent.emails?.map((email, i) => (
                <Avatar key={`email-${i}`} text={email} />
              ))
            : null}
        </LinkReceivers>
      </TableCell>
    </TRow>
  );
};

const TRow = styled.tr`
  color: inherit;
  display: table-row;
  vertical-align: middle;
  outline: 0px;
  font-weight: inherit;
  font-size: inherit;
`;

const TableCell = styled.th`
  font-weight: inherit;
  font-size: inherit;
  font-size: 12px;
  line-height: 24px;
  display: table-cell;
  vertical-align: inherit;
  border-bottom: 1px solid ${colors.grey300};
  text-align: left;
  padding: 16px;
`;

const LinkInfo = styled.div`
  display: flex;
  align-items: center;
`;

const LinkImage = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 4px;
  }
`;

const LinkTexts = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;

  & > * {
    margin: 0;
  }
`;

const LinkTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.grey700};
`;

const LinkUrl = styled.a`
  text-decoration: underline;

  :hover {
    color: ${colors.teal700};
  }
`;

const LinkReceivers = styled.div`
  display: flex;

  & > * + * {
    margin-left: 8px;
  }
`;
