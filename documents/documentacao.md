# 🏠 aMORADORES

Uma ferramenta gratuita, viral e útil que conecta leads buscando imóveis e corretores que querem vender mais, resolvendo os 5 problemas-chave do desafio.

## 📋 Índice

# Índice da Documentação Técnica do Projeto aMORA

## 1. Visão Geral
1.1. Introdução
1.2. Objetivos e Justificativa  
1.3. Funcionalidades
1.4. Solução para os Problemas  

## 2. Análise Estratégica
2.1. Contexto da Indústria  
2.2. Tendências do Setor  
2.3. Concorrentes  
2.4. Análise SWOT  
2.5. Análise das 5 Forças de Porter  
2.6. Modelo de Negócio  
2.7. Value Proposition Canvas  

## 3. Planejamento da Solução
3.1. Compreensão do Problema  
3.2. Personas  
3.3. Jornada do Usuário  
3.4. Planejamento Geral da Solução  

## 4. Detalhamento Técnico
4.1. Decisões Técnicas  
4.2. Tecnologias Utilizadas  
4.3. Estrutura do Projeto  

## 5. Conclusão e Próximos Passos
5.1. Próximos Passos  
5.2. Referências  
5.3. Contato  

## Visão Geral

Este projeto é uma solução full-stack em **TypeScript** para o desafio técnico da aMORA. O objetivo é criar uma plataforma que facilite a busca, organização e comparação de imóveis, promovendo colaboração entre usuários e corretores, com engajamento contínuo através de notificações e potencial de viralização orgânica.

**Link da Aplicação Hospedada**: [https://amora-challenge.vercel.app](https://amora-challenge.vercel.app)

## ✨ Funcionalidades

- ✅ **Salvar e organizar imóveis** via link, input manual ou crawler
- ✅ **Sistema de notificações** por e-mail e WhatsApp para imóveis similares
- ✅ **Modo colaborativo** para casais, famílias e corretores
- ✅ **Páginas personalizadas** para corretores apresentarem a aMORA
- ✅ **Captação de leads** sem login obrigatório e integração com WhatsApp

## 🛠 Tecnologias Utilizadas

### Frontend
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **NextAuth.js** (autenticação)
- **React Query** (gerenciamento de estado)
- **Zod** (validação)

### Backend
- **NestJS**
- **TypeScript**
- **PostgreSQL** (com Prisma ORM)
- **JWT** (autenticação)
- **BullMQ** (filas para notificações)

### Serviços Externos
- **Twilio** (WhatsApp API)
- **Resend** (transacional e-mails)
- **Vercel** (deploy frontend)
- **Railway** (deploy backend e banco)

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- PostgreSQL
- Contas nos serviços (Twilio, Resend - opcional para desenvolvimento)

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/amora-challenge.git
   cd amora-challenge