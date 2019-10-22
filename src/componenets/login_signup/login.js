import React from 'react';
import Logo from '../../images/joole_logo.png';
import Home from './Home';

import {Input, Card, Button, Form, Header, Divider} from 'semantic-ui-react';
import axios from 'axios';

import {Link, Redirect} from 'react-router-dom';

import './form.css';

 
class LoginForm extends React.Component{

    url = 'http://localhost:8080/api/auth/signin';
    
    state = {
        username: '',
        password: ''
    }

    // style = {
    //     position: 'absolute',
    //     top: 0,
    //     bottom: 0,
    //     backgroundColor: 'red'
    // };
    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({[name]: value});

        console.log(this.state);
        
    }

    loginSuccess = () => {
        this.setState(prevState =>({
           ...prevState,
           loggedIn: true
        }))

        console.log(this.state);
    }

    handleSubmit(e){
        console.log('fi el handle submit');
        
        axios.post(this.url, this.state)
        .then(response => {
            console.log('login works');
            console.log(response);
            this.loginSuccess()
            
                } 
            )
            .catch(error =>{
                console.log('shit dont work');
                console.log(this.state);
                
                alert(error);
            })
    }


    //debugging purposes
    tryThis() {
        return console.log('clicked!');
        
    }

render (){

    if (this.state.loggedIn === true){
        this.tryThis();
        return (
            <Redirect render={Home} to="/home"/>
        );
    }

    return (
    
    <div className = 'form_parent form' >
        

            <Header as="h4" textAlign="right" onClick = {e => this.tryThis(e)}>
                <Link to="/signup">
                Sign up
                </Link>
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