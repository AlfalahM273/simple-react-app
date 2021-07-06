
import React from 'react';
import { 
    Container, Row, Col
} from 'reactstrap';

import instance from '../../api/AxiosInstance';
import { useRouteMatch, Link } from 'react-router-dom';

export const axios = instance.apiInstance();

function HomePage (props) {
    return (
        <React.Fragment>
            {
                !props.isAuthenticated ?
                <Container>
                    <Row>
                        <Col>
                            <Link to="/login" >Login</Link>
                        </Col>
                    </Row>
                </Container>
                : ""
            }
            <Container>
                <h3>
                    Home
                </h3>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}


export default HomePage
