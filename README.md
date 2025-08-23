# aMORADORES

## Descrição do projeto
 > 
 aMORADORES é a plataforma digital criada para a aMORA - uma startup "Proetech"

---

## Estrutura de pastas
Segue abaixo a estrutura de pastas do projeto:

``` bash
Nome_do_Projeto
├─ README.md
├─ /src
│ ├─ /controllers
│ ├─ /models
│ ├─ /routes
│ ├─ /views
├─ /config
├─ /public
│ ├─ /css
│ ├─ /js
│ ├─ /images
└─ package.json

```
---

## Como executar


### Como executar o projeto localmente?

#### Requisitos:
- Node.js >= 18.x
- npm >= 9.x
- Banco de dados (MySQL, PostgreSQL ou MongoDB, dependendo do projeto)
- Editor de código (VSCode, por exemplo)

#### Instalação:
1. Clone o repositório:
```bash
git clone https://github.com/usuario/Nome_do_Projeto.git

```
2. Entre na pasta do projeto:
```
cd Nome_do_Projeto
```
3. Instale as dependências:
```
npm install
```

## Como configurar o banco de dados?
Crie o banco de dados conforme definido nas variáveis de ambiente.

Execute os scripts de criação de tabelas e inserção de dados iniciais (se houver) disponíveis na pasta /config/db.

Confirme se a aplicação consegue se conectar ao banco de dados utilizando as credenciais definidas no .env.

## Como testar as APIs?

Utilize ferramentas como **Postman** ou **Insomnia**.

Os endpoints disponíveis estão definidos na pasta `/routes` ou na documentação da API.

### Exemplos de requisições:

- **GET** `/api/tarefas` → Retorna todas as tarefas

- **POST** `/api/tarefas` → Cria uma nova tarefa
```json
{
  "titulo": "Nova tarefa",
  "concluida": false
}
