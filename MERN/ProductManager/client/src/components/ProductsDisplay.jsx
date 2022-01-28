import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductsDisplay = (props) => {

    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }

    // just returning the map: "Main" view is making the axios call...
    return (
        <div>
            {props.products.map( (product, i) => 
                <p key={i}>{product.productName} <Link to={`/api/products/`+product._id}>View</Link> | <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button></p>
            )}
        </div>
    )
}

export default ProductsDisplay;