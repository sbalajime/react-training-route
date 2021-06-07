
import React,  {Component} from "react";

class Login extends Component {

    redirectToHome =() => {
        console.log('this.props', this.props)
        this.props.history.push('/');
    }
  render(){
    return<div>
        <h1>Login</h1>
        <button onClick={this.redirectToHome}>Go to home</button>
        </div>
  }
}

export default Login;
