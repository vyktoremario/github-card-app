import React from "react";
import axios from "axios";

class Form extends React.Component {
  state = { userName: "" };
  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(response.data);
    this.setState({ userName: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.userName}
            onChange={(e) => this.setState({ userName: e.target.value })}
            placeholder="github username..."
          />{" "}
          <button>Add Card</button>
        </form>
      </div>
    );
  }
}

export default Form;
