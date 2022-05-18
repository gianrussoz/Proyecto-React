import React from 'react';
import Item from './Item';
import { ProductsContainer } from '../styles/styled-components';
import  loader  from '../assets/loader.gif';

function ItemList ({products}){
    return (
        <>
            <ProductsContainer>
                    {
                        products.length > 0
                        ?   products.map(products => <Item key={products.id} {...products} />)
                        :   <img src={ loader } alt="loader"/>
                    }
            </ProductsContainer>
        </>
    );
}

export default ItemList;