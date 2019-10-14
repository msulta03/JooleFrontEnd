import React from 'react';

import HomeHeader from './HomeHeader';
import HomeSearchbar from './HomeSearchbar';

import {Divider} from 'semantic-ui-react';

class Home extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            user: 'moe',
        };
    };

    // logging = console.log(this.state.user);
    

    render(){
        return (
            <div >
                 <div className="signup-header">
                    <HomeHeader/>
                </div>
                <Divider section />
            <div className="signup-body">
                <Divider section />
               <HomeSearchbar/>
            </div>
        </div>
        );
    }
}

export default Home;