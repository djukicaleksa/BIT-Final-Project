import React from 'react';
import { TextInput, Container, Button } from 'react-materialize';
import { postAdmin } from '../../../services/serviceAdmin';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: false
        }
    }
    loginData = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitData = () => {
        postAdmin(this.state)
            .then(response => {
                console.log(response);
                this.props.history.push('/admin')
                sessionStorage.setItem('validate', true)
            })
            .catch(error => {
                console.log(error)
                this.setState({ error: true });
            });
    }



    render() {
        return (
            <Container>
                <h1>Login</h1>
                <TextInput
                    onChange={this.loginData}
                    email
                    id="TextInput-4"
                    label="Email"
                    name="email"
                    validate
                />

                <TextInput
                    onChange={this.loginData}
                    id="TextInput-4"
                    label="Password"
                    name="password"
                    password
                />
                {this.state.error ? <div>email or password is not correct</div> : ""}
                <Button onClick={this.submitData}>Login</Button>

            </Container >
        )
    }
}


export { LoginPage }