import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Header from './header/';
import Navigation from './navigation/';
import Article from './article/';
import Footer from './footer/';
import { JSONData, navigationLinks } from '../data.js';

import "./main.scss";

const App = () => {
    return (
        <Container>
            <Row>
                <Col xs="12">
                    <Header
                        mainImg="https://www.blackhillsbadlands.com/sites/default/files/styles/bhb40_page_hero/public/photos/events/5th-annual-holiday-bazaar/abstract-background-blur-255377.jpg"
                        logo="https://carlisletheacarlisletheatre.org/images/football-logo-7.png"
                        text="This is the heading"
                    />
                    <Navigation
                        links={navigationLinks}
                        tabs={false}
                        pills={true}
                        vertical={false}
                        justified={false}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                <Article
                    srcType="JSON"
                    dataSrc={JSONData}
                />
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <Footer />
                </Col>
            </Row>            
        </Container>
    )
}
export default App;