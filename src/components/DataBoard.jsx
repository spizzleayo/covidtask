import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/dataSlice";
import Cases from "./Cases";

export default function DataBoard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const entities = useSelector((state) => state.data.entities);

  return (
    <div>
      <ContainerWrapper>
        <CardContainer>
          <Card
            bg="light"
            text="dark"
            style={{ width: "100%" }}
            className="mb-2"
          >
            <Card.Header>Total Samples Tested</Card.Header>
            <Card.Body>
              <Card.Title>{entities.totalSamplesTested} </Card.Title>
            </Card.Body>
          </Card>

          <Card
            bg="dark"
            text="light"
            style={{ width: "100%" }}
            className="mb-2"
          >
            <Card.Header>Total Confirmed Cases</Card.Header>
            <Card.Body>
              <Card.Title> {entities.totalConfirmedCases} </Card.Title>
            </Card.Body>
          </Card>

          <Card
            bg="secondary"
            text="light"
            style={{ width: "100%" }}
            className="mb-2"
          >
            <Card.Header>Total Active Cases</Card.Header>
            <Card.Body>
              <Card.Title> {entities.totalActiveCases} </Card.Title>
            </Card.Body>
          </Card>

          <Card
            bg="success"
            text="light "
            style={{ width: "100%" }}
            className="mb-2"
          >
            <Card.Header>Discharged</Card.Header>
            <Card.Body>
              <Card.Title> {entities.discharged}</Card.Title>
            </Card.Body>
          </Card>
          <Card
            bg="danger"
            text="light"
            style={{ width: "100%" }}
            className="mb-2"
          >
            <Card.Header>Death</Card.Header>
            <Card.Body>
              <Card.Title>{entities.death} </Card.Title>
            </Card.Body>
          </Card>
        </CardContainer>

        <DataContainer>
          {entities && entities.states && <Cases states={entities.states} />}
        </DataContainer>
      </ContainerWrapper>
    </div>
  );
}

const CardContainer = styled.div`
  text-align: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    width: 99%;
    margin-left: 10px;
  }
`;

const ContainerWrapper = styled.div`
  @media screen and (max-width: 450px) {
    width: 100%;
  }
  width: 100%;
`;

const DataContainer = styled.div`
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 90%;
    margin: 50px;
    padding-top: 20px;
    justify-content: center;
  }
`;
