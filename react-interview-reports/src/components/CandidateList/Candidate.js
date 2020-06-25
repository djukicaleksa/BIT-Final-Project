import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, Icon, CardTitle } from 'react-materialize';
import styles from './Candidate.module.css';



export const Candidate = ({ name, email, key, id }) => {
    return (
        <Col
            m={4}
            s={12}
            key={key}
        >
            <Link to={`./info/${id}`}>
                <Card
                className={`${styles.candidate} center-align`}
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image='./usersImg.png' reveal waves="light" />}
                reveal
                revealIcon={<Icon>search</Icon>}
                title={name}
            >
                <p>
                    {email}
                </p>
            </Card>
            </Link>
        </Col>
    )
}