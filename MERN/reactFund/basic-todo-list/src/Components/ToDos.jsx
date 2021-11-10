import React from "react";

// const ToDos = ({ todos, deleteTodo }) => {
const ToDos = props => {

    return (
        <div className="col-6">
            
            <h1>To-Do's:</h1>

            <h3>Item: {props.oneTodo.item}</h3>
            <h3>Description: {props.oneTodo.description}</h3>
            <h3>Priority: {props.oneTodo.priority}</h3>

            {/* <table>
                <tr>
                    <th>Item</th>
                    <th>Description</th>
                    <th>Is Complete?</th>
                </tr>

                {todos.map(todo => (
                    <tr key={todo.id}>
                        <td>{todo.item}</td>
                        <td>{todo.description}</td>
                        <td>{todo.isComplete ? "Yes" : "No"}</td>
                        <button>Delete</button>
                    </tr>
                    ) )}
                
            </table> */}
        </div>
    )


}

export default ToDos;