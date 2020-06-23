import React from 'react';
import { TextInput, Container, Button } from 'react-materialize';
import { postAdmin } from '../../../services/serviceAdmin';
import styles from './LoginPage.module.css';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            wrongUser: false
        }
    }
    loginCheck = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitData = () => {

        postAdmin(this.state)
            .then(response => {
                console.log(response);
                this.props.history.push('/admin/reports')
                sessionStorage.setItem('accessToken', response.data.accessToken)
            })
            .catch(error => {
                console.log(error);
                this.setState({ wrongUser: true })
            });
    }



    render() {
        return (
            <Container>
                <div className={styles.loginForm}>
                    <div><i className={`fa fa-user ${styles.user}`}>
                        {this.state.wrongUser ? <span className={styles.wrong}> wrong email or password</span> : ""}
                    </i>
                    </div>
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
                    <Button onClick={this.submitData}>Login</Button>
                </div>
            </Container >
        )
    }
}


export { LoginPage }