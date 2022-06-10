import React from "react";
import { Card } from "react-bootstrap";

const Cardy = ({ reverse, img, title, text }) => {
  return (
    <section className="Card-dinapoli component">
      <Card className={`pb-md-5 pb-lg-5 my-5 ${reverse} mx-3 mx-md-3 mx-lg-5`}>
        <Card.Img variant="top" src={img} />
        <Card.Body className="mb-5 mb-md-0">
          <h2>{title}</h2>
          <Card.Text>
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Cardy;
