const moment = require('moment');

function myName(name) {
    console.log(name);
    console.log(moment().format('DD/MM/YYYY HH:mm:ss'));
}

myName('eduardo Correia');

// No terminal, execute o comando node index.js e veja o resultado.
// Para funcionar, o arquivo index.js deve estar no mesmo diretório que o terminal está apontando,
// ou seja, no mesmo diretório que o terminal está aberto (aula-01).

// npm init -y -> cria o arquivo package.json

// npm i moment --save -> Essa biblioteca é muito utilizada para manipulação de datas.