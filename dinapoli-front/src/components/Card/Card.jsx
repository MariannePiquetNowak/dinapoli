import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Card = ({reverse, img, title, text}) => {
    return (
        <Row className={`${reverse} py-5 mx-auto text-center`}>
            <Col sm={12} lg={8} className="section__text">
                <h1>{title}</h1>
                <p>{text}</p>
            </Col>
            <Col sm={12} lg={4} className="section__img d-flex justify-content-center">
                <img src={img} alt="" />
            </Col>
        </Row>
    )
}

export default Card;