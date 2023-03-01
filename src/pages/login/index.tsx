import React, {FormEvent} from 'react'
import { useNavigate } from 'react-router-dom'

import { Container } from './style'

const Login: React.FC = () => {

    const navigate = useNavigate()



    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        navigate("/home")
    }

    return(
        <Container>
            <div>
                <h1>
                    Sign in
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <input placeholder='Username' type="text"></input>
                        </div>
                        <div>
                            <input placeholder='Password' type="password"></input>
                        </div>
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </Container>
    )
}

export default Login