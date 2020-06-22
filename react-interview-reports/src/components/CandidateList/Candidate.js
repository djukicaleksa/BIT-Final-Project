import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';




export const Candidate = ({ name, email, key, id }) => {
    return (


        <Col
            m={4}
            s={12}
            key={key}
        >
            <Link to={`./info/${id}`}><Card
                className='center-align'
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image='./userImg.jpg' reveal waves="light" />}
                reveal
                revealIcon={<Icon></Icon>}
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