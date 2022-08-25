import { Fragment } from "react";
import Header from "../components/Header";
import Line from "../components/Line";

const App = () => {
  return (
    <Fragment>
      <Line zIndex="-1" />
      <Header />
    </Fragment>
  );
};
export default App;
