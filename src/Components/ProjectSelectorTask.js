import React from 'react';
import '../App.css';
import { Select } from 'antd';

const { Option } = Select;



  
  function onBlur(e) {
    console.log('blur');
    
  }

  function onSearch(val) {
    console.log('search:', val);
  }
  
  
class ProjectSelector extends React.Component {

  constructor(props){
    super()
    this.onChange = this.onChange.bind(this)
  }

// informations qui remontent du composant enfant ProjectSelectorTask et non de Projectselector
  onChange(value) {
    console.log(" ")
    console.log(`from composant enfant ProjectSelectorTask: Projet selectionné -> ${value}`);
    this.props.handleClickParent(value);
}


    render() {
        return (
            <Select
            showSearch
            style={{ width: 300 }}
            placeholder="Select a project"
            optionFilterProp="children"
            onChange={this.onChange}
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