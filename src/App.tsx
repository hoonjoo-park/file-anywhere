import React, { useEffect, useState } from "react";
import Container from "components/commons/Container";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import GlobalStyle from "styles/GlobalStyle";
import axios from "axios";
import { API_ENDPOINT } from "constants/";
import { FileData, FileType } from "types";

function App() {
  const [fileData, setFileData] = useState<FileType[] | null>(null);
  const [selectedData, setSelectedData] = useState<FileData | null>(null);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(API_ENDPOINT);
      setFileData(data);
    })();
  }, []);
  return (
    <>
      <GlobalStyle />
      <Container>
        <LinkPage fileData={fileData} />
        {selectedData && <DetailPage fileData={fileData} />}
      </Container>
    </>
  );
}

export default App;
