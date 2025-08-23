# aMORADORES

### Descrição do projeto

 &nbsp; &nbsp; &nbsp; &nbsp;aMORADORES é a plataforma digital desenvolvida para a aMORA, uma startup "Proptech" que busca tornar o processo de compra de imóveis mais acessível, transparente e seguro. Através de um baixo valor de entrada inicial, a possibilidade de testar o imóvel antes da compra e acompanhamento em todas as etapas, a aMORADORES conecta de forma eficiente corretores, moradores e a empresa.

 &nbsp; &nbsp; &nbsp; &nbsp;A plataforma oferece ferramentas para organização, salvamento e comparação entre diferentes imóveis, notificações personalizadas sobre moradias compatíveis com o interesse do usuário e a possibilidade de colaboração via link de compartilhamento. Além disso, atende às necessidades dos corretores, com uma interface simplificada para cadastro de imóveis, integração com o modelo de vendas aMORA, capacitação e gerenciamento de potenciais leads.

 &nbsp; &nbsp; &nbsp; &nbsp;Com aMORADORES, a experiência de compra de imóveis torna-se mais intuitiva, colaborativa e eficiente. A plataforma não só facilita a jornada do morador, como também potencializa a atuação dos corretores, consolidando-se como uma solução completa e inovadora para o mercado imobiliário digital.

**Passos futuros**: Como passos futuros pretendemos aprimorar algumas funcionalidades ainda em desenvolvimento, as quais estão em processo de teste para a integração final, como os alertas inteligentes, a possibilidade de colaboração com outros usuários e as funcionalidedas de compartilhamento.

---

## Estrutura de pastas
Segue abaixo a estrutura de pastas do projeto:

``` bash
aMORADORES
hackathon-aMora
├── app
│ ├── buscar
│ ├── colaboracao
│ ├── comparacao
│ ├── corretor
│ └── simulador
├── components
│ └── ui
├── documents
├── hooks
├── lib
├── public
└── styles

```
---

### Como executar o projeto localmente?

#### Requisitos:
- Download: [Node.js >= 18.x](https://nodejs.org/en/download)
- Download: [npm >= 9.x](https://www.npmjs.com/package/npm/v/9.0.0)
- Banco de dados (MySQL, PostgreSQL ou MongoDB, dependendo do projeto)
- Editor de código (VSCode, por exemplo)

#### Instalação:
1. Clone o repositório:
```bash
git clone https://github.com/usuario/Nome_do_Projeto.git

```
2. Entre na pasta do projeto:
```
cd hackathon-aMora
```
3. Instale as dependências:
```
npm install
npm install --legacy-peer-deps

```
4. Configure o banco de dados
- Faça a conexão do banco de dados através do arquivo ```.env```

5. Rodar no ambiente local:`
Execute o comando:
```npm run dev ```
Ambiente de execução: local host 3000

### Como testar as APIs?

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
