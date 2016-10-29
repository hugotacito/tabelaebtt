import React from 'react';

import Form from "react-jsonschema-form";

const schema = {
  title: "Preencha todas as informações",
  type: "object",
  required: ["title"],
  properties: {
    cargaHoraria: {type: "string", title: "Carga Horária", default: ""},
    done: {type: "boolean", title: "Done?", default: false},
    opcoes: {type: "string", title: "Opções", enum: ["1", "2", "3"], enumNames: ["um", "dois", "três"]}
  }
};

// const log = type => console.log.bind(console, type);

function log(type) {
  console.log(type.formData);
}

export class Formulario extends React.Component {

  render() {
    return (
      <Form schema={schema} onChange={log} onSubmit={log("submitted")} onError={log("errors")}>
        <div></div>
      </Form>
    );
  }
}
