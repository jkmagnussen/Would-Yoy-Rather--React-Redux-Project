import React from "react";
import { _getUsers } from "../../utils/_DATA";
import axios from "axios";
import "./UncoveredPosts.css"

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

  render() {
    const { users } = this.props;
    
    return (
      <div class="uncoveredPostsWrap">
        <h1>hello</h1>
      </div>
    );
  }
}

export default UncoveredPosts;
