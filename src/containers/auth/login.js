import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import {css} from 'glamor';

import {
  loginUser
} from '../../modules/auth';

class Login extends React.Component {
  state = {
    usernameErr: false,
    passwordErr: false,
    serverErr: null
  }

  componentWillMount() {
    if(this.props.isLoggedIn) {
      this.props.history.push('/tasklist');
    }
  }

  componentWillReceiveProps(nextProps) {
      if(nextProps.isLoggedIn) {
        this.props.history.push('/tasklist');
      } else {
        this.setState({serverErr: nextProps.err});
      }
  }


  attemptLogin(ev) {
    ev.preventDefault();
    const err = {usernameErr: false, passwordErr: false};
    this.setState(err, () => {
      const username = this.refs.username.value;
      const password = this.refs.password.value;
      if (username.length === 0) {
        err.usernameErr = true;
      }
      if (password.length <= 3) {
        err.passwordErr = true;
      }
      if (err.usernameErr || err.passwordErr) {
        this.setState(err)
      } else {
        this.props.dispatch(loginUser({username, password}));
      }
    });
  }


  render() {
    return (
      <div className="w-100 h-100 fl-ns cf bg-light-gray">
        <div className="mw8 mt5 mb5 center pb4 bg-white" 
        style={{boxShadow: 'rgba(0,0,0,0.5) 0px 0px 8px 0px'}}>
          <div className="tc f3 pt4 b">Final Quadrant Task Management</div>
          <div className="mt4 mw5 pb5 center">
            <div className="tc mt5 f4 b">Welcome Back !</div>
            <div className="f5 mt3 b">Email</div>
            <div className="mt2">
              <input className="w-100 f6" placeholder="Enter your username" type="text" 
              style={{borderColor: 'transparent', boxShadow: 'rgba(0,0,0,0.5) 0px 0px 8px 0px', 
              height: '35px'}} ref={'username'}/>
                {this.state.usernameErr ? (
                  <div>Username is not valid</div>
                ) : null}
            </div>
            <div className="f5 b mt3">Password</div>
            <div className="mt2">
              <input className="w-100 f6" placeholder="Enter your password" type="password" 
              ref={'password'} style={{borderColor: 'transparent', 
              boxShadow: 'rgba(0,0,0,0.5) 0px 0px 8px 0px', height: '35px'}} />
                {this.state.passwordErr ? (
                  <div>Password is not valid</div>
                ) : null}
            </div>
            <div className="mt3 pb5">
              <button className="w-100 pointer f5 link dim bg-pink tc pv2 b dib white" onClick={(ev) => this.attemptLogin(ev)} style={{borderColor: 'transparent'}}>Login</button>
            </div>
          </div>
        </div>
        {this.state.serverErr ? (
          <div>{this.state.serverErr}</div>
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    err: state.auth.err,
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(
  mapStateToProps
)(Login)