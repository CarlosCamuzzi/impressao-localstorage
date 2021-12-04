// let btn = document.querySelector('#botao');
// btn.addEventListener('click', cadastro);
//gerarRelatorio()

function gerarRelatorio() {
    // Gerando relatório
    let relatorio = {
        dados: [
            {
                numeroNF: '1234',
                dataEmissao: '01/09/2021',
                razaoSocial: 'Amazing LTDA',
                chaveAcesso: '12345678912345678912345678912345678912345678',
                valorNF: 'R$ 200,00'
            },
            {
                numeroNF: '546',
                dataEmissao: '01/10/2021',
                razaoSocial: 'ByeBye LTDA',
                chaveAcesso: '12345678912345678912345678912345678912345678',
                valorNF: 'R$ 10000,00'
            },
            {
                numeroNF: '546',
                dataEmissao: '22/09/2021',
                razaoSocial: 'Saudades LTDA',
                chaveAcesso: '12345678912345678912345678912345678912345678',
                valorNF: 'R$ 2200,00'
            },
            {
                numeroNF: '546',
                dataEmissao: '05/03/2019',
                razaoSocial: 'Abacate LTDA',
                chaveAcesso: '12345678912345678912345678912345678912345678',
                valorNF: 'R$ 100,00'
            }
        ]
    }
    buscar(relatorio);
}

// Lendo a entrada de dados do usuário e fazendo a pesquisa no array
function buscar(relatorio) {
    let inputBuscar = document.querySelector('#buscar');
    let busca = Number(inputBuscar.value);

    // Só vai passara para a exbiirTela o elemento que estiver de acordo com o dado informado pelo usuário
    for (let i = 0; i < relatorio.dados.length; i++) {
        if (busca == relatorio.dados[i].numeroNF) {
            exibirTela(relatorio, i);
        }
    }
}

// Exibir resultado do filtro de buscar() na tela
function exibirTela(relatorio, i) {
    // Pegando a div que será inserido o resultado
    let resultado = document.querySelector("#res");

    // Inserindo no HTML para exibir resultado da busca na tela
    resultado.insertAdjacentHTML("beforeend", "<br>Numero NF.........: ")
    resultado.insertAdjacentHTML("beforeend", `${relatorio.dados[i].numeroNF}`);
    resultado.insertAdjacentHTML("beforeend", "<br>Data Emissão......: ")
    resultado.insertAdjacentHTML("beforeend", `${relatorio.dados[i].dataEmissao}`);
    resultado.insertAdjacentHTML("beforeend", "<br>Razão Social.......: ")
    resultado.insertAdjacentHTML("beforeend", `${relatorio.dados[i].razaoSocial}`);
    resultado.insertAdjacentHTML("beforeend", "<br>Chave Acesso......: ")
    resultado.insertAdjacentHTML("beforeend", `${relatorio.dados[i].chaveAcesso}`);
    resultado.insertAdjacentHTML("beforeend", "<br>Valor....................: ")
    resultado.insertAdjacentHTML("beforeend", `${relatorio.dados[i].valorNF} <br>`);

    // Passado o relatório para ser salvo no localStorage
    salvarLocalStorage(relatorio, i);
}

// Refresh na page
function limpaTela() {
    var btn = document.querySelector("#limpar-tela");
    btn.addEventListener("click", function () {
        location.reload();
    });
}

// Salvando dados no localSotarge
function salvarLocalStorage(relatorio, i) {
    if (window.localStorage) {       // Suporte ao localStorage
        relatorioImpressao = JSON.parse(localStorage.getItem('relatorioImpressao') || '[]');

        // Populando de acordo com o parâmetro passado, ou seja, de acordo com o filtro feito na função buscar(relatorio)
        relatorioImpressao.push({
            'numeroNF': relatorio.dados[i].numeroNF,
            'dataEmissao': relatorio.dados[i].dataEmissao,
            'razaoSocial': relatorio.dados[i].razaoSocial,
            'chaveAcesso': relatorio.dados[i].chaveAcesso,
            'valoNF': relatorio.dados[i].valorNF,
        });

        localStorage.setItem('relatorioImpressao', JSON.stringify(relatorioImpressao));
    }
}

// Função é chamada através do botão 'imprimirRelatorio' no html
function imprimirRelatorio() {
    let i = 0
    let key = localStorage.key(i);      // Método 'key'
    let saida = localStorage.getItem(key);

    let janela = window.open();
    janela.document.write(saida);       // Exibindo localStorage em nova janela
    janela.print();                     // Abrindo opção de imprimir
    // Limpando localStorage
    localStorage.clear();               // Limpando localStorage


}



// LÓGICA DO LOCAL STORAGE
// relatorioImpressao = JSON.parse(localStorage.getItem('relatorioImpressao') || '[]');
//     // alert(localStorage.length)

//     // Populando de acordo com o parâmetro passado, ou seja, de acordo com o filtro feito na função buscar(relatorio)
//     relatorioImpressao.push({
//         'numeroNF': relatorio.dados[i].numeroNF,
//         'dataEmissao': relatorio.dados[i].dataEmissao,
//         'razaoSocial': relatorio.dados[i].razaoSocial,
//         'chaveAcesso': relatorio.dados[i].chaveAcesso,
//         'valoNF': relatorio.dados[i].valorNF
//     });

//     // relatorioImpressao.forEach(item => {
//     //     relatorioImpressaoFim = {
//     //         NumeroNF: item.numeroNF,
//     //         DataEmissao: item.dataEmissao,
//     //         RazaoSocial: item.razaoSocial,
//     //         ChaveAcesso: item.chaveAcesso,
//     //         ValorNF: item.valoNF
//     //     }
//     // });

//     localStorage.setItem('relatorioImpressao', JSON.stringify(relatorioImpressao));

