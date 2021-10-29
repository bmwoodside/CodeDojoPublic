import React, {useState} from 'react'


const Form = (props) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            username, email, password
        }
        console.log('newUser: ', newUser) // we're pretending this is a DB call
        setHasBeenSubmitted( true )
        setUsername('')
        setEmail('')
        setPassword('')
    }

    return (
        <div>
            {
                hasBeenSubmitted
                ? <h3>Thanks for your submission</h3>
                : <form onSubmit = { createUser }>

                <form onSubmit = { createUser }></form>
                <div>
                    Username: <input type="text" onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div>
                    Email: <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    Password: <input type="text" onChange={(e) => setPassword(e.target.value)}></input>
                </div>

                <input type="submit" value="Create User"></input>
            </form>

            }
        </div>
    )

}

export default Form;