import React from 'react';

import Form from "react-jsonschema-form";

const schema = {
  title: "Preencha todas as informações",
  type: "object",
  required: ["ch", "classe", "nivel"],
  properties: {
    ch: {type: "string", title: "Regime de Trabalho", enum: ["", "20", "40", "exclusivo"], enumNames: ["---", "20 horas", "40 horas", "Dedicação exclusiva"]},
    classe: {type: "string", title: "Classe", enum: ["", "d1", "d2", "d3", "d4", "titular"], enumNames: ["---", "D I", "D II", "D III", "D IV", "Titular"]},
    nivel: {type: "string", title: "Nível", enum: [""], enumNames: ["---"]}
  }
};

// const log = type => console.log.bind(console, type);

export class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: Math.random(),
      ch: "",
      classe: "",
      nivel: ""
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(data) {
    if (data.formData.classe === "d1" || data.formData.classe === "d2") {
      schema.properties.nivel.enum = ["", "1", "2"];
      schema.properties.nivel.enumNames = ["---", "1", "2"];
    }
    if (data.formData.classe === "d3" || data.formData.classe === "d4") {
      schema.properties.nivel.enum = ["", "1", "2", "3", "4"];
      schema.properties.nivel.enumNames = ["---", "1", "2", "3", "4"];
      console.log("2");
    }
    if (data.formData.classe === "titular") {
      schema.properties.nivel.enum = ["", "1"];
      schema.properties.nivel.enumNames = ["---", "1"];
      console.log("3");
    }
    console.log(data.formData);
    this.setState({key: Math.random(), formData: data.formData});
    data.formData = this.state.formData;
  }

  render() {
    return (
      <Form schema={schema} key={this.state.key} formData={this.state.formData} onChange={this.handleUpdate}>
        <div></div>
      </Form>
    );
  }
}
