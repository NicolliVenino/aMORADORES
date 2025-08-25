# aMORADORES

### Visão Geral do Projeto
 &nbsp; &nbsp; &nbsp; &nbsp;aMORADORES é a plataforma digital desenvolvida para a aMORA, uma startup "Proptech" que busca tornar o processo de compra de imóveis mais acessível, transparente e seguro.

 &nbsp; &nbsp; &nbsp; &nbsp;A aplicação atua como um ecossistema inteligente, conectando de forma eficiente corretores, clientes e a empresa. Nossa solução busca não apenas simplificar a busca por imóveis, mas também resolver as dores mais profundas da jornada de compra, como a burocracia e a incerteza financeira, através de ferramentas inovadoras e do modelo de negócio único da aMORA.

--- 

### Funcionalidades da Plataforma
- **Organização e Comparação**: Ferramentas para organizar e comparar imóveis de diferentes fontes, combatendo a sobrecarga de informações.

- **Colaboração Simplificada**: Contas e links colaborativos para que familiares e corretores possam trabalhar juntos na decisão.
 
- **Interface para Corretores**: Ferramentas dedicadas para corretores cadastrarem imóveis e apresentarem o modelo de aluguel-compra da aMORA.

- **Captação de Leads**: Fluxo de entrada sem login obrigatório e integração com WhatsApp.

---

### Tecnologias Utilizadas
- **Linguagem**: TypeScript

- **Frameworks**: Next.js, React

- **Estilização**: Tailwind CSS

- **Estado**: Hooks do React (ex: useState)

---

### Resolução dos Problemas do Desafio
 &nbsp; &nbsp; &nbsp; &nbsp;A nossa solução foi desenhada para endereçar diretamente os cinco problemas listados no desafio, conforme as seguintes estratégias:

1. **Desorganização da busca de imóveis:**

- Implementamos uma interface que permite ao usuário buscar imóveis com auxílio de filtros predefinidos ou personalizados. Além disso, a plataforma viabiliza a comparação simples e intuitiva de diferentes imóveis para facilitar a escolha do cliente, como também apresenta um simulador de financiamento para esclarescer as vantagens de utilizar os serviços da aMORA em difetentes contextos. 

2. **Falta de engajamento contínuo:**

- A plataforma enviará notificações personalizadas (via e-mail ou WhatsApp) quando um imóvel similar aos procurados pelo usuário entrar no mercado ou tiver seu preço alterado, mantendo-o informado e engajado.

3. **Dificuldade de colaboração:**

- Criamos uma funcionalidade de busca colaborativa, onde o usuário pode convidar outras pessoas, por exemplo cônjuges, familiares e corretores, para visualizar e comentar sobre os imóveis, facilitando a decisão em grupo. Nesse ambiente, é possível visualizar as ações recentes dos colaboradores, como sugestões e comparações, para assim otimizar o acompanhamento da busca por todas as partes envolvidas.

4. **Corretores sem ferramentas para apresentar a aMORA:**

- Foi desenvolvida uma interface para corretores, a qual contém um dashboard com dados sobre leads recentes como orçamento e contato, um formulário para cadastro de novos imóveis, uma aba com acesso rápido a materias de apresentação da aMORA, templates para contato de negócio via WhatsApp e treinamentos sobre o modelo aMORA, e, por fim, dados analíticos sobre a performance do corretor, por exemplo, leads gerados e vendas fechadas.

5. **Captação e ativação de leads sem custo de mídia:**

- A experiência de usuário é iniciada sem a obrigatoriedade de login, reduzindo o atrito inicial. Já a integração com WhatsApp e a possibilidade de compartilhamento viral por links são a base para a captação orgânica de leads.

6. **Próximos Passos:**

- Como passos futuros pretendemos aprimorar algumas funcionalidades ainda em desenvolvimento, as quais estão em processo de teste para a integração final, como os alertas inteligentes, implementar as funcionalidedas de compartilhamento via WhatsApp e Email via APIs e a conexão com um banco de dados real para o pleno funcionamento das funcionalidades.

---

### Estrutura de Pastas
```
aMORADORES
hackathon-aMora/
- .next/             # Arquivos de build do Next.js
- app/               # Rotas e páginas da aplicação
- buscar/        # Lógica para busca e listagem
- colaboracao/   # Lógica de colaboração
- comparacao/    # Lógica de comparação
- corretor/      # Páginas e ferramentas do corretor
- simulador/     # Calculadora e simulador financeiro
- components/        # Componentes reutilizáveis do React
- ui/            # Componentes de interface (botões, inputs, etc.)
- documents/         # Documentação e relatórios do projeto
- hooks/             # Custom Hooks do React
- lib/               # Bibliotecas e utilitários
- public/            # Assets estáticos (imagens, etc.)
- styles/            # Arquivos CSS globais
```

---

### Como Executar o Projeto Localmente

**Requisitos:**
- Download: Node.js >= 18.x

- Download: npm >= 9.x

- Editor de código (VSCode, por exemplo)

---

**Instalação:**
1. Clone o repositório:
```
git clone https://github.com/usuario/Nome_do_Projeto.git
```
2. Entre na pasta do projeto:
```
cd hackathon-aMora
```
3. Instale as dependências:
```
npm install --legacy-peer-deps
```
4. Execute o projeto em ambiente local:
```
npm run dev
```
5. Acesse o endereço local no seu navegador:
```
http://localhost:3000/
```

--- 

### Autores
- [Maria Arielly Lima de Oliveira](https://www.linkedin.com/in/maria-arielly/)
- [Nicolli Venino Santana](https://www.linkedin.com/in/nicolli-venino-santana-b84341254/)
- [Paulo Vitor Barros de Almeida](www.linkedin.com/in/paulo-vitor-barros-de-almeida)
