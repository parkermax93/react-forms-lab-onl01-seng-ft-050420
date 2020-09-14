import React from "react";

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleUsername = (e) => {
    this.setState({username: e.target.value})
  };

  handlePassword = (e) => {
    this.setState({password: e.target.value})
  };

  login = (event) => {
    event.preventDefault();
    if (this.state.username && this.state.password){
      return this.props.handleLogin(this.state);
    }
  }

  render() {
    return (
      <form onSubmit={this.login}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUsername} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;