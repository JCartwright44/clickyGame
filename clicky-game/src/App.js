import React, { Component } from "react";
import FriendCard from "./Components/FriendCard";
import Wrapper from "./Components/Wrapper";
import Title from "./Components/Title";
import friends from "./pups.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    clickedImages: [],
    highscore: 0,
    score: 0, 
    TotalClick: 0,
    message: 'Click a pup to begin'
  };



  handleShuffle(id) {
    if (!this.state.clickedImages.includes(id)) {
      this.setState({
        score: this.state.score + 1,
        clickedImages: [...this.state.clickedImages, id],
        totalClick: this.state.totalClick + 1,
        message: 'You guessed correctly'
      });
    }
    if (this.state.clickedImages.includes(id)) {
        if (this.state.score > this.state.highscore) {
          this.setState({
            highscore: this.state.score,
            score: 0,
            clickedImages: [],
            message: 'You already picked that pup! Game over.'
          })
        } else {
          this.setState({
            score: 0,
            clickedImages: [],
            message: 'You already picked that pup! Game over.'
          })
        }
     
    }
    this.setState({
      friends: friends.sort(() => Math.random() - 0.5),
      totalClick: this.state.totalClick + 1
    });
  }



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title 
        score={this.state.score}
        highscore={this.state.highscore}
        message={this.state.message}
        />
        <div class='row'>
        <div class='col-2'></div>
          <div class='col-8'>
          <h3 id='instructions'>Click on an image to earn points, but don't click on any pup more than once!</h3>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            handleShuffle={() => this.handleShuffle(friend.id)}
          />
        ))}
        </div>
        <div class='col-2'></div>
        </div>
      </Wrapper>
    );
  }
}

export default App;


