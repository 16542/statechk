import React, { Component } from 'react'

export default class Porfile1 extends Component {
    state={counter:0}
    componentDidMount(){
    setInterval(() => {this.setState({counter:this.state.counter+1})}, 1000);
    }
    componentWillUnmount(){ }
    render() {
        return (
            < div style={{display:'flex'}}>
            <div style={{padding:'20px 30px'}}>
              <h1>{this.props.fullName}</h1>
              <h5>{this.props.profession}</h5>
              <p>{this.props.bio}</p>
              <h1><Badge bg="secondry">{this.state.counter}</Badge></h1>
            
            </div>
            
            </div>
        )
    }
}
 export default Porfile1