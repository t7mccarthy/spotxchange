import React, { Fragment, PropTypes } from "react";
import { Container, Row, Col } from "reactstrap";
import Spots from "./Spots";
import ProfileEdit from "./ProfileEdit";
import MapContainer from "./MapContainer";

export default function Dashboard() {
  return (
    <Row>
      <Col>
        <h2>Nearby Spots</h2>
        <ProfileEdit />
        <Spots />
      </Col>
      <Col>
        <MapContainer />
      </Col>
    </Row>
  );
}
