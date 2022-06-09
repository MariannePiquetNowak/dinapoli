import React from "react";
import { Card } from "react-bootstrap";

const Cardy = ({ reverse, img, title, text }) => {
  return (
    <section className="Card-dinapoli component">
      <Card className={`my-5 ${reverse} mx-3 mx-md-3 mx-lg-5`}>
        <Card.Img variant="top" src={img} />
        <Card.Body className="mb-5 mb-md-0">
          <h2>Le Savoir-Faire, un état d'esprit</h2>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Cardy;
