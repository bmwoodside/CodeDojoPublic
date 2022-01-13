import React, { useState } from 'react';

const TraditionalForm = (props) => {
    const [flavor, setFlavor] = useState('');
    const [topping, setTopping] = useState('');
    const [fruit, setFruit] = useState('');
    const [whipped, setWhipped] = useState(false);
    const [dairyFree, setDairyFree] = useState(false);

    const handleChange = (e) => {

    };

    return (
        <div className="w-50 ms-auto">
            {/* topping, flavor, sauce, size, fruit, whipped cream + cherry, dairy-free */}
            <form>
                <h1>make a sundae - traditional form</h1>
                <div className="form-group">
                    <label htmlFor="topping">Topping</label>
                    <input type="text" name="topping" className="form-control" onChange={ (e) => setTopping(e.target.value)}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="flavor">flavor</label>
                    <input type="text" name="flavor" className="form-control" onChange={ (e) => setFlavor(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="fruit">fruit</label>
                    <input type="text" name="fruit" className="form-control" onChange={ (e) => setFruit(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="whipped">whipped cream and cherry?</label>
                    <input type="checkbox" name="whipped" className="form-check-input" onChange={ (e) => setWhipped(e.target.checked)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="dairy">dairy-free?</label>
                    <input type="checkbox" name="dairy" className="form-check-input" onChange={ (e) => setDairyFree(e.target.checked)}/>
                </div>
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default TraditionalForm;