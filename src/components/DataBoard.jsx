import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";

const DataBoard = () => {
  return (
    <div>
      <CardGroup>
        <Card
          bg="info"
          text="white"
          className="text-center"
          style={{ margin: "12px" }}
        >
          <Card.Body>
            <Card.Title>Total Samples Tested</Card.Title>
            <Card.Footer>5441,162</Card.Footer>
          </Card.Body>
        </Card>

        <Card
          bg="secondary"
          text="white"
          className="text-center"
          style={{ margin: "12px" }}
        >
          <Card.Body>
            <Card.Title>Total Confirmed Cases</Card.Title>
            <Card.Footer>262748</Card.Footer>
          </Card.Body>
        </Card>

        <Card
          bg="primary"
          text="white"
          className="text-center"
          style={{ margin: "12px" }}
        >
          <Card.Body>
            <Card.Title> Total Active Cases</Card.Title>
            <Card.Footer>3083</Card.Footer>
          </Card.Body>
        </Card>

        <Card
          bg="success"
          text="white"
          className="text-center"
          style={{ margin: "12px" }}
        >
          <Card.Body>
            <Card.Title>Discharged</Card.Title>
            <Card.Footer>256518</Card.Footer>
          </Card.Body>
        </Card>

        <Card
          bg="danger"
          text="white"
          className="text-center"
          style={{ margin: "12px" }}
        >
          <Card.Body>
            <Card.Title>Death</Card.Title>
            <Card.Footer>3147</Card.Footer>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default DataBoard;
