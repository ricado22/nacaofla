document.addEventListener("DOMContentLoaded", function () {
    // Carregar o arquivo navbar.html e inserir no placeholder
    fetch("./navbar.html")
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
            adversario: "Deportivo Táchira",
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
    const basePath = "./logos/";

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

document.addEventListener("DOMContentLoaded", function () {
    // Lista de jogadores com suas posições no campo
    const jogadores = [
        // Goleiros
        { nome: "Agustín Rossi", imagem: "./imagens/agustinrossi.webp", posicao: "goleiro", coordenadas: { top: "80%", left: "50%" } },
        { nome: "Matheus Cunha", imagem: "./imagens/matheuscunha.webp", posicao: "goleiro", coordenadas: { top: "82%", left: "48%" } },
        { nome: "Dyogo Alves", imagem: "./imagens/dyogoalves.webp", posicao: "goleiro", coordenadas: { top: "82%", left: "52%" } },

        // Defensores
        { nome: "Léo Ortiz", imagem: "./imagens/leortiz.webp", posicao: "defesa", coordenadas: { top: "60%", left: "40%" } },
        { nome: "Léo Pereira", imagem: "./imagens/leopereira.webp", posicao: "defesa", coordenadas: { top: "60%", left: "50%" } },
        { nome: "Danilo", imagem: "./imagens/danilo.webp", posicao: "defesa", coordenadas: { top: "60%", left: "60%" } },
        { nome: "Cleiton", imagem: "./imagens/cleiton.webp", posicao: "defesa", coordenadas: { top: "60%", left: "70%" } },
        { nome: "Matías Viña", imagem: "./imagens/matiasvina.webp", posicao: "defesa", coordenadas: { top: "65%", left: "35%" } },
        { nome: "Ayrton Lucas", imagem: "./imagens/ayrtonlucas.webp", posicao: "defesa", coordenadas: { top: "65%", left: "25%" } },
        { nome: "Alex Sandro", imagem: "./imagens/alexsandro.webp", posicao: "defesa", coordenadas: { top: "65%", left: "45%" } },

        // Meio-campistas
        { nome: "Erick Pulgar", imagem: "./imagens/pulgar.webp", posicao: "meio-campo", coordenadas: { top: "50%", left: "45%" } },
        { nome: "Allan", imagem: "./imagens/allan.webp", posicao: "meio-campo", coordenadas: { top: "50%", left: "55%" } },
        { nome: "Everton Araújo", imagem: "./imagens/evertonaraujo.webp", posicao: "meio-campo", coordenadas: { top: "50%", left: "35%" } },
        { nome: "Gerson", imagem: "./imagens/gerson.webp", posicao: "meio-campo", coordenadas: { top: "45%", left: "50%" } },
        { nome: "Nicolás De La Cruz", imagem: "./imagens/delacruz.webp", posicao: "meio-campo", coordenadas: { top: "50%", left: "65%" } },
        { nome: "Giorgian De Arrascaeta", imagem: "./imagens/arrascaeta.webp", posicao: "meio-campo", coordenadas: { top: "45%", left: "40%" } },
        { nome: "Matheus Gonçalves", imagem: "./imagens/matheusgonçalves.webp", posicao: "meio-campo", coordenadas: { top: "45%", left: "30%" } },
        { nome: "Lorran", imagem: "./imagens/lorran.webp", posicao: "meio-campo", coordenadas: { top: "45%", left: "60%" } },

        // Atacantes
        { nome: "Bruno Henrique", imagem: "./imagens/brunohenrique.webp", posicao: "ataque", coordenadas: { top: "30%", left: "50%" } },
        { nome: "Juninho", imagem: "./imagens/juninho.webp", posicao: "ataque", coordenadas: { top: "30%", left: "40%" } },
        { nome: "Michael", imagem: "./imagens/michael.webp", posicao: "ataque", coordenadas: { top: "30%", left: "60%" } },
        { nome: "Pedro", imagem: "./imagens/pedro.webp", posicao: "ataque", coordenadas: { top: "25%", left: "45%" } },
        { nome: "Luiz Araújo", imagem: "./imagens/luisaraujo.webp", posicao: "ataque", coordenadas: { top: "25%", left: "55%" } },
        {
            nome: "Gonzalo Plata", imagem: "./imagens/plata.webp", posicao: "ataque", coordenadas: { top: "35%", left: "50%" }
        }
    ];


    // Elementos HTML
    const listaJogadores = document.getElementById("jogadores-lista");
    const campo = document.getElementById("campo-container");

    // Organiza jogadores por posição
    const posicoes = {
        goleiro: [],
        defesa: [],
        meioCampo: [],
        ataque: []
    };

    jogadores.forEach(jogador => {
        if (jogador.posicao === "defesa") posicoes.defesa.push(jogador);
        else if (jogador.posicao === "meio-campo") posicoes.meioCampo.push(jogador);
        else if (jogador.posicao === "ataque") posicoes.ataque.push(jogador);
        else if (jogador.posicao === "goleiro") posicoes.goleiro.push(jogador);
    });

    // Função para renderizar jogadores no campo ao clicar na lista
    const renderizarJogador = jogador => {
        const jogadorDiv = document.createElement("div");
        jogadorDiv.classList.add("jogador");

        const imgJogador = document.createElement("img");
        imgJogador.src = jogador.imagem;
        imgJogador.alt = jogador.nome;
        imgJogador.style.width = "100px";
        imgJogador.style.borderRadius = "50%";

        jogadorDiv.style.position = "absolute";
        jogadorDiv.style.top = jogador.coordenadas.top;
        jogadorDiv.style.left = jogador.coordenadas.left;

        jogadorDiv.appendChild(imgJogador);
        campo.appendChild(jogadorDiv);
    };

    // Gera listas por posição
    Object.keys(posicoes).forEach(posicao => {
        const header = document.createElement("h4");
        header.textContent = posicao.charAt(0).toUpperCase() + posicao.slice(1);
        listaJogadores.appendChild(header);

        posicoes[posicao].forEach(jogador => {
            const li = document.createElement("li");
            li.textContent = jogador.nome;
            li.style.cursor = "pointer";
            li.style.marginBottom = "10px";
            li.style.padding = "5px";
            li.style.border = "1px solid #ccc";
            li.style.borderRadius = "5px";
            li.style.backgroundColor = "#f9f9f9";

            li.addEventListener("click", () => renderizarJogador(jogador));
            listaJogadores.appendChild(li);
        });
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
        gols: 2
    },
    cleiton: {
        nome: 'Cleiton',
        idade: 24,
        posicao: 'Zagueiro',
        jogos: 22,
        gols: 1
    },
    leoOrtiz: {
        nome: 'Léo Ortiz',
        idade: 29,
        posicao: 'Zagueiro',
        jogos: 28,
        gols: 3
    },
    danilo: {
        nome: 'Danilo',
        idade: 25,
        posicao: 'Zagueiro',
        jogos: 25,
        gols: 2
    },
    varela: {
        nome: 'Varela',
        idade: 27,
        posicao: 'Lateral Direito',
        jogos: 20,
        assistencias: 5
    },
    wesley: {
        nome: 'Wesley',
        idade: 22,
        posicao: 'Lateral Direito',
        jogos: 18,
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
        assistencias: 7
    },
    alexSandro: {
        nome: 'Alex Sandro',
        idade: 30,
        posicao: 'Lateral Esquerdo',
        jogos: 22,
        assistencias: 3
    },
    evertonAraujo: {
        nome: 'Everton Araújo',
        idade: 24,
        posicao: 'Volante',
        jogos: 18,
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

