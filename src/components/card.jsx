import React from "react";

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div style={{ margin: "1rem" }}>
        <img
          style={{ height: 75, width: 75 }}
          src={profile.avatar_url}
          alt="github user profile"
        />
        <div style={{ display: "inline-block", marginLeft: 10 }}>
          <div style={{ fontSize: "125%" }}>{profile.name}</div>
          <div>{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
