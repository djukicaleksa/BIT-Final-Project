import React from 'react';

import styles from './LoginPage.module.css';

import { postAdmin } from '../../../services/serviceAdmin';
import { TextInput, Container, Button } from 'react-materialize';
import { StorageService } from '../../../services/storageService';

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
                StorageService.set('accessToken', response.data.accessToken)
                this.props.history.push('/admin/reports')
                
            })
            .catch(error => {

                console.log(error);
                this.setState({ wrongUser: true })

            });
    }

    render() {
        return (
            <Container>
                <div onKeyUp={(event)=>{if(event.keyCode === 13){this.submitData()}}} className={styles.loginForm}>
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