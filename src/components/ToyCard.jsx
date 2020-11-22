import React, { Component } from 'react';

class ToyCard extends Component {
  likeBtnHandler = () => {
    this.props.likeToy(this.props.id)
  }
  render() {
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img src={this.props.image} alt={this.props.name} className="toy-avatar" />
        <p>{this.props.likes} Likes </p>
        <button onClick={this.likeBtnHandler} className="like-btn">Like {'<3'}</button>
        <button  className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
