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
        <div className="mw6 mt5 mb5 br3 center bg-white" style={{paddingBottom: '35%'}}>
          <div className="f3 pt3 tc">
            Create New Task
          </div>
          <div className="w-90 pt3 fl-ns pl4 pb6">
            <div className="w-100 fl-ns">Title</div>
            <div className="w-100 mt2">
              <input className="w-100 f6 pa1" placeholder="" type="text" style={{borderColor: 'transparent', boxShadow: 'rgba(0,0,0,0.5) 0px 0px 8px 0px', height: '35px'}} ref={''}/>
            </div>
            <div className="w-100 fl-ns mt2">Description</div>
            <div className="w-100 mt2">
              <textarea className="w-100 f6 pa1" placeholder="" rows="6" style={{borderColor: 'transparent', boxShadow: 'rgba(0,0,0,0.5) 0px 0px 8px 0px'}} ref={''}/>
            </div>
            <div className="w-100 fl-ns mt2">Assinged to</div>
            <div className="w-100 mt2">
              <input className="w-100 f6 pa1" placeholder="" type="text" style={{borderColor: 'transparent', boxShadow: 'rgba(0,0,0,0.5) 0px 0px 8px 0px', height: '35px'}} ref={''}/>
            </div>
            <div className="w-100 fl-ns mt2">Ends on</div>
            <div className="w-100 mt2">
              <input className="w-100 f6 pa1" placeholder="" type="text" style={{borderColor: 'transparent', boxShadow: 'rgba(0,0,0,0.5) 0px 0px 8px 0px', height: '35px'}} ref={''}/>
            </div>
            <div className="mt3 tc">
              <button className="mt2 w-40 pointer f5 link dim bg-pink tc pv2 b dib white">Save</button>
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
