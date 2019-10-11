import React from 'react';
import {Input, Card, Button, Form, Header, Divider} from 'semantic-ui-react';
import axios from 'axios';
import Logo from '../../images/joole_logo.png';

import './form.css';

 
class LoginForm extends React.Component{

    url = 'http://localhost8080/api/auth/signin';
    
    state = {
        username: '',
        password: ''
    };

    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({[name]: value});

        console.log(this.state);
        
    }

    handleSubmit (e) {
        e.preventDefault();
        console.log(this.state);

        axios.post(this.url, this.state,).then((res)=>{
            console.log(res);
            
        }).then(response => {
            console.log("login worked");
            
            console.log(response);
            
            
        }).catch(error => {
            console.log("shit don't work");
            console.log(error);
            
            
        })

    }
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

        
                <Form onSubmit = {e => this.handleSubmit(e)}>
                    <Form.Field>
                    {/* <label>First Name</label> */}
                        <Input 
                            type = "text" placeholder = "Username or Email" 
                            icon = "user" name = 'username' 
                            value = {this.state.username} onChange = {e => this.handleChange(e)}>
                        </Input>
                    </Form.Field>

                    <Form.Field>
                        <Input 
                            type = "password" placeholder = "password" 
                            icon = "lock"  name = 'password' 
                            value = {this.state.password} onChange = {e => this.handleChange(e) }>
                        </Input>
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