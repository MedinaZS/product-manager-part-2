import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

    //Parametros de la url
    const { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
            })
    })

    return (
        <div className='product-detail'>
            <h1>{product.title}</h1>
            <p><strong>Price: </strong> ${product.price}</p>
            <p><strong>Description: </strong> {product.description}</p>
            <hr />
            <a className='btn btn-outline-secondary' href="/">Go Back</a>
        </div>
    )
}

export default ProductDetail