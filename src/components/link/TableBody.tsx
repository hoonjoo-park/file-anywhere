import { NothingFound } from "components/commons/NothingFound";
import React from "react";
import styled from "styled-components";
import colors from "styles/colors";
import { FileType } from "types";
import { TableRow } from "components/link/TableRow";

interface Props {
  fileData: FileType[] | null;
}

export const TableBody = ({ fileData }: Props) => {
  return (
    <TBody>
      {fileData ? (
        fileData.map((data) => <TableRow key={data.key} data={data} />)
      ) : (
        <NothingFound />
      )}
    </TBody>
  );
};

const TBody = styled.tbody`
  font-weight: 400;
  cursor: pointer;

  tr {
    @media (max-width: 768px) {
      float: left;
      width: calc(100% - 40px);
      position: relative;
      box-shadow: 0 2px 17px 0 rgba(0, 0, 0, 0.07);
      margin-bottom: 30px;
      background-color: ${colors.white};
      border-radius: 4px;
      padding: 0px 20px 20px 20px;
    }
  }

  th {
    font-size: 14px;

    & > span:first-child {
      display: none;
    }

    @media (max-width: 768px) {
      width: 100%;
      border-bottom: none;
      padding: 20px 0;
      border-top: 1px solid;
      border-color: ${colors.grey200};
      display: flex;
      justify-content: space-between;

      & > span:first-child {
        display: inline-block;
      }
      & > *:last-child {
        display: inline-block;
      }
      &:first-child {
        border-top: none;
      }
    }
  }
`;
