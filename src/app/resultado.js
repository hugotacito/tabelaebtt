import React from 'react';
import {Row, Col} from 'react-bootstrap';

class ResultadoLinha extends React.Component {
  render() {
    let label = '';
    let value = '';
    const formatted = '0,00';
    const className = this.props.percentual ? `${this.props.className} percentual` : `${this.props.className} cifrao`;

    if (this.props.big) {
      label = <h4>{this.props.label}</h4>;
      value = <h4 id={this.props.id} className={className}>{formatted}</h4>;
    } else {
      label = <b>{this.props.label}</b>;
      value = <span id={this.props.id} className={className}>{formatted}</span>;
    }

    return (
      <div>
        <Row className="show-grid">
          <Col xs={7}>
            {label}
          </Col>
          <Col xs={5} className="text-right">
            {value}
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
            <ResultadoLinha id="salario_bruto" className="blue-text" label="Salário Bruto" big/>
            <ResultadoLinha id="total_descontos" className="red-text" label="Total de Descontos" big/>
            <ResultadoLinha id="salario_liquido" className="green-text" label="Salário Líquido" big/>
          </Col>
        </Row>
        <br/>
        <Row className="show-grid">
          <Col xs={12}>
            <legend>Quadro Resumo</legend>
            <h4>Receitas</h4>
            <br/>
            <ResultadoLinha id="vencimento_basico" className="blue-text" label="Vencimento Básico"/>
            <ResultadoLinha id="incentivo_qualificacao" className="blue-text" label="Incentivo a Qualificação"/>
            <ResultadoLinha id="gratificacao_funcao" className="blue-text" label="Gratificação por Função"/>
            <ResultadoLinha id="adicional_periculosidade" className="blue-text" label="Adicional de Periculosidade"/>
            <ResultadoLinha id="auxilio_alimentacao" className="blue-text" label="Auxílio Alimentação"/>
            <ResultadoLinha id="auxilio_preescolar" className="blue-text" label="Auxílio Preescolar"/>
            <ResultadoLinha id="auxilio_transporte" className="blue-text" label="Auxílio Transporte"/>
            <ResultadoLinha id="saude_suplementar" className="blue-text" label="Saúde Suplementar"/>
            <ResultadoLinha id="outras_gratificacoes" className="blue-text" label="Outras Gratificações"/>
            <h4>Despesas</h4>
            <br/>
            <ResultadoLinha id="base_inss" className="gray-text" label="Base para INSS"/>
            <ResultadoLinha id="aliquota_inss" className="gray-text" label="Alíquota INSS" percentual/>
            <ResultadoLinha id="desconto_inss" className="red-text" label="Descontos INSS"/>
            <ResultadoLinha id="base_irpf" className="gray-text" label="Base para Imposto de Renda" percentual/>
            <ResultadoLinha id="aliquota_irpf" className="gray-text percentual" label="Alíquota do Imposto de Renda"/>
            <ResultadoLinha id="desconto_irpf" className="red-text" label="Desconto Imposto de Renda"/>
            <ResultadoLinha id="previdencia_complementar" className="red-text" label="Previdência Complementar"/>
            <ResultadoLinha id="previdencia_funpresp" className="red-text" label="Previdência FUNPRESP"/>
            <ResultadoLinha id="outros_descontos" className="red-text" label="Outros Descontos"/>
          </Col>
        </Row>
      </div>
    );
  }
}
