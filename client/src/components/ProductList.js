import React from 'react'

const ProductList = ({ products }) => {

    return (
        <div className='mx-5'>
            <h1 className='mb-4'>All Products:</h1>
            <div className="list-group">
                {products.map((product, index) => {
                    // return <p key={index}><a href={'/' + product._id} className='text-dark bold'> {product.title} </a></p>
                    return <a key={index} href={'/' + product._id} className='text-dark bold list-group-item list-group-item-action'> {product.title} </a>
                })}
            </div>
        </div >
    )
}

export default ProductList