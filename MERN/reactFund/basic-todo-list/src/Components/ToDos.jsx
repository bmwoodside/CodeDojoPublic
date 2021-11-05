import React from "react";

const ToDos = ({ todos, deleteTodo }) => {

    const 


    return (
        <div>
            <table>
                <tr>
                    <th>Item</th>
                    <th>Description</th>
                    <th>Is Complete?</th>
                </tr>
                
                {/* {todos.map(todo => (
                    <div className="table-row">
                        <tr>{ todo.item }</tr>
                        <tr>{ todo.description }</tr>
                        <tr>{ todo.completed ? "Yes" : "No"}</tr>
                        <button>Delete</button>
                    </div>
                ))} */}
            </table>
        </div>
    )


}

export default ToDos;