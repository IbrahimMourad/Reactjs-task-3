import React from "react";
import Profile from "./components/Profile/Profile";
import "./App.css";

class App extends React.Component {
  state = {
    show: false,
  };
  content() {
    if (this.state.show === true) {
      return (
        <Profile
          fullName="Ibrahim"
          bio="lorem"
          profession="xxx"
          handleName={this.handleName}
        >
          https://via.placeholder.com/150C/O https://placeholder.com/
        </Profile>
      );
    } else return null;
  }

  handleName(fullName) {
    alert(fullName);
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle Profile
        </button>
        <br />
        <br />
        {this.content()}
      </div>
    );
  }
}

export default App;
