import React, { useEffect, useState} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Detail = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <h1>Product Name: {product.productName}</h1>
            <h3>Product Price: {product.productPrice}</h3>
            <h3>Product Description: {product.productDescription}</h3>

            <Link to={"/api/products/" + product._id + "/edit"}>Edit</Link>
        </div>
    )
}

export default Detail;