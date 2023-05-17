# Consumindo-API-Github

### Desenvolvi esse programa com o intuito de testar meus conhecimentos com consumo de API's .

### No programa usei como exemplo a API do Github, onde pude através da linguagem de programação JavaScript , extrair informações dos meus repositórios,<br>como: Título, a data que foi criado, Link para o repositório , e o tipo de tecnologia usada .

### Na construção do programa usei como referência tutorias no YouTube,documentação da Web , e aulas sobre requisições e consumo de API´s 

## Sobre a estrutura do programa:
- Na construção da estrutura HTML, utilizei div's para segurar os conteúdos do título, data, link, language
- Com CSS , usei as classes criadas nas div's para estilização das mesmas e dos outros elementos .

## Sobre a Lógica:
- Usei o método querySelector() para obter o elemento main e armazenei-o em uma variável,
- Em seguida criei uma função para consumir os dados da API através do método fetch(), seguido de uma verificação que, caso não tenha uma resposta, retornará uma mensagem de Error
- Tendo em vista os dados obtidos ( utilizei async, await)  criei e utilizei a variável data com o método .map() iterando os itens da API e depois selecionei os itens referentes aos que foram consultados.
- Ao final fiz uma intepolação do código HTML para cria-lo via JavaScript.
- Utilizie os método .createElement() para criar uma div do conteúdo principal e depois .appendChild(), para adicionar a div criada à constante repositories.

 
