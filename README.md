# aMORADORES

[Acesse aqui o projeto hospedado](<https://a-moradores.vercel.app/>)

[Acesse aqui o vídeo de navegação da plataforma](https://drive.google.com/file/d/1XQrXy4m1zOyVVF0DB-POgX6Y057nu7ri/view?usp=sharing)

### Visão Geral do Projeto
 &nbsp; &nbsp; &nbsp; &nbsp;aMORADORES é a plataforma digital desenvolvida para a aMORA, uma startup "Proptech" que busca tornar o processo de compra de imóveis mais acessível, transparente e seguro.

 &nbsp; &nbsp; &nbsp; &nbsp;A aplicação atua como um ecossistema inteligente, conectando de forma eficiente corretores, clientes e a empresa. Nossa solução busca não apenas simplificar a busca por imóveis, mas também resolver as dores mais profundas da jornada de compra, como a burocracia e a incerteza financeira, através de ferramentas inovadoras e do modelo de negócio único da aMORA.

 &nbsp; &nbsp; &nbsp; &nbsp;Detalhes sobre a análise de negócios realizada acerca da aMORA e seu mercado podem ser consultados por meio do seguinte link: https://github.com/NicolliVenino/hackathon-aMora/blob/main/documents/documentacao.md
 
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
aMORADORES/
│
├── app/                       # Núcleo da aplicação: backend, frontend, configurações e scripts                    
│   │
│   ├── auth/callback/              
│   │   ├── page.tsx           # Funções que definem o callback do login
│   │
│   ├── buscar/                # Função de BuscarPage
│   │   ├── loading.tsx           
│   │   ├── page.tsx
│   │
│   ├── colaboracao/         # Lógica de colaboração
│   │   ├── page.tsx
│   │
│   ├── comparacao/          # Lógica de comparação
│   │   ├── page.tsx
│   │
│   ├── corretor/            # Páginas e ferramentas do corretor
│   │   ├── page.tsx
│   │
│   ├── dashboard/           # Dashboard principal
│   │   ├── page.tsx
│   │
│   ├── login/               # Lógica do login
│   │   ├── page.tsx
│   │
│   ├── simulador/           # Funcionalidade de simular valores
│   │   ├── page.tsx
│   │
│   ├── global.css           # Estilização global do css
│   ├── layout.tsx           
│   ├── loading.tsx         
│   ├── page.tsx
│   │
├── assets/                       # Imagens utilizadas na documentação      
│   ├── CPV - aMORADORES.png        
│   ├── analise-swot.png         
│   ├── persona1.png       
│   ├── persona2.png
│   │
├── components/                   # Componentes da aplicação
│   │
│   ├── ui/              
│   │   ├── accordion.tsx            
│   │   ├── alert-dialog.tsx
│   │   ├── alert.tsx
│   │   ├── aspect-ratio.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── button.tsx
│   │   ├── calendar.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── chart.tsx
│   │   ├── checkbox.tsx
│   │   ├── collapsible.tsx
│   │   ├── command.tsx
│   │   ├── context-menu.tsx
│   │   ├── dialog.tsx
│   │   ├── drawer.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── form.tsx
│   │   ├── hover-card.tsx
│   │   ├── input-otp.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── menubar.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── pagination.tsx
│   │   ├── popover.tsx
│   │   ├── progress.tsx
│   │   ├── radio-group.tsx
│   │   ├── resizable.tsx
│   │   ├── scroll-area.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── sidebar.tsx
│   │   ├── skeleton.tsx
│   │   ├── slider.tsx
│   │   ├── sonner.tsx
│   │   ├── switch.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   ├── toggle-group.tsx
│   │   ├── toggle.tsx
│   │   ├── tooltip.tsx
│   │   ├── use-mobile.tsx
│   │   ├── use-toast.ts
│   │
│   ├── agent-dashboard.tsx
│   ├── collaboration-features.tsx
│   ├── financial-simulator.tsx
│   ├── hero.tsx
│   ├── how-it-works.tsx
│   ├── navigation.tsx
│   ├── property-search-preview.tsx
│   ├── property-search.tsx
│   ├── quick-actions.tsx
│   ├── theme-provider.tsx
│   │
├── documents/
├── documentacao.md              # Documentação e análise de negócios do projeto
│   │
├── hooks/
├── use-mobile.ts
├── use-toast.ts
├── useAuth.tsx
│   │
├── lib/
├── supabase.ts
├── utils.ts
│   │
├── public/                       # Assets estáticos
├── amoraLogo.jpg
├── diverse-woman-avatar.png
├── happy-couple-in-modern-home-interior.png
├── house-jardim-paulista.png
├── luxurious-pinheiros-penthouse.png
├── man-realtor-avatar.png
├── modern-apartment-vila-madalena.png
├── placeholder-logo.png
├── placeholder-logo.svg
├── placeholder-user.jpg
├── placeholder.jpg
├── placeholder.svg
│   │
├── styles/                       # Arquivo CSS globais
├── globals.css
│   │
├── .gitignore                    # Arquivos e pastas que devem ser ignorados pelo Git
├── README.md                     # Explicação geral do projeto: descrição, como rodar, estrutura, etc
├── components.json
├── middleware.ts 
├── next.config.mjs 
├── package-lock.json             # Controle de versões exatas das dependências
├── package.json                  # Lista de dependências, scripts e informações do projeto Node.js
├── pnpm-lock.yaml 
├── postcss.config.mjs
├── tsconfig.json

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
