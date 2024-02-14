# Polls

## Descrição

Este é um projeto para criar e gerenciar pesquisas online. Ele fornece uma interface web para criar, responder e visualizar resultados de pesquisas.

## Como Executar usando Docker

1. Certifique-se de ter o Docker instalado em sua máquina.
2. Clone este repositório.
3. Abra um terminal na pasta raiz do projeto.
4. Execute o seguinte comando para iniciar os serviços do PostgreSQL e Redis:

```bash
docker-compose up
```

5. Acesse a aplicação em seu navegador através do endereço `http://localhost:3000`.

## Dependências de Desenvolvimento

- `@types/node`: Fornece definições de tipos para o ambiente Node.js.
- `prisma`: ORM para interagir com banco de dados SQL.
- `tsx`: Compilador para arquivos TypeScript.
- `typescript`: Linguagem de programação que adiciona tipagem estática opcional ao JavaScript.

## Dependências

- `@fastify/cookie`: Plugin para gerenciar cookies no framework Fastify.
- `@fastify/websocket`: Plugin para suportar WebSockets no framework Fastify.
- `@prisma/client`: Cliente Prisma para interagir com o banco de dados.
- `fastify`: Framework web leve e eficiente para Node.js.
- `ioredis`: Cliente Redis para Node.js.
- `zod`: Biblioteca para validação de esquemas de dados em JavaScript.
