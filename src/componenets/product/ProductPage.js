import React, { Component } from 'react';
import { Grid, Dimmer, Loader } from 'semantic-ui-react'

import {connect} from 'react-redux';
import {getAllProducts} from '../../actions/productActions';

import ProductHeader from './ProductPageHeader';
import ProductSideBar from './ProductSearchFilter';
import ProductCard from './ProductCard';


class ProductPage extends Component{
   state = {products: null};
    url = "http://localhost:8080/api/auth/products/";
    cards = (<Dimmer active inverted>
        <Loader size='large'>Loading</Loader>
    </Dimmer> );
   
    componentDidMount(){
        this.props.getAllProducts(this.url);
        console.log('prduct in component did mount',this.props.products);
    }
    componentDidUpdate(){
        console.log('from component did update :' , this.props);
        console.log('truthy: ',  this.props.products ===null? 'false':'true');
        this.cards = this.props.products === null ? ( <Dimmer active inverted>
                    <Loader size='large'>Loading</Loader>
                </Dimmer> ) : 
                this.props.products.map((product, key) => {
                                return (
                                    <ProductCard
                                    key = {key}
                                    verifiedOn = {product.productsuctDocuments}
                                    imageSrc = {product.description}
                                    name = {product.name}
                                    spec = {product.seriesInfo}
                                    pastSpec = {product.technicalSpec}
                                    />)})
            console.log("is product null" ,this.props.products);
            console.log('current cards ', this.cards)


        }

        



    

    render(){
        console.log('ind ProductPage render');
        console.log('cards in render',this.cards);
        console.log('products in render', this.props.products);
        let newCards= this.props.products === null ? ( <Dimmer active inverted>
            <Loader size='large'>Loading</Loader>
        </Dimmer> ) : 
        this.props.products.map((product, key) => {
                        return (
                            <ProductCard
                            key = {key}
                            verifiedOn = {product.productDocuments}
                            imageSrc = {product.description}
                            name = {product.name}
                            spec = {product.seriesInfo}
                            pastSpec = {product.technicalSpec}
                            />)})
        return (
            
            <div className = 'product-page-body'>
                <ProductHeader></ProductHeader>
                <Grid columns={2} divided>
                    <Grid.Column width = {4}>
                        <ProductSideBar></ProductSideBar>
                    </Grid.Column>
                    <Grid.Column width = {12}> 
                       {newCards}
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