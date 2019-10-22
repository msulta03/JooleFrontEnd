import React from 'react';
import faker from 'faker';

import Logo from '../../images/joole_logo.png';
import './form.css';



function HomeHeader(){
    return(
        <div>

            {/* TODO: add redirect here */}
            <div className = 'homePage-header' >
             <h4>Projects</h4>
             <img src={faker.image.avatar()}  alt="Avatar" id = 'home-header-logo'/>
            </div>
            
            
        </div>
    );
}

export default HomeHeader;