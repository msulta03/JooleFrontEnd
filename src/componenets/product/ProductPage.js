import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import {connect} from 'react-redux';
import {getAllProducts} from '../../actions/productActions';

import ProductHeader from './ProductPageHeader';
import ProductSideBar from './ProductSearchFilter';
import ProductCard from './ProductCard';


class ProductPage extends Component{
    // constructor(props){
    //     super(props);
    // }

    componentDidMount(){
        console.log(this.props);
        console.log('redux working? if props show up under here')

    }

    render(){
        return (
            <div className = 'product-page-body'>
                <ProductHeader></ProductHeader>
                <Grid columns={2} divided>
                    <Grid.Column width = {4}>
                        <ProductSideBar></ProductSideBar>
                    </Grid.Column>
                    <Grid.Column width = {12}> 
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                    </Grid.Column>
                </Grid>


            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading:state.products.loading,
    error:state.products.error,
    products:state.products.products,

})

export default connect(mapStateToProps, {getAllProducts})(ProductPage);