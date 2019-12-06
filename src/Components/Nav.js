import React from 'react';
import '../App.css';

import Project from './Project'
import Conversation from './Conversation'
import Plus from './Plus'
import SearchButton from './SearchButton'


import { Menu } from 'antd';





class Nav extends React.Component {


  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (


      <Menu onClick={this.handleClick}  mode="horizontal">
        <Menu.Item key="project">
          <Project/>
        </Menu.Item>

        <Menu.Item key="conversation" disabled>
          <Conversation/>
        </Menu.Item>

        <Menu.Item key="searchButton" disabled>
          <SearchButton/>
        </Menu.Item>
        
        <Menu.Item key="plus" disabled>
          <Plus/>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav;