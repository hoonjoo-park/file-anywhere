import React from "react";
import styled from "styled-components";
import colors from "styles/colors";

export const TableHead = () => {
  return (
    <THead>
      <TableRow>
        <TableCell>제목</TableCell>
        <TableCell>파일개수</TableCell>
        <TableCell>크기</TableCell>
        <TableCell>유효기간</TableCell>
        <TableCell>받은사람</TableCell>
      </TableRow>
    </THead>
  );
};

const THead = styled.thead`
  font-weight: 600;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TableRow = styled.tr`
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
