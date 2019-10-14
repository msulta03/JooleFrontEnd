import React from 'react';
import {Input,Dropdown} from "semantic-ui-react";
import './SearchBar.css';

class SearchBar extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            searchInput:''
        };
    }
  





    handleChange = (e) =>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
 
        this.setState({[name]: value});
 
        console.log(this.state);
     }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log('then you have to render the main page');
        console.log(this.props.selectionList);
    };


    render () {
        return (
            <div className="search-bar-container">
                <form onSubmit={this.handleSubmit}>
                <Input
                    className="search-bar"
                    label={<Dropdown defaultValue='Mechanical'
                    options={this.props.selectionList} />}

                    labelPosition='left'
                    action={{ icon: 'search'}}
                    name="searchInput"
                    value={this.state.searchInput}
                    onChange={e=> this.handleChange(e)}
                    placeholder="Search..."/>
            </form>
            </div>            
        );
    }
}
export default SearchBar;