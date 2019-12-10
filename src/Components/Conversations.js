import React from "react";
import "../App.css";

import ProjectSelector from './ProjectSelector'

import { Modal, Button,Input, Divider } from "antd";

import NewComment from './NewComment'





class Conversation extends React.Component {

 
// Traitement pour la modal
  state = {
    visible: false,
    size: 'large',
    
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ visible: false });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  /***************************************/


  //Submit button :
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };
 /***************************************/

  render() {

    const { visible, size } = this.state;

    return (
      <div>
        <Button type="link" onClick={this.showModal}>
        Conversation
        </Button>
        <Modal
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[ 
            <Button key="submit" type="primary" size={size} onClick={this.handleOk} >
              Post
            </Button>
        ]}>

            <div className="Input">
              <p style={{marginRight: '1.4em'}}>Name</p> 
              <Input style={{marginBottom: '1.4em',width: '80%' }} placeholder="Project" />
            </div>
          
            <div className="Input">
              <p style={{marginRight: '1em'}}>Project</p>
              <ProjectSelector />
            </div>
            
            <Divider style={{width : '100%'}}/>
            
            <NewComment/>
        
        </Modal>
      </div>
    );
  }
}

export default Conversation;