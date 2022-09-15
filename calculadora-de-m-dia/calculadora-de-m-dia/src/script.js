//são as variáveis 
let nome = "Christiane";
let notaPrimeiroBimestre = 10;
let notaSegundoBimestre = 7;
let notaTerceiroBimestre = 6.5;
let notaQuatroBimestre = 9;

//soma de nota e usando o parseInt para arrendonda a nota que dá em numeros quebrados
let notaFinal = parseInt(notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuatroBimestre) / 4;

//O método toFixed() formata um número utilizando notação de ponto fixo.
let notaFixa = notaFinal.toFixed(1);


//console imprimi o programa no console 
console.log("Bem vindo " + nome);
console.log(notaFinal);

//Revisão
//variáveis, strings, console.log, toFixed, operações Matemática(soma e divisão), concatenação