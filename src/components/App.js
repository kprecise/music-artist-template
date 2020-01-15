import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Header from './header/'

import "./main.scss";

const App = () => {
    return (
        <Container>
            <Row>
                <Col xs="12">
                  <h1>Front End Starter Pack</h1>
                </Col>
            </Row>
            <Row>
                <Col xs="12">       
                    <Header />
                </Col>
            </Row>
        </Container>
    )
}
 
export default App;