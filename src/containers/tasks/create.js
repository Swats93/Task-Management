import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {css} from 'glamor';
import {
  loginUser
} from '../../modules/auth';

class Login extends React.Component {
  state = {
    usernameErr: false,
    passwordErr: false
  }

  componentWillMount() {
    if(this.props.isLoggedIn) {
      this.props.history.push('/goals');
    }
  }

  componentWillReceiveProps(props, nextProps) {
    console.log({props, nextProps});
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
        this.props.attemptLogin({username, password});
      }
    });
  }

  render() {
    return (
      <div className="w-100 h-100 fl-ns cf bg-pink">
        <div className="mw8 mt5 mb5 center pb4 bg-white">
          <div className="tc f3 pt4">Final Quadrant Task Management</div>
          <div className="tc mt5 f4 b">Welcome Back !</div>
          <div className="mt4 mw5 pb5 center">
            <div className="f5 b">Email</div>
            <div className="mt2 f5">
              <input className="w-100 f5" placeholder="Enter your username" type="text" {...css({height: '8%'})} ref={'username'}/>
                {this.state.usernameErr ? (
                  <div>Username is not valid</div>
                ) : null}
            </div>
            <div className="f5 b mt3">Password</div>
            <div className="mt2 f5">
              <input className="w-100 f5" placeholder="Enter your password" type="password" ref={'password'} {...css({height: '8%'})} />
                {this.state.passwordErr ? (
                  <div>Password is not valid</div>
                ) : null}
            </div>
            <div className="mt3 pb5">
              <a className="w-100 pointer f5 link dim bg-pink tc pv2 b dib white" onClick={(ev) => this.attemptLogin(ev)}>Login</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state', {state});
  return {
    err: state.auth.err,
    isLoggedIn: state.auth.isLoggedIn
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  attemptLogin: (data) => {
    return dispatch(loginUser(data));
  }
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
