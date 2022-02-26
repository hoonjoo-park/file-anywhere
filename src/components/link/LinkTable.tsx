import React from "react";
import styled from "styled-components";
import colors from "styles/colors";
import { FileType } from "types";
import { TableBody } from "components/link/TableBody";
import { TableHead } from "components/link/TableHead";

interface Props {
  fileData: FileType[] | null;
}

export const LinkTable = ({ fileData }: Props) => {
  return (
    <Table>
      <TableHead />
      <TableBody fileData={fileData} />
    </Table>
  );
};

const Table = styled.table`
  margin-top: 24px;
  margin-bottom: 102px;
  width: 100%;
  display: table;
  position: relative;
  text-align: left;
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
  border-spacing: 0px;
  color: ${colors.grey600};
`;
