import React from "react";
import "@shopify/polaris/build/esm/styles.css";
import TopBar from "./components/Topbar";
import NavigationExample from "components/Navigation";
import GridExample from "components/GridExample";

function App() {
  return (
    <>
      <TopBar />
      <NavigationExample/>
      <GridExample />
    </>
  );
}

export default App;
