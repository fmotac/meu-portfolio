// Lista de projetos exibida na seção "Meus projetos"
const projetos = [
  { titulo: "Calculadora de Parcelas", descricao: "Calcula parcelas com juros simples.", tecnologia: "JavaScript", link: "https://github.com/seu-usuario/calculadora-de-parcelas" },
  { titulo: "Lista de Tarefas", descricao: "Adiciona e remove tarefas do dia.", tecnologia: "HTML + JS", link: "https://github.com/seu-usuario/lista-de-tarefas" },
  { titulo: "Landing Page", descricao: "Página de vendas responsiva.", tecnologia: "HTML + CSS", link: "https://github.com/seu-usuario/landing-page" },
];

function renderizarProjetos() {
  const lista = document.getElementById("listaProjetos");
  lista.innerHTML = "";

  projetos.forEach((projeto) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <small>${projeto.tecnologia}</small>
      <a class="link-projeto" href="${projeto.link}" target="_blank" rel="noopener noreferrer">Ver mais</a>
    `;
    lista.appendChild(card);
  });
}

function alternarTema() {
  document.body.classList.toggle("claro");
}

function enviarContato(evento) {
  evento.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  if (!email.includes("@")) {
    document.getElementById("retorno").textContent = "Digite um e-mail válido.";
    return;
  }
  document.getElementById("retorno").textContent =
    "Obrigado, " + nome + "! Mensagem recebida.";
}

document.getElementById("btnTema").addEventListener("click", alternarTema);
document.getElementById("formContato").addEventListener("submit", enviarContato);

renderizarProjetos();
// função que conta quantos projetos existem e mostra no console
function contarProjetos() {
  console.log("Total de projetos: " + projetos.length);
}

contarProjetos();
