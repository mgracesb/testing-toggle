import React from "react";
import "./App.css";
import ToggleMe from "./components/toggle";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <ToggleMe />
      </div>
    );
  }
}

export default App;
