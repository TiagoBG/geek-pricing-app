import React, { Component } from "react";

class PricingDescription extends Component {
constructor(props){
  super(props);
  this.state={}
}

  render(){
    const{title,p1} =this.props
    return (
      <div className="p-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{p1}</p>
      </div>
    );
  }
}

export default PricingDescription;
