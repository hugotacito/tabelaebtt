import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {calcular} from './calculador';

class ResultadoLinha extends React.Component {
  render() {
    let label = '';
    let formatted = '';
    let value = '';
    const data = this.props.formData;

    if (data.ch && data.ano && data.classe && data.nivel && data.titulacao) {
      value = parseFloat(calcular(this.props.id, this.props.formData)).toFixed(2).replace('.', ',');
    } else {
      value = '0,00';
    }

    if (this.props.big) {
      label = <h4>{this.props.label}</h4>;
      formatted = <h4 id={this.props.id} className={this.props.className}>{value}</h4>;
    } else {
      label = <b>{this.props.label}</b>;
      formatted = <span id={this.props.id} className={this.props.className}>{value}</span>;
    }

    return (
      <div>
        <Row className="show-grid">
          <Col xs={7}>
            {label}
          </Col>
          <Col xs={5} className="text-right">
            {formatted}
          </Col>
        </Row>
        <br/>
      </div>
    );
  }
}

ResultadoLinha.propTypes = {
  id: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  formData: React.PropTypes.object,
  percentual: React.PropTypes.bool,
  big: React.PropTypes.bool,
  value: React.PropTypes.string
};

const resultados = [
  {id: 'salario_bruto', className: 'blue-text cifrao', label: 'Salário Bruto'},
  {id: 'total_descontos', className: 'red-text cifrao', label: 'Total de Descontos'},
  {id: 'salario_liquido', className: 'gray-text cifrao', label: 'Salário Líquido'}
];

const receitas = [
  {id: 'vencimento_basico', label: 'Vencimento Básico'},
  {id: 'incentivo_qualificacao', label: 'Incentivo a Qualificação'},
  {id: 'gratificacao_funcao', label: 'Gratificação por Função'},
  {id: 'adicional_periculosidade', label: 'Adicional de Periculosidade'},
  {id: 'auxilio_alimentacao', label: 'Auxílio Alimentação'},
  {id: 'auxilio_preescolar', label: 'Auxílio Preescolar'},
  {id: 'auxilio_transporte', label: 'Auxílio Transporte'},
  {id: 'saude_suplementar', label: 'Saúde Suplementar'},
  {id: 'outras_gratificacoes', label: 'Outras Gratificações'}
];

const despesas = [
  {id: 'base_inss', className: 'gray-text cifrao', label: 'Base INSS'},
  {id: 'aliquota_inss', className: 'gray-text percentual', label: 'Aliquota INSS'},
  {id: 'desconto_inss', className: 'red-text cifrao', label: 'Desconto INSS'},
  {id: 'base_irpf', className: 'gray-text cifrao', label: 'Base IRPF'},
  {id: 'aliquota_irpf', className: 'gray-text percentual', label: 'Alíquota IRPF'},
  {id: 'desconto_irpf', className: 'red-text cifrao', label: 'Desconto IRPF'},
  {id: 'previdencia_complementar', className: 'red-text cifrao', label: 'Previdência Complementar'},
  {id: 'previdencia_funpresp', className: 'red-text cifrao', label: 'Previdência Funpresp'},
  {id: 'outros_descontos', className: 'red-text cifrao', label: 'Outros Descontos'}
];

export class Resultado extends React.Component {

  render() {
    const linhasResultado = [];
    const linhasReceita = [];
    const linhasDespesa = [];
    resultados.forEach(resultado => {
      linhasResultado.push(<ResultadoLinha key={resultado.id} formData={this.props.formData} id={resultado.id} className={resultado.className} label={resultado.label} big/>);
    });
    receitas.forEach(resultado => {
      linhasReceita.push(<ResultadoLinha key={resultado.id} formData={this.props.formData} id={resultado.id} className="blue-text cifrao" label={resultado.label}/>);
    });
    despesas.forEach(resultado => {
      linhasDespesa.push(<ResultadoLinha key={resultado.id} formData={this.props.formData} id={resultado.id} className={resultado.className} label={resultado.label}/>);
    });
    return (
      <div>
        <Row className="show-grid">
          <Col xs={12}>
            <legend>Resultado da Simulação</legend>
            {linhasResultado}
          </Col>
        </Row>
        <br/>
        <Row className="show-grid">
          <Col xs={12}>
            <legend>Quadro Resumo</legend>
            <h4>Receitas</h4>
            <br/>
            {linhasReceita}
            <h4>Despesas</h4>
            <br/>
            {linhasDespesa}
          </Col>
        </Row>
      </div>
    );
  }
}

Resultado.propTypes = {
  onUserInput: React.PropTypes.func.isRequired,
  formData: React.PropTypes.object.isRequired
};

