
import React from 'react';
import '../App.css';

import { Modal, Button, Input, Divider, Timeline } from 'antd';
import moment from 'moment';

import Owner from './Owner';
import Datepicker from './Datepicker';
import NewComment from './NewComment';
import Followers from './Followers';
import ProjectSelectorTask from './ProjectSelectorTask';

const { TextArea } = Input;

class NewTask extends React.Component {
  state = {
    visible: false,
    name: '',
    description: '',
    project: ''
  };


  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  // bouton Croix
  handleCancel = () => {
    this.setState({ visible: false });
  };

  // fonction qui gere le selector owner comme project Rajouter l'id
  handleOwner= (value) => {
    console.log(" ")
    console.log("nom récupéré --> ", this.state.name)
    console.log("description récupérée --> ", this.state.description)
    console.log(" ")
    console.log("Composant NewTask fonction handleOwner:")
    console.log("Owner recupéré --> ", value)
    this.setState({ owner: value});
  }

   // fonction qui gere le selector project comme project MANQUE l'ID du projet
   handleProject= (value) => {
    console.log(" ")
    console.log("Composant NewTask fonction handleProject:")
    console.log("Projet recupéré --> ", value)
    this.setState({ project: value});
  }
   // fonction qui gere le DatePicker :
   onChange = (date, dateString) => {
    console.log(date, dateString);
    var duedate = new Date(dateString);
    console.log('due date', duedate, date._d);
    this.setState({ duedate });
  };
   //************************************** */

   //fonction qui va gerer le bouton submit
   handleSubmit = () => {
    console.log('Bouton Submit --> execution du fetch');

    if (!this.props.idproject) {
      fetch(`http://localhost:3000/projects/project`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `name=${this.state.name}&description=${this.state.description}&idowner=${this.state.idowner}&duedate=${this.state.duedate}`
      });
    } else {
      fetch(`http://localhost:3000/projects/project/${this.props.idproject}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `name=${this.state.name}&description=${this.state.description}&idowner=${this.state.idowner}&duedate=${this.state.duedate}`
      });
    }
    this.setState({ visible: false });
  };


  render() {

    const { visible } = this.state;

    return (
      <div>
        <Button type="link" onClick={this.showModal}>
          Task
        </Button>
        <Modal
          visible={visible}
          title="Task"
          width="700px"
          onCancel={this.handleCancel}
          footer={[
            <Button key="submit" type="primary"  onClick={this.handleSubmit}>
              Submit
            </Button>,
          ]}
        >         

          <div className="Input">
              <p style={{marginRight: '3.2em'}}>Name</p> 
              <Input style={{marginBottom: '1.25em',width: '80%' }} 
              onChange={(e) => this.setState({name: e.target.value})}/>
            </div>

            <div className="AssignedTo-DueDate">

              <div className="Input">
              <p style={{marginRight: '0.6em'}}>Assigned to</p>
              <Owner handleClickParent={this.handleOwner}/>
              </div>

              <div className="Input" style={{marginBottom: '1.25em',marginRight: '3.5em'  }}>
              <p style={{marginRight: '1em'}}>Due date</p> 
              <Datepicker 
                value={moment(this.state.duedate)}
                onChange={this.onChange}
                style={{marginBottom: '1.25em', width: '30%',}}
              />
              </div>

            </div>

            <div className="Input">
              <p style={{marginRight: '3.6em' }}>Desc</p>
              <TextArea style={{marginBottom: '1.25em',width: '80%'}} rows={4} 
              onChange={(e) => this.setState({description: e.target.value})}
              placeholder="Description" />
            </div>
          {/* Manque la marge gauche pour le composant ProjectSelectorTask ci dessous */}
            <div className="AssignedTo-DueDate">
              <ProjectSelectorTask handleClickParent={this.handleProject}/>
              <Button style={{backgroundColor: '#5b8c00', color: 'white', marginRight: '3.5em' }}>Completed</Button>
            </div>

            <Divider/>

            <Timeline>
              <Timeline.Item color="green">Create a services site 2019-04-01</Timeline.Item>             
           </Timeline> 
          {/* composant NewComment ci dessous à changer par ton composant conversation */}
            <NewComment />

            <Followers/>

        </Modal>
      </div>
    );
  }
}

export default NewTask;  