# Simples REST API em Node.js com Express e MySQL

Esta API REST foi desenvolvida para suprir a necessidade de pequenos projetos que dependem do MySQL com suporte para as novas versões do Node.js e MySQL. Inicialmente, o projeto conta com um exemplo com endpoints que estão relacionados com a tabela de clientes. O código SQL para criar a tabela Clientes em seu banco de dados está no arquivo clientes.sql dentro da pasta services.

Para criar uma nova API, siga estas etapas:

1. Crie um arquivo de rotas em routes com o nome da entidade.
2. Importe o arquivo em index.js.
3. Adicione a configuração do endpoint abaixo da rota de clientes. Por exemplo:

```javascript
app.use("/sua_rota", variavel_importada);
```

4. Crie um serviço para comunicação com o MySQL. Para isso, crie um arquivo com o nome da entidade juntamente com a lógica e consultas.
5. Implemente o service criado em controller.
6. Exporte as funções criadas para que possam ser importadas por outros arquivos.

## Pré-requisitos

- Node.js (versão 18.17.0 ou superior)
- MySQL (versão 8.0.33 ou superior)

## Instalação

1. Clone este repositório para o seu computador

```bash
git clone https://github.com/LucasHayashi/nodejs-api-com-express-mysql.git
cd nodejs-api-com-express-mysql
```

2. Instale as dependências usando o npm:

```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto conforme o arquivo `.env.example` mas preenchendo com as informações do seu banco de dados MySQL.

4. Inicie a aplicação:

```bash
npm start
```

Agora a API estará rodando em `http://localhost:3000`.

## Endpoints

### Listar Clientes

Retorna uma lista de todos os clientes cadastrados.

- **URL**: `/clientes`
- **Método**: `GET`
- **Resposta de Sucesso**:
  - **Código**: `200`
- **Exemplo de Resposta**:

```json
[
  {
    "id": 1,
    "nome": "Fulano",
    "idade": 30,
    "uf": "SP"
  },
  {
    "id": 2,
    "nome": "Ciclano",
    "idade": 25,
    "uf": "RJ"
  }
]
```

### Listar Cliente Por ID

Retorna o cliente filtrado por ID.

- **URL**: `/clientes/:id`
- **Método**: `GET`
- **Parâmetros**:
  - **id**: `ID do cliente a ser filtrado na URL`
- **Resposta de Sucesso**:
  - **Código**: `200`
- **Exemplo de Resposta**:

```json
[
  {
    "id": 1,
    "nome": "Fulano",
    "idade": 30,
    "uf": "SP"
  }
]
```

### Inserir Cliente

Insere um novo cliente na tabela.

- **URL**: `/clientes`
- **Método**: `POST`
- **Resposta de Sucesso**:
  - **Código:** `201`
- **Corpo da Requisição**:

```json
{
  "nome": "Novo Cliente",
  "idade": 40,
  "uf": "MG"
}
```

### Editar Cliente

Atualiza as informações de um cliente existente.

- **URL**: `/clientes/:id`
- **Método**: `PUT`
- **Parâmetros**:
  - **id**: `ID do cliente a ser atualizado na URL`
- **Resposta de Sucesso**:
  - **Código:** `200`
- **Corpo da Requisição**:

```json
{
  "nome": "Cliente Atualizado",
  "idade": 35,
  "uf": "BA"
}
```

### Excluir Cliente

Remove um cliente da tabela.

- **URL**: `/clientes/:id`
- **Método**: `DELETE`
- **Parâmetros**:
  - **id**: `ID do cliente a ser excluído na URL`
- **Resposta de Sucesso**:
  - **Código:** `204`

## Uso para Fins Pessoais

Este projeto é disponibilizado com a intenção de ser utilizado para fins pessoais, educacionais e de aprendizado. Você é livre para clonar, modificar e distribuir este projeto conforme suas necessidades.
