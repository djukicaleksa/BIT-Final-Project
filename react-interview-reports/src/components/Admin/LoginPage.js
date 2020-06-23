import React from 'react';
import { TextInput, Container, Button } from 'react-materialize';
import axios from 'axios';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: false,
            email: '',
            password: '',
            accessToken: null
        }
    }
    loginCheck = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitData = () => {
        axios.post('http://localhost:3333/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {
                console.log(response);
                this.props.history.push('/admin');
            })
            .catch(error => {
                console.log(error);
            });
    }



    render() {
        return (
            <Container>
                <h1>Login</h1>
                <TextInput
                    onChange={this.loginCheck}
                    email
                    label="Email"
                    name="email"
                    validate
                />

                <TextInput
                    onChange={this.loginCheck}
                    label="Password"
                    name="password"
                    password
                />
                <Button onClick={this.submitData}>Submit</Button>
            </Container >
        )
    }
}


export { LoginPage }