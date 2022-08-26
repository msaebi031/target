import { Fragment, useEffect, useState } from "react";
import { Container } from "@mui/material";
import About from "../components/About";
import Content from "../components/Content";
import Header from "../components/Header";
import Line from "../components/Line";
import Work from "../components/Work";
import Skill from "../components/Skill";
import Member from "../components/Member";
import ProjectOrder from "../components/ProjectOrder";
import Footer from "../components/Footer";

const App = () => {
  const [height, setHeight] = useState(null);

  useEffect(() => {
    setHeight(document.documentElement.scrollHeight + 83);
  }, []);

  return (
    <Fragment>
      <Line zIndex="-1" height={height} />
      <Header />
      <Container maxWidth="lg" className="container-1300">
        <Content />
        <About />
        <Work />
        <Skill />
        <Member />
        <ProjectOrder />
        <Footer />
      </Container>
    </Fragment>
  );
};
export default App;
