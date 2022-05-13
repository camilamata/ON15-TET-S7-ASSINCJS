/*
2. Resolva usando async/await: 
Você quer saber quanto vai pagar em reais por um produto comprado nos EUA e para isso precisa consultar numa "API"
de cotação para descobrir o valor do Dólar no momento da compra (você deve usar o valor do dólar comercial) e calcular
o valor em Real, em seguida precisa consultar outra "API" que retorna o valor de dois juros que serão cobrados sob o 
preço em Real e retornar o valor final 

dados:
`const precoEmDolar = 1270  //preço em dólar`
valor de retorno no console: `O preço final do seu produto é R$7474,08`
dica: valor em real + (valor em real * juros1) + (valor em real * juros2) = valor final
*/

function buscarPrecoDolar() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          comercial: "5.03",
          turismo: "5.17",
        });
      }, 1000);
    });
  }
  
  function buscarJurosImportacao() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          juros1: 0.06,
          juros2: 0.11,
          message:
          "os dois juros são aplicados no valor total do produto em real",
        });
      }, 1000);
    });
  }
  
  async function calcularValorEmReal(precoEmDolar) {
    try {
      const findComercialDolar = await buscarPrecoDolar();
      const fee = await buscarJurosImportacao();
      const valueReal = findComercialDolar.comercial * precoEmDolar;
      const totalAmount = valueReal + (valueReal * (fee.juros1 + fee.juros2));
      console.log(`O preço final do seu produto é de R${totalAmount.toFixed(2)}`)
    } 
    catch (error) {
      console.error(Error);
    }
  }

  calcularValorEmReal(1270)
  