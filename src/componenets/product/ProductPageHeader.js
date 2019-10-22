import React from 'react';
import faker from 'faker';

import SearchBar from '../searchbar/SearchBar';
import Logo from '../../images/joole_logo.png';

import './productHome.css'

// class ProductPageHeader extends React.Component {
// //TODO: can get from the db, here and everywhere else
    
   

// } 

function ProductPageHeader (props) {
    //TODO: can get from the db, here and everywhere else

    let  options = [
        { key: 'Mechanical', text: 'Mechanical', value: 'Mechanical' },
        { key: 'Electrical', text: 'Electrical', value: 'Electrical' },
        { key: 'Solar', text: 'Solar', value: 'Solar' },
      ];


    return (
        <div className = 'product-nav-bar'>
            <img className= "logo_form_image" src= {Logo} alt="Smiley face"/>

            <SearchBar className = 'homeSearchBar' selectionList = {options}/>

            <div className = 'navbar-avatar-section' >
             <h4>Projects</h4>
             <img src={faker.image.avatar()}  alt="Avatar" id = 'avatar'/>
            </div>

        </div>
    )
}

export default ProductPageHeader;