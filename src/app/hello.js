import React from 'react';
import {Navbar, Grid, Row, Col} from 'react-bootstrap';
import {Formulario} from './form';

export class Hello extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Tabela EBTT</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <Formulario/>
            </Col>
            <Col xs={12} md={4}>
              <h2>Resultado</h2>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

