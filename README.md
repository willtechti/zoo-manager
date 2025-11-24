Sistema de Gerenciamento de Zoológico

Este projeto foi desenvolvido como parte de um desafio técnico, com o objetivo de demonstrar conhecimentos em desenvolvimento web, organização de código, consumo de API REST e implementação de operações CRUD utilizando React.

Objetivo do Sistema

O sistema permite o gerenciamento de duas entidades principais: animais e cuidados aplicados aos animais. Ele permite cadastrar, listar, editar e excluir registros, sempre consumindo dados de uma API REST.

Tecnologias Utilizadas

Frontend:
React (Create React App)
React Router DOM
Fetch API para comunicação com a API
CSS puro para estilização personalizada

Backend (API Fake):
JSON Server
Arquivo db.json utilizado como banco de dados simulado

Arquitetura Resumida do Projeto

Pasta “api” contém o backend fake com JSON Server e o arquivo db.json.
Pasta “frontend” contém todo o código React, incluindo páginas, componentes, rotas e serviços.

Funcionalidades

Animais:
Listagem de animais cadastrados
Cadastro de novos animais
Edição de dados existentes
Exclusão
Campos: nome, espécie, descrição, habitat, país de origem, data de nascimento

Cuidados:
Listagem de cuidados cadastrados
Cadastro de novos cuidados
Edição
Exclusão
Campos: nome do cuidado, descrição, frequência

API REST

A aplicação consome uma API REST criada com JSON Server.
Para iniciar a API, acesse a pasta “api”, instale as dependências e execute o JSON Server na porta 3001.

A API fornece operações de GET, POST, PUT e DELETE para as rotas /animais e /cuidados.

Execução do Frontend

O frontend foi criado com React. Para executar:
Acesse a pasta “frontend”
Instale as dependências
Execute o ambiente de desenvolvimento
O navegador será aberto automaticamente, geralmente na porta 3000 (ou outra disponível).

Comunicação entre Frontend e API

O frontend utiliza a Fetch API para acessar os dados do backend em:
http://localhost:3001/animais

http://localhost:3001/cuidados

Todas as regras de comunicação estão organizadas na pasta “services”.

Considerações Finais

O sistema atende aos requisitos do desafio técnico: possui CRUD completo para animais e cuidados, consome uma API REST real, separa frontend e backend, possui código simples, organizado e de fácil manutenção, além de ser totalmente funcional para fins demonstrativos.