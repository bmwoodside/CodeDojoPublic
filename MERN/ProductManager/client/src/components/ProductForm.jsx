import { useState } from "react";
import axios from "axios";


const ProductForm = () => {
    const [form, setForm] = useState({
        productName: "",
        productPrice: 0,
        productDescription: ""
    })

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        //make axios post request for new product
        axios.post('http://localhost:8000/api/product', form)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        
        // todo: add stuff to clear the fields...
    }

    return (
        <div>
            <h1>Product Manager</h1>

            <form onSubmit={onSubmitHandler}>
                <label htmlFor="productName">
                <p>Title <span>
                    <input type="text" name="productName" onChange={onChangeHandler} />
                    </span></p>
                </label>
                
                <label htmlFor="productPrice">
                <p>Price <span>
                    <input type="text" name="productPrice" onChange={onChangeHandler} />
                    </span></p>
                </label>
                
                <label htmlFor="productDescription">
                <p>Description <span>
                    <input type="text" name="productDescription" onChange={onChangeHandler} />
                    </span></p>
                </label>

                <input type="submit" value="Create" />
            </form>
        </div>
    )
}

export default ProductForm;