import React, { useState } from 'react';

const SimpleForm = (props) => {
    
    const [form, setForm] = useState({
        flavor: "",
        topping: "",
        fruit: "",
        whipped: false,
        dairyFree: false
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        })
    };

    return (
        <div className="w-50 ms-auto">
            {/* topping, flavor, sauce, size, fruit, whipped cream + cherry, dairy-free */}
            <form>
                <h1>make a sundae - simple form</h1>
                <div className="form-group">
                    <label htmlFor="topping">Topping</label>
                    <input type="text" name="topping" className="form-control" onChange={onChangeHandler}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="flavor">flavor</label>
                    <input type="text" name="flavor" className="form-control" onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="fruit">fruit</label>
                    <input type="text" name="fruit" className="form-control" onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="whipped">whipped cream and cherry?</label>
                    <input type="checkbox" name="whipped" className="form-check-input" onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="dairy">dairy-free?</label>
                    <input type="checkbox" name="dairy" className="form-check-input" onChange={onChangeHandler}/>
                </div>
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default SimpleForm;