import React from "react";
import { _getUsers } from "../../utils/_DATA";
import axios from "axios";
import "./UncoveredPosts.css"
import user from "./Assets/user.jpg";
import postPhoto from "./Assets/postPhoto.jpg";
import InteractiveButtons from "../InteractiveButtons/InteractiveButtons";
import TimerTwo from "../Timer/TimerTwo";
import { withRouter } from 'react-router-dom';

class UncoveredPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    
  }

  // php -S localhost:8080 -t public public/index.php

  // php server terminal command

  componentDidMount() {
    const self = this;
    
  }

    redirectToProfile = () => {
   const { history } = this.props;
   if(history) history.push('/profile');
  }

  render() {
    const { users } = this.props;
    
    return (
      <div class="uncoveredPostsWrap">
        <div className="revealedPostUserTop">
          <img className="profileThumbnail" src={user} onClick={this.redirectToProfile}/>
          <h3 className="userNameDisplay" onClick={this.redirectToProfile}>User3482</h3>
          <p className="revealedPostText">This is an example of text that would fill this status/ caption section. This should be relevant to the blurred images displayed beneath to somehow incentivise a particular choice.</p>
        </div>
          <div>
            <img className="revealedPostPic"src={postPhoto}/>
        </div>
        < TimerTwo />

        <InteractiveButtons />
      </div>
    );
  }
}

export default withRouter(UncoveredPosts);
