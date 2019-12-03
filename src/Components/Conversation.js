import React from "react";
import "../App.css";

import ProjectSelector from './ProjectSelector'

import { Modal, Button,Input,List, Avatar, Divider } from "antd";


// array qui contient les listes en dur
const data = [
    {
      title: 'The project will begin next week',
      name: 'Name',
      description: 'Project "Teamwork Dream Work" Launch Timeline',
    },
  ];
//****************************************/



class Project extends React.Component {

 
// Traitement pour la modal
  state = {
    loading: false,
    visible: false,
    size: 'large',
    name: '',
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

    const { visible, size } = this.state;

    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
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

            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src="https://www.w3schools.com/howto/img_avatar2.png" style={{width: 40, height: 40 }} />}
                    
                    title={<a href="https://t3.ftcdn.net/jpg/01/92/14/70/500_F_192147027_SMiNahkrPT70ahVCUWuilk4MczoKXBsp.jpg">{item.title}</a>}
                    description={item.description}
                    />
                </List.Item>
                )}
            />
         

        
        </Modal>
      </div>
    );
  }
}

export default Project;