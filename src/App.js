import React, { Fragment } from "react";
import Header from "./Header.js";

function App() {
  return (
    <Fragment>
      <Header />
      <button>Add</button>
      <div>
        <span>Name</span>
        <span>Phone</span>
      </div>
    </Fragment>
  );
}

export default App;
