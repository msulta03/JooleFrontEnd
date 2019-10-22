import React from 'react';
import {Route} from 'react-router-dom';


// components
import LoginForm from '../login_signup/login';
import SignupForm from '../login_signup/signup';
import Home from '../login_signup/Home';

//in progress
import ProductPageHeader from '../product/ProductPageHeader';
import ProductSearchFilter from '../product/ProductSearchFilter';
import ProductSlider from '../product/ProductSideBarSlider';
import ProductPage from '../product/ProductPage';
import ProductCard from '../product/ProductCard';

function routes (){

    return (
        <div>
            <Route path="/" exact component={LoginForm}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/signup" exact component={SignupForm}/>
            <Route path="/signin" exact component={LoginForm}/>
            <Route path="/tester" exact component={ProductPage}/>
        </div>
    );
}

export default routes;