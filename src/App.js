import React from "react";
import Profile from "./components/Profile/Profile";
import "./App.css";
import PropTypes from "prop-types";

function App() {
  const handleName = (fullName) => {
    alert(fullName);
  };
  return (
    <div className="App">
      <Profile
        fullName="Ibrahim"
        bio="lorem"
        profession="xxx"
        handleName={handleName}
      >
        https://via.placeholder.com/150C/O https://placeholder.com/
      </Profile>
    </div>
  );
}
Profile.PropTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.string,
  handleName: PropTypes.func,
};
export default App;
