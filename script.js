let pessoas = [];
let profissoes = [];

function adc() {
    let nome = document.getElementById("nome").value;
    let profissao = document.getElementById("profissao").value;
    
    pessoas.push(nome);
    profissoes.push(profissao);

    console.log("Pessoas: ", pessoas);
    console.log("Profissões: ", profissoes);
}

function rmv() {
    let nome = document.getElementById("nome").value;
    let profissao = document.getElementById("profissao").value;
    let index = -1;

    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i] === nome && profissoes[i] === profissao) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        console.log("A pessoa " + nome + " com a profissão " + profissao + " não está na lista.");
    } else {
        pessoas.splice(index, 1);
        profissoes.splice(index, 1);
        console.log("A pessoa " + nome + " com a profissão " + profissao + " foi removida com sucesso!");
        console.log("Pessoas: ", pessoas);
        console.log("Profissões: ", profissoes);
    }
}