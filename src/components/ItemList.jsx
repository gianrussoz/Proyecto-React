import React from 'react';
import {Container, Row} from 'react-bootstrap';
import Item from './Item';

function ItemList ({products}){
    return (
        <>
            <Container fluid>
                <Row>
                    {
                        products.length > 0
                        ?   products.map((products) => (<Item key={products.id} {...products} />))
                        :   <p>No hay productos.</p>
                    }
                </Row>
            </Container>
        </>
    );
}

export default ItemList;