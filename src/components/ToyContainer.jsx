import React from 'react';
import ToyCard from './ToyCard'



class ToyContainer extends React.Component {
  state ={
    toys: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/toys')
    .then(r =>r.json())
    .then(toys => {
      this.setState({toys: toys})
    })
  }

  likeToy = (id) => {
    const toy = this.state.toys.filter(toy => toy.id == id)
    const data = {
      likes: parseInt(toy[0].likes + 1)
    }
    fetch(`http://localhost:3000/toys/${id}`, {
      method:"PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  }

  deleteToy = () => {

  }

  renderToys = () => {
    console.log(this.state)

    return this.state.toys.map(toy => 
      <ToyCard {...toy} likeToy = {this.likeToy} key = {toy.id}/>
    )
  }
  render(){
    return(
      <div id="toy-collection">
        {this.renderToys()}
      </div>
    );
  }
}

export default ToyContainer;
