const DADOS = {
  nome: "Rafael Mateus Miranda Bernardino",
  nomeCurto: "Rafael Bernardino",
  papel: "Desenvolvedor | Estudante de DSM",
  resumo: "Estudante de DSM na Fatec Itaquera e SRE no C6 Bank. Apaixonado por tecnologia, infraestrutura e desenvolvimento de software. Sempre atrás de oportunidades para crescer profissionalmente.",
  foto: "img/eumesmo.jpg",                       
  github: "https://github.com/rafammb",

  curso: {
    faculdade: "Fatec Itaquera",
    nome: "Desenvolvimento de Software Multiplataforma (DSM)",
    inicio: "2024/1",                 
    conclusao: "2026/12"
  },

  linguas: [
    { nome: "Português", nivel: "Nativo" },
    { nome: "Inglês", nivel: "Intermediário" }
  ],

  trabalhos: [
    {
  empresa: "C6 Bank",
  inicio: "08/2026",
  fim: "",
  cargo: "Analista Júnior de SRE",
  descricao: `Após a efetivação, passei a atuar em um time especializado em pipelines e provisionamento, com foco em disponibilizar e manter ferramentas e recursos para os times de desenvolvimento. Trabalho na criação, manutenção e evolução de pipelines de CI/CD, automação de processos e provisionamento de infraestrutura, contribuindo para a padronização e confiabilidade dos fluxos de desenvolvimento e deploy.
              Também presto suporte aos desenvolvedores em demandas relacionadas a pipelines, ambientes e infraestrutura, atuando na identificação e resolução de problemas e na melhoria contínua dos processos de entrega de aplicações.`
},

    {
  empresa: "C6 Bank",
  inicio: "08/2024",
  fim: "07/2026",
  cargo: "Estagiário de SRE",
  descricao: "Durante meu estágio, atuei na área de Site Reliability Engineering (SRE), prestando suporte aos times de desenvolvimento e contribuindo para a estabilidade, disponibilidade e confiabilidade dos ambientes e aplicações. " +
             "Minhas atividades incluíam o suporte aos desenvolvedores, análise e resolução de incidentes, acompanhamento de pipelines de CI/CD, identificação de problemas em aplicações e infraestrutura, além do auxílio na automação e melhoria de processos relacionados ao ciclo de desenvolvimento e deploy. " +
             "Durante esse período, tive contato com diversas ferramentas e tecnologias utilizadas no ecossistema de DevOps e SRE, como Harness, Concourse, Bitbucket, SonarQube, AWS e Rundeck. Utilizei essas ferramentas para atividades relacionadas à integração e entrega contínua, gerenciamento de código-fonte, análise de qualidade, automação de tarefas e gerenciamento de ambientes. " +
             "A experiência também me permitiu desenvolver conhecimentos em cloud computing, CI/CD, automação, troubleshooting, observabilidade e práticas de SRE, além de aprimorar minha capacidade de trabalhar em conjunto com diferentes equipes para solucionar problemas e manter os serviços funcionando de forma eficiente e confiável."
}
  ],

  cursos: [
    { nome: "Automação é Lei", instituicao: "Átila Aloise", local: "Online", horas: "60 h", periodo: "2025" },
    { nome: "Curso de Python", instituicao: "Gustavo Guanabara (Curso em Vídeo)", local: "Online", horas: "120 h", periodo: "2024" },
    { nome: "Python Essentials", instituicao: "Linuxtips", local: "Online", horas: "50 h", periodo: "2025" },
    { nome: "Linux Essentials", instituicao: "Linuxtips", local: "Online", horas: "50 h", periodo: "2025" },

    ],

  habilidades: [
    { area: "SRE e DevOps", itens: ["CI/CD", "Harness", "Concourse", "Bitbucket", "SonarQube", "Rundeck", "AWS"] },
    { area: "Front-end", itens: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Ant Design"] },
    { area: "Mobile", itens: ["React Native", "Gluestack UI", "Kotlin Multiplatform"] },
    { area: "Back-end", itens: ["Java", "Spring Boot", "Kotlin", "Python"] },
    { area: "Bancos de dados", itens: ["PostgreSQL", "MongoDB"] },
    { area: "Nuvem e infraestrutura", itens: ["AWS Lambda", "AWS EC2", "Docker", "Linux"] }
  ],


  projetos: [
    {
      id: "sem1", semestre: 1, nome: "Buguela",
      resumo: "Buguela é um site institucional para uma marca de roupas autoral, com foco em responsabilidade social.",
      descricao: "Criamos um projeto para uma marca que tinha preocupações e responsabilidades sociais. O objetivo era criar uma página web que apresentasse a marca, seus produtos e sua missão.",
      techs: ["HTML", "CSS", "JavaScript", "Bulma"],
      repo: "https://rudeboyone.github.io/projeto-integrador/",
      prints: ["img/baguela4.png", "img/baguela3.png", "img/baguela2.png", "img/baguela1.png"],
      participacao: "Foram meus primeiros passos em desenvolvimento web, com HTML, CSS e JavaScript. Aprendi a criar páginas web estáticas, estilizar elementos e adicionar interatividade básica.",
      techsUsadas: ["HTML", "CSS", "JavaScript", "Bulma"],
    },
    {
      id: "visgo-de-jaca", semestre: 2, nome: "Visgo de Jaca",
      resumo: "Site vitrine para as estampas de uma marca autoral.",
      descricao: "Trabalho final de Desenvolvimento Web. O site apresenta as estampas da marca e leva o público para as redes sociais. Como o cliente trabalha sozinho, ele cadastra os produtos pelo próprio site, e o sistema já prevê outros usuários caso ele precise de ajuda no futuro.",
      techs: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/DSM2SEM2024/100esperanca",
      prints: ["img/sem2-1.png", "img/sem2-2.png"],
      participacao: "Primeira vez que usei media queries para responsividade e componentização de elementos Javascript",
      techsUsadas: ["JavaScript", "HTML" ],
    },
    {
      id: "estudio-pilates", semestre: 3, nome: "Sistema de Gerenciamento de Estúdio de Pilates",
      resumo: "Gestão de aulas, planos e usuários de um estúdio de pilates.",
      descricao: "Projeto da disciplina de Banco de Dados Não Relacional. O sistema tem login e três perfis (administrador, instrutor e recepcionista), além de controle de aulas e planos. A API foi feita em Java com Spring Boot e MongoDB, e o ambiente sobe com Docker Compose. O projeto não teve deploy.",
      techs: ["Java", "Spring Boot", "MongoDB", "Docker", "JavaScript", "HTML", "CSS"],
      repo: "https://github.com/lucasfnCode/App-for-Studio-the-pilates-PI---FATEC",
      prints: ["img/login_pilates.png", "img/home_pilates2.png", "img/planos_pilates3.png"],
      participacao: "Participei de um projeto acadêmico de desenvolvimento de software, no qual adquiri conhecimentos sobre bancos de dados não relacionais utilizando MongoDB, integração com backend desenvolvido em Java e Spring Boot, além da implementação de uma camada de autenticação com diferentes perfis de usuário. A experiência contribuiu para ampliar meus conhecimentos em desenvolvimento backend, integração de sistemas e segurança de aplicações.",
      techsUsadas: ["Java", "Spring Boot", "MongoDB", "Docker", "JavaScript"],
    },
    {
      id: "frontend-leads", semestre: 4, nome: "Frontend Leads",
      resumo: "Plataforma web para corretores centralizarem seus leads imobiliários.",
      descricao: "Aplicação dividida em partes separadas (front-end, back-end e infraestrutura) para o corretor atender clientes, avaliar imóveis e agendar visitas num só lugar, modernizando o software que o cliente já usava. Chegamos a um MVP e à negociação de contrato, mas o negócio não seguiu adiante.",
      techs: ["React", "TypeScript", "Ant Design", "Java", "Spring Boot", "PostgreSQL", "AWS Lambda", "AWS EC2"],
      repo: "https://github.com/100esperanca/frontend-leads",
      prints: ["img/rofe1.png", "img/rofe2.png", "img/rofe3.png"],
      participacao: "Atuei principalmente no desenvolvimento do front-end, contribuindo para a implementação e organização das interfaces utilizando React, TypeScript e Ant Design. Participei da construção das telas e dos componentes da aplicação, buscando tornar a navegação mais clara e facilitar o acesso às funcionalidades destinadas aos corretores. Também tive contato com a integração entre o front-end e o back-end durante a construção do MVP",
      techsUsadas: ["React", "Java", "Spring Boot", "AWS Lambda", "AWS EC2"],
    },
    {
      id: "mobile-leads", semestre: 5, nome: "Mobile Leads",
      resumo: "Versão mobile do gerenciador de leads, para vários usuários.",
      descricao: "App nativo em React Native com Gluestack UI, reaproveitando o back-end em Java e Spring Boot com PostgreSQL. Foi adicionado um algoritmo em Python para medir a temperatura dos leads. Diferente da primeira versão, esta foi planejada como aplicação multiusuário.",
      techs: ["React Native", "Gluestack UI", "Java", "Spring Boot", "PostgreSQL", "Python", "AWS"],
      repo: "https://github.com/100esperanca/mobile-leads",
      prints: ["img/mob1.png", "img/mob2.png", "img/mob3.png", "img/mob4.png", "img/mob5.png", "img/mob6.png"],
      participacao: " Eu desenvolvi a aplicação mobile em React Native, utilizando Gluestack UI para criar interfaces responsivas e intuitivas. Trabalhei na integração com o back-end em Java e Spring Boot, garantindo a comunicação eficiente entre o aplicativo e o banco de dados PostgreSQL. Além disso, implementei um algoritmo em Python para medir a temperatura dos leads, contribuindo para a funcionalidade principal do aplicativo. Participei ativamente do planejamento e desenvolvimento da aplicação multiusuário, garantindo que os usuários pudessem gerenciar seus leads de forma eficaz.",
      techsUsadas: ["React Native", "Gluestack UI", "Python", "AWS"],
    },
    {
      id: "mobile-leads-v2", semestre: 6, emDesenvolvimento: true, nome: "Mobile Leads V2",
      resumo: "O gerenciador de leads reescrito em Kotlin.",
      descricao: "Continuação do gerenciador de leads, reescrita do zero em Kotlin: back-end com Kotlin e Spring Boot, e front-end com Kotlin Multiplatform, que compartilha código entre Android, Web e iOS. A interface quase não mudou, e o banco continuou PostgreSQL.",
      techs: ["Kotlin", "Kotlin Multiplatform", "Spring Boot", "PostgreSQL"],
      repo: "https://github.com/rafammb",
      prints: ["img/mob1.png", "img/mob2.png", "img/mob3.png", "img/mob4.png", "img/mob5.png", "img/mob6.png"],
      participacao: "[O que VOCÊ fez neste projeto.]",
      techsUsadas: ["[tecnologia]"],
    }
  ]
};

function limpar(texto) {
  return String(texto).replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
  });
}

function etiquetas(lista) {
  return lista.map(function (t) { return '<span class="tag">' + limpar(t) + "</span>"; }).join("");
}

function iniciais() {
  var partes = DADOS.nome.split(" ");
  return partes[0][0] + partes[partes.length - 1][0];
}




var reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function montarCabecalho() {
  document.getElementById("topo").innerHTML =
    '<div class="miolo"><a class="marca" href="#/">rafael<span>.</span>sre</a><nav>' +
    '<a href="#projetos">Projetos</a><a href="#stack">Stack</a>' +
    '<a href="#experiencia">Experiência</a><a href="#cursos">Cursos</a></nav></div>' +
    '<div class="progresso" id="progresso"></div>';
  document.getElementById("rodape").innerHTML =
    limpar(DADOS.nome) + ' | <a href="' + limpar(DADOS.github) + '" target="_blank" rel="noopener">GitHub</a>';
}

function secaoInicio() {
  var c = DADOS.curso;
  var primeiro = DADOS.nomeCurto.split(" ")[0];
  var resto = DADOS.nomeCurto.split(" ").slice(1).join(" ");
  var empresa = DADOS.trabalhos[0].empresa;
  var linguas = DADOS.linguas.map(function (l) { return l.nome + " (" + l.nivel + ")"; }).join(", ");

  return '<div class="miolo"><div class="heroi"><div>' +
    "<h1>" + limpar(primeiro) + " <em>" + limpar(resto) + "</em></h1>" +
    '<div class="papel">' + limpar(DADOS.papel) + "</div>" +
    "<p>" + limpar(DADOS.resumo) + "</p>" +
    '<div class="botoes"><a class="botao" href="#projetos">Ver projetos</a>' +
    '<a class="botao vazio" href="' + limpar(DADOS.github) + '" target="_blank" rel="noopener">GitHub</a></div></div>' +
    '<div class="moldura"><div class="foto"><img src="' + limpar(DADOS.foto) + '" alt="Foto de ' + limpar(DADOS.nomeCurto) +
    '" onerror="this.parentNode.textContent=\'' + iniciais() + '\'"></div></div></div>' +
    '<div class="fatos">' +
    "<div><small>Curso</small><strong>DSM | " + limpar(c.faculdade) + "</strong></div>" +
    "<div><small>Período</small><strong>" + limpar(c.inicio) + " até " + limpar(c.conclusao) + "</strong></div>" +
    "<div><small>Trabalho</small><strong>" + limpar(empresa) + "</strong></div>" +
    "<div><small>Línguas</small><strong>" + limpar(linguas) + "</strong></div></div></div>";
}

function secaoTerminal() {
  return '<section class="sem-titulo"><div class="term">' +
    '<div class="barra"><i></i><i></i><i></i><span>rafael@c6bank: ~</span></div>' +
    '<pre id="term-saida" aria-label="Resumo do perfil em formato de terminal"></pre></div></section>';
}

function secaoProjetos() {
  var cards = DADOS.projetos.map(function (p) {
    var selo = p.emDesenvolvimento ? '<em class="selo">Em desenvolvimento</em>' : "";
    return '<a class="card" href="#/projeto/' + p.id + '">' +
      '<div class="capa c' + p.semestre + '"><b>' + p.semestre + 'º</b><span>' + p.semestre + 'º semestre</span>' + selo + "</div>" +
      '<div class="texto"><h3>' + limpar(p.nome) + "</h3><p>" + limpar(p.resumo) + "</p>" + etiquetas(p.techs.slice(0, 5)) + "</div></a>";
  }).join("");
  return '<section id="projetos"><h2>Projetos</h2>' +
    '<p class="intro">Um projeto por semestre. Clique em um card para ver detalhes, prints e a minha participação.</p>' +
    '<div class="cards">' + cards + "</div></section>";
}

function secaoStack() {
  var grupos = DADOS.habilidades.map(function (g) {
    return '<div class="grupo"><h3>' + limpar(g.area) + "</h3>" + etiquetas(g.itens) + "</div>";
  }).join("");
  return '<section id="stack"><h2>Stack</h2>' +
    '<p class="intro">Tecnologias que apareceram nos meus projetos e no dia a dia.</p>' +
    '<div class="grupos">' + grupos + "</div></section>";
}

function secaoExperiencia() {
  var marcos = DADOS.trabalhos.map(function (t) {
    return '<div class="marco"><h3>' + limpar(t.cargo) + "</h3>" +
      '<div class="detalhe">' + limpar(t.empresa) + " | " + limpar(t.inicio) + " até " + (t.fim ? limpar(t.fim) : "hoje") + "</div>" +
      "<p>" + limpar(t.descricao) + "</p></div>";
  }).join("");
  return '<section id="experiencia"><h2>Experiência</h2><div class="tempo">' + marcos + "</div></section>";
}

function secaoCursos() {
  var cursos = DADOS.cursos.map(function (k) {
    return '<div class="curso"><h3>' + limpar(k.nome) + "</h3><p>" + limpar(k.instituicao) + " | " + limpar(k.local) +
      "</p><p>" + limpar(k.horas) + " | " + limpar(k.periodo) + "</p></div>";
  }).join("");
  return '<section id="cursos"><h2>Cursos de extensão</h2><div class="cursos">' + cursos + "</div></section>";
}

function paginaInicial() {
  return secaoInicio() + '<div class="miolo">' + secaoTerminal() + secaoProjetos() + secaoStack() +
    secaoExperiencia() + secaoCursos() + "</div>";
}


function carrossel(p) {
  var slides = p.prints.map(function (src, i) {
    return '<figure class="slide"><div class="slide-fundo" style="background-image:url(\'' + limpar(src) + '\')"></div>' +
      '<img src="' + limpar(src) + '" alt="Tela ' + (i + 1) + " do projeto " + limpar(p.nome) + '" loading="lazy"></figure>';
  }).join("");
  var minis = p.prints.map(function (src, i) {
    return '<button class="mini" type="button" aria-label="Ir para a tela ' + (i + 1) + '"><img src="' + limpar(src) + '" alt=""></button>';
  }).join("");

  return '<div class="car" tabindex="0" role="region" aria-label="Telas do projeto ' + limpar(p.nome) + '">' +
    '<div class="car-janela"><div class="barra"><i></i><i></i><i></i><span>' + limpar(p.nome) + "</span></div>" +
    '<div class="car-palco"><div class="car-trilho">' + slides + "</div>" +
    '<button class="car-seta ant" type="button" aria-label="Tela anterior">&#8249;</button>' +
    '<button class="car-seta prox" type="button" aria-label="Próxima tela">&#8250;</button>' +
    '<span class="car-contador"></span></div></div>' +
    '<div class="car-minis">' + minis + "</div></div>";
}

function iniciarCarrossel() {
  var car = document.querySelector(".car");
  if (!car) return;

  var trilho = car.querySelector(".car-trilho");
  var imagens = car.querySelectorAll(".slide img");
  var minis = car.querySelectorAll(".mini");
  var contador = car.querySelector(".car-contador");
  var total = imagens.length;
  var atual = 0;
  var timer = null;
  var arrastou = false;

  function ir(n) {
    atual = (n + total) % total;
    trilho.style.transform = "translateX(-" + atual * 100 + "%)";
    contador.textContent = (atual + 1) + " / " + total;
    minis.forEach(function (m, i) { m.classList.toggle("ativa", i === atual); });
  }

  function parar() { clearInterval(timer); }
  function iniciarAuto() {
    parar();
    if (reduzMovimento || total < 2) return;
    timer = setInterval(function () {
      if (!document.body.contains(car)) { parar(); return; } // saiu da tela do projeto
      ir(atual + 1);
    }, 5000);
  }

  car.querySelector(".ant").addEventListener("click", function () { ir(atual - 1); });
  car.querySelector(".prox").addEventListener("click", function () { ir(atual + 1); });
  minis.forEach(function (m, i) { m.addEventListener("click", function () { ir(i); }); });

  car.addEventListener("mouseenter", parar);
  car.addEventListener("mouseleave", iniciarAuto);
  car.addEventListener("focusin", parar);
  car.addEventListener("focusout", iniciarAuto);
  car.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") ir(atual - 1);
    if (e.key === "ArrowRight") ir(atual + 1);
  });

  var inicioX = 0;
  trilho.addEventListener("pointerdown", function (e) { inicioX = e.clientX; arrastou = false; });
  trilho.addEventListener("pointerup", function (e) {
    var dif = e.clientX - inicioX;
    if (Math.abs(dif) > 50) { arrastou = true; ir(dif < 0 ? atual + 1 : atual - 1); }
  });

  trilho.addEventListener("click", function () { if (!arrastou) abrirTelaCheia(); });

  function abrirTelaCheia() {
    parar();
    var lb = document.createElement("div");
    lb.className = "lb";
    lb.innerHTML = '<img alt=""><button type="button" class="lb-fechar" aria-label="Fechar">&times;</button>';
    document.body.appendChild(lb);

    function mostrar() { lb.querySelector("img").src = imagens[atual].src; }
    function fechar() {
      document.removeEventListener("keydown", teclas);
      lb.remove();
      iniciarAuto();
    }
    function teclas(e) {
      if (e.key === "Escape") fechar();
      if (e.key === "ArrowLeft") { ir(atual - 1); mostrar(); }
      if (e.key === "ArrowRight") { ir(atual + 1); mostrar(); }
    }
    lb.addEventListener("click", fechar);
    document.addEventListener("keydown", teclas);
    mostrar();
  }

  ir(0);
  iniciarAuto();
}


function paginaEmDesenvolvimento(p) {
  return '<div class="miolo"><a class="voltar" href="#/">&larr; Voltar aos projetos</a>' +
    '<div class="projeto-topo c' + p.semestre + '"><b>' + p.semestre + "º</b><h1>" + limpar(p.nome) +
    "</h1><p>Projeto do " + p.semestre + "º semestre</p></div>" +
    '<section class="obras"><svg class="engrenagem" viewBox="0 0 24 24" width="64" height="64" aria-hidden="true">' +
    '<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="3.5" stroke-dasharray="3.14 3.14"/><circle cx="12" cy="12" r="5.5" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>' +
    "<h2>Em desenvolvimento</h2>" +
    "<p>Este projeto ainda está sendo construído. Em breve os prints e os detalhes aparecem por aqui.</p>" +
    '<div class="barra-obra" role="progressbar" aria-label="Em desenvolvimento"><span></span></div>' +
    "<div>" + etiquetas(p.techs) + "</div>" +
    '<p><a class="botao" href="' + limpar(p.repo) + '" target="_blank" rel="noopener">Acompanhar no GitHub</a></p></section></div>';
}

function paginaProjeto(id) {
  var p = DADOS.projetos.find(function (x) { return x.id === id; });
  if (!p) return '<div class="miolo"><a class="voltar" href="#/">Voltar</a><p>Projeto não encontrado.</p></div>';
  if (p.emDesenvolvimento) return paginaEmDesenvolvimento(p);

  var codigo = p.codigo
    ? "<section><h2>Trecho de código</h2><pre><code>" + limpar(p.codigo) + "</code></pre></section>"
    : "";

  return '<div class="miolo"><a class="voltar" href="#/">&larr; Voltar aos projetos</a>' +
    '<div class="projeto-topo c' + p.semestre + '"><b>' + p.semestre + "º</b><h1>" + limpar(p.nome) +
    "</h1><p>Projeto do " + p.semestre + "º semestre</p></div>" +
    "<section><h2>Sobre o projeto</h2><p>" + limpar(p.descricao) + "</p>" + etiquetas(p.techs) +
    '<p><a class="botao" href="' + limpar(p.repo) + '" target="_blank" rel="noopener">Ver código no GitHub</a></p></section>' +
    '<section><h2>Telas do projeto</h2>' + carrossel(p) + "</section>" +
    "<section><h2>Minha participação</h2><p>" + limpar(p.participacao) + "</p>" + etiquetas(p.techsUsadas) + "</section>" +
    codigo + "</div>";
}


function esperar(ms) { return new Promise(function (ok) { setTimeout(ok, ms); }); }

function iniciarTerminal() {
  var saida = document.getElementById("term-saida");
  if (!saida) return;

  var t = DADOS.trabalhos[0];
  var areas = DADOS.habilidades.map(function (h) { return h.area; }).join(" | ");
  var linhas = [
    { cmd: "whoami", saida: DADOS.nome + " | " + t.cargo + " @ " + t.empresa },
    { cmd: "cat formacao.txt", saida: DADOS.curso.faculdade + " | DSM | " + DADOS.curso.inicio + " até " + DADOS.curso.conclusao },
    { cmd: "ls projetos/", saida: DADOS.projetos.map(function (p) { return p.id; }).join("  ") },
    { cmd: "echo $STACK", saida: areas }
  ];
  var prompt = '<span class="verde">rafael@c6bank</span>:<span class="azul">~</span>$ ';

  async function rodar() {
    var feito = "";
    for (var i = 0; i < linhas.length; i++) {
      var cmd = linhas[i].cmd;
      for (var j = 1; j <= cmd.length; j++) {
        if (!document.body.contains(saida)) return; // trocou de tela
        saida.innerHTML = feito + prompt + limpar(cmd.slice(0, j)) + '<span class="cursor"></span>';
        await esperar(reduzMovimento ? 0 : 38);
      }
      feito += prompt + limpar(cmd) + "\n" + '<span class="resp">' + limpar(linhas[i].saida) + "</span>\n";
      saida.innerHTML = feito + prompt + '<span class="cursor"></span>';
      await esperar(reduzMovimento ? 0 : 420);
    }
  }

  if (!("IntersectionObserver" in window)) { rodar(); return; }
  var obs = new IntersectionObserver(function (entradas) {
    if (entradas[0].isIntersecting) { obs.disconnect(); rodar(); }
  }, { threshold: 0.4 });
  obs.observe(saida);
}

function ativarRevelar() {
  if (reduzMovimento || !("IntersectionObserver" in window)) return;
  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("visivel"); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll("#conteudo section, #conteudo .card, #conteudo .grupo, #conteudo .curso, #conteudo .marco").forEach(function (el, i) {
    el.classList.add("revela");
    if (el.classList.contains("card")) el.style.transitionDelay = ((i % 3) * 90) + "ms";
    obs.observe(el);
  });
}

document.addEventListener("mousemove", function (e) {
  var card = e.target.closest ? e.target.closest(".card") : null;
  if (!card) return;
  var r = card.getBoundingClientRect();
  card.style.setProperty("--mx", (e.clientX - r.left) + "px");
  card.style.setProperty("--my", (e.clientY - r.top) + "px");
});

window.addEventListener("scroll", function () {
  var barra = document.getElementById("progresso");
  if (!barra) return;
  var total = document.documentElement.scrollHeight - window.innerHeight;
  barra.style.width = (total > 0 ? (window.scrollY / total) * 100 : 0) + "%";
}, { passive: true });


var telaAtual = ""; // "inicio" ou o id do projeto aberto

function atualizarTela() {
  var achou = location.hash.match(/^#\/projeto\/(.+)$/);
  var nova = achou ? achou[1] : "inicio";

  if (nova !== telaAtual) {
    document.getElementById("conteudo").innerHTML = achou ? paginaProjeto(achou[1]) : paginaInicial();
    telaAtual = nova;
    window.scrollTo(0, 0);
    iniciarCarrossel();
    iniciarTerminal();
    ativarRevelar();
  }

  var alvo = !achou && location.hash.length > 2 ? document.getElementById(location.hash.slice(1)) : null;
  if (alvo) alvo.scrollIntoView();
  document.title = DADOS.nomeCurto + " | Portfólio";
}

montarCabecalho();
atualizarTela();
window.addEventListener("hashchange", atualizarTela);