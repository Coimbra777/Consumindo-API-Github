const repositories = document.querySelector(".content-main");

// função para consumir API
function getApiGithub() {
  fetch("https://api.github.com/users/Coimbra777/repos").then(async (resp) => {
    // se a resposta nao for ok
    if (!resp.ok) {
      throw new Error("Não foi possível encontrar o repositótio");
    }
    // execução depois da resposta
    let data = await resp.json();
    // console.log(data);

    // iteração com os itens
    data.map((item) => {
      // criação da div do HTML
      let project = document.createElement("div");

      //iinterpolação do HTML
      project.innerHTML = `<div class="project">
      <div>
        <h4 class="title">${item.name}</h4>
        <span class="date-create">${Intl.DateTimeFormat("pt-BR").format(
          new Date(item.created_at)
        )}</span>
      </div>
      <div>
        <a href="${item.html_url}" target= "_blank">${item.html_url}</a>
        <span class="language"> <span class="circle"></span>${
          item.language
        }</span>
      </div>`;

      // propriedade para adicionar a div
      repositories.appendChild(project);
    });
  });
}

getApiGithub();
