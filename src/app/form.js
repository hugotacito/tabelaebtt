import React from 'react';

import Form from "react-jsonschema-form";

const schema = {
  title: "Preencha todas as informações",
  type: "object",
  required: ["ano", "ch", "classe", "nivel", "titulacao"],
  properties: {
    ano: {type: "string", title: "Estrutura de Vencimento Básico do EBTT", enum: ["", "2016.2", "2017.1", "2018.1", "2019.1"], enumNames: ["---", "Agosto de 2016", "Janeiro de 2017", "Janeiro de 2018", "Janeiro de 2019"]},
    ch: {type: "string", title: "Regime de Trabalho", enum: ["", "0", "1", "2"], enumNames: ["---", "20 horas", "40 horas", "Dedicação exclusiva"]},
    classe: {type: "string", title: "Classe", enum: ["", 0, 2, 4, 8, 12], enumNames: ["---", "D I", "D II", "D III", "D IV", "Titular"]},
    nivel: {type: "string", title: "Nível", enum: [""], enumNames: ["---"]},
    titulacao: {type: "string", title: "Titulação", enum: ["", "graduacao", "aperfeicoamento", "especializacao", "mestrado", "doutorado"], enumNames: ["---", "Graduação", "Aperfeiçoamento", "Especialização ou RSC-I", "Mestrado ou RSC-II", "Doutorado ou RSC-III"]}
  }
};

export class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: Math.random()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(data) {
    if (data.formData.classe === "0" || data.formData.classe === "2") {
      schema.properties.nivel.enum = ["", 0, 1];
      schema.properties.nivel.enumNames = ["---", 1, 2];
    }
    if (data.formData.classe === "4" || data.formData.classe === "8") {
      schema.properties.nivel.enum = ["", 0, 1, 2, 3];
      schema.properties.nivel.enumNames = ["---", 1, 2, 3, 4];
    }
    if (data.formData.classe === "12") {
      schema.properties.nivel.enum = ["", 0];
      schema.properties.nivel.enumNames = ["---", 1];
    }
    this.setState({key: Math.random()});
    this.props.onUserInput({formData: data.formData});
    data.formData = this.props.formData;
  }

  render() {
    return (
      <Form schema={schema} key={this.state.key} formData={this.props.formData} onChange={this.handleChange}>
        <div></div>
      </Form>
    );
  }
}

Formulario.propTypes = {
  onUserInput: React.PropTypes.func.isRequired,
  formData: React.PropTypes.object.isRequired
};
