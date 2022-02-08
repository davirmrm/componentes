export const adicionaZero = (numero) => {
  if (numero <= 9) 
      return `0${numero}`;
  else
      return numero; 
}

const linguagem = {
  'pt-BR': {
    style: 'currency',
    currency: 'BRL' 
  },
  'en-US': {
    currencyDisplay: 'narrowSymbol',
    style: 'currency',
    currency: 'USD' 
  }
}


export const MaskTelefone = (valor) => {
  valor = valor || ''
  let valueNew = ''
  if (valor.length <= 10) {
    valueNew = valor
      .replace(/\D/g, '')
      .replace(/^(\d)/, '($1')
      .replace(/(.{3})(\d)/, '$1)$2')
      .replace(/(.{4})(\d)/, '$1 $2')
      .replace('-', '')
      .replace(/(\d{4})(\d)/, '$1-$2')
  } else if (valor.length > 10) {
    valueNew = valor
      .replace(/\D/g, '')
      .replace(/^(\d)/, '($1')
      .replace(/(.{3})(\d)/, '$1)$2')
      .replace(/(.{4})(\d)/, '$1 $2')
      .replace('-', '')
      .replace(/(\d{5})(\d)/, '$1-$2')
  }
  return valueNew
}

export const MaskItemCep = (valor) => {
  let valueNew = ''
  valueNew = valor.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2')
  return valueNew
}

export const MaskCpf = (valor) => {
  let valueNew = ''
  valueNew = valor
  .replace(/\D/g, '')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1-$2')
  
  return valueNew
}

export const MaskData = (valor) => {
  let valueNew = ''
  valueNew = valor
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
  return valueNew
}

export const MaskValor = (valor) => {
  valor = valor || ''
  let valueNew = ''
  valueNew = valor
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
  return valueNew
}

export const MaskValorMoeda = (valor, moeda = 'en-US') => {
  valor = valor || ''
  let valueNew = ''
  valueNew = valor.toLocaleString(moeda, linguagem[moeda])
  console.log(valueNew, 'MaskValorMoeda');
  return valueNew
}

export const MaskValorMoedaex = (valor, moeda = 'en-US') => {
  const idiomamoeda = moeda === 'pt-BR' ? 'R$ ':'$'
  valor = valor.replace(idiomamoeda, '').split(',')
  console.log(idiomamoeda, 'idiomamoeda', moeda);
  const formatter = new Intl.NumberFormat(moeda, linguagem[moeda]);
  const test = formatter.format(valor[0]);
  // const davi = test.replace('R$ ', '').split(',')
  return test;
}

export const maskFormat = (m, e) => {
  switch (m.type) {
    case 'cep':
      return MaskItemCep(e)
    case 'cpf':
      return MaskCpf(e)
    case 'date':
      return MaskData(e)

    default:
      return e
  }
}

export const DataTransform = (valor, options) => {
  let valueNew = ''
  let data = new Date(valor);
  if (options?.format) {
    const formato = options.format.split('/');
    const formType = {
      'DD': adicionaZero(data.getDate()+1),
      'MM': adicionaZero(data.getMonth()+1),
      'YYYY': data.getFullYear()
    }
    valueNew = `${formType[formato[0]]}/${formType[formato[1]]}/${formType[formato[2]]}`;
  } else {
    valueNew = `${adicionaZero(data.getDate()+1)}/${adicionaZero(data.getMonth()+1)}/${data.getFullYear()}`;
  }
  return valueNew
}

export const MaskDataHora = (valor, options) => {
  let valueNew = {data: '', hora: ''}
  let data = new Date(valor);
  if (options?.format) {
    const formato = options.format.split('/');
    const formType = {
      'DD': adicionaZero(data.getDate()),
      'MM': adicionaZero(data.getMonth()+1),
      'YYYY': data.getFullYear()
    }
    const formatoHora = options.format.split(':');
    const formTypeHora = {
      'HH': adicionaZero(data.getHours()),
      'MM': adicionaZero(data.getMinutes()),
      'SS': adicionaZero(data.getSeconds())
    }
    
    valueNew.data = `${formType[formato[0]]}/${formType[formato[1]]}/${formType[formato[2]]}`;
    valueNew.hora = `${formTypeHora[formatoHora[0]]}:${formTypeHora[formatoHora[1]]}:${formTypeHora[formatoHora[2]]}`;
  } else {
    valueNew.data = `${adicionaZero(data.getDate())}/${adicionaZero(data.getMonth()+1)}/${data.getFullYear()}`;
    valueNew.hora = `${adicionaZero(data.getHours())}:${adicionaZero(data.getMinutes())}:${adicionaZero(data.getSeconds())}`;
  }
  return valueNew
}

export const MaskHora = (valor, options) => {
  let valueNew = ''
  const hora = valor.split(':');
  if (options?.format) {
    const formatoHora = options.format.split(':');
    const formTypeHora = {
      'HH': hora[0].length < 2 ? adicionaZero(hora[0]) : hora[0],
      'MM': hora[1].length < 2 ? adicionaZero(hora[1]) : hora[1],
      'SS': hora[2].length < 2 ? adicionaZero(hora[2]) : hora[2]
    }
    formatoHora.map((f, i)=> {
      valueNew = `${valueNew}${i?':':''}${formTypeHora[f]}`
    })
    return valueNew
  } else {
    return valor.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1:$2').replace(/(\d{2})(\d)/, '$1:$2').substr(0, 8)
  }
}


export const MaskDocumento = (valor) => {
  let valueNew = ''
  if (valor.length < 14) {
    valueNew = valor
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
  } else {
    valueNew = valor
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1 $2 $3/$4-$5")
  }
  
  return valueNew
}