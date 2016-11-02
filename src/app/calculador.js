export function calcular(field, data) {
  if (field === 'vencimento_basico') {
    return vencimentoBasico(data);
  }
  return 'error';
}

function vencimentoBasico(data) {
  if (data.ch === '20') {
    return '1.111,00';
  }
  return '111111';
}
