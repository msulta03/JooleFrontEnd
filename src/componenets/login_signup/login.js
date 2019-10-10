import React from 'react';
import {Input, Card, Button, Form, Header, Divider} from 'semantic-ui-react';
import Logo from '../../images/joole_logo.png';

import './form.css';

 
class LoginForm extends React.Component{

    tryThis(e) {
        return console.log('clicked!');
        
    }

render (){

    return (
        
    <div className = 'form_parent'>

            <Header as="h4" textAlign="right" onClick = {this.tryThis}>
                Sign Up
            </Header>

            <Divider section />
        
            <Card>

                <div className = "logo_form_group">
                    <img className= "logo_form_image" src= {Logo} alt="Smiley face"/>
                    <p className = "logo_form_slogan">Building Product Selection Platform</p>
                </div>

        
                <Form>
                    <Form.Field>
                    {/* <label>First Name</label> */}
                    <Input type = "text" placeholder = "Username or Email" icon = "user"></Input>
                    </Form.Field>

                    <Form.Field>
                    <Input type = "password" placeholder = "password" icon = "lock"></Input>
                    </Form.Field>

                    {/* <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field> */}
                    
                    <Button type='submit'>Submit</Button>
                </Form>
            </Card>
    
    </div>
      
      
    )
}
}

export default LoginForm;