import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import ListGroup from "react-bootstrap/ListGroup";

function Cases({ states }) {
  return (
    states &&
    states.map((state) => (
      <CardContainer>
        <Card key={state._id} style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>
              <Header>{state.state}</Header>
            </Card.Title>
          </Card.Body>
          <CardBody>
            <ListGroup className="list-group-flush">
              <ListGroup.Item></ListGroup.Item>
              <ListGroup.Item>
                <Confirmed>Confirmed Cases : {state.confirmedCases} </Confirmed>
              </ListGroup.Item>
              <ListGroup.Item>
                <Admitted>
                  Cases On Admission : {state.casesOnAdmission}
                </Admitted>
              </ListGroup.Item>
              <ListGroup.Item>
                <Discharged>Discharged : {state.discharged}</Discharged>
              </ListGroup.Item>
              <ListGroup.Item>
                <Death>Death : {state.death}</Death>
              </ListGroup.Item>
            </ListGroup>
          </CardBody>
        </Card>
      </CardContainer>
    ))
  );
}

const Header = styled.div`
  color: #092581;
  text-align: center;
`;

const Confirmed = styled.div`
  color: black;
`;
const Admitted = styled.div`
  color: grey;
`;
const Discharged = styled.div`
  color: green;
`;
const Death = styled.div`
  color: red;
`;
const CardContainer = styled.div`
  justify-content: space-between;
  padding-top: 50px;
`;

const CardBody = styled.div``;
export default Cases;
