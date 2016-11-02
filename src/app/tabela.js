import React from 'react';
import {Navbar, Grid, Row, Col} from 'react-bootstrap';
import {Formulario} from './form';
import {Resultado} from './resultado';
export class Tabela extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  handleUserInput(data) {
    this.setState({formData: data.formData});
  }
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
            <Col xs={12} md={6}>
              <Formulario formData={this.state.formData} onUserInput={this.handleUserInput}/>
            </Col>
            <Col xs={12} md={6}>
              <Resultado formData={this.state.formData} onUserInput={this.handleUserInput}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

