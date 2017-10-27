import React from 'react';
import {css} from 'glamor';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Goals = props => (
<div className="w-100 fl-ns cf">
  <div className="w-100 fl-ns bg-white cf f3">
    <div className="w-90 fl-ns pl4 pt2 pb2">Final Quadrant Task Management</div>
    <div className="w-10 fr-ns pr4 pt2 pb2">Logout</div>
  </div>
  <div className="w-100 h-100 fl-ns pt3 pb6 cf bg-pink">
    <div className="mw8 mt5 center pb6 bg-white" {...css({boxShadow: 'rgba(0,0,0,0.2) 0px 0px 8px 0px'})}>
      <div className="w-100 pt3 cf tr">
        <button className="pointer f5 link dim bg-pink tc pv2 b dib white">Save</button>
        <button className="pointer ml2 f5 link dim bg-pink tc pv2 b dib white">Cancel</button>
        <button className="pointer ml2 mr2 f5 link dim bg-pink tc pv2 b dib white">Delete</button>
      </div>
      <div className="tc f3 b pt4">Make Authentcation module for task management project</div>
      <div className="mt3 pl4 pr4 f4">Description: <br/>
        This task is to make authentication module i.e login, signup taking into consideration user roles and other user powers.
      </div>
      <div className="w-100 f4 mt4 cf">
      	<div className="w-33 pl4 fl-ns">
          <div className="w-100 fl-ns">
            <div className="w-50 fl-ns">Task Id: </div>
            <div className="w-50 fr-ns">47674</div>
          </div>
          <div className="w-100 fl-ns">
            <div className="w-50 fl-ns">Ends On: </div>
            <div className="w-50 fr-ns">21/10/2017</div>
          </div>
        </div>
        <div className="w-33 fl-ns">
          <div className="w-100 fl-ns">
            <div className="w-50 fl-ns">Status: </div>
            <div className="w-50 fr-ns">Pending</div>
          </div>
          <div className="w-100 fl-ns">
            <div className="w-50 fl-ns">Updated On: </div>
            <div className="w-50 fr-ns">21/10/2017</div>
          </div>
        </div>
        <div className="w-33 fl-ns">
          <div className="w-100 fl-ns">
            <div className="w-50 fl-ns">Assignor: </div>
            <div className="w-50 fr-ns">Swati Garg</div>
          </div>
          <div className="w-100 fl-ns">
            <div className="w-50 fl-ns">Created On: </div>
            <div className="w-50 fr-ns">21/10/2017</div>
          </div>
        </div>
      </div>
      <div className="w-100 fl-ns mt4 f4 cf">
        <div className="w-20 pl4 fl-ns">Assigned To: </div>
        <div className="w-80 fl-ns">Varsha Aggarwal, Lalit Gupta, Nitin Singhal</div>
      </div>
    </div>
  </div>
</div>
)

export default connect(
)(Goals)
