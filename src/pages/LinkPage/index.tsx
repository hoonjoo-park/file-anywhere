import React from "react";
import type { FC } from "react";
import Avatar from "components/Avatar";
import styled from "styled-components";
import colors from "styles/colors";
import { LinkTable } from "components/Link/LinkTable";

const LinkPage: FC = () => {
  return (
    <>
      <Title>마이 링크</Title>
      <LinkTable />
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
