import React, { Component } from 'react'
import Profile from './Profile'


export default class App extends Component {
  constructor(){
    super()
    this.state={
      fullName:'Ahmed Ben kahla ',
      picture:"./picture.jpg",
      bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      profession:'student',
      show:false
    }
  }


  toggle =()=>{
    this.setState({show:!this.state.show})
  }
  render() {
    return (
      <div>
        {this.state.show===true? <Profile name={this.state.fullName}  profession={this.state.profession} bio={this.state.bio} src={this.state.picture} ></Profile>:null}
        <button onClick={this.toggle}>show</button>
      </div>
    )
  }
}




