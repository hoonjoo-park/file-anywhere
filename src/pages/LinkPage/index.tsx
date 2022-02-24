import React from "react";
import type { FC } from "react";
import styled from "styled-components";
import colors from "styles/colors";
import { LinkTable } from "components/Link/LinkTable";
import { FileType } from "types";

interface Props {
  fileData: FileType[] | null;
}

const LinkPage: FC<Props> = ({ fileData }) => {
  return (
    <>
      <Title>마이 링크</Title>
      <LinkTable fileData={fileData} />
    </>
  );
};

export default LinkPage;

const Title = styled.h2`
  color: ${colors.grey700};
  letter-spacing: -0.62px;
  word-break: keep-all;
  margin: 0;
`;
