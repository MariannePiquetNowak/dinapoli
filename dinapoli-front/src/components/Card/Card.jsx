import React from "react";
import { Card } from "react-bootstrap";

const Cardy = ({ reverse, img, title, text }) => {
  return (
    <section>
      <Card className="my-5">
        <Card.Img variant="top" src={img} />
        <Card.Body>
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
