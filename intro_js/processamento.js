// ***************** PROCESSAMENTO SÍNCRONO (BLOQUEANTE) *****************//


// ---------- SÍNCRONO ----------
const oi = () => console.log('oi');

console.log('Começou');   // Executa primeiro
oi();                     // Espera a função `oi` terminar
console.log('Terminou');  // Só executa depois que `oi` termina

// ***************** PROCESSAMENTO ASSÍNCRONO (NÃO BLOQUEANTE) - Callback Hell *****************//

const fs = require('fs'); // Módulo do Node.js para manipulação de arquivos

// Função que abre um arquivo, lê seu conteúdo e grava o dobro em outro arquivo
const abrirArquivo = function(nomeArquivo) {
    // Callback para lidar com o conteúdo do arquivo
    const exibirConteudo = function(erro, conteudo) {
        if (erro) {
            console.log(`Deu erro: ${erro}`);
        } else {
            console.log(`Funcionou: ${conteudo.toString()}`);
            
            // Calcula o dobro do conteúdo lido
            const dobro = Number(conteudo.toString()) * 2;

            // Callback da escrita do novo arquivo
            const finalizar = (erro) => {
                if (erro)
                    console.log(`A escrita deu erro: ${erro}`);
                else
                    console.log('A escrita funcionou');
            };

            // Escreve o resultado no arquivo "dobro.txt"
            fs.writeFile('dobro.txt', dobro.toString(), finalizar);
        }
    };

    // Operação assíncrona: leitura do arquivo
    fs.readFile(nomeArquivo, exibirConteudo);

    // Essa linha é executada imediatamente, antes da leitura terminar
    console.log('Fim da função exibirConteudo');
};

// Chamada da função com o nome do arquivo a ser lido
abrirArquivo("arquivo.txt");

// IO-Bound: operações de entrada/saída que dependem do disco, rede, etc.

// Síncrono (Bloqueante):
// As instruções são executadas uma após a outra.
// O programa espera a execução de cada linha.



// Assíncrono (Não bloqueante):
// Usa callbacks ou promises para lidar com operações que demoram (ex: leitura de arquivo).
// O programa não espera a operação terminar para continuar.


// Callback Hell:
// Quando uma função assíncrona chama outra dentro de outra, formando uma estrutura de "escada".
// Difícil de ler e manter — por isso hoje em dia se prefere Promises ou async/await.