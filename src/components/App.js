import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../index.css";
import Routes from "./Routes";
import Footer from "./Footer/ExternalFooter/Footer";
import Login from "./Login";
import Register from "./Register";
import { _getUsers } from "../utils/_DATA";
import axios from "axios";
import video from "../media/advert.mp4";

// Main App

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
       user: {},
      login: false,
      signUp: false,
    };
    this.toggleRegister = this.toggleRegister.bind(this)
    this.toggleLogin = this.toggleLogin.bind(this)
    this.setUser = this.setUser.bind(this)
    axios.defaults.baseURL = `http://localhost/api/`;
  }

  toggleLogin = () => {
    this.setState({
      login: true, 
      signUp: false,
    })
  }

    toggleRegister = () => {
    this.setState({
      login: false, 
      signUp: true,
    })
  }
  
   componentDidMount() {
     const self = this;
   }
  
  setUser = (user) => {
    console.log(user);
    this.setState({
      user: user
    })
  }

  conditionalRender = () =>{
    if (this.state.login === true & Object.keys(this.state.user).length == 0){
      return (
        <div>
          <Login setUser={this.setUser} />
          <video
            className="pitch"
            style={{ marginTop: 25 }}
            controls
            autostart
            autoPlay
            muted
            src={video} type="video/mp4" />
        </div>
      )
    }
    else if (this.state.signUp === true){ 
      return (
        <div>
        <Register />
          <video
            className="pitch"
            style={{ marginTop: 25 }}
            controls
            autostart
            autoPlay
            muted
            src={video}
            type="video/mp4" />
      </div>)
    }else{
      return <video
        className="pitch"
        controls
        autostart
        autoPlay
        muted
        src={video}
        type="video/mp4" />
    }
  }
  
  render(){
    const content = <Routes />;

    return (
      <div className="container">
        <Router>
          <Fragment>
            <div className="headerWrap">
             <h1 className="title">quandary
              <button className="loginBtn1" type="submit" onClick={() => this.toggleLogin()}>
            Log in
              </button>
              <button className="loginBtn2" type="submit" onClick={() => this.toggleRegister()}>
            Sign Up!
              </button>
             </h1>
            </div>
            {this.conditionalRender()}
            
            {content}
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
