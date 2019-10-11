import React from 'react';
import {Input, Card, Button, Form, Header, Divider} from 'semantic-ui-react';
import axios from 'axios';
import Logo from '../../images/joole_logo.png';

import './form.css';

 
class SignupForm extends React.Component{

    url = 'http://localhost8080/api/auth/signup';
    state = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        cPassword: '',
    }

    handleChange = (e) => {
    
        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({[name]: value});

        console.log(this.state);
    }

    onSubmit(e){
        e.preventDefault();

        console.log(this.state);
        if (this.state.password === this.state.cPassword){

            const postObj  = {
                name:  this.state.firstName + ' ' + this.state.lastName,
                username: this.state.username,
                email: this.state.email,
                role: ['user'],
                password: this.state.password
            }
            axios.post('http://localhost:8080/api/auth/signup', postObj).then((res)=>{
                console.log(res);
                
            }).then(response => {
                console.log(response);
                console.log('singup worked!');
                
                
            }).catch (response => {
                console.log("shit don't work");
                console.log(response);
            })
        }
        else {
            alert('password has to match!')
        }

        
        
    }

    // TODO: this is just a debug flag
    tryThis(e) {
        return console.log('clicked!');
        
    }

render (){

    return (
        
    <div className = 'form_parent'>
            {/* TODO: fix this in login and signup */}
            <Header as="h4" textAlign="right" onClick = {this.tryThis}>
                Log in
            </Header>

            <Divider section />
        
            <Card>

                <div className = "logo_form_group">
                    <img className= "logo_form_image" src= {Logo} alt="Smiley face"/>
                    <p className = "logo_form_slogan">Building Product Selection Platform</p>
                    <Divider section />
                </div>

                <Form onSubmit =  {e => this.onSubmit(e)}>
                    <Form.Field>
                    <label>First Name</label>
                        <Input 
                            type = "text" placeholder = "First Name" 
                            icon = "user" name = 'firstName' 
                            value = {this.state.firstName} onChange = {this.handleChange}>
                        </Input>
                    </Form.Field>

                    <Form.Field>
                    <label>Last Name</label>
                        <Input 
                            type = "text" placeholder = "Last Name" 
                            icon = "user" name = 'lastName' 
                            value = {this.state.lastName} onChange = {this.handleChange}>
                        </Input>
                    </Form.Field>


                    <Form.Field>
                    <label>User Name</label>
                        <Input 
                            type = "text" placeholder = "User Name" 
                            icon = "user" name = 'username' 
                            value = {this.state.username} onChange = {this.handleChange}>
                        </Input>
                    </Form.Field>

                    <Form.Field>
                    <label>Email Address</label>
                        <Input 
                            type = "email" placeholder = "User Name" 
                            icon = "mail" name = 'email' 
                            value = {this.state.email} onChange = {this.handleChange}>
                        </Input>
                    </Form.Field>

                   

                    <Form.Field>
                    <label>Password</label>
                        <Input 
                            type = "password" placeholder = "password" 
                            icon = "lock"  name = 'password' 
                            value = {this.state.password} onChange = {this.handleChange}>
                        </Input>
                    </Form.Field>

                    <Form.Field>
                    <label>Confirm Password</label>
                        <Input 
                            type = "password" placeholder = "password" 
                            icon = "lock"  name = 'cPassword' 
                            value = {this.state.cPassword} onChange = {this.handleChange}>
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

export default SignupForm;