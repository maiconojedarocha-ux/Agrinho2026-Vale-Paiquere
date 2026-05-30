//____________Preparando terreno__________________________
document.addEventListener("DOMContentLoaded", function() {

    const mensagemElemento = document.getElementById("mensagem-js");

    if (mensagemElemento) {
        mensagemElemento.innerText = "Bem-vindo ao Vale Paiquerê! Onde a produção encontra a natureza.";
    } else {
        //console.warn("Aviso: O elemento 'mensagem-js' não foi encontrado nesta página.");
    }

    console.log("Sistema Vale Paiquerê iniciado com sucesso.");
});

//_______________Cabeçalho fixo superior_____________________________

document.addEventListener("DOMContentLoaded", function() {
    
    const header = document.getElementById('cabecalho-fixo');

    window.addEventListener('scroll', function() {
       if (window.scrollY > 150) {
    header.classList.add('ativo');
} else {
    header.classList.remove('ativo');
    
    const menu = document.getElementById('menu-mobile'); 
    
    if (menu.classList.contains('aberto')) {
        menu.classList.remove('aberto');
    }
}
    });

});

//___________________Conversa da gralha azul___________________________

let indiceFala = 0;
let nomeUsuario = "";
let aguardandoGralha = false;

const roteiroGralha = [
    "Você sabia que eu sou a maior plantadora de Araucárias do Paraná?",
    "Eu escondo os pinhões para comer depois, mas acabo esquecendo alguns pelo caminho...",
    "É desses pinhões esquecidos que nascem novas árvores.",
    "É assim que a natureza mantém o seu próprio equilíbrio.",
    "Mas esse equilíbrio vai muito além das florestas...",
    "Às vezes, olhamos para o campo e vemos apenas a planta crescendo, sem notar o que sustenta aquela imagem.",
    "O futuro que queremos não nasce de fórmulas mágicas,", 
    "mas de uma mudança real nos nossos hábitos.",
    "Se consumirmos sem pensar, a indústria produzirá sem limites,", 
    "E o preço disso aparecerá na nossa saúde...",
    "Produzir com força é necessário para alimentar o mundo,", 
    "mas produzir com consciência é o que nos manterá vivos.",
    "Que tal explorarmos o Vale Paiquerê juntos?", 
    "Quero te mostrar como a produção e a natureza podem caminhar lado a lado.",
    "Siga em frente e descubra o valor de cada semente plantada com respeito!"
];

if (window.innerWidth < 600) {
    roteiroGralha.length = 0; 
    roteiroGralha.push(
        "Sou a maior plantadora\nde Araucárias do Paraná!",
        "Escondo pinhões para comer,\nmas esqueço alguns...",
        "Desses pinhões esquecidos\nnascem novas árvores.",
        "A natureza mantém\no seu próprio equilíbrio.",
        "Mas esse equilíbrio vai\nalém das florestas.",
        "No campo, nem sempre vemos\no que sustenta a vida.",
        "O futuro não nasce\nde fórmulas mágicas,",
        "mas de mudanças reais\nnos nossos hábitos.",
        "Consumo sem pensar gera\nprodução sem limites.",
        "O preço disso aparecerá\nna nossa saúde...",
        "Produzir para alimentar\no mundo é vital,",
        "mas produzir com consciência\nnos manterá vivos.",
        "Que tal explorar o\nVale Paiquerê juntos?",
        "Natureza e produção podem\ncaminhar lado a lado.",
        "Descubra o valor de cada\nsemente plantada!"
    );
}

function gerenciarGralha() {
    const campoNome = document.getElementById('input-nome');
    const balaoTexto = document.getElementById('texto-gralha');
    const imagemGralha = document.getElementById('gralha-completa');
    const botao = document.getElementById('btn-acao');

    if (aguardandoGralha) return;

    aguardandoGralha = true;
    botao.style.opacity = "0.5";
    imagemGralha.src = "Ilustracao/Site/GalhaAzulFalando.gif";

    //__Lógica do roteiro Roteiro__
    if (nomeUsuario === "") {
        let nomeCapturado = campoNome.value.trim();
        nomeUsuario = (nomeCapturado === "") ? "Viajante" : nomeCapturado;
        
        campoNome.style.display = "none"; 
        balaoTexto.innerText = `Olá, ${nomeUsuario}! 
        Que bom ter você aqui no Vale Paiquerê.`;
    } 
    else if (indiceFala < roteiroGralha.length) {
        balaoTexto.innerText = roteiroGralha[indiceFala];
        indiceFala++;
    }

    //__Timer para a gralha parar de falar__

    setTimeout(() => {
        aguardandoGralha = false;
        botao.style.opacity = "1";
        imagemGralha.src = "Ilustracao/Site/GralhaAzulParada.gif";

        // Se o roteiro acabar, esconde o botão de passar
        if (nomeUsuario !== "" && indiceFala >= roteiroGralha.length) {
            botao.style.display = "none";
        }
    }, 3000);

}

//____________Parte mobile/Botão menu_________________

function toggleMenu() {
    const menu = document.getElementById('menu-mobile');
    menu.classList.toggle('aberto');
}

//___________Botão de Alternancia de Escuro e Claro___________________
function toggleDarkMode() {
    document.body.classList.toggle('dark-theme');
}

function verificarHorario() {
    const data = new Date();
    const hora = data.getHours();
    const body = document.body;

    if (hora >= 18 || hora < 6) {
        body.classList.add('dark-theme');
        criarVagalumesNasLaterais();
    } else {
        body.classList.remove('dark-theme');
        criarVagalumesNasLaterais();
    }
}

verificarHorario();

//______________Lógica do manual do jogo_____________________________
const botaoLivro = document.querySelector('[title="Manual"]');
const manual = document.getElementById('manual-overlay');

botaoLivro.addEventListener('click', function() {
    manual.classList.toggle('escondido');
});

manual.addEventListener('click', function() {
    manual.classList.add('escondido');
});

document.querySelector('.sessao-texto-jogo').addEventListener('click', function(e) {
    e.stopPropagation();
});

//__________________Lógica do jogo de escolhas___________________________
const roteiro = {
    //________Inicio/Boas-Vindas_____Imagem______

    1: {
        texto: `Bem-vindo(a) ao Vale Paiquerê! Aqui a terra é mais reluzente que uma bela esmeralda. Mas tenho que te contar um segredo: o Vale Paiquerê é um lugar único, mas precisa de um equilíbrio que ninguém jamais teve — nem mesmo eu. Porém você está aqui para nos ajudar agora! Então o que acha de começarmos a explorar o vale e descobrir como podemos melhorar juntos? Vamos, eu te mostro o caminho!`,
        imagem: "Ilustracao/Jogo/Gemini_JogoNivel1.png",
        tipo: "intro",
        proximo: 2
    },

    //___________NÍVEL 2: Decisão_____Sem imagem_______
    2: {
        titulo: "A Fonte da Vida",
        texto: "Caminhando por matas vibrantes em verde-limão, você avista um tranquilo riacho que corta o vale, onde se encontra uma boa quantidade de gado. Eles estão bebendo a água direto do riacho — se refrescando desse quente e ensolarado dia. Porém, estão pisoteando a margem, o que pode causar erosões no futuro. O que fazer agora?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Cercar o único lugar que eles têm para se refrescar, levando a água em bebedouros diariamente", proximo: 2.1 },
        opcaoB: { texto: "Deixar como está, permitindo que se banhem nessas águas antes que o inverno chegue", proximo: 2.2 }
    },

    //___________NÍVEL 2: CONSEQUÊNCIAS_____Imagem_________
    2.1: {
        texto: "No início, o gado estranhou a falta do riacho. Porém, sua decisão evitou a destruição da única fonte de água local. Hoje, adaptados à água limpa e fresca dos bebedouros, os animais estão ainda mais saudáveis e calmos, aproveitando a proximidade com o cocho de ração.",
        imagem: "Ilustracao/Jogo/Gemini_JogoNivel2_01.png", // Imagem de sucesso
        tipo: "intro",
        proximo: 3
    },
    2.2: {
        texto: "O gado aproveitou intensamente os últimos dias de calor, banhando-se livremente no riacho. Porém, com a chegada do inverno, o estrago ficou visível: o pisoteio constante destruiu completamente a vegetação da margem, iniciando um processo grave de erosão que agora ameaça assorear o leito do rio.",
        imagem: "Ilustracao/Jogo/Gemini_JogoNivel2_02.png", // Imagem de erro
        tipo: "intro",
        proximo: 3.1
    },

    //___________NÍVEL 3: Duas perguntas (4 Escolhas)___________
    3: {
        titulo: "Nuvens com Asas?!",
        texto: "Já faz alguns meses que você se estabeleceu no Vale Paiquerê, aprendendo sobre a fauna e a flora locais. Mas o verão chegou, e com ele os insetos saíram da hibernação, famintos pela sua mediana plantação. O que fazer agora? Eles estão prestes a devorar todo o seu sofrido ganha-pão.",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Investir seu tempo precioso pesquisando sobre predadores naturais para introduzir um controle biológico — uma alternativa sustentável, porém altamente arriscada pelo tempo perdido.", proximo: 3.2 },
        opcaoB: { texto: "Comprar defensivos químicos adequados direto da prateleira. Um caminho mais seguro e imediato, focado em salvar a lavoura sem poluir o local do plantio.", proximo: 3.3 }
    },

    // Pergunta 3.1: Ramificação vinda da CRISE (2.2)
    3.1: {
        titulo: "A Seca da Fonte",
        texto: "Com a água barrenta, o gado começou a ficar doente, resultando na desidratação dos animais. O prejuízo foi visível, custando algumas cabeças de gado que não resistiram. Além disso, essa escassez está prejudicando sua plantação; se não for cuidada, o saldo será negativo no final do mês. O que fazer agora? Não podemos perder mais nada.",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Investir o pouco dinheiro restante em árvores frutíferas, plantando-as à margem do riacho e construindo uma estufa. Isso significa aceitar a baixa produção do ano e terminar o mês com o saldo negativo.", proximo: 3.4 },
        opcaoB: { texto: "Optar por fertilizantes industriais químicos no intuito de reforçar o crescimento da plantação. Um caminho mais seguro economicamente, pois o saldo fica nivelado no final do mês.", proximo: 3.5 }
    },

    //___________NÍVEL 3: QUATRO CONSEQUÊNCIAS___________________________

    // Resultado do Controle Biológico (3 -> Opção A)
    3.2: {
        texto: "O controle biológico acabou não dando um resultado milagroso, permitindo que os insetos comessem metade da sua plantação. Porém, restou o suficiente para vender e cobrir a maioria das dívidas. Afinal, agora você está preparado contra as pragas na próxima temporada, tendo acumulado mais tempo de estudo.",
        imagem: "Ilustracao/Jogo/Nivel3/Gemini_JogoNivel3_01.png", // Imagem de equilíbrio perfeito
        tipo: "intro",
        proximo: 4
    },

    // Resultado do Defensivo Químico (3 -> Opção B)
    3.3: {
        texto: "Com o veneno aplicado nas plantas, os insetos começaram a sumir diariamente, resultando em uma farta colheita. Além de cobrir os gastos do mês, também sobrou uma quantidade considerável para reinvestir. Por outro lado, o produto espantou outros predadores naturais de pragas e o químico usado repetidamente escorreu para as margens do seu riacho, deixando a água parcialmente poluída e inutilizável.",
        imagem: "Ilustracao/Jogo/Nivel3/Gemini_JogoNivel3_02.png", // Imagem de alerta ambiental
        tipo: "intro",
        proximo: "4.1"
    },

    // Resultado do Reflorestamento na Crise (3.1 -> Opção A)
    3.4: {
        texto: "O processo foi lento, e o custo resultou na venda do seu carro. Mas as primeiras árvores começaram a segurar a terra e já produziram seus primeiros frutos, o que logo permitirá restabelecer o riacho e pagar todas as suas dívidas.",
        imagem: "Ilustracao/Jogo/Nivel3/Gemini_JogoNivel3_03.png", // Imagem de recuperação
        tipo: "intro",
        proximo: "4.2"
    },

    // Resultado do Fertilizante na Crise (3.1 -> Opção B)
    3.5: {
        texto: "A lavoura não cresceu como o esperado, pois para que as plantas absorvam os nutrientes é preciso água — recurso que você não tem mais. Além disso, seu solo agora sofre uma grave intoxicação, e o riacho, que antes estava barrento, transformou-se em um fenômeno alarmante: um lamaçal tóxico.",
        imagem: "Ilustracao/Jogo/Nivel3/Gemini_JogoNivel3_04.png", // Imagem de desastre ambiental
        tipo: "intro",
        proximo: "4.3"
    },

    //___________NÍVEL 4: QUATRO PERGUNTAS (8 Escolhas)___________

    // Pergunta 4: Ramificação vinda do Equilíbrio Perfeito (3.2)
    4: {
        titulo: "A Lente do Mundo",
        texto: "Mesmo com o prejuízo parcial causado pelos insetos, seus estudos despertaram a curiosidade de cientistas e acadêmicos. Isso transformou a região em um polo de biotecnologia e em um ponto turístico conhecido no mundo todo por quem deseja testemunhar o sucesso do seu manejo. Como lidar com esse fluxo? Lembre-se: o equilíbrio do vale é precioso.",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Criar rotas ecológicas controladas, arrecadando fundos tanto para investimentos pessoais quanto para o financiamento de novas pesquisas.", proximo: "4.4" },
        opcaoB: { texto: "Aproveitar o sucesso do momento para construir pousadas onde os turistas possam desfrutar da região, arrecadando o máximo de recursos para financiar estudos científicos avançados.", proximo: "4.5" }
    },

    // Pergunta 4.1: USANDO ASPAS PARA NÃO COINCIDIR COM O 4.10
    "4.1": {
        titulo: "A Revolução Colmeia",
        texto: "Com o desaparecimento das pragas, tudo ficou calmo — calmo até demais. As abelhas pararam de visitar as flores da plantação, iniciando uma espécie de revolução: elas não voltarão até que o assunto da segurança dos insetos seja resolvido. O que fazer agora?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Suspender os defensivos e instalar novas colmeias artificiais para que as abelhas se sintam confortáveis e aceitem repensar o assunto.", proximo: "4.6" },
        opcaoB: { texto: "Desistir do acordo e comprar hormônios de polinização artificial para fazer as plantas frutificarem sem a ajuda das abelhas.", proximo: "4.7" }
    },

    // Pergunta 4.2
    "4.2": {
        titulo: "Conflito dos Frutos",
        texto: "As árvores plantadas começaram a dar frutos semanalmente, limpando o rio e alimentando a fauna local com seus excedentes. Mas os fazendeiros vizinhos começaram a reclamar que esse pomar está atraindo animais silvestres, ameaçando o gado deles. O que fazer? Os vizinhos podem estar certos.",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Buscar um acordo favorável para ambos, conhecendo melhor a realidade dos vizinhos e ajudando-os a proteger suas terras contra os animais silvestres.", proximo: "4.8" },
        opcaoB: { texto: "Ignorar as constantes reclamações e erguer cercas para isolar completamente o seu vale, evitando novos conflitos entre os vizinhos e os animais silvestres.", proximo: "4.9" }
    },

    // Pergunta 4.3
    "4.3": {
        titulo: "Os Guardas Verde",
        texto: "Com o riacho transformado em um lamaçal tóxico, os vizinhos — preocupados com a contaminação — denunciaram o seu Vale. A fiscalização ambiental aplicou uma multa pesadíssima, com grandes chances de falir o vale. Como reagir diante desta crise?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Vender seus bens — carro, maquinários e gado — para pagar a multa e recomeçar a fazenda do zero. Mas agora, com experiência.", proximo: "4.10" },
        opcaoB: { texto: "Pegar um empréstimo bancário para pagar a multa, insistindo em continuar com o mesmo cultivo.", proximo: "4.11" }
    },

    //___________NÍVEL 4: OITO CONSEQUÊNCIAS___________________________

    // Resultado do Ecoturismo Controlado
    "4.4": {
        texto: "Com as rotas estruturadas e as visitas controladas, o vale arrecadou dinheiro suficiente para financiar novas pesquisas e o resgate de animais. A região entrou em uma nova fase: uma era que, pela primeira vez, não agride os animais nem polui o solo, mas cuida do lugar e ensina as pessoas a amá-lo.",
        imagem: "Ilustracao/Jogo/Nivel4/Gemini_JogoNivel4_01.png",
        tipo: "intro",
        proximo: 5
    },

    // Resultado do Turismo de Massa
    "4.5": {
        texto: "As pousadas trouxeram bastante dinheiro e prosperidade... até certo ponto. O acúmulo de lixo e o barulho dos veículos espantaram a fauna nativa do Vale Paiquerê. No fim, o dinheiro arrecadado para o grande projeto de nada adiantou, pois os animais simplesmente não quiseram mais ficar nesse lugar.",
        imagem: "Ilustracao/Jogo/Nivel4/Gemini_JogoNivel4_02.png",
        tipo: "intro",
        proximo: 5.1
    },

    // Resultado das Colmeias Artificiais
    "4.6": {
        texto: "As abelhas voltaram após a instalação das novas colmeias e começaram a polinizar as flores do seu plantio. Porém, ainda levará tempo para que elas se estabilizem por completo, pois os resíduos de veneno no solo ainda as atordoam levemente. Tome cuidado: nem sempre é possível consertar os erros do passado. Mas vamos em frente, ainda há um longo caminho a percorrer!",
        imagem: "Ilustracao/Jogo/Nivel4/Gemini_JogoNivel4_03.png",
        tipo: "intro",
        proximo: 5.2
    },

    // Resultado dos Hormônios Artificiais
    "4.7": {
        texto: "Os hormônios artificiais funcionaram perfeitamente, assumindo o papel dos polinizadores naturais — como as abelhas. Mas, como a vida não é uma flor bela, a escolha por esses químicos em vez de uma mudança real de manejo resultou na dependência crônica desses produtos, cujos preços sobem a cada dia.",
        imagem: "Ilustracao/Jogo/Nivel4/Gemini_JogoNivel4_04.png",
        tipo: "intro",
        proximo: 5.3
    },

    // Resultado da Cooperativa Sustentável
    "4.8": {
        texto: "Conversando com os vizinhos, você entendeu que a preocupação deles era com o pisoteio das margens do riacho e com possíveis ataques aos animais domésticos. Juntos, vocês tiveram uma excelente ideia: instalar bebedouros nas áreas mais frequentadas pela fauna silvestre, afastando-a do rio e evitando novos conflitos.",
        imagem: "Ilustracao/Jogo/Nivel4/Gemini_JogoNivel4_05.png",
        tipo: "intro",
        proximo: 5.4
    },

    // Resultado do Isolamento por Cercas
    "4.9": {
        texto: "As cercas garantiram o seu sossego temporário, mas viraram o início de um pesadelo para a comunidade local: sem acesso ao vale, os animais silvestres começaram a invadir e a atacar o gado dos vizinhos. Enquanto isso, a fauna que ficou presa nas suas terras foi obrigada a adotar um novo — e restrito — estilo de vida.",
        imagem: "Ilustracao/Jogo/Nivel4/Gemini_JogoNivel4_06.png",
        tipo: "intro",
        proximo: 5.5
    },

    // Resultado do Recomeço Doloroso (O QUE ESTAVA APAGANDO O 4.1)
    "4.10": {
        texto: "O recomeço foi ainda mais difícil que o começo. Sem os maquinários que vendeu para quitar a dívida, sobrou apenas uma pequena reserva financeira. Mas, com a suspensão dos defensivos químicos, a toxicidade da água vem diminuindo diariamente e a terra começa a dar sinais de vida novamente. Pelo menos, agora você tem experiência.",
        imagem: "Ilustracao/Jogo/Nivel4/Gemini_JogoNivel4_07.png",
        tipo: "intro",
        proximo: 5.6
    },

    // Resultado do Empréstimo por Força Química
    "4.11": {
        texto: "Com o financiamento feito no intuito de produzir o máximo possível para quitar a multa, você ignorou os avisos do passado e repetiu o mesmo erro. O solo se tornou permanentemente improdutivo, afetando não só a sua vida, mas a de toda a região — desde os animais até nós, humanos. O vale agora enfrenta uma ruína ecológica e uma dívida impagável.",
        imagem: "Ilustracao/Jogo/Nivel4/Gemini_JogoNivel4_08.png",
        tipo: "intro",
        proximo: 5.7
    },

    //___________NÍVEL 5: OITO PERGUNTAS (16 Escolhas)___________

    // Pergunta 5: Vinda do Ecoturismo Controlado ("4.4")
    "5": {
        titulo: "Sob os Holofotes do Mundo",
        texto: "Com o sucesso das visitas controladas, a fama do Vale Paiquerê só cresceu. O impacto positivo das suas decisões atraiu a atenção de uma organização internacional, que propôs auditar a fazenda para conceder o 'Selo Verde' — um certificado mundial exclusivo para quem produz de mãos dadas com a natureza. Porém, o processo é demorado e exige um alto investimento por um pedaço de papel. O que acha? Vale a pena investir seu tempo e dinheiro nisso?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Sim, pagarei o preço que for necessário em busca desse reconhecimento formal e global.", proximo: "5.8" },
        opcaoB: { texto: "Não. O valor cobrado por esse certificado renderá muito mais se for aplicado diretamente no vale e na ciência, construindo nossa reputação aos poucos.", proximo: "5.9" }
    },

    // Pergunta 5.1: Vinda do Turismo de Massa ("4.5")
    "5.1": {
        titulo: "O Preço da Fama",
        texto: "O acúmulo de lixo e a poluição sonora dos turistas não só afastaram os animais silvestres, mas também detonaram uma crise na internet. O Vale Paiquerê agora enfrenta uma onda de haters que, com toda razão, criticam a nossa falta de cuidado ecológico. A nossa reputação está despencando. Como conter esse dano antes que seja tarde demais?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Vamos fechar a pousada temporariamente, contratar mutirões de limpeza e estabelecer novas regras rigorosas. É hora de consertar o estrago e tentar nos redimir com o público.", proximo: "5.10" },
        opcaoB: { texto: "Ignore os haters da internet. Críticas existem em qualquer lugar, e o Vale Paiquerê não seria exceção. Além do mais, a culpa não é nossa se os animais se espantaram; a escolha de ir embora foi deles. Vamos focar no marketing por enquanto.", proximo: "5.11" }
    },

    // Pergunta 5.2: Vinda das Colmeias Artificiais ("4.6")
    "5.2": {
        titulo: "O Ouro Líquido do Vale",
        texto: "Após a instalação das colmeias há algum tempo, as abelhas nativas presentearam o vale com uma produção de mel inigualável. O produto rapidamente ganhou fama entre os comerciantes e virou febre no mercado gastronômico de alta gastronomia. Como você vai gerenciar essa nova fonte de lucro, que tende a crescer cada vez mais?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Vamos limitar a quantidade da coleta, respeitando o tempo, o esforço e a saúde das abelhas.", proximo: "5.12" },
        opcaoB: { texto: "Vamos aproveitar a febre e vender o máximo possível. Tentaremos cuidar da saúde das abelhas no processo, mas ondas de sucesso passam rápido — ainda mais no mercado da alta gastronomia.", proximo: "5.13" }
    },

    // Pergunta 5.3: Vinda dos Hormônios Artificiais ("4.7")
    "5.3": {
        titulo: "A Exaustão da Terra",
        texto: "O uso de hormônios químicos ajudou por um tempo, mas, com o passar das temporadas, o preço deles disparou, enquanto o seu faturamento já não cobria os custos. Você tentou plantar sem esses produtos, mas descobriu a pior verdade: o solo está viciado e só responde se você aplicar doses cada vez maiores. Sem caixa e com a terra sufocada, como tentar salvar o negócio?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Vou declarar falência parcial e vender metade das terras para uma ONG de conservação. Lá, eles terão os recursos e o cuidado necessários para curar o que eu acabei destruindo.", proximo: "5.14" },
        opcaoB: { texto: "Vou cortar algumas árvores do vale e extrair a madeira para fabricar mesas e cadeiras. É uma alternativa drástica, mas preciso gerar caixa para tentar corrigir os meus erros.", proximo: "5.15" }
    },

    // Pergunta 5.4: Vinda da Cooperativa Sustentável ("4.8")
    "5.4": {
        titulo: "A Expansão da Cooperativa",
        texto: "A parceria com os vizinhos não apenas resolveu o problema local, mas acendeu uma faísca na região. A ideia de expandir o projeto ganhou força, e agora outros fazendeiros querem adotar o mesmo manejo, pois também enfrentam conflitos com animais silvestres. Levar essa iniciativa adiante exigirá um esforço tremendo de coordenação e recursos. Como agir diante desse chamado?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Vou aceitar. Se eu não mostrar a eles o caminho para esse equilíbrio, quem mais mostrará? Vamos expandir essa iniciativa.", proximo: "5.16" },
        opcaoB: { texto: "Não vou trabalhar de graça. Só aceitaria expandir se pagassem pela minha mão de obra e consultoria, afinal, nem a água aqui no vale vem sem custo. Vou focar no meu negócio.", proximo: "5.17" }
    },

    // Pergunta 5.5: Vinda do Isolamento por Cercas ("4.9")
    "5.5": {
        titulo: "As Farpas do Isolamento",
        texto: "As cercas de quatro metros de arame farpado isolaram o Vale Paiquerê e geraram revolta na região. Os comerciantes locais, antes amigáveis, agora se recusam a vender produtos essenciais para a sua fazenda, tornando o clima na comunidade extremamente hostil. Como você pretende resolver esse mal-entendido? Se é que foi mesmo um mal-entendido...?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Vou desmanchar as cercas e pedir desculpas públicas para acalmar a região. Mas que fique claro: ainda assim, não vou tolerar reclamações ou prejuízos causados por esses animais.", proximo: "5.18" },
        opcaoB: { texto: "Vou contratar uma equipe de segurança especializada para proteger a minha propriedade e abrir uma ação judicial contra os responsáveis. Isso que eles estão fazendo já virou violação de privacidade.", proximo: "5.19" }
    },

    // Pergunta 5.6: Vinda do Recomeço Doloroso ("4.10")
    "5.6": {
        titulo: "A Fadiga da Enxada",
        texto: "Sem os maquinários pesados, o cultivo das plantações exige um esforço braçal imenso. O cansaço extremo está desanimando os poucos funcionários que restaram no vale e, se nada for feito logo, você perderá a última mão de obra disponível. O que fazer para reverter essa situação?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Vou implementar um sistema de parceria e dividir os lucros da colheita futura com a equipe. Transformá-los em sócios do negócio dará a motivação que precisam para enfrentar o trabalho pesado.", proximo: "5.20" },
        opcaoB: { texto: "Vou instituir uma jornada de horas extras, pagando todas as compensações devidas. É a única forma de suprir a falta de tratores e garantir o término do plantio no prazo.", proximo: "5.21" }
    },

    // Pergunta 5.7: Vinda do Empréstimo e Dívida ("4.11")
    "5.7": {
        titulo: "A Dívida",
        texto: "Com a lavoura totalmente destruída pela pressão química, o banco está prestes a tomar a fazenda das suas mãos na próxima semana por falta de pagamento. Qual será a sua última cartada? Até porque continuar plantando já não é mais uma opção — literalmente.",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Reconheço o meu erro. Entregarei a fazenda de forma adequada ao banco, aceitando que este é o fim da minha jornada no campo.", proximo: "5.22" },
        opcaoB: { texto: "Deixarei para trás a fazenda, minhas dívidas e meus fracassos. Irei para longe, onde ninguém conheça o meu passado como cuidador de uma terra que um dia brilhou em esmeralda.", proximo: "5.23" }
    },

    //___________NÍVEL 5: DEZESSEIS CONSEQUÊNCIAS___________________________

    // Resultados da Pergunta 5
    "5.8": {
        texto: "O seu investimento no selo verde internacional colocou o Vale Paiquerê nos catálogos do mercado mundial. Ele não é mais apenas um local comum, mas um ambiente a ser preservado e admirado, transformando a sua residência em uma vitrine global de sustentabilidade.",
        imagem: "Ilustracao/Jogo/Nivel5/Gemini_JogoNivel5_01.png",
        tipo: "intro",
        proximo: "6"
    },
    "5.9": {
        texto: "As melhorias internas instaladas na sua propriedade elevaram os índices da produção e estabilizaram o manejo. O Vale Paiquerê não atingiu a projeção dos catálogos globais, mas consolidou o abastecimento do comércio regional e firmou a sua presença no mercado local.",
        imagem: "Ilustracao/Jogo/Nivel5/Gemini_JogoNivel5_02.png",
        tipo: "intro",
        proximo: "6.1"
    },

    // Resultados da Pergunta 5.1
    "5.10": {
        texto: "A pausa custou caro no bolso, mas a natureza respirou. O lixo sumiu e os primeiros animais começaram a retornar ao vale. E a suspensão temporária das atividades zerou o faturamento da sua pousada e gerou custos imediatos com as diárias dos mutirões. Em resposta, os resíduos acumulados sumiram das margens do rio e os primeiros animais silvestres voltaram a deixar pegadas nas trilhas úmidas do vale..",
        imagem: "Ilustracao/Jogo/Nivel5/Gemini_JogoNivel5_03.png",
        tipo: "intro",
        proximo: "6.2"
    },
    "5.11": {
        texto: "O foco exclusivo no marketing perdeu força quando ativistas locais publicaram um relatório detalhado com fotos dos bastidores da propriedade. O fluxo de hóspedes cessou imediatamente e as buscas digitais pelo Vale Paiquerê agora exibem denúncias de poluição e negligência.",
        imagem: "Ilustracao/Jogo/Nivel5/Gemini_JogoNivel5_04.png",
        tipo: "intro",
        proximo: "6.3"
    },

    // Resultados da Pergunta 5.2
    "5.12": {
        texto: "A imposição de limites rígidos na coleta preservou a estrutura interna das colmeias, gerando lotes reduzidos e puros. Esse mel exclusivo alcançou o topo do mercado de alta gastronomia como um produto único que mantém seu valor elevado, enquanto o enxame ativo continua a polinização da sua lavoura.",
        imagem: "Ilustracao/Jogo/Nivel5/Gemini_JogoNivel5_05.png", //Imagem 5
        tipo: "intro",
        proximo: "6.4"
    },
    "5.13": {
        texto: "A extração em massa inundou o comércio com um volume gigante de produto, gerando um pico de faturamento rápido enquanto durou a febre. Pouco tempo depois, o mercado saturou, as colmeias entraram em colapso pelo esgotamento, centenas de abelhas morreram e a taxa de frutificação da lavoura caiu pela metade.",
        imagem: "Ilustracao/Jogo/Nivel5/Gemini_JogoNivel5_06.png", //imagem 6
        tipo: "intro",
        proximo: "6.5"
    },

    // Resultados da Pergunta 5.3
    "5.14": {
        texto: "A assinatura do contrato de venda transferiu a posse de metade das suas terras para a organização ambiental, liquidando as pendências financeiras. As cercas da ONG agora delimitam a área vendida, iniciando o plantio de mudas nativas fora do seu controle.",
        imagem: "Ilustracao/Jogo/Nivel5/Gemini_JogoNivel5_07.png",
        tipo: "intro",
        proximo: "6.6"
    },
    "5.15": {
        texto: "Os caminhões carregados com os troncos cortados na sua propriedade foram interceptados em uma rodovia estadual. A fiscalização emitiu um processo por crime ambiental e aplicou uma autuação milionária que bloqueou os ativos financeiros da fazenda, interrompendo qualquer atividade no vale.",
        imagem: "Ilustracao/Jogo/Nivel5/Gemini_JogoNivel5_08.png", //imagem 8
        tipo: "intro",
        proximo: "6.7"
    },

    // Resultados da Pergunta 5.4
    "5.16": {
        texto: "Você aceitou expandir o projeto dos bebedouros regionais. O esforço valeu a pena: o sistema bem planejado afastou com sucesso os animais silvestres do gado dos vizinhos e das margens dos rios. Com os conflitos resolvidos, os fazendeiros da região agora andam tranquilamente por suas propriedades, garantindo a preservação do vale.",
        imagem: "Ilustracao/Jogo/Nivel5/Gemini_JogoNivel5_09.png",
        tipo: "intro",
        proximo: "6.8"
    },
    "5.17": {
        texto: "Ao cobrar pela sua ajuda com os bebedouros, os vizinhos resolveram se unir sozinhos. Eles aprenderam a instalar o sistema por conta própria e criaram uma rede de proteção sem você. Os bebedouros deles funcionaram muito bem, mas a sua fazenda acabou isolada das parcerias e do comércio da comunidade.",
        imagem: "Ilustracao/Jogo/Nivel5/Gemini_JogoNivel5_10.png",
        tipo: "intro",
        proximo: "6.9"
    },

    // Resultados da Pergunta 5.5
    "5.18": {
        texto: "Ao arrancar as cercas altas e pedir desculpas, o clima de revolta sumiu. Os comerciantes do vale deixaram a raiva de lado e voltaram a te vender ferramentas. Sem as barreiras de arame farpado, os animais silvestres que estavam atacando o gado dos vizinhos voltaram a passar livremente e em paz pelas suas trilhas.",
        imagem: "Ilustracao/Jogo/Nivel5/Gemini_JogoNivel5_11.png",
        tipo: "intro",
        proximo: "6.10"
    },
    "5.19": {
        texto: "Os seguranças armados e os processos na justiça criaram um muro invisível no vale. Os turistas fugiram com medo das patrulhas, a vizinhança cortou relações de vez e os animais silvestres continuaram presos dentro das suas cercas de quatro metros, deixando a sua fazenda isolada, perigosa e sem vida.",
        imagem: "Ilustracao/Jogo/Nivel5/Gemini_JogoNivel5_12.png",
        tipo: "intro",
        proximo: "6.11"
    },

    // Resultados da Pergunta 5.6
    "5.20": {
        texto: "A ideia de transformar os funcionários em sócios deu uma força gigante para o trabalho. Sabendo que iam receber uma parte de cada colheita, a equipe enfrentou o cansaço do cultivo manual com um sorriso no rosto. O ritmo das enxadas dobrou e a recuperação da terra sem veneno terminou bem antes do prazo.",
        imagem: "Ilustracao/Jogo/Nivel5/Gemini_JogoNivel5_13.png",
        tipo: "intro",
        proximo: "6.12"
    },
    "5.21": {
        texto: "A sua necessidade de bater as metas no trabalho manual esgotou o resto das forças dos trabalhadores. Sem os tratores para ajudar, a equipe não aguentou a fadiga, largou as enxadas no galpão e foi embora junta. Sem ninguém no campo, toda a plantação de verduras apodreceu na terra antes da colheita.",
        imagem: "Ilustracao/Jogo/Nivel5/Gemini_JogoNivel5_14.png",
        tipo: "intro",
        proximo: "6.13"
    },

    // Resultados da Pergunta 5.7
    "5.22": {
        texto: "Você aceitou o fim da linha, assinou os papéis e entregou as chaves da fazenda para os oficiais da justiça. O banco trancou a sede e colocou o edital do leilão público do Vale Paiquerê nos jornais. Você deixa as terras levando apenas as roupas do corpo e a lição sofrida sobre os limites da natureza.",
        imagem: "Ilustracao/Jogo/Nivel5/Gemini_JogoNivel5_15.png",
        tipo: "intro",
        proximo: "6.14"
    },
    "5.23": {
        texto: "Você trancou as portas da casa e fugiu no meio da madrugada para bem longe. O banco encontrou o Vale Paiquerê totalmente abandonado, as contas sem um centavo e a terra completamente estéril por causa do excesso de química que você insistiu em usar. Ficou para trás apenas um deserto fantasma.",
        imagem: "Ilustracao/Jogo/Nivel5/Gemini_JogoNivel5_16.png",
        tipo: "intro",
        proximo: "6.15"
    },

    //___________NÍVEL 6: DEZESSEIS PERGUNTAS (32 Escolhas)___________

    // Pergunta 6: Vinda do Selo Verde Internacional ("5.8")
    "6": {
        titulo: "Logística Global Verde",
        texto: "O selo verde internacional abriu as portas do mundo e navios cargueiros esperam sua produção. Para embalar as toneladas de produtos, surgiu um dilema: um fornecedor oferece caixas de plástico grosso reciclado, que ajudam a natureza com sua reutilização, protegem contra a umidade do mar e mostram eficiência. O outro oferece caixas experimentais de fibra de mandioca, que trazem um risco considerável, quebram fácil no empilhamento, mas dissolvem na água sem deixar rastro. Como vai despachar?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Vou investir nessas embalagens feitas de mandioca, aceitando o risco e a fragilidade do material.", proximo: "6.16" },
        opcaoB: { texto: "Vou usar os plásticos reciclados, pois além de seguros e duradouros, eles já ajudam a diminuir a poluição.", proximo: "6.17" }
    },

    // Pergunta 6.1: Vinda do Sucesso Interno Sem Fama ("5.9")
    "6.1": {
        titulo: "Mercado Regional Saturado",
        texto: "Ficar quieto mantendo a produção local resultou em uma grande demanda de seus produtos na região, fazendo os mercados ficarem cheios de suas verduras e legumes frescos de seu Vale. Com esse potencial, como você vai aumentar seu negócio, mas ainda manter sua identidade?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Vou elaborar uma rede de negócios própria nas grandes capitais, não deixando seus produtos apenas em mãos secundárias.", proximo: "6.18" },
        opcaoB: { texto: "Vou vender os lotes para as redes tradicionais de mercado, não correndo riscos de falir ao abrir uma franquia.", proximo: "6.19" }
    },

    // Pergunta 6.2: Vinda do Retorno da Fauna ("5.10")
    "6.2": {
        titulo: "O Retorno do Lobo-Guará",
        texto: "A limpeza da região, junto aos cuidados que você teve nas últimas semanas, trouxe um resultado incrível: uma família de lobos-guarás, espécie ameaçada de extinção, voltou a habitar o seu vale. Os vizinhos viram o seu esforço e te perdoaram, mas agora o seu verdadeiro desafio é como se redimir com a internet, já que o público digital ainda está desapontado com a sua atitude antiga. Como você vai resolver isso?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Vou isolar a reserva totalmente. Não vou permitir mais ninguém, além de nós, pesquisadores, entrar, pois tudo tem limite, e os visitantes não tiveram.", proximo: "6.20" },
        opcaoB: { texto: "Vou reabrir as sessões de observação, mas dessa vez haverá regras rígidas. Se eles as quebrarem, terão que pagar o preço.", proximo: "6.21" }
    },

    // Pergunta 6.3: Vinda da Farsa Descoberta ("5.11")
    "6.3": {
        titulo: "Sorria Vale: você está sendo filmado",
        texto: "Com as gravações vazadas ao público, o nome do Vale Paiquerê foi cancelado pela opinião pública após o seu escândalo de poluição e desacato. Além de ter um lugar que parece um lixão, agora você corre o risco de sofrer um processo. Qual a sua estratégia para escapar disso?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Vou doar metade dos meus ativos para projetos ambientais e tentarei restaurar meu vale começando pela bacia hidrográfica.", proximo: "6.22" },
        opcaoB: { texto: "Vou mudar a marca jurídica, já que não tem volta. Agora, com meu novo negócio, pretendo construir uma usina fotovoltaica.", proximo: "6.23" }
    },

    // Pergunta 6.4: Vinda do Mel Premiado ("5.12")
    "6.4": {
        titulo: "Novo Vizinho",
        texto: "Com o sucesso do seu mel e da sua plantação, você viveu uma era de paz e fartura. Com o passar dos meses, as fazendas ao redor foram vendidas, e o comprador dessas terras é um grande produtor de soja, conhecido por ser o mais eficiente em sua profissão. Ele pretende usar defensivos pesados para garantir o sucesso da lavoura dele, mas isso pode fazer suas abelhas desaparecerem. O que fazer?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Vou conversar diretamente com ele para propor a compra das terras da divisa. Assim que fecharmos o negócio, plantarei uma barreira densa de árvores para proteger minhas abelhas.", proximo: "6.24" },
        opcaoB: { texto: "Vou acionar a justiça ambiental para tentar proteger a saúde das minhas abelhas, proibindo legalmente o uso de produtos químicos na área.", proximo: "6.25" }
    },

    // Pergunta 6.5: Vinda do Colapso das Colmeias ("5.13")
    "6.5": {
        titulo: "O Preço da Ganância",
        texto: "O dinheiro fácil do mel sumiu assim que o mercado saturou e as vendas despencaram de vez. Para piorar, com o sumiço das abelhas que morreram de exaustão, sua lavoura principal de frutas parou de crescer e o vale virou um silêncio preocupante. Você precisa reerguer a produção sem o caixa de antes. Qual o plano?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Vou alugar colmeias móveis temporárias de apicultores parceiros para tentar reanimar as plantas sobreviventes.", proximo: "6.26" },
        opcaoB: { texto: "Vou arrancar o que restou e substituir a lavoura por plantas que dependem só do vento para espalhar o pólen.", proximo: "6.27" }
    },

    // Pergunta 6.6: Vinda da Parceria com a ONG ("5.14")
    "6.6": {
        titulo: "Convite de Liderança regional",
        texto: "Mesmo que você tenha errado no caminho, a diretoria da ONG internacional te convidou para liderar o plano de bio-corredores estaduais. Parece que eles viram algo que ninguém mais viu em você... ou eles podem estar errados. Você vai aceitar o cargo?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Vou aceitar a posição para espalhar minhas ideias. Afinal, eles devem ter visto que eu sou talentoso de verdade.", proximo: "6.28" },
        opcaoB: { texto: "Vou recusar essa oportunidade, pois eles devem estar enganados. E outra: o que sobrou do dinheiro das terras dá para eu comprar um micro-lote.", proximo: "6.29" }
    },

    // Pergunta 6.7: Vinda da Multa Milionária e Polícia ("5.15")
    "6.7": {
        titulo: "Proposta de Fim de Linha",
        texto: "Agora que você está sem escolhas para cobrir suas dívidas ambientais, anunciou a venda de suas terras com o plano de pagar as contas e comprar um lote tranquilo na cidade. Porém, o único interessado na propriedade foi um consórcio químico, que se ofereceu para comprar suas terras e fazer delas um lixão industrial. Sabendo disso, o que você vai fazer?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Eu aceito vender o terreno para eles, porque se eu não aceitar, vou acabar na cadeia. Entre perder a terra ou perder a minha liberdade, prefiro salvar minha pele.", proximo: "6.30" },
        opcaoB: { texto: "Eu passo. Prefiro arcar com a minha condenação e decretar falência do que piorar a situação do Vale.", proximo: "6.31" }
    },

    // Pergunta 6.8: Vinda da Monocultura Industrial ("5.16")
    "6.8": {
        titulo: "O Preço do Sucesso",
        texto: "Os bebedouros funcionaram e os bichos sumiram do gado dos vizinhos. Mas agora, com os animais tranquilos, a população deles cresceu tanto que faltou água no rio principal do vale. Como resolver esse novo problema?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Vou criar um rodízio de água com os vizinhos para que ninguém ficar na seca", proximo: "6.32" },
        opcaoB: { texto: "vou desligar parte dos bebedouros, deixando a natureza se virar sozinha", proximo: "6.33" }
    },

    // Pergunta 6.9: Vinda da Soberania Alimentar Local ("5.17")
    "6.9": {
        titulo: "Sozinho no Pedaço",
        texto: "A comunidade, em vez de te agradecer, te isolou. Com o projeto deles prosperando, você começa a pensar se agiu certo ou errado ao cobrar pela sua mão de obra, e se foi um pouco egoísta. Seu estado mental vem caindo consideravelmente, pois a falta de companheiros te fez ficar mais quieto. O que você vai fazer? Pretende voltar com eles?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Sim, vou tentar me desculpar com eles e explicar que tinha medo que se aproveitassem da minha ajuda", proximo: "6.34" },
        opcaoB: { texto: "Não, vou continuar isolado no meu vale, já que é isso que eles mais querem de mim", proximo: "6.35" }
    },

    // Pergunta 6.10: Vinda da Integração da Fauna ("5.18")
    "6.10": {
        titulo: "Bichos sem Medo",
        texto: "Agora que as cercas sumiram e as trilhas estão livres, os bichos da floresta perderam totalmente o medo das pessoas. Eles começaram a invadir os quintais das casas para revirar o lixo e comer as hortas dos moradores, deixando o pessoal assustado. Como você vai resolver essa confusão?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Vou reunir os moradores e ensiná-los a proteger as casas com cautela, evitando machucar os bichos.", proximo: "6.36" },
        opcaoB: { texto: "Vou desistir de retirar as certas, mas dessa vez levantando cercas baixas em volta de toda a vila para isolar o pessoal dos animais silvestres.", proximo: "6.37" }
    },

    // Pergunta 6.11: Vinda da Fortaleza Armada Morta ("5.19")
    "6.11": {
        titulo: "O Cerco dos Guardas",
        texto: "Sua fazenda virou um deserto perigoso e sem vida. Como o dinheiro acabou e você não pagou os salários, o chefe dos guardas armados trancou você em um quarto e avisou: ou você passa a escritura da terra para o nome dele para pagar a dívida, ou a coisa vai ficar feia. O que você faz?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Tentar chamar a polícia escondido pelo celular para desarmar os seus próprios seguranças", proximo: "6.38" },
        opcaoB: { texto: "Ceder às ameaças, assinar o papel e fugir correndo dali só com a roupa do corpo", proximo: "6.39" }
    },

    // Pergunta 6.12: Vinda do Sucesso da Agroecologia Parceria ("5.20")
    "6.12": {
        titulo: "A Compra dos Cooperados",
        texto: "A fazenda está bombando e dando muito lucro. Mas os seus funcionários, que agora são seus sócios, cansaram de ter um patrão e decidiram que querem mandar em tudo sozinhos. Eles se juntaram e ofereceram uma grana para comprar o resto da sua parte. Como você vai reagir?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Eu vou aceitar o dinheiro deles, vender tudo e ir se aposentar bem longe dali", proximo: "6.40" },
        opcaoB: { texto: "Vou recusar a venda e bater o pé para continuar trabalhando junto com eles como o chefe, pois a fazenda é minha", proximo: "6.41" }
    },

    // Pergunta 6.13: Vinda do Abandono dos Trabalhadores ("5.21")
    "6.13": {
        titulo: "A Ocupação Popular",
        texto: "Com tudo apodrecendo e sem ninguém para trabalhar, sua fazenda ficou totalmente abandonada e cheia de mato. Vendo esse espaço largado e sabendo das suas dívidas, algumas famílias de trabalhadores sem-terra entraram lá e montaram acampamento para tentar plantar o próprio sustento. Qual sua postura?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Chamar o juiz e a polícia para expulsar essa gente de lá na base da força", proximo: "6.42" },
        opcaoB: { texto: "Ir até lá conversar com eles e propor uma parceria para recuperarem a terra juntos", proximo: "6.43" }
    },

    // Pergunta 6.14: Vinda do Fim Digno no Leilão ("5.22")
    "6.14": {
        titulo: "O Chamado da Terra",
        texto: "O tempo passou, você foi morar na cidade grande e conseguiu juntar um dinheirinho com um emprego simples. Mas a saudade da roça nunca sumiu. Olhando os classificados hoje, você vê o anúncio de um terreno vizinho ao seu antigo vale, tal terreno que foi destruído pelo fogo e está preço de banana. O que você faz?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Vou comprar esse pedaço de terra estragado e tentar começar tudo do zero de novo, dessa vez, com uma abordagem mais sustentável", proximo: "6.44" },
        opcaoB: { texto: "Vou deixar para lá, continuar na cidade e escrever um livro contando os meus erros, monstrando como a falta de visão e responsabilidade levou à destruição do meu lar", proximo: "6.45" }
    },

    // Pergunta 6.15: Vinda da Fuga Noturna do Deserto ("5.23")
    "6.15": {
        titulo: "A Casa Caiu",
        texto: "Você fugiu no meio da noite e deixou para trás um deserto fantasma estéril. Anos depois, morando em outro estado e usando um nome falso, o passado finalmente te alcança: a polícia ambiental descobre seu esconderijo e bate na sua porta com as algemas na mão. Como vai reagir?",
        imagem: null,
        tipo: "decisao",
        opcaoA: { texto: "Vai pular a janela dos fundos correndo e passar o resto da vida fugindo como um bicho?", proximo: "6.46" },
        opcaoB: { texto: "Ou vai se entregar sem briga, voltar para o vale e aceitar pagar sua pena limpando a terra?", proximo: "6.47" }
    },

    //___________NÍVEL 6: TRINTA E DUAS FINAIS___________

    // Resultados da Pergunta 6
    "6.16": { 
        texto: "O risco valeu a pena. As caixas inovadoras de mandioca que se dissolvem na água encantaram os investidores europeus. O Vale Paiquerê foi alçado ao posto de padrão global de desperdício zero, provando que a ética e a alta tecnologia podem, sim, salvar o planeta — a esverdeada esmeralda reluz intocada no vale.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_01.png", 
        tipo: "final",
    },
    "6.17": { 
        texto: "O faturamento bruto quebrou recordes históricos com os plásticos duráveis, mas o oceano cobrou seu preço. Relatórios internacionais detectaram microplásticos na carga, arranhando gravemente a credibilidade do seu Selo Verde. Você conquistou uma conta bancária cheia, mas a pureza ecológica do vale foi perdida para sempre.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_02.png", 
        tipo: "final",
    },

    // Resultados da Pergunta 6.1
    "6.18": { 
        texto: "Suas feiras exclusivas nas capitais vivem lotadas. Você passa as madrugadas coordenando caminhões e descarregando engradados na calçada. O selo do Vale Paiquerê estampa sacolas de clientes que pagam o triplo por suas alfaces e tomates. Sobrou dinheiro para investir em novos sistemas de irrigação, mas suas mãos continuam calejadas pela rotina logística implacável de uma grife orgânica.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_03.png", 
        tipo: "final",
    },
    "6.19": { 
        texto: "O contrato com as grandes redes de supermercados exige entregas diárias padronizadas e impecáveis. Quando uma geada queima 10% da lavoura, o gerente da rede aplica uma multa automática prevista em contrato, recusando qualquer negociação. Você se pega revisando boletos atrasados no escritório, percebendo que a fazenda trabalha dia e noite no limite apenas para cobrir os custos fixos do consórcio.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_04.png", 
        tipo: "final",
    },

    // Resultados da Pergunta 6.2
    "6.20": { 
        texto: "Cadeados pesados e placas de 'Proibida a Entrada' trancam as porteiras da reserva. Do lado de dentro, as armadilhas fotográficas registram os lobos-guarás caçando em paz e alimentando seus filhotes sem o barulho de motores ou flashes de celulares. Acadêmicos publicam artigos elogiando o isolamento do vale, embora você assine os relatórios sozinho em um escritório silencioso e sem o faturamento do turismo.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_05.png", 
        tipo: "final",
    },
    "6.21": { 
        texto: "Os turistas pagam caro pelas vagas limitadas e caminham em silêncio nas trilhas, sob os olhos atentos dos seus fiscais. Os ingressos cobrem a folha de pagamento e a manutenção da fazenda, mas os sensores noturnos revelam que os lobos-guarás mudaram seus hábitos para a madrugada profunda, evitando totalmente as áreas de visitação. O dinheiro entra na conta, mas a fauna recua para os cantos mais escuros.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_06.png", 
        tipo: "final",
    },

    // Resultados da Pergunta 6.3
    "6.22": { 
        texto: "O depósito para o fundo de restauração doeu no caixa e forçou a venda de um dos tratores rurais. No entanto, as manchetes sobre a recuperação da bacia hidrográfica começaram a substituir os antigos posts de cancelamento na internet. O gerente do banco ligou oferecendo uma nova linha de crédito para sistemas agroflorestais. O riacho ainda corre turvo, mas as primeiras mudas de Araucária fincaram raízes na margem.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_07.png", 
        tipo: "final",
    },
    "6.23": { 
        texto: "A nova firma, registrada sob outra razão social, recebe depósitos mensais gordos da distribuidora de energia. Onde antes havia mata nativa secundária, agora fileiras intermináveis de placas de silício refletem o sol escaldante. O mato embaixo delas é controlado com aplicação regular de veneno para não gerar sombra nos painéis. As contas estão no azul, mas os pássaros já não pousam mais ali.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_08.png", 
        tipo: "final",
    },

    // Resultados da Pergunta 6.4 (O Vizinho da Soja)
    "6.24": { 
        texto: "O pagamento pela faixa de terra limpou suas reservas financeiras. Hoje, uma cortina densa de sansão-do-campo e eucaliptos barra visualmente a nuvem de glifosato que o trator do vizinho pulveriza ao lado. Suas abelhas continuam zumbindo nas colmeias e as análises laboratoriais mostram um mel livre de resíduos químicos. O custo foi asfixiante, mas a barreira viva funcionou como um escudo real.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_09.png", 
        tipo: "final"
    },
    "6.25": { 
        texto: "As liminares judiciais obrigaram o vizinho a desligar os pulverizadores automáticos perto da sua divisa até a perícia final do processo. Suas abelhas ganharam tempo, mas o fazendeiro cortou relações e bloqueou o tráfego de suas máquinas pela estrada vicinal que corta as terras dele. O mel está protegido por lei, mas agora você gasta o triplo de combustível contornando a região pelo acesso antigo.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_10.png", 
        tipo: "final"
    },

    // Resultados da Pergunta 6.5 (Colapso do Mel)
    "6.26": { 
        texto: "Os caminhões do apicultor parceiro descarregam caixas de abelhas alugadas no início de cada primavera. Os insetos terceirizados polinizam o pomar a tempo, garantindo que as frutas cresçam cheias e prontas para o mercado. No entanto, o fechamento do mês mostra que a maior parte do faturamento vai direto para o pagamento do aluguel das colmeias. A lavoura dá frutos, mas o lucro evaporou.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_11.png", 
        tipo: "final"
    },
    "6.27": { 
        texto: "O antigo pomar diversificado deu lugar a quilômetros planos de milho híbrido. O vento forte propaga o pólen sozinho pela plantação, ignorando o silêncio deixado pela morte das colmeias. As colheitadeiras cortam a safra sem imprevistos e os grãos enchem os silos no prazo. O caixa da fazenda estabilizou, mas o Vale Paiquerê agora tem a mesma cara monótona de qualquer monocultura industrial.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_12.png", 
        tipo: "final"
    },

    // Resultados da Pergunta 6.6 (Liderança com a ONG)
    "6.28": { 
        texto: "Sua rotina agora é feita de reuniões em escritórios climatizados, preenchimento de relatórios de impacto e palestras para proprietários rurais desconfiados. Você usa os mapas e as cicatrizes do seu próprio vale para convencê-los a ceder faixas de terra. Os projetos estaduais ganham linhas verdes ligando fragmentos de floresta, mas você passa mais tempo assinando memorandos do que pisando no barro.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_13.png", 
        tipo: "final"
    },
    "6.29": { 
        texto: "Com o dinheiro restante da venda das terras, você comprou três hectares no topo da colina. A propriedade resume-se a uma casa de madeira, uma horta de subsistência e duas juntas de boi. Você acorda nas madrugadas frias para tirar o leite que vende na cooperativa local. A vida não dá espaço para luxos ou grandes investimentos, mas o barulho do riacho limpo substituiu todas as cobranças fiscais.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_14.png", 
        tipo: "final"
    },

    // Resultados da Pergunta 6.7 (Proposta de Fim de Linha)
    "6.30": { 
        texto: "Os advogados do consórcio protocolaram a petição de acordo e quitaram suas multas ambientais logo após a assinatura da escritura. Você mora em um apartamento confortável na capital, longe do interior. No vale, caminhões-tanque descarregam tambores de resíduos industriais em valas escavadas onde antes ficava o riacho. O local agora é cercado por placas de 'Perigo: Área Contaminada'.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_15.png", 
        tipo: "final"
    },
    "6.31": { 
        texto: "O oficial de justiça recolheu as escrituras e os tratores para o leilão do Estado para abater as dívidas. Você cumpre serviços comunitários limpando praças municipais aos finais de semana para fechar a transação da sentença. A fazenda ficou lacrada, acumulando poeira e mato daninho sobre a terra intoxicada. Ninguém planta, ninguém colhe; o vale virou uma cicatriz cinza interrompida.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_16.png", 
        tipo: "final"
    },

    // Resultados da Pergunta 6.8 (O Preço do Sucesso/Bebedouros)
    "6.32": { 
        texto: "As comportas do canal de irrigação são abertas e fechadas seguindo uma tabela rígida monitorada pelos fazendeiros locais. O nível do rio principal oscila diariamente, mas o gado bebe e os animais silvestres mantêm os bebedouros cheios na mata. Você perde algumas horas de água na sua plantação por semana, mas os vizinhos mandam tratores para ajudar na limpeza das suas valas de drenagem.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_17.png", 
        tipo: "final"
    },
    "6.33": { 
        texto: "Com as torneiras dos bebedouros fechadas na mata, bandos de queixadas e macacos descem em direção aos canais de irrigação da lavoura. Eles roem as mangueiras de gotejamento e destroem os canteiros de hortaliças em busca de umidade. O rio principal recuperou alguns centímetros de volume, mas suas madrugadas agora são gastas fiscalizando o perímetro contra ataques da fauna faminta.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_18.png", 
        tipo: "final"
    },

    // Resultados da Pergunta 6.9 (Soberania Alimentar/Isolamento)
    "6.34": { 
        texto: "A reunião na associação de moradores foi tensa; você detalhou seus custos e eles ouviram de braços cruzados. Lentamente, a desconfiança cedeu. A cooperativa deles aceitou incluir suas caixas de verdura no caminhão diário que vai para o centro de distribuição regional, cobrando apenas a taxa de combustível. O clima hostil sumiu do mercado da vila e você voltou a ter com quem tomar um café.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_19.png", 
        tipo: "final"
    },
    "6.35": { 
        texto: "Sua colheita acumula nos caixotes de madeira porque os transportadores locais recusam-se a encostar o caminhão na sua porteira. Você precisa dirigir doze quilômetros adicionais em estrada de terra para despachar os produtos em um galpão terceirizado, aceitando metade do valor de mercado. O caixa opera no limite do vermelho e as noites no vale são longas, silenciosas e sem visitas.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_20.png", 
        tipo: "final"
    },

    // Resultados da Pergunta 6.10 (Bichos Sem Medo)
    "6.36": { 
        texto: "Mutirões de fim de semana instalaram travas reforçadas nas lixeiras públicas e telas metálicas nas pequenas hortas familiares da vila. Os quatis e gambás ainda circulam pelos telhados, mas retornam para a mata ao não encontrarem restos de comida fácil. As crianças aprenderam a não esticar as mãos com alimentos e a fauna circula pela região sem ser domesticada ou agredida.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_21.png", 
        tipo: "final"
    },
    "6.37": { 
        texto: "O arame farpado e os tapumes em torno das propriedades resolveram os problemas nos quintais da vila. Contudo, a barreira física interrompeu o acesso que os animais faziam até o banhado menor do vale. Capivaras e antas agora caminham paralelas à cerca, pisoteando a vegetação rasteira e criando trilhas de terra batida que viram focos de erosão severa na primeira chuva forte.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_22.png", 
        tipo: "final"
    },

    // Resultados da Pergunta 6.11 (O Cerco dos Guardas)
    "6.38": { 
        texto: "Duas viaturas da polícia militar cercaram o galpão principal na madrugada após sua denúncia. O confronto terminou com os seguranças algemados e o armamento apreendido. Você recuperou as chaves da sede, mas as paredes ostentam marcas de estilhaços e os jornais locais associaram o Vale Paiquerê a milícias rurais. Comerciantes recusam-se a comprar de uma fazenda sob investigação.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_23.png", 
        tipo: "final"
    },
    "6.39": { 
        texto: "Você assinou o termo de transferência de posse no papel timbrado sob a mira das armas e pegou o primeiro ônibus na rodoviária. Hoje, trabalha como frentista em um posto de beira de estrada. Pelas redes sociais, fotos via satélite mostram sua antiga fazenda fatiada: os pastos viraram garimpo ilegal de areia e o riacho secou sob as esteiras das escavadeiras.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_24.png", 
        tipo: "final"
    },

    // Resultados da Pergunta 6.12 (A Compra dos Cooperados)
    "6.40": { 
        texto: "O valor da venda da sua cota foi depositado integralmente na sua conta bancária. Você comprou uma casa na praia e passa as tardes pescando no píer. Pelo balanço anual que a nova diretoria dos ex-funcionários te envia por e-mail, a fazenda eliminou o uso de insumos químicos e distribuiu lucros recordes entre as trinta famílias locais. A terra continua produzindo, longe das suas mãos.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_25.png", 
        tipo: "final"
    },
    "6.41": { 
        texto: "Você manteve a assinatura majoritária e barrou a proposta, mas o clima no campo mudou. Os funcionários-sócios agora cumprem estritamente as horas contratuais, batendo o ponto e deixando as ferramentas no galpão mesmo se uma tempestade ameaça os canteiros abertos ou o trator quebra no meio do lote. A produção agroecológica sai, mas os corredores da sede são frios e cheios de desconfiança.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_26.png", 
        tipo: "final"
    },

    // Resultados da Pergunta 6.13 (A Ocupação Popular)
    "6.42": { 
        texto: "A reintegração de posse ordenada pelo juiz deixou a entrada da fazenda coberta de lonas pretas queimadas, panelas amassadas e cercas rompidas pelos tratores da polícia. O Vale Paiquerê ficou deserto novamente. Nenhum trabalhador da região aceita suas ofertas de emprego por medo de represálias da comunidade; as verduras remanescentes apodrecem nos canteiros sem braços para colhê-las.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_27.png", 
        tipo: "final"
    },
    "6.43": { 
        texto: "O acordo dividiu a fazenda em lotes familiares organizados sob uma nova associação comunitária. Em poucos meses, os acampamentos viraram construções de alvenaria e os canteiros coletivos voltaram a produzir toneladas de mandioca e hortaliças sem defensivos químicos. Você divide o planejamento das safras em assembleias barulhentas embaixo da mangueira. A lida é dividida.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_28.png", 
        tipo: "final"
    },

    // Resultados da Pergunta 6.14 (O Chamado da Terra)
    "6.44": { 
        texto: "Suas mãos enterram as primeiras sementes de feijão-de-porco no solo endurecido e coberto por cinzas escuras. O recomeço no lote vizinho é lento e solitário; não há tratores ou faturamento no horizonte próximo e suas costas cobram o preço do esforço físico diário. Contudo, olhando de perto após as chuvas de verão, os primeiros brotos verdes começam a romper a crosta de carvão.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_29.png", 
        tipo: "final"
    },
    "6.45": { 
        texto: "Seu livro de memórias foi publicado por uma editora universitária local. Os royalties mal cobrem o aluguel do seu pequeno apartamento na cidade, mas sua caixa de entrada recebe e-mails semanais de estudantes de agronomia debatendo as falhas técnicas que você documentou nos capítulos sobre saturação de solo. Suas mãos não tocam mais na enxada, mas seus erros servem de estudo.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_30.png", 
        tipo: "final"
    },

    // Resultados da Pergunta 6.15 (A Casa Caiu)
    "6.46": { 
        texto: "Você vive mudando de quarto alugado em bairros industriais periféricos, aceitando bicos que pagam em dinheiro vivo no final do dia para evitar registros em seu CPF falso. Toda vez que uma viatura dobra a esquina com a sirene ligada, seu estômago contrai automaticamente. O deserto químico ficou para trás no Vale Paiquerê, mas a paranoia constante transformou sua rotina em um cativeiro diário.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_31.png", 
        tipo: "final"
    },
    "6.47": { 
        texto: "O juiz converteu a pena em restrição de direitos e obrigação de reparação civil. Sob a fiscalização mensal de engenheiros do Estado, você passa os dias abrindo valas de contenção e plantando mudas de árvores nativas no solo rachado da sua antiga propriedade. A lama tóxica clareia muito devagar a cada temporada de chuvas; o trabalho é exaustivo, mas o cheiro de terra úmida voltou.", 
        imagem: "Ilustracao/Jogo/Nivel6/Gemini_JogoNivel6_32.png", 
        tipo: "final"
    }

};

let faseAtual = 1;

function começarJogoReal() {
    manual.classList.add('escondido');
    document.getElementById('display-principal').style.display = 'block';

    faseAtual = 1;
    renderizarFase();
}


function renderizarFase() {
    const fase = roteiro[faseAtual];

    const elementoTitulo = document.getElementById('fase-titulo');
if (fase.imagem) {
    elementoTitulo.style.display = 'none';
} else {
    elementoTitulo.style.display = 'block';
    elementoTitulo.innerText = fase.titulo || "";
}

    document.getElementById('texto-principal').innerText = fase.texto;

    //___Lógica da Imagem__
    const moldura = document.getElementById('moldura-imagem');
    const textoPrincipal = document.getElementById('texto-principal'); 
    
    if (fase.imagem) {
        moldura.style.display = "block";
        document.getElementById('imagem-principal').src = fase.imagem;
        textoPrincipal.style.marginTop = "0px"; 
    } else {
        moldura.style.display = "none";
        textoPrincipal.style.marginTop = "40px"; 
    }

    //___Lógica dos Botões___
    const containerDecisao = document.getElementById('botoes-decisao');
    const btnProximo = document.getElementById('btn-proximo');
    
    //Variaveis reajustadas
    const btnA = document.getElementById('btn-opcao-a');
    const btnB = document.getElementById('btn-opcao-b');

    if (fase.tipo === "decisao") {
        containerDecisao.style.display = "flex";
        btnProximo.style.display = "none";
        
        //variáveis para código mais limpo
        if (btnA) btnA.innerText = fase.opcaoA.texto;
        if (btnB) btnB.innerText = fase.opcaoB.texto;
        
        //Lógica de fazer os botões aleatórios
        if (Math.random() < 0.5) {
            containerDecisao.style.flexDirection = "column";          // Ordem normal: A (cima) / B (baixo)
        } else {
            containerDecisao.style.flexDirection = "column-reverse";  // Ordem invertida: B (cima) / A (baixo)
        }

        //btnA
        if (btnA) {
            btnA.onclick = function() {
                faseAtual = fase.opcaoA.proximo;
                renderizarFase();
            };
        }

        //btnB
        if (btnB) {
            btnB.onclick = function() {
                faseAtual = fase.opcaoB.proximo;
                renderizarFase();
            };
        }
    }

    //Trocar o botão de "Avançar" por "Recomeçar" nas fases finais
    else if (fase.tipo === "final") {
        containerDecisao.style.display = "none";
        btnProximo.style.display = "block";
        btnProximo.innerText = "Recomeçar";
        
        btnProximo.onclick = function() {
            faseAtual = 1; 
            renderizarFase(); 
        };
    } 
    else {
        containerDecisao.style.display = "none";
        btnProximo.style.display = "block";
        btnProximo.innerText = "Avançar"; 
        btnProximo.onclick = function() {
            proximoNivel(); 
        };
    }
}

//___Funções de controle____
function fazerEscolha(escolha) {
    const fase = roteiro[faseAtual];
    faseAtual = (escolha === 'A') ? fase.opcaoA.proximo : fase.opcaoB.proximo;
    renderizarFase();
}

function proximoNivel() {
    faseAtual = roteiro[faseAtual].proximo;
    renderizarFase();
}

//_____Lógica expansão nos celulares____
const btnExpandir = document.querySelector('.btn-controle[title="Expandir"]');
const btnDiminuir = document.querySelector('.btn-controle[title="Diminuir"]');

// Função de Expandir
btnExpandir.addEventListener('click', () => {
    document.body.classList.add('tela-expandida');
    faseAtual = 1;
    renderizarFase();
});

// Função de Diminuir
btnDiminuir.addEventListener('click', () => {
    document.body.classList.remove('tela-expandida');
});

//______vagalumes_________
// Aguarda o documento carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    const botaoTema = document.getElementById('toggle-dark-mode');
    
});

// Sua função de criar os vagalumes
function criarVagalumesNasLaterais() {
    const container = document.getElementById('container-vagalumes');
    if (!container) return;

    const laterais = ['lateral-esquerda', 'lateral-direita'];
    
    laterais.forEach(classe => {
        const faixa = document.createElement('div');
        faixa.className = `faixa-vagalume ${classe}`;
        container.appendChild(faixa);
        
        for (let i = 0; i < 10; i++) {
            const v = document.createElement('div');
            v.className = 'vagalume';
            v.style.top = Math.random() * 100 + '%';
            v.style.left = Math.random() * 80 + '%';
            v.style.animationDelay = Math.random() * 3 + 's';
            faixa.appendChild(v);
        }
    });
}

//________Inicia o jogo para os tablets e computadores sem precisar clicar no manual__________
function inicializarJogoAutomaticamente() {
    //lógica do conteúdo
    faseAtual = 1;
    renderizarFase();
    
    //Ativar o display sem ocultar o véu 
    const display = document.getElementById('display-principal');
    if (display) {
        display.style.display = 'block';
    }
    
    console.log("Jogo inicializado em background (Fase 1). O véu permanece.");
}

//Gatilho para Tablets e PCs
window.addEventListener('load', () => {
    if (window.innerWidth > 600) {
        inicializarJogoAutomaticamente();
    }
});
