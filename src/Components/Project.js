import React from "react";
import "../App.css";

import Datepicker from './Datepicker'
import Owner from './Owner'

import { Modal, Button,Input} from "antd";

const { TextArea } = Input;



class Project extends React.Component {

// Traitement pour la modal
  state = {
    loading: false,
    visible: false,
    size: 'large',
    
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
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

    const { visible, loading, size } = this.state;

    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
        Project
        </Button>
      
        <Modal
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[ 
            <Button key="submit" type="primary" loading={loading} size={size} onClick={this.handleOk} >
              Submit
            </Button>
        ]}>
          
            <div className="Input">
              <p style={{marginRight: '1.25em'}}>Name</p> 
              <Input style={{marginBottom: '1.25em',width: '80%' }} placeholder="Project" />
            </div>

            <div className="Input">
              <p style={{marginRight: '1.8em' }}>Desc</p>
              <TextArea style={{marginBottom: '1.25em',width: '80%'}} rows={4} placeholder="Description" />
            </div>
         
            <div className="Owner-Date">

            <div className="Input">
              <p style={{marginRight: '1em'}}>Owner</p>
              <Owner/>
            </div>
            
            <div className="Input">
              <p style={{marginLeft: '2.4em' ,marginRight: '1em'}}>Due date</p>               
              <Datepicker/>          
            </div>
            </div>  
        
        </Modal>
      </div>
    );
  }
}

export default Project;
