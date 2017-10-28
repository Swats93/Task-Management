import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {css} from 'glamor';
import {
  createTask
} from '../../modules/tasks';

class Create extends React.Component {
  state = {
    titleErr: false,
    descriptionErr: false,
    assigneeErr: false,
    finishByErr: false,
    priorityErr: false
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log("task_details", nextProps.task_details);
  //     if(this.props.task_details.length != nextProps.task_details.length) {
  //       this.props.history.push('/tasklist');
  //     }
  // }


  onTaskSave(ev) {
    ev.preventDefault();
    const err = { titleErr: false, descriptionErr: false, assigneeErr: false, finishByErr: false, priorityErr: false };
    this.setState(err, () => {
      const title = this.refs.title.value;
      const description = this.refs.description.value;
      const assignee = this.refs.assignee.value;
      const finishBy = this.refs.finishBy.value;
      const priority = this.refs.priority.value;
      if (title.length === 0) {
        err.titleErr = true;
      }

      if (description.length <= 3) {
        err.descriptionErr = true;
      }

      if (assignee.length <= 3) {
        err.assigneeErr = true;
      }

      if (finishBy.length <= 3) {
        err.finishByErr = true;
      }

      if (priority.length <= 3) {
        err.priorityErr = true;
      }
      if (err.titleErr || err.descriptionErr || err.assigneeErr || err.finishByErr || err.priorityErr) {
        this.setState(err)
      } else {
        //this.props.history.push('/tasklist');
        this.props.dispatch(createTask({title, description, assignee, finishBy, priority}));
        this.props.history.push('/tasklist');
      }
    });
  }

  render() {
    return (
      <div className="w-100 h-100 fl-ns cf bg-light-gray">
        <div className="mw6 mb5 br3 center bg-white" style={{marginTop: '3.5%', paddingBottom: '40%', boxShadow: 'rgba(0,0,0,0.5) 0px 0px 8px 0px', height: '29px'}}>
          <div className="f3 pt3 tc">
            Create New Task
          </div>
          <div className="w-90 pt2 fl-ns pl4 pb6">
            <div className="w-100 fl-ns f6">Title</div>
            <div className="w-100">
              <input className="w-100 f6 pa1" placeholder="" type="text" style={{borderColor: 'transparent', boxShadow: 'rgba(0,0,0,0.5) 0px 0px 8px 0px', height: '29px'}} ref={'title'}/>
              {this.state.titleErr ? (
                  <div className="f6 red">Title is not valid</div>
                ) : null}
            </div>
            <div className="w-100 fl-ns mt2 f6">Description</div>
            <div className="w-100">
              <textarea className="w-100 f6 pa1" placeholder="" rows="4" style={{borderColor: 'transparent', boxShadow: 'rgba(0,0,0,0.5) 0px 0px 8px 0px'}} ref={'description'}/>
              {this.state.descriptionErr ? (
                  <div className="f6 red">Description is not valid</div>
                ) : null}
            </div>
            <div className="w-100 fl-ns mt2 f6">Assinged to</div>
            <div className="w-100">
              <input className="w-100 f6 pa1" placeholder="" type="text" style={{borderColor: 'transparent', boxShadow: 'rgba(0,0,0,0.5) 0px 0px 8px 0px', height: '29px'}} ref={'assignee'}/>
              {this.state.assigneeErr ? (
                  <div className="f6 red">Assignee is not valid</div>
                ) : null}
            </div>
            <div className="w-100 fl-ns mt2 f6">Ends on</div>
            <div className="w-100">
              <input className="w-100 f6 pa1" placeholder="" type="text" style={{borderColor: 'transparent', boxShadow: 'rgba(0,0,0,0.5) 0px 0px 8px 0px', height: '29px'}} ref={'finishBy'}/>
              {this.state.finishByErr ? (
                  <div className="f6 red">Finish By is not valid</div>
                ) : null}
            </div>
            <div className="w-100 fl-ns mt2 f6">Priority</div>
            <div className="w-100">
              <input className="w-100 f6 pa1" placeholder="" type="text" style={{borderColor: 'transparent', boxShadow: 'rgba(0,0,0,0.5) 0px 0px 8px 0px', height: '29px'}} ref={'priority'}/>
              {this.state.priorityErr ? (
                  <div className="f6 red">Priority is not valid</div>
                ) : null}
            </div>
            <div className="mt3 tc">
              <button className="mt2 w-40 pointer f5 link dim bg-pink tc pv2 b dib white" onClick={(ev) => this.onTaskSave(ev)}>Save</button>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default connect(
)(Create)
