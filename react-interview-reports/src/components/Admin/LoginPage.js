import React from 'react';
import { TextInput, Container } from 'react-materialize';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: false,
            email: '',
            password: ''
        }
    }
    


    render() {
        return (
            <Container>
                <h1>Login</h1>
                <TextInput
                    email
                    id="TextInput-4"
                    label="Email"
                    name="email"
                    validate
                />

                <TextInput
                    id="TextInput-4"
                    label="Password"
                    name="password"
                    password
                />

            </Container >
        )
    }
}

export { LoginPage }