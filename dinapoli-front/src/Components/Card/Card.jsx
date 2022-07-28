import React from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Cardy = ({ id, reverse, img, title, name, text, link, href, hrefText, otherClass}) => {
  return (
    <div key={id} className={`Card-dinapoli component ${otherClass}`}>
      <Card className={`pt-3 pb-md-5 pb-lg-5 my-5 ${reverse} mx-3 mx-md-3 mx-lg-5`}>
        <Card.Img variant="top" src={img} />
        <Card.Body className="mb-5 mb-md-0">
          <h2>{title}</h2>
          <h3>{name}</h3>
          <Card.Text>
            {text}
          </Card.Text>
          <div className="btn-section mt-5">
           {link ? <Link to={href} className="btn btn-primary">{hrefText}</Link> : ""}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cardy;
