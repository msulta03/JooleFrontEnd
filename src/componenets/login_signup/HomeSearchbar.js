
import React from 'react';

import Logo from '../../images/joole_logo.png';
import './form.css';
import SearchBar from '../searchbar/SearchBar';

import faker from 'faker';
import {Card} from 'semantic-ui-react';

function HomeSearchbar(){



    
    let options = [
        { key: 'Mechanical', text: 'Mechanical', value: 'Mechanical' },
        { key: 'Electrical', text: 'Electrical', value: 'Electrical' },
        { key: 'Solar', text: 'Solar', value: 'Solar' },
      ];
    
        return (
            <div className="home-container">
            <Card>
                <div className = "logo_form_group">
                    <img className= "logo_form_image" src= {Logo} alt="Smiley face"/>
                    <p className = "logo_form_slogan">Building Product Selection Platform</p>
                </div>
            </Card>
            <SearchBar className = 'homeSearchBar' selectionList = {options}></SearchBar>
            </div>
        )
}

export default HomeSearchbar;