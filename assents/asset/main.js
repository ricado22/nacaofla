document.addEventListener("DOMContentLoaded", function () {
    // Carregar o arquivo navbar.html e inserir no placeholder
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o navbar:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    // Lista de jogos com informações dos times
    const jogos = [
        {
            data: "29/03/2025",
            horario: "21:00",
            adversario: "internacional",
            campeonato: "Brasileiro"
        },
        {
            data: "03/04/2025",
            horario: "21:30",
            adversario: "Deportivo tachira",
            campeonato: "Libertadores"
        },
        {
            data: "08/04/2025",
            horario: "21:00",
            adversario: "Palmeiras",
            campeonato: "Brasileiro"
        }
    ];

    // Define o caminho base das logos
    const basePath = "./assents/logos/";

    // Seleciona o corpo da tabela no HTML
    const tabelaCorpo = document.getElementById("calendario-corpo");

    // Adiciona cada jogo dinamicamente à tabela
    jogos.forEach(jogo => {
        // Cria uma nova linha para o jogo
        const linha = document.createElement("tr");

        // Coluna de Data
        const colunaData = document.createElement("td");
        colunaData.textContent = jogo.data;

        // Coluna de Horário
        const colunaHorario = document.createElement("td");
        colunaHorario.textContent = jogo.horario;

        // Coluna de Adversário com logo
        const colunaAdversario = document.createElement("td");
        const imgLogo = document.createElement("img");
        imgLogo.src = `${basePath}${jogo.adversario.toLowerCase()}.png`; // Nome do arquivo baseado no nome do time
        imgLogo.alt = `Logo do time ${jogo.adversario}`;
        imgLogo.style.width = "70px"; // Tamanho pequeno do logo
        imgLogo.style.marginRight = "5px"; // Espaçamento ao lado do nome

        const nomeAdversario = document.createElement("span");
        nomeAdversario.textContent = jogo.adversario;


        // Adiciona a imagem e o nome do adversário
        colunaAdversario.appendChild(imgLogo);
        colunaAdversario.appendChild(nomeAdversario);


        // Coluna de campeonato
        const colunaCampeonato = document.createElement("td");
        colunaCampeonato.textContent = jogo.campeonato;

        // Adiciona as colunas na linha
        linha.appendChild(colunaData);
        linha.appendChild(colunaHorario);
        linha.appendChild(colunaAdversario);
        linha.appendChild(colunaCampeonato);

        // Adiciona a linha ao corpo da tabela
        tabelaCorpo.appendChild(linha);
    });
});

const estatisticasJogadores = {
    dyogoAlvez: {
        nome: 'Dyogo Alvez',
        idade: 27,
        posicao: 'Goleiro',
        jogos: 20,
        defesas: 50
    },
    matheusCunha: {
        nome: 'Matheus Cunha',
        idade: 23,
        posicao: 'Goleiro',
        jogos: 15,
        defesas: 40
    },
    rossi: {
        nome: 'Agustín Rossi',
        idade: 29,
        posicao: 'Goleiro',
        jogos: 30,
        defesas: 90
    },
    leoPereira: {
        nome: 'Léo Pereira',
        idade: 28,
        posicao: 'Zagueiro',
        jogos: 27,
        gols: 2,
        assistencias: 5
    },
    cleiton: {
        nome: 'Cleiton',
        idade: 24,
        posicao: 'Zagueiro',
        jogos: 22,
        gols: 1,
        assistencias: 5
    },
    leoOrtiz: {
        nome: 'Léo Ortiz',
        idade: 29,
        posicao: 'Zagueiro',
        jogos: 28,
        gols: 3,
        assistencias: 5
    },
    danilo: {
        nome: 'Danilo',
        idade: 25,
        posicao: 'Zagueiro',
        jogos: 25,
        gols: 2,
        assistencias: 5
    },
    varela: {
        nome: 'Varela',
        idade: 27,
        posicao: 'Lateral Direito',
        jogos: 20,
        gols: 0,
        assistencias: 5

    },
    wesley: {
        nome: 'Wesley',
        idade: 22,
        posicao: 'Lateral Direito',
        jogos: 18,
        gols: 0,
        assistencias: 3

    },
    matiasVina: {
        nome: 'Matías Viña',
        idade: 27,
        posicao: 'Lateral Esquerdo',
        jogos: 25,
        gols: 1,
        assistencias: 4
    },
    ayrtonLucas: {
        nome: 'Ayrton Lucas',
        idade: 26,
        posicao: 'Lateral Esquerdo',
        jogos: 27,
        gols: 0,
        assistencias: 7
    },
    alexSandro: {
        nome: 'Alex Sandro',
        idade: 30,
        posicao: 'Lateral Esquerdo',
        jogos: 22,
        gols: 0,
        assistencias: 3
    },
    evertonAraujo: {
        nome: 'Everton Araújo',
        idade: 24,
        posicao: 'Volante',
        jogos: 18,
        gols: 0,
        assistencias: 4
    },
    erickPulgar: {
        nome: 'Erick Pulgar',
        idade: 29,
        posicao: 'Volante',
        jogos: 30,
        gols: 2,
        assistencias: 6
    },
    gerson: {
        nome: 'Gerson',
        idade: 26,
        posicao: 'Volante',
        jogos: 32,
        gols: 6,
        assistencias: 9
    },
    allan: {
        nome: 'Allan',
        idade: 28,
        posicao: 'Volante',
        jogos: 30,
        gols: 2,
        assistencias: 5
    },
    matheusGoncalves: {
        nome: 'Matheus Gonçalves',
        idade: 18,
        posicao: 'Meia',
        jogos: 15,
        gols: 2,
        assistencias: 4
    },
    deArrascaeta: {
        nome: 'De Arrascaeta',
        idade: 29,
        posicao: 'Meia',
        jogos: 25,
        gols: 10,
        assistencias: 8
    },
    deLaCruz: {
        nome: 'De La Cruz',
        idade: 26,
        posicao: 'Meia',
        jogos: 30,
        gols: 8,
        assistencias: 10
    },
    lorran: {
        nome: 'Lorran',
        idade: 19,
        posicao: 'Meia',
        jogos: 10,
        gols: 1,
        assistencias: 2
    },
    brunoHenrique: {
        nome: 'Bruno Henrique',
        idade: 34,
        posicao: 'Atacante',
        jogos: 20,
        gols: 12,
        assistencias: 3
    },
    juninho: {
        nome: 'Juninho',
        idade: 20,
        posicao: 'Atacante',
        jogos: 15,
        gols: 3,
        assistencias: 2
    },
    michael: {
        nome: 'Michael',
        idade: 25,
        posicao: 'Atacante',
        jogos: 25,
        gols: 7,
        assistencias: 5
    },
    pedro: {
        nome: 'Pedro',
        idade: 25,
        posicao: 'Atacante',
        jogos: 28,
        gols: 18,
        assistencias: 4
    },
    gonzaloPlata: {
        nome: 'Gonzalo Plata',
        idade: 24,
        posicao: 'Atacante',
        jogos: 22,
        gols: 4,
        assistencias: 6
    }
};

function toggleEstatisticas(jogadorId) {
    const estatisticasDiv = document.getElementById(`estatisticas-${jogadorId}`);
    const isVisible = estatisticasDiv.style.display === 'block';

    if (isVisible) {
        estatisticasDiv.style.display = 'none'; // Ocultar estatísticas
    } else {
        estatisticasDiv.style.display = 'block'; // Mostrar estatísticas

        const jogador = estatisticasJogadores[jogadorId];
        estatisticasDiv.innerHTML = `
            <h2>${jogador.nome}</h2>
            <p>Idade: ${jogador.idade}</p>
            <p>Posição: ${jogador.posicao}</p>
            <p>Jogos: ${jogador.jogos}</p>
            ${jogador.posicao !== 'Goleiro' ? `<p>Assistências: ${jogador.assistencias || 0}</p>` : ''}
            ${jogador.posicao === 'Goleiro' ? `<p>Defesas: ${jogador.defesas || 0}</p>` : ''}
            ${jogador.gols ? `<p>Gols: ${jogador.gols}</p>` : ''}
        `;
    }
}

