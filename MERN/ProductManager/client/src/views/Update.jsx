import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";


const Update = (props) => {
    const { id } = useParams();
    const [form, setForm] = useState({});

    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setForm(res.data)
            })
    }, []);

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            productName: form.productName,
            productPrice: form.productPrice,
            productDescription: form.productDescription
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));

        // history.push("/api/products");
    }


    return (
        <div>
            <h1>Update a Product</h1>

            <form onSubmit={updateProduct}>
                <label htmlFor="productName">
                <p>Title <span>
                    <input type="text" name="productName" onChange={(e) => setForm({...form, [e.target.name]: e.target.value})} value={form.productName}/>
                    </span></p>
                </label>
                
                <label htmlFor="productPrice">
                <p>Price <span>
                    <input type="text" name="productPrice" onChange={(e) => setForm({...form, [e.target.name]: e.target.value})} value={form.productPrice}/>
                    </span></p>
                </label>
                
                <label htmlFor="productDescription">
                <p>Description <span>
                    <input type="text" name="productDescription" onChange={(e) => setForm({...form, [e.target.name]: e.target.value})} value={form.productDescription}/>
                    </span></p>
                </label>

                <input type="submit" value="Update" />
            </form>
        </div>
    )
}

export default Update;