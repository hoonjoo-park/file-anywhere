import React, { useEffect, useState } from "react";
import Container from "components/commons/Container";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import GlobalStyle from "styles/GlobalStyle";
import axios from "axios";
import { API_ENDPOINT } from "constants/";
import { FileData, FileType } from "types";
import { Route, Routes } from "react-router-dom";

function App() {
  const [fileData, setFileData] = useState<FileType[] | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(API_ENDPOINT);
        console.log(data);
        setFileData(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <>
      <GlobalStyle />
      <Container>
        {fileData && (
          <Routes>
            <Route path={"/"} element={<LinkPage fileData={fileData} />} />
            <Route path={"/:id"} element={<DetailPage fileData={fileData} />} />
          </Routes>
        )}
      </Container>
    </>
  );
}

export default App;
