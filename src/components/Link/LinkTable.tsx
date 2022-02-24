import Avatar from "components/commons/Avatar";
import React from "react";
import styled from "styled-components";
import colors from "styles/colors";
import { FileType } from "types";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";

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
