import React,  {Component} from "react";

class Product extends Component {
  render(){
      console.log('this.props', this.props);
      const {id, name} = this.props.match.params;
    return<h1>selected product - id: {id} name: {name}</h1>
  }
}

export default Product;