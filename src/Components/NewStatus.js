import React from "react";
import "../App.css";
import { Modal, Button, Divider, Switch } from "antd";


import StatusSelector from './StatusSelector'
import NewComment from "./NewComment";






class NewStatus extends React.Component {


  state = {
    visible: false,
    size: 'large',
    comments : [],
    checked: '',
    status: ''
  };

  // switch button
  onChange= (checked) => {
  console.log(`switch to ${checked}`);
  this.setState({
    checked: checked
  });
}

// Traitement pour la modal
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handlePost = () => {

    console.log('Bouton Post --> execution du fetch')

    this.setState({ visible: false })
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  /***************************************/

  handleSelector= (value) => {
    console.log(" ")
    console.log("Composant Parent NewStatus fonction handleSelector:")
    console.log("Status recupéré --> ", value)
    console.log(" ")
    this.setState({ status: value});
  }


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
        Status
        </Button>
        <Modal
          visible={visible}
          onCancel={this.handleCancel}
          footer={[ 
            <Button key="submit" type="primary" size={size} onClick={this.handlePost} >
              Post
            </Button>
        ]}>

            <div className="Input">
              <p style={{marginRight: '1.4em'}}>New status update</p> 
              <StatusSelector handleClickParent={this.handleSelector}/>
              
            </div>
          
            
            
            <Divider style={{width : '100%'}}/>

            <NewComment/>
         
                <div className="Input">
                <p style={{marginRight: '1em'}} >Generate progress chart</p>
                <Switch defaultChecked onChange={this.onChange} />             
                </div>


        
        </Modal>
      </div>
    );
  }
}

export default NewStatus;