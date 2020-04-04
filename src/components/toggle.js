import React from "react";

class ToggleMe extends React.Component {
  state = {
    isSwitchOn: false,
  };

  render() {
    console.log(this.state.isSwitchOn);
    const isOn = this.state.isSwitchOn;
    return (
      <div>
        <div className="box">
          <h1 className={isOn ? "title day" : "title night"}>
            {isOn ? "Good morning" : "Good night"}
          </h1>
          <div
            className={isOn ? "dayTime" : "nightTime"}
            onClick={() => this.setState({ isSwitchOn: !isOn })}
          ></div>
        </div>
        <div className={isOn ? "bg light" : "bg dark"} />
      </div>
    );
  }
}

export default ToggleMe;
