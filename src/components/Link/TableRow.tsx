import Avatar from "components/commons/Avatar";
import React, { useMemo } from "react";
import styled from "styled-components";
import colors from "styles/colors";
import { FileType } from "types";

interface Props {
  data: FileType;
}

export const TableRow = ({ data }: Props) => {
  const innerFileLength = useMemo(() => data.files?.length, [data]);
  return (
    <TRow>
      <TableCell>
        <LinkInfo>
          <LinkImage>
            <img referrerPolicy="no-referrer" src={data.thumbnailUrl} alt="" />
          </LinkImage>
          <LinkTexts>
            <LinkTitle>{data.summary}</LinkTitle>
            <LinkUrl>{`localhost/${data.key}`}</LinkUrl>
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
        <span>{data.size}</span>
      </TableCell>
      <TableCell>
        <span>유효기간</span>
        <span>{data.expires_at}</span>
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
