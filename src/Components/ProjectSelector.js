import React from 'react';
import '../App.css';
import { Select } from 'antd';

const { Option } = Select;


function onChange(value) {
    console.log(`selected ${value}`);
    
  }
  
  function onBlur(e) {
    console.log('blur');
    this.setState({name: e.target.value})
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }
  
  
class ProjectSelector extends React.Component {


    render() {
        return (
            <Select
            showSearch
            style={{ width: 300 }}
            placeholder="Select a project"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }>

            <Option value="Project 1">Project 1</Option>
            <Option value="Project 2">Project 2</Option>
            <Option value="Project 3">Project 3</Option>

            </Select>
        )
    }    
}

export default ProjectSelector;