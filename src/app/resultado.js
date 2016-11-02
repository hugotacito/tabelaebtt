import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {calcular} from './calculador';

class ResultadoLinha extends React.Component {
  render() {
    let label = '';
    let formatted = '';
    let value = '';
    const data = this.props.formData;
    const className = this.props.percentual ? `${this.props.className} percentual` : `${this.props.className} cifrao`;

    if (data.ch && data.ano && data.classe && data.nivel && data.titulacao) {
      value = calcular(this.props.id, this.props.formData);
    } else {
      value = '0,00';
    }

    if (this.props.big) {
      label = <h4>{this.props.label}</h4>;
      formatted = <h4 id={this.props.id} className={className}>{value}</h4>;
    } else {
      label = <b>{this.props.label}</b>;
      formatted = <span id={this.props.id} className={className}>{value}</span>;
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

export class Resultado extends React.Component {
  render() {
    return (
      <div>
        <Row className="show-grid">
          <Col xs={12}>
            <legend>Resultado da Simulação</legend>
            <ResultadoLinha formData={this.props.formData} id="salario_bruto" className="blue-text" label="Salário Bruto" big/>
            <ResultadoLinha formData={this.props.formData} id="total_descontos" className="red-text" label="Total de Descontos" big/>
            <ResultadoLinha formData={this.props.formData} id="salario_liquido" className="green-text" label="Salário Líquido" big/>
          </Col>
        </Row>
        <br/>
        <Row className="show-grid">
          <Col xs={12}>
            <legend>Quadro Resumo</legend>
            <h4>Receitas</h4>
            <br/>
            <ResultadoLinha formData={this.props.formData} id="vencimento_basico" className="blue-text" label="Vencimento Básico"/>
            <ResultadoLinha formData={this.props.formData} id="incentivo_qualificacao" className="blue-text" label="Incentivo a Qualificação"/>
            <ResultadoLinha formData={this.props.formData} id="gratificacao_funcao" className="blue-text" label="Gratificação por Função"/>
            <ResultadoLinha formData={this.props.formData} id="adicional_periculosidade" className="blue-text" label="Adicional de Periculosidade"/>
            <ResultadoLinha formData={this.props.formData} id="auxilio_alimentacao" className="blue-text" label="Auxílio Alimentação"/>
            <ResultadoLinha formData={this.props.formData} id="auxilio_preescolar" className="blue-text" label="Auxílio Preescolar"/>
            <ResultadoLinha formData={this.props.formData} id="auxilio_transporte" className="blue-text" label="Auxílio Transporte"/>
            <ResultadoLinha formData={this.props.formData} id="saude_suplementar" className="blue-text" label="Saúde Suplementar"/>
            <ResultadoLinha formData={this.props.formData} id="outras_gratificacoes" className="blue-text" label="Outras Gratificações"/>
            <h4>Despesas</h4>
            <br/>
            <ResultadoLinha formData={this.props.formData} id="base_inss" className="gray-text" label="Base para INSS"/>
            <ResultadoLinha formData={this.props.formData} id="aliquota_inss" className="gray-text" label="Alíquota INSS" percentual/>
            <ResultadoLinha formData={this.props.formData} id="desconto_inss" className="red-text" label="Descontos INSS"/>
            <ResultadoLinha formData={this.props.formData} id="base_irpf" className="gray-text" label="Base para Imposto de Renda" percentual/>
            <ResultadoLinha formData={this.props.formData} id="aliquota_irpf" className="gray-text percentual" label="Alíquota do Imposto de Renda"/>
            <ResultadoLinha formData={this.props.formData} id="desconto_irpf" className="red-text" label="Desconto Imposto de Renda"/>
            <ResultadoLinha formData={this.props.formData} id="previdencia_complementar" className="red-text" label="Previdência Complementar"/>
            <ResultadoLinha formData={this.props.formData} id="previdencia_funpresp" className="red-text" label="Previdência FUNPRESP"/>
            <ResultadoLinha formData={this.props.formData} id="outros_descontos" className="red-text" label="Outros Descontos"/>
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
