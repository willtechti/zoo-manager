🦁 Sistema de Gerenciamento de Zoológico

Este projeto foi desenvolvido como parte de um desafio técnico, com o objetivo de demonstrar conhecimentos em desenvolvimento web, organização de código, consumo de API REST e implementação de operações CRUD utilizando React.

🎯 Objetivo do Sistema

O sistema permite gerenciar duas entidades principais:

Animais

Cuidados aplicados aos animais

As operações disponíveis incluem:

Cadastro

Listagem

Edição

Exclusão

Todas realizadas consumindo dados de uma API REST.

🛠️ Tecnologias Utilizadas
Frontend

React (Create React App)

React Router DOM

Fetch API (comunicação com backend)

CSS puro (estilização personalizada)

Backend (API Fake)

JSON Server

Arquivo db.json utilizado como banco de dados simulado

📁 Arquitetura do Projeto

Pasta api/
Contém o backend fake usando JSON Server e o arquivo db.json.

Pasta frontend/
Contém o projeto React, incluindo:

Páginas

Componentes

Rotas

Serviços de comunicação com API

🐾 Funcionalidades
Animais

Listar animais cadastrados

Cadastrar novos animais

Editar registros existentes

Excluir animais
Campos:

Nome

Espécie

Descrição

Habitat

País de origem

Data de nascimento

Cuidados

Listar cuidados cadastrados

Cadastrar novos cuidados

Editar cuidados

Excluir cuidados
Campos:

Nome do cuidado

Descrição

Frequência

📡 API REST — JSON Server

A aplicação utiliza uma API REST criada com JSON Server.

▶️ Como iniciar a API

Acesse a pasta api/

Instale as dependências:

npm install


Inicie a API:

npx json-server --watch db.json --port 3001

▶️ Rotas disponíveis

GET /animais

POST /animais

PUT /animais/:id

DELETE /animais/:id

GET /cuidados

POST /cuidados

PUT /cuidados/:id

DELETE /cuidados/:id

🚀 Execução do Frontend

Para rodar o projeto React:

Acesse a pasta frontend/

Instale as dependências:

npm install


Execute o ambiente de desenvolvimento:

npm start


O navegador será aberto automaticamente — normalmente em http://localhost:3000
.

🔗 Comunicação entre Frontend e Backend

O frontend acessa a API por meio dos endpoints:

http://localhost:3001/animais

http://localhost:3001/cuidados

Toda a lógica de comunicação está organizada na pasta:

frontend/src/services/

✔️ Considerações Finais

O sistema atende aos requisitos do desafio técnico:

CRUD completo para Animais e Cuidados

Consumo real de API REST

Separação clara entre frontend e backend

Código organizado, simples e de fácil manutenção

Funcional e adequado para avaliação técnica