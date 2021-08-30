import React, { Component } from 'react'

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = { 

        min :0,
        sec :0,
    counter:()=>setInterval(() => {
        this.setState({

           sec: this.state.sec ===59 ?0:this.state.sec+1,
           min: this.state.sec===59 ? this.state.min+1:this.state.min

       });
     },1000 )
    }
    this.timing=0
      };


      componentDidMount() {
       this.timing = this.state.counter()
      }
      componentWillUnmount(){
          clearInterval(this.timing)
      }

    render() {
        return (
            < div style={{display:'flex'}}>

            <div>
                {this.state.min}  :  {this.state.sec}
                <h1 style={{color:"red",fontFamily:'monospace',fontWeight:'20px'}}> {this.props.name}</h1>
                <h5 style={{fontFamily:'fantasy',fontWeight:"50"}}>{this.props.profession}</h5>
                <p>{this.props.bio}</p>
                <img style={{padding:"15px  15px", height:"350px"}}  src={this.props.src}  alt=""/>

            </div>
            </div>
        )
    }
}
