import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import {css} from 'glamor';

import {all, bell, calender, planner, view, edit} from '../assets/images';

class TaskList extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="w-100 fl-ns cf">
        <div className="w-100 fl-ns bg-white cf f3">
          <div className="w-90 fl-ns pl4 pt2 pb2">Final Quadrant Task Management</div>
          <div className="w-10 fr-ns pr4 pt2 pb2">Logout</div>
        </div>
        <div className="w-100 h-100 fl-ns pb4 cf bg-pink">
          <div className="mw8 mt4 mb4 pt3 center pb5 bg-white" style={{boxShadow: 'rgba(0,0,0,0.5) 0px 0px 8px 0px'}}>
            <div className="w-25 fl-ns pl3">
              <div className="w-20 fl-ns ml2">
                <img
                  src={calender}
                  {...css({})}
                  className="pa1 br4 pointer"
                />
              </div>
              <div className="w-60 ml2 fr-ns">
                <div className="w-100 fl-ns">All Tasks</div>
                <div className="w-100 fl-ns">46 This month</div>
              </div>
            </div>
            <div className="w-25 fl-ns">
              <div className="w-20 fl-ns">
                <img
                  src={all}
                  {...css({})}
                  className="br4 pointer"
                />
              </div>
              <div className="w-60 fr-ns">
                <div className="w-100 fl-ns">New Tasks</div>
                <div className="w-100 fl-ns">46 This month</div>
              </div>
            </div>
            <div className="w-25 fl-ns">
              <div className="w-20 fl-ns">
                <img
                  src={bell}
                  {...css({})}
                  className="pa0 br4 bg-black-10 pointer"
                />
              </div>
              <div className="w-60 fr-ns">
                <div className="w-100 fl-ns">Pending Tasks</div>
                <div className="w-100 fl-ns">46 This month</div>
              </div>
            </div>
            <div className="w-25 fl-ns">
              <div className="w-20 fl-ns">
                <img
                  src={planner}
                  {...css({})}
                  className="pa0 br4 bg-black-10 pointer"
                />
              </div>
              <div className="w-60 fr-ns">
                <div className="w-100 fl-ns">Closed Tasks</div>
                <div className="w-100 fl-ns">46 This month</div>
              </div>
            </div>
          </div>
          <div className="mw8 mt4 center pb2 bg-white" style={{boxShadow: 'rgba(0,0,0,0.5) 0px 0px 8px 0px'}}>
            <div className="w-100 pt3 cf tr">
              <button className="pointer f6 link dim bg-pink pl3 pr3 tc pv2 b dib white" onClick={() => this.props.history.push('/create')} style={{borderColor: 'transparent'}}>Create</button>
              <button className="pointer ml2 mr2 f6 link dim bg-pink tc pv2 pl4 pr4 b dib white" style={{borderColor: 'transparent'}}>All</button>
            </div>
            <div className="pa4">
              <div className="overflow-auto">
                <table className="f6 w-100 mw8 center" cellspacing="0">
                  <thead>
                    <tr>
                      <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Title</th>
                      <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Status</th>
                      <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Updated On</th>
                      <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Created On</th>
                      <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">View</th>
                      <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Edit</th>
                    </tr>
                  </thead>
                  <tbody className="lh-copy">
                    <tr>
                      <td className="pv3 pr3 bb b--black-20">Hassan Johnson</td>
                      <td className="pv3 pr3 bb b--black-20">@hassan</td>
                      <td className="pv3 pr3 bb b--black-20">hassan@companywithalongdomain.co</td>
                      <td className="pv3 pr3 bb b--black-20">14419232532474</td>
                      <td className="bb b--black-20">
                        <img
                          src={view}
                          style={{maxWidth: '30px', maxHeight: '30px'}}
                          className="pa1 br4 pointer"
                          onClick={() => this.props.history.push('/list')}
                        />
                      </td>
                      <td className="bb b--black-20">
                        <img
                          src={edit}
                          style={{maxWidth: '30px', maxHeight: '30px'}}
                          className="pa1 br4 pointer"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="pv3 pr3 bb b--black-20">Taral Hicks</td>
                      <td className="pv3 pr3 bb b--black-20">@hicks</td>
                      <td className="pv3 pr3 bb b--black-20">taral@companywithalongdomain.co</td>
                      <td className="pv3 pr3 bb b--black-20">72326219423551</td>
                      <td className="bb b--black-20">
                        <img
                          src={view}
                          style={{maxWidth: '30px', maxHeight: '30px'}}
                          className="pa1 br4 pointer"
                          onClick={() => this.props.history.push('/list')}
                        />
                      </td>
                      <td className="bb b--black-20">
                        <img
                          src={edit}
                          style={{maxWidth: '30px', maxHeight: '30px'}}
                          className="pa1 br4 pointer"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="pv3 pr3 bb b--black-20">Tyrin Turner</td>
                      <td className="pv3 pr3 bb b--black-20">@tt</td>
                      <td className="pv3 pr3 bb b--black-20">ty@companywithalongdomain.co</td>
                      <td className="pv3 pr3 bb b--black-20">92325170324444</td>
                      <td className="bb b--black-20">
                        <img
                          src={view}
                          style={{maxWidth: '30px', maxHeight: '30px'}}
                          className="pa1 br4 pointer"
                          onClick={() => this.props.history.push('/list')}
                        />
                      </td>
                      <td className="bb b--black-20">
                        <img
                          src={edit}
                          style={{maxWidth: '30px', maxHeight: '30px'}}
                          className="pa1 br4 pointer"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="pv3 pr3 bb b--black-20">Oliver Grant</td>
                      <td className="pv3 pr3 bb b--black-20">@oli</td>
                      <td className="pv3 pr3 bb b--black-20">oliverg@companywithalongdomain.co</td>
                      <td className="pv3 pr3 bb b--black-20">71165170352909</td>
                      <td className="bb b--black-20">
                        <img
                          src={view}
                          style={{maxWidth: '30px', maxHeight: '30px'}}
                          className="pa1 br4 pointer"
                          onClick={() => this.props.history.push('/list')}
                        />
                      </td>
                      <td className="bb b--black-20">
                        <img
                          src={edit}
                          style={{maxWidth: '30px', maxHeight: '30px'}}
                          className="pa1 br4 pointer"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="pv3 pr3 bb b--black-20">Dean Blanc</td>
                      <td className="pv3 pr3 bb b--black-20">@deanblanc</td>
                      <td className="pv3 pr3 bb b--black-20">dean@companywithalongdomain.co</td>
                      <td className="pv3 pr3 bb b--black-20">71865178111909</td>
                      <td className="bb b--black-20">
                        <img
                          src={view}
                          style={{maxWidth: '30px', maxHeight: '30px'}}
                          className="pa1 br4 pointer"
                          onClick={() => this.props.history.push('/list')}
                        />
                      </td>
                      <td className="bb b--black-20">
                        <img
                          src={edit}
                          style={{maxWidth: '30px', maxHeight: '30px'}}
                          className="pa1 br4 pointer"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
)(TaskList)