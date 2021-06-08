import React,  {Component} from "react";
import qs from "qs";

class Product extends Component {
  render(){
      console.log('this.props', this.props);
      const {id, name} = this.props.match.params;
      const {search, state} = this.props.location;
      const parsedData = qs.parse(search.replace('?', ''));
      console.log('parsedData', parsedData)
    return<div>
        <h1>selected product - id: {id} name: {name}</h1>
        <div>Data from query {parsedData.date}</div>
        <div>Location state data - {state ? state.from : null}</div>
      </div>
  }
}

export default Product;