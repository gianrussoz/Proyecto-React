import React from 'react';
import {Container, Row} from 'react-bootstrap';
import Item from './Item';

function ItemList ({products}){
    return (
        <>
            <Container fluid>
                <Row>
                    {products.map((products) => (
                        <Item key={products.id} {...products} />
                    ))
                    }
                </Row>
            </Container>
        </>
    );
}

export default ItemList;