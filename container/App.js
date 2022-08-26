import { Fragment, useEffect, useState } from "react";
import { Container } from "@mui/material";
import About from "../components/About";
import Content from "../components/Content";
import Header from "../components/Header";
import Line from "../components/Line";

const App = () => {
  const [height, setHeight] = useState(null);

  useEffect(() => {
    setHeight(document.documentElement.scrollHeight);
  }, []);

  return (
    <Fragment>
      <Line zIndex="-1" height={height} />
      <Header />
      <Container maxWidth="lg">
        <Content />
        <About />
      </Container>
    </Fragment>
  );
};
export default App;
