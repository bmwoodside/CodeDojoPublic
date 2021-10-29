import React, { useReducer } from 'react';

const initialState = {
    name: '',
    email: '',
}

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }
}

    return (
        <div>
            {JSON.stringify(state)}
            <div>
                <label>
                    <span>Name:</span>{' '}
                    <input
                        name="name"
                        value={state.name}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </div>
    );






export default UseReducer;