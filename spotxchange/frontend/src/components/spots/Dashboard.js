import React, { Fragment, PropTypes } from "react";
import { Container, Row, Col } from "reactstrap";
import Spots from "./Spots";
import Form from "./Form";
import MapContainer from "./MapContainer";

export default function Dashboard() {
  return (
    <Row>
      <Col>
        <h2>Nearby Spots</h2>
        <Spots />
      </Col>
      <Col>
        <Form />
        <MapContainer />
      </Col>
    </Row>
  );
}
