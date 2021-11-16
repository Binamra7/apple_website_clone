import React from 'react'
import "./Products.css"
import IndividualProduct from './IndividualProduct'

function Products() {
    return (
        <div className="products">
            <IndividualProduct/>
            <IndividualProduct/>
            <IndividualProduct/>
            <IndividualProduct/>
        </div>
    )
}

export default Products
