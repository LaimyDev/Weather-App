import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

//weather stateless function which gets properties from parent component and displays them
const Weather = props => (
  //using conditional operator (&& operator) to display weather information only when location is submitted
  <div>
    <Container>
      <Card>
        {props.city && props.country && (
          <p>
            Location: {props.city}, {props.country}
          </p>
        )}
        {props.temperature && <p>Temperature: {props.temperature}</p>}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.description && <p>Description: {props.description}</p>}
        {props.error && <p>{props.error}</p>}
      </Card>
    </Container>
  </div>
);

export default Weather;
