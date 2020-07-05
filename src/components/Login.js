import React from "react";

import { connect } from "react-redux";

import { setAuthUser } from "../actions/actionsAuthUser";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
    };
    this.handleSelectUser = this.handleSelectUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { selectedId } = this.state;
    const { login } = this.props;

    if (selectedId) {
      login(selectedId);
    } else {
      alert("Please choose a user first");
    }
  };

  handleSelectUser = (event) => {
    this.setState({
      selectedId: event.target.value,
    });
  };

  render() {
    const { users } = this.props;
    return (
      <form className="loginWrap" onSubmit={this.handleSubmit}>
        <br />
        <select
          className="selectLogin"
          value={this.state.selectedId ? this.state.selectedId : ""}
          onChange={this.handleSelectUser}
        >
          <option>Select a username</option>
          {Object.keys(users).map((user) => (
            <option key={user} value={user}>
              {users[user].name}
            </option>
          ))}
        </select>
        <br />
        <button className="loginBtn" type="submit">
          Log in
        </button>
      </form>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (id) => {
      dispatch(setAuthUser(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
