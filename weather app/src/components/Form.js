import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//weather form stateless function containing inputs which passes data from user input to fetch call
//form calls getWeather function from main App.js
const WeatherForm = props => (
  <Container>
    <Form onSubmit={props.getWeather}>
      <Row>
        <Col lg={true} md={3}>
          <Form.Control
            type="text"
            name="city"
            placeholder="city"
          ></Form.Control>
        </Col>
        <Col lg={true} md={3}>
          <Form.Control
            type="text"
            name="country"
            placeholder="country"
          ></Form.Control>
        </Col>
        <Button type="submit">Get Weather</Button>
      </Row>
    </Form>
  </Container>
);

export default WeatherForm;
