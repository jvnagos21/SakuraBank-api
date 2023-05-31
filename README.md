# 🌸 WELCOME TO SAKURA BANK API 🌸

Bem vindo a API do aplicativo do sakura bank !

para ver o aplicativo: (https://github.com/jvnagos21/sakura_bank_frontend)

## 👨‍💻 Tecnologias Utilizadas 👨‍💻

visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Zod](https://zod.dev/)


## Instalando Dependências em yarn 

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.exemple**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postrgres e em uma nova database da sua escolha.

### Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```
## ➡️ Rotas e retornos da API ➡️

## Usuarios 

O objeto User é definido como:

| Campo | Tipo   | Descrição                      |
| ----- | ------ | ------------------------------ |
| id    | string | Identificador único do usuário |
| name  | string | O nome do usuário.             |
| email | string | O e-mail do usuário.           |
| phone | string | O contato do usuário.          |

### Endpoints

| Método | Rota          | Descrição                                         |
| ------ | ------------- | ------------------------------------------------- |
| POST   | user          | Criação de um usuário.                            |
| GET    | user          | Lista todos os usuários                           |
| GET    | user/:user_id | Lista um usuário usando seu ID como parâmetro     |
| PATCH  | user/:user_id | Atualizar um usuário usando seu ID como parâmetro |
| DELETE | user/:user_id | Deletar um usuário usando seu ID como parâmetro   |

---

###  Criação de usuário 

### `/user`

### Exemplo de Request:

```
POST /user
Host: https://mycontacts-api-u7ov.onrender.com
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "name": "John Smith",
  "email": "jsmith@mail.com",
  "phone": "1122275213"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "name": "John Smith",
  "email": "jsmith@mail.com",
  "phone": "1122275213",
  "id": "d8805ae4-9c46-4921-a4e4-ba55de4312be",
  "createdAt": "2023-03-25T19:16:38.008Z"
}
```

### Possíveis Erros

| Código do Erro | Descrição                 |
| -------------- | ------------------------- |
| 409 Conflict   | Email already registered. |

---

### Listando Usuários 

### `/user`

### Exemplo de Request:

```
GET /user
Host: https://sakura-bank-api.onrender.com
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "name": "John Smith",
    "email": "jsmith@mail.com",
    "phone": "1122275213",
    "id": "d8805ae4-9c46-4921-a4e4-ba55de4312be",
    "createdAt": "2023-03-25T19:16:38.008Z",
    "contacts": []
  }
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 1.3. **Listar Usuário po ID**

### `/user/:user_id`:

```
GET /user/d8805ae4-9c46-4921-a4e4-ba55de4312be
Host: https://sakura-bank-api.onrender.com
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| user_id   | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "name": "John Smith",
  "email": "jsmith@mail.com",
  "phone": "1122275213",
  "id": "d8805ae4-9c46-4921-a4e4-ba55de4312be",
  "createdAt": "2023-03-25T19:16:38.008Z",
  "contacts": []
}
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### Atualizar Usuário por ID 

### `/user/:user_id`:

```
PATCH /user/d8805ae4-9c46-4921-a4e4-ba55de4312be
Host: https://sakura-bank-api.onrender.com
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| user_id   | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
{
  "name": "John M. Smith"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "name": "John M. Smith",
  "email": "jsmith@mail.com",
  "phone": "1122275213",
  "id": "d8805ae4-9c46-4921-a4e4-ba55de4312be",
  "createdAt": "2023-03-25T19:16:38.008Z",
  "contacts": []
}
```

### Deletar Usuário por ID 

### `/user/:user_id`:

```
DELETE /user/d8805ae4-9c46-4921-a4e4-ba55de4312be
Host: https://sakura-bank-api.onrender.com
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| user_id   | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
204 OK
```

```json
Vazio
```

## Contatos

O objeto Contact é definido como:

| Campo | Tipo   | Descrição                      |
| ----- | ------ | ------------------------------ |
| id    | string | Identificador único do contato |
| name  | string | O nome do contato.             |
| email | string | O e-mail do contato.           |
| phone | string | O contato do contato.          |
| user  | string | O usuário do contato.          |

### Endpoints

| Método | Rota                | Descrição                                         |
| ------ | ------------------- | ------------------------------------------------- |
| POST   | contact             | Criação de um contato.                            |
| GET    | contact             | Lista todos os contatos                           |
| GET    | contact/:contact_id | Lista um contato usando seu ID como parâmetro     |
| PATCH  | contact/:contact_id | Atualizar um contato usando seu ID como parâmetro |
| DELETE | contact/:contact_id | Deletar um contato usando seu ID como parâmetro   |

---

### Criação de contato

### `/contact`

### Exemplo de Request:

```
POST /contact
Host: https://sakura-bank-api.onrender.com
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "name": "Contato 5",
  "email": "contato1@mail.com",
  "phone": "113422244",
  "user": "d8805ae4-9c46-4921-a4e4-ba55de4312be"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "name": "Contato 5",
  "email": "contato1@mail.com",
  "phone": "113422244",
  "id": "c569d2ae-3603-4848-9a4d-8feb00238348",
  "createdAt": "2023-03-21T13:22:48.992Z"
}
```

### Possíveis Erros

| Código do Erro | Descrição                 |
| -------------- | ------------------------- |
| 409 Conflict   | Email already registered. |

---

### Listando Contatos

### `/contact`

### Exemplo de Request:

```
GET /contact
Host: https://sakura-bank-api.onrender.com
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "name": "Contato 5",
    "email": "contato1@mail.com",
    "phone": "113422244",
    "id": "c569d2ae-3603-4848-9a4d-8feb00238348",
    "createdAt": "2023-03-21T13:22:48.992Z"
  }
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### Listar Contato por ID

### `/contact/:contact_id`:

```
GET /contact/c569d2ae-3603-4848-9a4d-8feb00238348
Host: https://sakura-bank-api.onrender.com
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro  | Tipo   | Descrição                                |
| ---------- | ------ | ---------------------------------------- |
| contact_id | string | Identificador único do usuário (Contact) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "name": "Contato 5",
  "email": "contato1@mail.com",
  "phone": "113422244",
  "id": "c569d2ae-3603-4848-9a4d-8feb00238348",
  "createdAt": "2023-03-21T13:22:48.992Z"
}
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 2.4. Atualizar Contato por ID

### `/contact/:contact_id`:

```
PATCH /contact/c569d2ae-3603-4848-9a4d-8feb00238348
Host: https://sakura-bank-api.onrender.com
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro  | Tipo   | Descrição                                |
| ---------- | ------ | ---------------------------------------- |
| contact_id | string | Identificador único do usuário (Contact) |

### Corpo da Requisição:

```json
{
  "name": "Contato Atualizado"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "name": "Contato Atualizado",
  "email": "contato1@mail.com",
  "phone": "113422244",
  "id": "c569d2ae-3603-4848-9a4d-8feb00238348",
  "createdAt": "2023-03-21T13:22:48.992Z"
}
```

### ❌❌ Deletar Contato po ID ❌❌

### `/contact/:contact_id`:

```
DELETE /contact/c569d2ae-3603-4848-9a4d-8feb00238348
Host: https://sakura-bank-api.onrender.com
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro  | Tipo   | Descrição                                |
| ---------- | ------ | ---------------------------------------- |
| contact_id | string | Identificador único do usuário (Contact) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
204 OK
```

```json
Vazio
```
