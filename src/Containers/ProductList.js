import React,  {Component} from "react";
import {Link} from "react-router-dom";

class ProductList extends Component {
  render(){
    return<div>
      <Link to={{
        pathname:"/product/1",
        search: "?date=07=07-2021", state:{from: 'productList'}}}>Product 1</Link>
      <Link to="/product/2">Product 2</Link>
    </div>
  }
}

export default ProductList;