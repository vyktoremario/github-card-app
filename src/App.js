import React from "react";
import "./App.css";
import CardList from "./components/cardList";
import Form from "./components/forms";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: [],
    };

    this.addNewProfile = (profileData) => {
      this.setState((prevState) => ({
        profiles: [...prevState.profiles, profileData],
      }));
    };
  }

  // // state = {
  //   profiles: testData
  // }
  render() {
    return (
      <div className="container">
        {this.props.title},
        <Form onSubmit={this.addNewProfile} />,
        <CardList profile={this.state.profiles} />
      </div>
    );
  }
}

export default App;
