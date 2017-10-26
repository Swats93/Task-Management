import React from 'react';
import {css} from 'glamor';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import tachyons from 'tachyons';

const Home = props => (
<div className="w-100 fl-ns cf">
  <div className="w-100 fl-ns bg-white cf f3">
    <div className="w-90 fl-ns pl4 pt2 pb2">Final Quadrant Task Management</div>
    <div className="w-10 fr-ns pr4 pt2 pb2">Logout</div>
  </div>
  <div className="w-100 h-100 fl-ns cf bg-pink">
    <div className="mw8 mt4 mb4 center pb4 bg-white">
      <div className="w-25 fl-ns pl5 pt2 pb2">All Tasks</div>
      <div className="w-25 fl-ns pt2 pb2">New Tasks</div>
      <div className="w-25 fl-ns pt2 pb2">Pending Tasks</div>
      <div className="w-25 fl-ns pt2 pb2">Closed Tasks</div>
    </div>
    <div className="mw8 mt4 mb5 center pb4 bg-white">
      <div className="tc f3 b pt4">Make Authentcation module for task management project</div>
      <div className="mt3 pl4 pr4 f4">Description: <br/>
        This task is to make authentication module i.e login, signup taking into consideration user roles and other user powers.
      </div>
      <div className="mt4 mw5 pb5 center">
        <div className="f5 b">Email</div>
        <div className="mt2">
          <input className="w-100" placeholder="Enter your email" type="text" {...css({height: '8%'})}/>
        </div>
        <div className="f5 b mt3">Password</div>
        <div className="mt2">
          <input className="w-100" placeholder="Enter your password" type="password" {...css({height: '8%'})} />
        </div>
        <div className="mt3">
          <a className="w-100 pointer f5 link dim bg-pink tc pv2 b dib white">Login</a>
        </div>
      </div>
    </div>
  </div>
</div>  
)

export default connect(
)(Home)