import React, { Component } from 'react';

import ProductHeader from './ProductPageHeader';
import ProductSideBar from './ProductSearchFilter';
import ProductCard from './ProductCard';


class ProductPage extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
            <div className = 'product-page-body'>
                <ProductHeader></ProductHeader>
                <div className = 'ui grid'>
                    <div className = 'row'>
                        <ProductSideBar className ='sixteen wide column '></ProductSideBar>
                        <ProductCard className ='four wide column '/>
                        <ProductCard className ='four wide column '/>
                        <ProductCard className ='four wide column '/>
                        <ProductCard className ='four wide column '/>
                    </div>
                </div>

            </div>
        )
    }
}

export default ProductPage;