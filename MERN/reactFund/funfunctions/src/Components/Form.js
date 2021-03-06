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
                : 
                <form onSubmit = { createUser }>

                    <div>
                        Username: <input type="text" onChange={(e) => setUsername(e.target.value)} value={username}></input>
                    </div>
                    <div>
                        Email: <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                    </div>
                    <div>
                        Password: <input type="text" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                    </div>

                    <input type="submit" value="Create User"></input>
                </form>


            }
        </div>
    )

}

export default Form;