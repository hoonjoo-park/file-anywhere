import React from "react";
import type { FC } from "react";
import { FileDetail } from "components/Detail/FileDetail";
import { FileType } from "types";

interface Props {
  fileData: FileType[] | null;
}

const DetailPage: FC<Props> = ({ fileData }) => {
  return <FileDetail fileData={fileData} />;
};

export default DetailPage;
