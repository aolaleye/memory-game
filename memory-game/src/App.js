import React, { Component } from "react";
import Score from "./components/Score";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    friends,
    clickedFriends: [],
    score: 0,
    victory: 15,
    message: ""
  };

  shuffle = id => {
    let clickedFriends = this.state.clickedFriends;

    if (clickedFriends.includes(id)) {
      this.setState({
        clickedFriends: [],
        score: 0,
        message: "Sorry, You Lost! Click an Friend to Start Again."
      });
      return;
    } else {
      clickedFriends.push(id);

      if (clickedFriends.length === 15) {
        this.setState({
          clickedFriends: [],
          score: 15,
          message: "You Won!"
        });
        return;
      }
      this.setState({
        friends,
        clickedFriends,
        score: clickedFriends.length,
        message: "Correct!"
      });

      friends.sort(function() {
        return 0.5 - Math.random();
      });
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>MEMORY GAME</Title>
        <Score className="text-right" score={this.state.score}/>
        <div className="row justify-content-center">
          {this.state.friends.map(friend => (
            <FriendCard
              shuffle={this.shuffle}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
