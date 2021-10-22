import React from 'react';
import { Grid, Row, Col } from 'rsuite';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <Grid fluid className="h-100">
      <Row className="h-100">
        <Col cs={24} md={8} className="h-100">
          <Sidebar />
        </Col>
      </Row>
    </Grid>
  );
};

export default Home;
