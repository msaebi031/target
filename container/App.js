import { Container } from "@mui/material";
import { Fragment } from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import Line from "../components/Line";

const App = () => {
  return (
    <Fragment>
      <Line zIndex="-1" />
      <Header />
      <Container maxWidth="lg">
        <Content />
      </Container>
    </Fragment>
  );
};
export default App;
