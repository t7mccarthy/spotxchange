import React, { Fragment, PropTypes } from "react";
import { Container, Row, Col } from "reactstrap";
import Spots from "./Spots";
import MapContainer from "./MapContainer";

export default function Dashboard() {
  return (
    <Row>
      <Col>
        <h2>Nearby Spots</h2>
        <Spots />
      </Col>
      <Col>
        <MapContainer />
      </Col>
    </Row>
  );
}
