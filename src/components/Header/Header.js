import React, { Component } from "react";
import axios from "axios";
import Search from "./Assets/search.png"
import Notification from "./Assets/bell.png";

import eye from "./Assets/eye.png";
import eye1 from "./Assets/eye1.png";

import friends from "./Assets/friends.png"
import { withRouter } from 'react-router-dom';
import Settings from "./Settings/Settings";
import Notifications from "./Notifications/Notifications";
import Connections from "./Connections/Connections";
import SearchBar from "./SearchBar/SearchBar";


import "./Header.css";


class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
       user: {},
      login: false,
      signUp: false,
      toggleSettings: false,
      toggleNotifications: false, 
      toggleConnections: false,
      toggleSearchBar: false,

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
  
    redirectToDashboard = () => {
   const { history } = this.props;
   if(history) history.push('/dashboard');
    }
  
      toggleSettings = () => {
        this.setState({
          toggleSettings: !this.state.toggleSettings,
          toggleNotifications: false,
          toggleConnections: false,
          toggleSearchBar: false,
    })
      }
  
      toggleNotifications = () => {
        this.setState({
          toggleNotifications: !this.state.toggleNotifications,
          toggleSettings: false,
          toggleConnections: false,
          toggleSearchBar: false,
       
    })
    }

      toggleConnections = () => {
        this.setState({
          toggleConnections: !this.state.toggleConnections,
          toggleNotifications: false,
          toggleSettings: false,
          toggleSearchBar: false,
    })
      }
  
        toggleSearchBar = () => {
          this.setState({
          toggleSearchBar: !this.state.toggleSearchBar,
          toggleConnections: false,
          toggleNotifications: false,
          toggleSettings: false,
    })
    }

  
  RenderAppropriateInfo = () =>
  {
    if (Object.keys(this.props.userProfile).length > 0){
      return (
        <div >
          <img className="eyeLogo" src={eye1} onClick={this.redirectToDashboard}/>

          <img className="userImg" src={this.props.userProfile.avatarUrl} onClick={this.toggleSettings}/>
          
          <img className="HeaderBtn" src={Notification} onClick={this.toggleNotifications}/>
          <img className="HeaderBtn" src={friends} onClick={this.toggleConnections}/>
          <img className="HeaderBtn" src={Search} onClick={this.toggleSearchBar} />
 
        </div>

      )
    } else {
      return (
        <div >
          <h2 className="title">disclose</h2>
          <img className="eyeLogo1"src={eye}></img>
            <button className="headerButtons" type="submit" onClick={() => this.props.login()}>
            Log in
              </button>
              <button className="headerButtons" type="submit" onClick={() => this.props.signUp()}>
            Sign Up
              </button>
        </div>
      )
    }
  }

  
  setUser = (user) => {
    console.log(user);
    this.setState({
      user: user
    })
  }
  
  render(){
    return (
      <div>
      <div className="headerWrap">
        {this.RenderAppropriateInfo()}
        </div>
        {this.state.toggleSettings == true ? <Settings logout={this.props.logout} toggleSettings={this.toggleSettings} /> : null}
        {this.state.toggleNotifications == true ? <Notifications toggleNotifications={this.toggleNotifications} /> : null}
        {this.state.toggleConnections == true ? <Connections toggleConnections={this.toggleConnections} /> : null}
        {this.state.toggleSearchBar == true ? <SearchBar toggleSearchBar={this.toggleSearchBar} /> : null}
        
        </div>
    );
  }
}

export default withRouter(Header);

