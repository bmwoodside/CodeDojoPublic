import React, { useState } from "react";

const Form = props => {

    const [myForm, setMyForm] = useState({
        item: "",
        description: "",
        priority: "low",
        isComplete: true
    })

    const onSubmitHandler = e => {
        e.preventDefault();
        // Handle form submission
        props.onSubmitTodo(myForm);
    }

    const onChangeHandler = e => {
        setMyForm({
            ...myForm,
            [e.target.name]: e.target.value
        })
    }

    const onCheckedHandler = e => {
        setMyForm({
            ...myForm,
            [e.target.name]: e.target.checked
        })
    }

    return (
        <div className="col-6">
            <h1>Add a To-Do Item:</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="item">Item: </label>
                    <input type="text" name="item" className="form-control" id="item" placeholder="Enter a To-Do Item" onChange={onChangeHandler} value={myForm.item} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" className="form-control" id="description" placeholder="Enter a description" onChange={onChangeHandler} value={myForm.description} />
                </div>
                <div className="form-group">
                    <label htmlFor="priority">Priority</label>
                    <select name="priority" className="form-control" onChange={onChangeHandler}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="critical">Critical</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="isComplete">Is Complete?</label>
                    <input type="checkbox" name="isComplete" className="form-control" id="isComplete" onChange={onCheckedHandler} checked={myForm.isComplete} />
                </div>
                <div className="form-group">
                    <input type="submit" value="+ Add " className="btn btn-primary" />
                </div>

            </form>

        </div>
    )
}

export default Form;