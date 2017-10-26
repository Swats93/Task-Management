import React from 'react';
import {css} from 'glamor';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import tachyons from 'tachyons';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

const Home = props => (
  <div className="w-100 h-100 fl-ns cf bg-pink">
    <div className="mw8 mt5 mb5 center pb4 bg-white">
      <div className="tc f3 pt4">Final Quadrant Task Management</div>
      <div className="tc mt5 f4 b">Welcome Back !</div>
      <div className="mt4 mw5 pb5 center">
        <div className="f5 b">Email</div>
        <div className="mt2">
          <input className="w-100" placeholder="Enter your email" type="text" {...css({height: '8%'})}/>
        </div>
        <div className="f5 b mt3">Password</div>
        <div className="mt2">
          <input className="w-100" placeholder="Enter your password" type="password" {...css({height: '8%'})} />
        </div>
        <div className="mt3 pb5">
          <a className="w-100 pointer f5 link dim bg-pink tc pv2 b dib white">Login</a>
        </div>
      </div>

    </div>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
