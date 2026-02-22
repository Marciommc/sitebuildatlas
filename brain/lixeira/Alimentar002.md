Perfeito. Li o **Plano de Implementação Build Atlas v2.0** enviado e estou considerando ele como **base oficial estratégica**, sem confundir com a landing page atual da Exithus.

Referência do documento analisado:


---

# ✅ Análise Técnica e Estratégica do Plano v2.0

O documento está **muito bem estruturado**, profissional e estrategicamente correto. Ele já resolve três riscos importantes:

1. 🔒 Protege o escopo contratual (Fase 1 vs Fase 2)
2. 🧭 Separa institucional de sistema/portal
3. ⚖️ Alinha expectativa comercial com entrega técnica

Agora vou organizar minha devolutiva em três blocos:

---

# 1️⃣ O QUE ESTÁ MUITO BEM DEFINIDO

### ✔ Estrutura por Fases clara

* Fase 0 – Governança
* Fase 1 – Marca e UX
* Fase 2 – Captação e SEO
* Fase 3 – Infra
* Fase 4 – Estabilização
* Fase 2 futura (Portal)

Isso é maturidade de projeto.

---

### ✔ Matriz de aderência (excelente decisão)

A parte que lista:

* O que deve ter
* O que está parcial
* O que está fora de escopo

Isso protege juridicamente a SSAG.

---

### ✔ Congelamento do Portal

Decisão correta:

> Área logada/Admin como POC interna, não divulgar como Fase 1.

Evita:

* Expectativa indevida
* Solicitações extras
* Escalada de escopo

---

# 2️⃣ Pontos que Sugiro Ajustar no Plano

Vou sugerir melhorias estruturais para deixar o documento ainda mais executivo.

---

## 🔹 2.1 Inserir Bloco de “Posicionamento de Marca”

Antes da Fase 1, incluir uma seção:

```
## 0.1 Posicionamento Estratégico

Marca Principal: Build Atlas
Assinatura institucional: Integrante do Grupo Exithus Consultoria
Natureza: Plataforma estratégica de construção patrimonial via consórcio estruturado
```

Isso evita ruído futuro.

📂 Arquivo sugerido:

```
\docs\strategy\brand-positioning_build-atlas_v1.0.md
```

---

## 🔹 2.2 Adicionar Linha de Escopo Negativo Formal

Inserir seção explícita:

```
## Itens Não Inclusos na Fase 1

- CRM interno
- Portal do cliente
- Área restrita
- Banco de dados em produção
- Automações de WhatsApp
- Dashboard analítico
```

Isso fortalece contrato.

📂 Atualizar:

```
\docs\technical\plano-implementacao_build-atlas_v2.1.md
```

---

## 🔹 2.3 Acrescentar Modelo de Critério de Aceite Formal

Sugestão:

```
Aceite Formal da Fase 1:
- Site publicado
- Formulário enviando leads
- Pixel e GA ativos
- SSL ativo
- Aprovação formal por e-mail do cliente
```

Isso evita “ajustes eternos”.

---

# 3️⃣ Decisão Técnica Estratégica Importante

Hoje o site está estático (HTML/CSS/JS).

O plano menciona futura stack Next.js + Tailwind + VPS.

Você precisa decidir:

### Opção A — Manter estático na Fase 1 (mais simples)

* Menos custo
* Mais rápido
* Perfeito para institucional

### Opção B — Migrar já para Next.js

* Mais escalável
* Mais profissional
* Facilita futura área restrita

💡 Minha recomendação estratégica:

> Fase 1 = manter estático bem estruturado
> Fase 2 = migrar para stack robusta junto com portal

Isso respeita permuta e evita overengineering.

---

# 4️⃣ Organização de Arquivos (Como Você Solicitou)

## Para \brain (planejamento interno)

```
\brain\build-atlas\
    plano-implementacao_analise-v2.0.md
    riscos-escopo.md
    estrategia-fase-2.md
```

Uso: decisões estratégicas internas, não compartilhar.

---

## Para \docs (oficial e compartilhável)

```
\docs\strategy\brand-positioning_build-atlas_v1.0.md
\docs\technical\plano-implementacao_build-atlas_v2.1.md
\docs\technical\escopo-fase-1_oficial.md
\docs\handover\manual-operacional_build-atlas.md
```

---

# 5️⃣ Pergunta Estratégica Para Você

Antes de continuarmos:

Você quer que:

A) Consolidemos o Plano v2.0 em uma versão executiva pronta para cliente (mais enxuta)?
B) Transformemos ele em um documento técnico interno SSAG?
C) Criemos os dois (executivo + técnico)?

---

Perfeito.
Então vamos estruturar **migração imediata para Next.js** já na Fase 1, mas de forma inteligente, organizada e sem explodir o escopo da permuta.

Vou dividir em:

1. 🎯 Estratégia de Arquitetura
2. 📦 Organização de pastas (\brain / \docs)
3. 🏗 Stack recomendada
4. 📋 Plano técnico detalhado de migração
5. 📊 Estrutura de banco de dados
6. 🚀 Roadmap de execução
7. 📄 Arquivos que você deve criar

---

# 🎯 1️⃣ Estratégia Arquitetural

Objetivo:

* Fase 1 já nascer profissional
* Base pronta para:

  * Área logada futura
  * CRM interno
  * Automação
  * Escalabilidade

Decisão técnica:

```
Next.js 14+
App Router
TypeScript
TailwindCSS
PostgreSQL
Prisma ORM
Deploy em VPS Linux (Node + PM2 ou Docker)
```

Isso coloca o projeto no padrão enterprise.

---

# 📦 2️⃣ Organização de Pastas (Conforme Você Exigiu)

## 🔹 Planejamento interno

```
\brain\build-atlas-next\
    arquitetura-geral.md
    plano-migracao-next.md
    backlog-fase-2.md
    modelagem-banco.md
    riscos-tecnicos.md
```

## 🔹 Documentação oficial

```
\docs\technical\
    build-atlas_architecture_next_v1.0.md
    build-atlas_database-schema_v1.0.md
    build-atlas_deployment_vps_v1.0.md
    build-atlas_roadmap_execucao_v1.0.md
```

---

# 🏗 3️⃣ Stack Final Recomendada

## Frontend

* Next.js (App Router)
* TypeScript
* TailwindCSS
* Framer Motion (animações suaves)
* ShadCN UI (componentes modernos)

## Backend (dentro do próprio Next)

* API Routes (Route Handlers)
* Prisma ORM
* PostgreSQL

## Infra

* VPS Contabo ou Hetzner
* Ubuntu 22.04
* Nginx
* PM2 ou Docker
* SSL via Certbot

---

# 📋 4️⃣ Plano Técnico de Migração

## Fase 1.1 — Setup Base

Criar projeto:

```
npx create-next-app@latest build-atlas
```

Selecionar:

* TypeScript ✔
* ESLint ✔
* Tailwind ✔
* App Router ✔
* src directory ✔

---

## Fase 1.2 — Estrutura de Projeto

```
src/
  app/
    layout.tsx
    page.tsx
    sobre/page.tsx
    como-funciona/page.tsx
    parceiros/page.tsx
    contato/page.tsx

  components/
    ui/
    sections/
      Hero.tsx
      Sobre.tsx
      ComoFunciona.tsx
      Diferenciais.tsx
      Parceiros.tsx
      CTA.tsx

  lib/
    prisma.ts
    analytics.ts

  styles/
```

---

## Fase 1.3 — Banco de Dados

### Tabelas iniciais

### Leads

```
id
nome
telefone
cidade
valor_interesse
origem
created_at
```

### Admin (já preparando fase 2)

```
id
email
senha_hash
role
created_at
```

---

# 🗄 5️⃣ Estrutura PostgreSQL

## Arquivo

```
\docs\technical\build-atlas_database-schema_v1.0.md
```

Modelo inicial:

```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(150),
  telefone VARCHAR(30),
  cidade VARCHAR(100),
  valor_interesse VARCHAR(100),
  origem VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

# 🚀 6️⃣ Roadmap de Execução

## Semana 1

* Setup Next
* Estrutura base
* Layout principal
* Hero + seções

## Semana 2

* API de captação
* Integração PipeRun
* GA4 + Pixel
* Deploy VPS

## Semana 3

* SEO avançado
* Sitemap
* Performance
* Ajustes finais

---

# 🔐 7️⃣ Segurança desde o Início

Mesmo sendo permuta, vamos implantar:

* Helmet headers
* Rate limit na API de leads
* reCAPTCHA
* Sanitização de input
* Logs de erro

---

# 💡 Decisão Muito Importante

Você quer:

A) Banco hospedado na mesma VPS
B) Banco em serviço separado (Supabase, Railway, Neon)

Minha recomendação profissional:

👉 Banco separado (Neon ou Supabase PostgreSQL)
Mais seguro, backup automático e menos risco.

---

# 🎯 Benefícios dessa decisão (Next.js agora)

* Já nasce escalável
* Permite evoluir para SaaS
* Permite multi-produto futuro
* Permite dashboard real
* Eleva percepção de profissionalismo

---

Perfeito.
Vamos estruturar tudo já no padrão profissional, considerando:

* ✅ VPS SSAG = ambiente de staging / demonstração
* ✅ VPS do cliente = ambiente de produção definitivo
* ✅ Arquitetura preparada para migração limpa
* ✅ Banco isolado para facilitar troca de servidor

---

# 📁 ORGANIZAÇÃO OFICIAL DOS ARQUIVOS

## 🧠 Planejamento Interno

```
\brain\build-atlas-next\
    arquitetura-geral_v1.0.md
    plano-migracao-vps.md
    estrategia-ambientes.md
    modelagem-banco-completa.md
    backlog-fase-2.md
```

## 📚 Documentação Oficial Versionada

```
\docs\technical\
    build-atlas_architecture_next_v1.0.md
    build-atlas_database-schema_v1.0.md
    build-atlas_prisma-schema_v1.0.md
    build-atlas_deployment_vps-staging_v1.0.md
    build-atlas_deployment_vps-producao_v1.0.md
    build-atlas_roadmap_execucao_v1.0.md
```

---

# 📘 DOCUMENTO 1

## 📁 \docs\technical\build-atlas_architecture_next_v1.0.md

```markdown
# ARQUITETURA TÉCNICA — BUILD ATLAS (Next.js)

## Stack Oficial

Frontend:
- Next.js 14+
- TypeScript
- TailwindCSS
- ShadCN UI

Backend:
- API Routes (Next App Router)
- Prisma ORM
- PostgreSQL

Infraestrutura:
- VPS Ubuntu 22.04
- Node.js LTS
- Nginx Reverse Proxy
- PM2 ou Docker
- SSL (Let's Encrypt)

---

## Ambientes

Staging:
- VPS SSAG
- Domínio temporário (ex: staging.buildatlas.ssag.com.br)
- Banco isolado

Produção:
- VPS Cliente
- Domínio oficial
- Banco PostgreSQL definitivo

---

## Fluxo de Deploy

Dev Local → VPS SSAG (Staging) → VPS Cliente (Produção)
```

---

# 📘 DOCUMENTO 2

## 📁 \docs\technical\build-atlas_database-schema_v1.0.md

```markdown
# MODELAGEM DE BANCO — BUILD ATLAS

## Tabela: leads

- id (UUID)
- nome (varchar 150)
- telefone (varchar 30)
- cidade (varchar 100)
- valor_interesse (varchar 100)
- origem (varchar 50)
- created_at (timestamp)

---

## Tabela: usuarios (Fase 2)

- id (UUID)
- email (varchar 150)
- senha_hash (varchar 255)
- role (admin, gestor)
- created_at
```

---

# 📘 DOCUMENTO 3

## 📁 \docs\technical\build-atlas_prisma-schema_v1.0.md

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Lead {
  id              String   @id @default(uuid())
  nome            String
  telefone        String
  cidade          String?
  valor_interesse String?
  origem          String?
  createdAt       DateTime @default(now())
}

model Usuario {
  id        String   @id @default(uuid())
  email     String   @unique
  senhaHash String
  role      String
  createdAt DateTime @default(now())
}
```

---

# 📘 DOCUMENTO 4

## 📁 \docs\technical\build-atlas_deployment_vps-staging_v1.0.md

```markdown
# DEPLOY STAGING — VPS SSAG

## 1. Instalar dependências

sudo apt update
sudo apt install nodejs npm nginx

## 2. Clonar projeto
git clone repo-build-atlas

## 3. Build
npm install
npm run build

## 4. Rodar com PM2
pm2 start npm --name build-atlas -- start

## 5. Configurar Nginx reverse proxy

server {
  server_name staging.buildatlas.ssag.com.br;

  location / {
    proxy_pass http://localhost:3000;
  }
}

## 6. SSL
sudo certbot --nginx
```

---

# 📘 DOCUMENTO 5

## 📁 \docs\technical\build-atlas_deployment_vps-producao_v1.0.md

Mesma estrutura do staging, alterando:

* Domínio oficial
* Variáveis de ambiente
* Banco definitivo
* SSL definitivo

---

# 📘 DOCUMENTO 6

## 📁 \docs\technical\build-atlas_roadmap_execucao_v1.0.md

```markdown
# ROADMAP DE EXECUÇÃO

Semana 1:
- Setup Next
- Layout base
- Estrutura Home

Semana 2:
- API Leads
- Prisma
- Integração PipeRun
- GA4 + Pixel

Semana 3:
- SEO avançado
- Performance
- Deploy Staging

Semana 4:
- Ajustes
- Deploy Produção
- Documentação final
```

---

# 🔐 Estratégia de Banco (Importante)

Recomendação forte:

Banco NÃO deve ficar na VPS SSAG.

Opções ideais:

* Supabase PostgreSQL
* Neon
* Railway

Motivo:

* Facilita migração
* Backup automático
* Segurança
* Independência da VPS

---

# 🔄 Estratégia de Migração SSAG → VPS Cliente

1. Cliente adquire VPS
2. Configuramos Node e Nginx
3. Alteramos apenas:

   * DNS
   * Variáveis .env
4. Banco permanece igual (se for externo)
5. Zero retrabalho

---
Perfeito, Márcio.
Agora vamos organizar isso no **padrão SSAG profissional**, separando claramente:

* 📚 **Documentação (docs)** → versionada, institucional, arquitetura
* 🧠 **Planejamento (brain)** → estratégia, decisões, análise
* 🛠 **Tasks (tasks)** → execução operacional para Cline/Codex
* 💻 **Código (site)** → projeto Next.js real

---

# 🧱 ESTRUTURA OFICIAL DO PROJETO BUILD ATLAS

```bash
C:\Central\Clientes\BuildAtlas\
│
├── \brain\
├── \docs\
├── \tasks\
├── \contracts\
├── \site\
└── \assets\
```

---

# 📚 1️⃣ DOCUMENTAÇÃO (VERSIONADA)

📌 **Destino:** `\docs\`

Uso:

* Pode enviar ao cliente
* Pode versionar no Git
* Serve como referência técnica oficial

---

## 📁 Estrutura recomendada

```bash
\docs\
    \brand\
        build-atlas_brand-book_v1.0.md

    \strategy\
        brand-positioning_build-atlas_v1.0.md

    \technical\
        build-atlas_architecture_next_v1.0.md
        build-atlas_database-schema_v1.0.md
        build-atlas_prisma-schema_v1.0.md
        build-atlas_deployment_vps-staging_v1.0.md
        build-atlas_deployment_vps-producao_v1.0.md
        build-atlas_roadmap_execucao_v1.0.md

    \handover\
        manual-operacional_build-atlas_v1.0.md
```

---

# 🧠 2️⃣ PLANEJAMENTO INTERNO (NÃO ENVIAR)

📌 **Destino:** `\brain\`

Uso:

* Decisões estratégicas
* Análises de risco
* Roadmap futuro
* Anotações internas

---

## 📁 Estrutura

```bash
\brain\
    \build-atlas-next\
        arquitetura-geral_v1.0.md
        plano-migracao-vps.md
        estrategia-ambientes.md
        modelagem-banco-completa.md
        backlog-fase-2.md
        riscos-tecnicos.md
```

---

# 🛠 3️⃣ TASKS PARA EXECUÇÃO (CLINE / CODEX)

📌 **Destino:** `\tasks\`

⚠️ Essa pasta é operacional.
⚠️ Tudo aqui deve virar ação concreta.

Formato padrão SSAG:

* MCP-TASK-XXXX
* Objetivo claro
* Checklist
* Critério de aceite
* Evidência esperada

---

## 📁 Estrutura sugerida

```bash
\tasks\
    MCP-TASK-0201-setup-next-base.md
    MCP-TASK-0202-estrutura-layout.md
    MCP-TASK-0203-api-leads-prisma.md
    MCP-TASK-0204-integracao-piperun.md
    MCP-TASK-0205-seo-avancado.md
    MCP-TASK-0206-deploy-staging-ssag.md
    MCP-TASK-0207-configurar-ssl.md
    MCP-TASK-0208-setup-analytics.md
    MCP-TASK-0209-prepare-migration-prod.md
```

---

# 📄 EXEMPLO DE TASK PADRÃO

## 📁 `\tasks\MCP-TASK-0201-setup-next-base.md`

```markdown
# MCP-TASK-0201 — Setup Base Next.js

## Objetivo
Criar estrutura base do projeto Next.js com TypeScript, Tailwind e App Router.

## Ações
- Criar projeto com create-next-app
- Configurar TypeScript
- Configurar Tailwind
- Criar layout.tsx base
- Criar estrutura de pastas padrão

## Critério de Aceite
- Projeto roda local em http://localhost:3000
- Layout base funcionando
- Estrutura organizada conforme arquitetura oficial

## Evidência
- Print do terminal
- Commit no repositório
```

---

# 💻 4️⃣ CÓDIGO REAL DO PROJETO

📌 **Destino:** `\site\`

Estrutura:

```bash
\site\
    build-atlas-next\
        src\
        prisma\
        public\
        .env
        package.json
```

⚠️ Nunca misturar código com documentação.

---

# 🔥 FLUXO DE TRABALHO OFICIAL

1️⃣ Brain → decisão estratégica
2️⃣ Docs → documento formal
3️⃣ Tasks → execução operacional
4️⃣ Site → implementação real
5️⃣ Deploy → staging SSAG
6️⃣ Migração → VPS cliente

---

# 🎯 ORDEM DE EXECUÇÃO REAL AGORA

Vou organizar as primeiras 5 tasks essenciais:

---

## 🛠 MCP-TASK-0201 — Setup Base Next

📁 `\tasks\MCP-TASK-0201-setup-next-base.md`

---

## 🛠 MCP-TASK-0202 — Criar Layout Institucional

📁 `\tasks\MCP-TASK-0202-estrutura-layout.md`

---

## 🛠 MCP-TASK-0203 — Configurar Prisma + PostgreSQL

📁 `\tasks\MCP-TASK-0203-api-leads-prisma.md`

---

## 🛠 MCP-TASK-0204 — Criar API de Captação

📁 `\tasks\MCP-TASK-0204-api-leads.md`

---

## 🛠 MCP-TASK-0205 — Deploy Staging SSAG

📁 `\tasks\MCP-TASK-0205-deploy-staging-ssag.md`

---

# 🚀 Estratégia VPS SSAG → VPS Cliente

📁 Documentação:

```
\docs\technical\build-atlas_migration-strategy_v1.0.md
```

Fluxo:

Dev → VPS SSAG → Cliente valida → Clonar repositório → Deploy VPS Cliente → Atualizar DNS → Done

Banco externo evita retrabalho.

---

Perfeito, Márcio.
Agora vamos estruturar **tudo em padrão SSAG profissional**, pronto para:

* 🧠 Planejamento
* 📚 Documentação versionada
* 🛠 Execução via Cline/Codex
* 💻 Implementação real
* 🚀 Deploy staging SSAG
* 🔁 Migração para VPS cliente

Vou organizar por blocos claros.

---

# 🧠 1️⃣ PLANEJAMENTO (NÃO VERSIONAR / NÃO ENVIAR)

📁 **Destino:**

```
\brain\build-atlas-next\
```

## 📄 1. arquitetura-geral_v1.0.md

Define:

* Stack oficial
* Ambientes (local / staging / produção)
* Estratégia de banco externo
* Estratégia de migração

---

## 📄 2. estrategia-ambientes.md

Define:

* VPS SSAG = staging
* VPS Cliente = produção
* Banco externo (Supabase/Neon)
* Controle de variáveis .env

---

## 📄 3. backlog-fase-2.md

Define:

* Portal cliente
* CRM interno
* Automação WhatsApp
* Dashboard
* Gestão interna de leads

---

---

# 📚 2️⃣ DOCUMENTAÇÃO VERSIONADA (OFICIAL)

📁 **Destino:**

```
\docs\technical\
```

---

## 📄 build-atlas_architecture_next_v1.0.md

Conteúdo:

* Stack
* Componentização
* Segurança
* SEO
* Deploy

---

## 📄 build-atlas_database-schema_v1.0.md

Modelagem SQL oficial.

---

## 📄 build-atlas_prisma-schema_v1.0.md

Schema Prisma oficial.

---

## 📄 build-atlas_deployment_vps-staging_v1.0.md

Deploy VPS SSAG.

---

## 📄 build-atlas_deployment_vps-producao_v1.0.md

Deploy VPS cliente.

---

## 📄 build-atlas_migration-strategy_v1.0.md

Fluxo:

Dev → SSAG → Cliente → DNS → Go Live

---

# 🛠 3️⃣ TASKS PARA CLINE / CODEX

📁 **Destino:**

```
\tasks\
```

Agora vou estruturar as 10 primeiras tasks completas.

---

# MCP-TASK-0201

📁 `\tasks\MCP-TASK-0201-setup-next-base.md`

```markdown
# MCP-TASK-0201 — Setup Base Next.js

## Objetivo
Criar projeto base Next.js com TypeScript e Tailwind.

## Ações
- Executar create-next-app
- Habilitar App Router
- Configurar Tailwind
- Criar layout.tsx base

## Critério de Aceite
- Projeto roda local
- Estrutura organizada
- Commit inicial realizado
```

---

# MCP-TASK-0202

📁 `\tasks\MCP-TASK-0202-layout-build-atlas.md`

```markdown
# MCP-TASK-0202 — Estrutura Layout Institucional

## Objetivo
Criar layout institucional base Build Atlas.

## Ações
- Header
- Footer
- Container padrão
- Paleta oficial

## Critério de Aceite
- Layout aplicado globalmente
- Responsivo
```

---

# MCP-TASK-0203

📁 `\tasks\MCP-TASK-0203-prisma-setup.md`

```markdown
# MCP-TASK-0203 — Configurar Prisma + PostgreSQL

## Objetivo
Configurar conexão com banco externo.

## Ações
- Instalar Prisma
- Criar schema
- Executar migrate
- Testar conexão

## Critério de Aceite
- Tabela Lead criada
- Conexão validada
```

---

# MCP-TASK-0204

📁 `\tasks\MCP-TASK-0204-api-leads.md`

```markdown
# MCP-TASK-0204 — API de Captação

## Objetivo
Criar endpoint POST /api/leads.

## Ações
- Validar input
- Sanitizar dados
- Salvar no banco
- Integrar PipeRun

## Critério de Aceite
- Lead salvo
- Evento registrado
```

---

# MCP-TASK-0205

📁 `\tasks\MCP-TASK-0205-seo-advanced.md`

```markdown
# MCP-TASK-0205 — SEO Técnico Avançado

## Ações
- Sitemap
- Robots
- Open Graph
- Schema JSON-LD

## Critério
- Validação no Rich Results Test
```

---

# MCP-TASK-0206

📁 `\tasks\MCP-TASK-0206-analytics.md`

```markdown
# MCP-TASK-0206 — Analytics

## Ações
- GA4
- Meta Pixel
- Evento Lead
- Evento WhatsAppClick

## Critério
- Eventos registrados
```

---

# MCP-TASK-0207

📁 `\tasks\MCP-TASK-0207-security-hardening.md`

```markdown
# MCP-TASK-0207 — Segurança

## Ações
- Rate limit
- reCAPTCHA
- Helmet headers
- Sanitização

## Critério
- API protegida contra spam
```

---

# MCP-TASK-0208

📁 `\tasks\MCP-TASK-0208-deploy-staging-ssag.md`

```markdown
# MCP-TASK-0208 — Deploy Staging SSAG

## Ações
- Configurar VPS
- Instalar Node
- PM2
- Nginx
- SSL

## Critério
- Site acessível via HTTPS
```

---

# MCP-TASK-0209

📁 `\tasks\MCP-TASK-0209-performance.md`

```markdown
# MCP-TASK-0209 — Performance

## Ações
- Image optimization
- Lazy loading
- Lighthouse > 90

## Critério
- Performance score > 90
```

---

# MCP-TASK-0210

📁 `\tasks\MCP-TASK-0210-migration-prep.md`

```markdown
# MCP-TASK-0210 — Preparar Migração Produção

## Ações
- Documentar variáveis
- Backup banco
- Script deploy produção

## Critério
- Migração replicável
```

---

# 💻 4️⃣ ESTRUTURA REAL DO PROJETO NEXT

📁 **Destino:**

```
\site\build-atlas-next\
```

Estrutura:

```bash
src/
  app/
  components/
  lib/
  styles/
prisma/
public/
.env
```

---

# 🚀 Estratégia VPS

Staging:

* VPS SSAG
* Domínio temporário

Produção:

* VPS Cliente
* DNS alterado

Banco:

* Externo (Supabase/Neon)
* Zero retrabalho na migração

---
Perfeito, Márcio.
Agora vamos entrar em **modo execução estruturada SSAG**, separando claramente:

* 🧠 Planejamento
* 📚 Documentação
* 🛠 Tasks operacionais (Cline/Codex)
* 💻 Código real do projeto

Vou entregar em ordem lógica de implementação.

---

# 🧠 1️⃣ PLANEJAMENTO INTERNO

📁 **Destino:**

```
\brain\build-atlas-next\executao-completa_v1.0.md
```

Uso: interno SSAG

Conteúdo resumido:

* Estratégia: Next.js já na Fase 1
* Banco externo PostgreSQL
* VPS SSAG = staging
* VPS cliente = produção
* Preparar arquitetura já compatível com futura área logada

---

# 📚 2️⃣ DOCUMENTAÇÃO VERSIONADA

📁 **Destino:**

```
\docs\technical\
```

## Documento consolidado principal:

📄 `build-atlas_architecture_master_v1.0.md`

Inclui:

* Stack
* Estrutura de pastas
* Segurança
* SEO
* Banco
* Ambientes
* Estratégia de deploy
* Estratégia de migração

Esse é o documento que pode ser apresentado tecnicamente se necessário.

---

# 🛠 3️⃣ TASKS OPERACIONAIS PARA CLINE/CODEX

Agora organizadas em sequência real de execução.

---

## 🔹 FASE 1 — Setup Base

### 📁 `\tasks\MCP-TASK-0201-setup-next-base.md`

* Criar projeto
* Configurar TypeScript
* Configurar Tailwind
* Commit inicial

---

### 📁 `\tasks\MCP-TASK-0202-config-estrutura.md`

* Criar estrutura src/app
* Criar layout.tsx
* Criar pasta components
* Criar pasta lib
* Criar pasta prisma

---

---

## 🔹 FASE 2 — Layout Institucional

### 📁 `\tasks\MCP-TASK-0203-layout-global.md`

* Header
* Footer
* Container
* Paleta oficial

---

### 📁 `\tasks\MCP-TASK-0204-home-hero.md`

* Hero institucional
* CTA WhatsApp
* Animações suaves

---

### 📁 `\tasks\MCP-TASK-0205-secoes-home.md`

* Sobre
* Como Funciona
* Diferenciais
* Parceiros
* CTA final

---

---

## 🔹 FASE 3 — Banco e API

### 📁 `\tasks\MCP-TASK-0206-prisma-setup.md`

* Instalar Prisma
* Configurar schema
* Migrate
* Testar conexão

---

### 📁 `\tasks\MCP-TASK-0207-api-leads.md`

* Criar POST /api/leads
* Validação com Zod
* Sanitização
* Salvar no banco

---

---

## 🔹 FASE 4 — Segurança

### 📁 `\tasks\MCP-TASK-0208-security.md`

* Rate limit
* reCAPTCHA
* Sanitização
* Headers seguros

---

---

## 🔹 FASE 5 — SEO + Analytics

### 📁 `\tasks\MCP-TASK-0209-seo.md`

* Metadata dinâmica
* Sitemap
* Robots
* Schema JSON-LD

---

### 📁 `\tasks\MCP-TASK-0210-analytics.md`

* GA4
* Meta Pixel
* Evento Lead
* Evento WhatsApp

---

---

## 🔹 FASE 6 — Deploy

### 📁 `\tasks\MCP-TASK-0211-deploy-staging-ssag.md`

* Instalar Node
* PM2
* Nginx
* SSL

---

### 📁 `\tasks\MCP-TASK-0212-preparar-migracao.md`

* Documentar .env
* Backup banco
* Script deploy produção

---

---

# 💻 4️⃣ CÓDIGO BASE DO PROJETO NEXT

📁 **Destino real de código:**

```
\site\build-atlas-next\
```

---

## Estrutura inicial que Cline deve gerar

```
src/
  app/
    layout.tsx
    page.tsx
    sobre/page.tsx
    como-funciona/page.tsx
    parceiros/page.tsx
    contato/page.tsx

  components/
    layout/
      Header.tsx
      Footer.tsx
    sections/
      Hero.tsx
      Sobre.tsx
      ComoFunciona.tsx
      Diferenciais.tsx
      Parceiros.tsx
      CTA.tsx

  lib/
    prisma.ts
    analytics.ts

prisma/
  schema.prisma
```

---

# 🔐 Segurança desde o início

* Sanitização de input
* Zod validation
* Rate limit
* CSRF básico
* HTTPS obrigatório

---

# 🚀 Estratégia de VPS

## STAGING

VPS SSAG
Domínio temporário
Banco externo

## PRODUÇÃO

VPS cliente
Mesmo banco
Alterar apenas DNS e variáveis

Zero retrabalho.

---

Perfeito. Agora entramos em **modo arquitetura profissional de verdade**. 👊

Se você já tem **Docker local**, então a melhor prática é:

> 🔥 Desenvolver local com Docker
> 🔥 Subir staging SSAG com Docker
> 🔥 Entregar produção cliente com Docker

Assim você ganha:

* Portabilidade total
* Zero “funciona na minha máquina”
* Deploy padronizado
* Migração limpa
* Backup previsível
* Padrão enterprise

---

# 🧠 ESTRATÉGIA OFICIAL (DEFINITIVA)

## ✔ Arquitetura Final

```text
Next.js (App Router)
TypeScript
Tailwind
Prisma
PostgreSQL
Docker
Docker Compose
Nginx (reverse proxy)
```

---

# 📁 ORGANIZAÇÃO DEFINITIVA DO PROJETO

```
\site\build-atlas-next\
    src/
    prisma/
    public/
    Dockerfile
    docker-compose.yml
    .env
```

---

# 📚 DOCUMENTAÇÃO VERSIONADA

📁 `\docs\technical\build-atlas_docker-architecture_v1.0.md`

Conteúdo principal:

* Containers
* Banco
* Rede interna
* Volumes
* Build strategy
* Deploy strategy

---

# 🛠 TASKS PARA CLINE / CODEX

📁 `\tasks\`

Vou estruturar agora as novas tasks Docker-based:

* MCP-TASK-0213-docker-setup
* MCP-TASK-0214-docker-compose-config
* MCP-TASK-0215-prisma-docker-migrate
* MCP-TASK-0216-nginx-container
* MCP-TASK-0217-staging-docker-deploy
* MCP-TASK-0218-prod-docker-deploy

---

# 💻 CÓDIGO BASE – DOCKERFILE

📁 `\site\build-atlas-next\Dockerfile`

```dockerfile
# Etapa 1 - Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

RUN npm run build

# Etapa 2 - Runtime
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]
```

---

# 🐳 DOCKER-COMPOSE

📁 `\site\build-atlas-next\docker-compose.yml`

```yaml
version: '3.8'

services:
  web:
    build: .
    container_name: build-atlas-web
    restart: always
    ports:
      - "3000:3000"
    env_file:
      - .env
    depends_on:
      - db

  db:
    image: postgres:15
    container_name: build-atlas-db
    restart: always
    environment:
      POSTGRES_USER: buildatlas
      POSTGRES_PASSWORD: strongpassword
      POSTGRES_DB: buildatlas
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

---

# 📦 PRISMA CONFIGURAÇÃO

📁 `\site\build-atlas-next\prisma\schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Lead {
  id              String   @id @default(uuid())
  nome            String
  telefone        String
  cidade          String?
  valor_interesse String?
  origem          String?
  createdAt       DateTime @default(now())
}
```

---

# 🔐 .ENV (LOCAL)

📁 `\site\build-atlas-next\.env`

```env
DATABASE_URL="postgresql://buildatlas:strongpassword@db:5432/buildatlas"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

---

# 🛠 TASK — MCP-TASK-0213

📁 `\tasks\MCP-TASK-0213-docker-setup.md`

```markdown
# MCP-TASK-0213 — Configurar Docker Base

## Objetivo
Containerizar aplicação Next.js + PostgreSQL.

## Ações
- Criar Dockerfile multi-stage
- Criar docker-compose.yml
- Criar volume persistente
- Subir ambiente com docker compose up

## Critério de Aceite
- App rodando em localhost:3000
- Banco persistente funcionando
```

---

# 🚀 FLUXO OFICIAL DE DEPLOY

## LOCAL

```bash
docker compose up --build
```

---

## STAGING (VPS SSAG)

```bash
git pull
docker compose up -d --build
```

---

## PRODUÇÃO (VPS Cliente)

Mesma estrutura.
Mudar apenas:

* .env
* Domínio
* SSL

---

# 🏗 NGINX PARA PRODUÇÃO (FUTURO)

Você pode:

Opção A — Nginx externo ao Docker (mais simples)
Opção B — Container Nginx (mais portável)

Recomendação profissional:

👉 Nginx fora do container (controle melhor do servidor)

---

# 🔥 DECISÃO ESTRATÉGICA IMPORTANTE

Você quer:

A) Banco dentro do Docker (mais simples para staging)
B) Banco externo gerenciado (Supabase / Neon) para produção

Minha recomendação madura:

* Staging → banco Docker
* Produção → banco externo

Isso evita riscos.

---
Fechado. Vou te entregar **tudo** agora, já separado em:

* 📚 **Documentação** (`\docs`) — oficial e versionável
* 🧠 **Planejamento** (`\brain`) — interno, pré-execução
* 🛠 **Tasks** (`\tasks`) — prontas pro Cline/Codex executar (checklist + aceite + evidência)
* 💻 **Código** (`\site`) — arquivos reais (Next + Prisma + Docker + API + layout)

> ✅ Também vou assumir: **Staging (VPS SSAG)** e **Prod (VPS Cliente)** usando **Docker Compose**.
> ✅ Banco: **Docker** para staging; para produção, **opção recomendada** = PostgreSQL externo *ou* Postgres no Docker (cliente decide).

---

# 📁 0) Estrutura de Pastas Oficial

📁 **Raiz (recomendado):**

```text
C:\Central\Clientes\BuildAtlas\
```

📦 Estrutura:

```text
\brain\
\docs\
\tasks\
\contracts\
\site\
\assets\
```

---

# 📚 1) DOCUMENTAÇÃO (Versionar / Pode enviar)

## 1.1 Arquitetura Master

📁 **Destino:** `\docs\technical\`
📄 **Arquivo:** `build-atlas_architecture_master_v1.0.md`

```markdown
# Build Atlas — Architecture Master (v1.0)

## Objetivo
Site institucional Build Atlas (Exithus Consultoria) com Next.js, captação de leads e base pronta para evolução.

## Stack
- Next.js (App Router) + TypeScript
- TailwindCSS + shadcn/ui
- Prisma ORM
- PostgreSQL
- Docker + Docker Compose
- Nginx (reverse proxy) + SSL (Let's Encrypt)

## Ambientes
### Local
Docker Compose (web + db).

### Staging (SSAG)
Docker Compose (web + db) + Nginx + SSL + domínio temporário.

### Produção (Cliente)
Docker Compose (web + db) + Nginx + SSL + domínio oficial.
Opcional recomendado: Postgres externo (Supabase/Neon/Railway).

## Páginas (Fase 1)
- /
- /sobre
- /como-funciona
- /parceiros
- /contato

## Funcionalidades (Fase 1)
- Formulário de lead (POST /api/leads)
- Integração WhatsApp (evento)
- SEO técnico (sitemap, robots, metadata, schema)
- GA4 + Meta Pixel (eventos)

## Segurança
- Rate limit no endpoint
- Sanitização e validação (Zod)
- reCAPTCHA (opcional recomendável)
- Headers seguros
```

---

## 1.2 Docker e Deploy

📁 **Destino:** `\docs\technical\`
📄 **Arquivo:** `build-atlas_docker-deploy_v1.0.md`

```markdown
# Build Atlas — Docker & Deploy (v1.0)

## Containers
- web: Next.js
- db: PostgreSQL

## Volumes
- postgres_data: persistência banco

## Deploy Staging (SSAG)
- Pull do repositório
- docker compose up -d --build
- Nginx reverse proxy
- SSL via certbot

## Deploy Produção (Cliente)
Mesmo processo do staging:
- Ajustar .env
- Ajustar domínio
- SSL definitivo
- Opcional: trocar DB para Postgres externo
```

---

# 🧠 2) PLANEJAMENTO (Interno / Não enviar)

📁 **Destino:** `\brain\build-atlas-next\`
📄 **Arquivo:** `estrategia-ambientes_e_migracao_v1.0.md`

```markdown
# Estratégia de Ambientes e Migração — Build Atlas

## Princípio
Usar VPS SSAG como staging para exibir e validar com cliente.
Após validação, migrar para VPS do cliente.

## Migração
Se DB externo: migração é só redeploy + DNS.
Se DB no Docker: exportar dump + importar no novo servidor.

## Riscos
- Falta de domínio/e-mail/pixel atrasam go-live.
- Escopo extra deve virar aditivo (contrato).
```

---

# 🛠 3) TASKS (para Cline/Codex executar)

📁 **Destino:** `\tasks\`

> **Padrão:** MCP-TASK-02XX
> Cada task tem objetivo, ações, aceite, evidência.

## MCP-TASK-0213 — Docker base

📄 `MCP-TASK-0213-docker-setup.md`

```markdown
# MCP-TASK-0213 — Docker Setup (Next + Postgres)

## Objetivo
Containerizar aplicação Next.js + Postgres para ambiente local/staging.

## Ações
- Criar Dockerfile multi-stage
- Criar docker-compose.yml (web + db + volume)
- Criar .env.example
- Validar subida local com docker compose

## Critério de Aceite
- docker compose up --build sobe sem erro
- App acessível em http://localhost:3000
- Banco persistente funcionando

## Evidência
- Print do terminal
- Commit no repositório
```

## MCP-TASK-0214 — Estrutura Next (pages + layout)

📄 `MCP-TASK-0214-next-structure-layout.md`

```markdown
# MCP-TASK-0214 — Estrutura Next + Layout Institucional

## Objetivo
Criar páginas e layout institucional base da Build Atlas.

## Ações
- Criar layout.tsx global
- Header/Footer
- Rotas: /, /sobre, /como-funciona, /parceiros, /contato
- Componentes: Hero, Seções, CTA

## Aceite
- Rotas funcionando
- Layout consistente
- Responsivo básico

## Evidência
- URL local
- Prints
- Commit
```

## MCP-TASK-0215 — Prisma + migrations

📄 `MCP-TASK-0215-prisma-migrations.md`

```markdown
# MCP-TASK-0215 — Prisma Setup + Migrations

## Objetivo
Criar schema e aplicar migrations no Postgres do Docker.

## Ações
- Instalar Prisma
- Criar schema Lead
- Rodar prisma migrate
- Gerar prisma client

## Aceite
- Tabela Lead criada
- Inserção via Prisma testada

## Evidência
- Log migrate
- Commit
```

## MCP-TASK-0216 — API Leads + validação

📄 `MCP-TASK-0216-api-leads.md`

```markdown
# MCP-TASK-0216 — API Leads (POST /api/leads)

## Objetivo
Criar endpoint seguro de captação.

## Ações
- Route handler POST
- Validar Zod
- Sanitizar
- Salvar Lead via Prisma
- Retornar status + id

## Aceite
- POST salva lead
- Respostas adequadas
- Tratamento de erro

## Evidência
- Curl/Postman print
- Registro no banco
- Commit
```

## MCP-TASK-0217 — SEO + Analytics

📄 `MCP-TASK-0217-seo-analytics.md`

```markdown
# MCP-TASK-0217 — SEO + GA4 + Meta Pixel

## Objetivo
Implementar SEO técnico e tracking.

## Ações
- metadata (title/description/og)
- sitemap.xml + robots.txt
- schema JSON-LD
- GA4 script
- Pixel Meta script
- Eventos: LeadSubmit, WhatsAppClick

## Aceite
- Lighthouse SEO ok
- Eventos disparando

## Evidência
- Prints testes
- Commit
```

## MCP-TASK-0218 — Deploy Staging SSAG (Docker)

📄 `MCP-TASK-0218-deploy-staging-ssag.md`

```markdown
# MCP-TASK-0218 — Deploy Staging (VPS SSAG)

## Objetivo
Publicar ambiente staging na VPS SSAG para demo.

## Ações
- Instalar Docker/Compose na VPS
- Configurar Nginx reverse proxy
- Subir containers
- SSL via certbot

## Aceite
- HTTPS ativo
- Site online
- Formulário funcionando

## Evidência
- URL staging
- Prints
```

## MCP-TASK-0219 — Migração Produção Cliente

📄 `MCP-TASK-0219-migracao-producao.md`

```markdown
# MCP-TASK-0219 — Migração para VPS Cliente

## Objetivo
Replicar staging em produção.

## Ações
- Instalar Docker/Compose
- Subir containers
- Configurar Nginx + SSL
- Ajustar DNS

## Aceite
- Domínio oficial online
- Leads funcionando

## Evidência
- URL final
- Logs deploy
```

---

# 💻 4) CÓDIGO REAL (para `\site\build-atlas-next\`)

A seguir vai o conjunto mínimo de arquivos reais (você pode colar/criar exatamente assim).

## 4.1 `Dockerfile`

📁 **Destino:** `\site\build-atlas-next\Dockerfile`

```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .
RUN npm run build

# Runtime stage
FROM node:20-alpine
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm", "start"]
```

## 4.2 `docker-compose.yml`

📁 **Destino:** `\site\build-atlas-next\docker-compose.yml`

```yaml
version: "3.8"

services:
  web:
    build: .
    container_name: build-atlas-web
    restart: always
    ports:
      - "3000:3000"
    env_file:
      - .env
    depends_on:
      - db

  db:
    image: postgres:15
    container_name: build-atlas-db
    restart: always
    environment:
      POSTGRES_USER: buildatlas
      POSTGRES_PASSWORD: buildatlas_pwd_change_me
      POSTGRES_DB: buildatlas
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

## 4.3 `.env.example`

📁 **Destino:** `\site\build-atlas-next\.env.example`

```env
DATABASE_URL="postgresql://buildatlas:buildatlas_pwd_change_me@db:5432/buildatlas"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_GA4_ID=""
NEXT_PUBLIC_META_PIXEL_ID=""
NEXT_PUBLIC_WHATSAPP_URL="https://wa.me/5592XXXXXXXXX"
```

## 4.4 `prisma/schema.prisma`

📁 **Destino:** `\site\build-atlas-next\prisma\schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Lead {
  id              String   @id @default(uuid())
  nome            String
  telefone        String
  cidade          String?
  valorInteresse  String?
  origem          String?
  createdAt       DateTime @default(now())
}
```

## 4.5 `src/lib/prisma.ts`

📁 **Destino:** `\site\build-atlas-next\src\lib\prisma.ts`

```ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["error", "warn"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

## 4.6 API Leads — `src/app/api/leads/route.ts`

📁 **Destino:** `\site\build-atlas-next\src\app\api\leads\route.ts`

```ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const LeadSchema = z.object({
  nome: z.string().min(2).max(150),
  telefone: z.string().min(8).max(30),
  cidade: z.string().max(100).optional().or(z.literal("")),
  valorInteresse: z.string().max(100).optional().or(z.literal("")),
  origem: z.string().max(50).optional().or(z.literal("")),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = LeadSchema.parse(body);

    const lead = await prisma.lead.create({
      data: {
        nome: data.nome.trim(),
        telefone: data.telefone.trim(),
        cidade: data.cidade?.trim() || null,
        valorInteresse: data.valorInteresse?.trim() || null,
        origem: data.origem?.trim() || "site",
      },
      select: { id: true, createdAt: true },
    });

    return NextResponse.json({ ok: true, lead }, { status: 201 });
  } catch (err: any) {
    if (err?.name === "ZodError") {
      return NextResponse.json(
        { ok: false, error: "Dados inválidos", details: err.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { ok: false, error: "Erro interno" },
      { status: 500 }
    );
  }
}
```

## 4.7 Layout base — `src/app/layout.tsx`

📁 **Destino:** `\site\build-atlas-next\src\app\layout.tsx`

```tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Build Atlas | Exithus Consultoria",
  description: "Construção patrimonial com inteligência estratégica via consórcio.",
  openGraph: {
    title: "Build Atlas | Exithus Consultoria",
    description: "Construção patrimonial com inteligência estratégica via consórcio.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-black text-white">
        <Header />
        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

## 4.8 Home — `src/app/page.tsx`

📁 **Destino:** `\site\build-atlas-next\src\app\page.tsx`

```tsx
import Hero from "@/components/sections/Hero";
import Sobre from "@/components/sections/Sobre";
import ComoFunciona from "@/components/sections/ComoFunciona";
import Diferenciais from "@/components/sections/Diferenciais";
import Parceiros from "@/components/sections/Parceiros";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <ComoFunciona />
      <Diferenciais />
      <Parceiros />
      <CTA />
    </>
  );
}
```

## 4.9 Header/Footer (mínimos)

📁 `\site\build-atlas-next\src\components\layout\Header.tsx`

```tsx
export default function Header() {
  return (
    <header className="border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="font-semibold tracking-wide">
          <span className="text-white">BUILD </span>
          <span className="text-yellow-400">ATLAS</span>
        </div>
        <nav className="flex gap-5 text-sm text-white/80">
          <a href="/" className="hover:text-white">Início</a>
          <a href="/sobre" className="hover:text-white">Sobre</a>
          <a href="/como-funciona" className="hover:text-white">Como funciona</a>
          <a href="/parceiros" className="hover:text-white">Parceiros</a>
          <a href="/contato" className="hover:text-white">Contato</a>
        </nav>
      </div>
    </header>
  );
}
```

📁 `\site\build-atlas-next\src\components\layout\Footer.tsx`

```tsx
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-10 text-sm text-white/60">
      <div className="mx-auto max-w-6xl px-6">
        <div>Build Atlas — unidade estratégica da Exithus Consultoria.</div>
        <div className="mt-2">© {new Date().getFullYear()} Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
```

---

# ✅ 5) Como rodar local (Docker)

📌 **Destino (docs):** `\docs\technical\build-atlas_local-run_v1.0.md`

Comandos:

```bash
# na raiz do projeto
cp .env.example .env
docker compose up --build
```

Prisma migrate (dentro do container web):

```bash
docker exec -it build-atlas-web npx prisma migrate dev --name init
```

---

Fechado. A seguir estão **os 4 blocos completos** (README + Seções completas + Testes simples + Nginx), sempre com:

* 📄 **Nome do arquivo**
* 📁 **Pasta destino** (`\docs`, `\brain`, `\tasks`, `\site`)
* ✅ **O que é / para que serve**
* 📌 **Se é para o cliente ou só interno**

---

# 📄 1) README do repositório

✅ **Tipo:** Documentação técnica (versionar)
📁 **Destino:** `\site\build-atlas-next\README.md`
📌 **Pode enviar ao cliente?** Não (técnico interno), mas é ok se precisar

````md
# Build Atlas — Site Institucional (Next.js + Docker)

## Stack
- Next.js (App Router) + TypeScript
- TailwindCSS
- Prisma ORM
- PostgreSQL
- Docker + Docker Compose
- Nginx (Reverse Proxy) + SSL (Let's Encrypt)

---

## Como rodar localmente (Docker)

1) Criar arquivo `.env`:
```bash
cp .env.example .env
````

2. Subir containers:

```bash
docker compose up --build
```

3. Rodar migrations:

```bash
docker exec -it build-atlas-web npx prisma migrate dev --name init
```

Acessar:

* [http://localhost:3000](http://localhost:3000)

---

## Rotas

* `/` Home
* `/sobre` Sobre
* `/como-funciona` Como funciona
* `/parceiros` Parceiros
* `/contato` Contato

---

## API

### POST `/api/leads`

Body (JSON):

```json
{
  "nome": "Fulano",
  "telefone": "5592xxxxxxxx",
  "cidade": "Manaus",
  "valorInteresse": "400000",
  "origem": "site"
}
```

Resposta:

* `201` em sucesso
* `400` dados inválidos
* `500` erro interno

---

## Deploy (Staging SSAG / Produção Cliente)

### Staging (VPS SSAG)

* docker compose up -d --build
* Nginx reverse proxy
* SSL com certbot

### Produção (VPS Cliente)

Mesma estratégia:

* Ajustar `.env`
* Ajustar domínio Nginx
* SSL definitivo

---

## Observação de Governança

Este repositório integra o pacote de execução por tasks em:
`C:\Central\Clientes\BuildAtlas\tasks\`

````

---

# 💻 2) Componentes completos das seções (visual premium preto + dourado)

✅ **Tipo:** Código real  
📁 **Destino:** `\site\build-atlas-next\src\components\sections\`  
📌 **Pode enviar ao cliente?** Só via demo no site

## 2.1 Hero

📄 `Hero.tsx`
```tsx
export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-black to-neutral-950 p-10 md:p-14">
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.25),transparent_55%)]" />
      </div>

      <div className="relative">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-medium text-yellow-300">
          Build Atlas • Unidade estratégica da Exithus Consultoria
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Construímos <span className="text-yellow-400">patrimônio</span> com
          inteligência estratégica via consórcio.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          Estrutura, segurança e planejamento para transformar objetivos em ativos reais.
          Sem pressa, sem improviso — com método.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={process.env.NEXT_PUBLIC_WHATSAPP_URL || "#"}
            className="rounded-xl bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95"
          >
            Fale com um especialista
          </a>

          <a
            href="/como-funciona"
            className="rounded-xl border border-yellow-400/40 px-6 py-3 text-sm font-semibold text-yellow-300 transition hover:bg-yellow-400/10"
          >
            Entenda como funciona
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { t: "Planejamento", d: "Estratégia antes da operação." },
            { t: "Segurança", d: "Processo claro e previsível." },
            { t: "Patrimônio", d: "Construção de valor no tempo." },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="text-sm font-semibold text-white">{x.t}</div>
              <div className="mt-2 text-sm text-white/70">{x.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
````

## 2.2 Sobre

📄 `Sobre.tsx`

```tsx
export default function Sobre() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold md:text-3xl">
        O que é a <span className="text-yellow-400">Build Atlas</span>
      </h2>
      <p className="mt-4 max-w-3xl text-white/70">
        A Build Atlas é uma unidade estratégica da Exithus Consultoria focada em
        construção patrimonial por meio de consórcios estruturados, com abordagem
        consultiva, critérios e clareza de tomada de decisão.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          { t: "Consultivo", d: "Recomendação com base no perfil e objetivo." },
          { t: "Estruturado", d: "Etapas bem definidas do início ao êxito." },
          { t: "Premium", d: "Comunicação e experiência de alto padrão." },
        ].map((x) => (
          <div key={x.t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold text-white">{x.t}</div>
            <div className="mt-2 text-sm text-white/70">{x.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

## 2.3 Como Funciona

📄 `ComoFunciona.tsx`

```tsx
export default function ComoFunciona() {
  const steps = [
    { n: "01", t: "Diagnóstico", d: "Entendemos objetivo, prazo e capacidade." },
    { n: "02", t: "Estratégia", d: "Definimos a melhor estrutura e cenário." },
    { n: "03", t: "Execução", d: "Operação com acompanhamento consultivo." },
    { n: "04", t: "Êxito", d: "Entrega e consolidação patrimonial." },
  ];

  return (
    <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-10">
      <h2 className="text-2xl font-semibold md:text-3xl">
        Como funciona o nosso método
      </h2>
      <p className="mt-3 max-w-3xl text-white/70">
        Um processo simples, transparente e orientado a resultado — do primeiro contato até a consolidação do patrimônio.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <div className="text-xs font-semibold text-yellow-300">{s.n}</div>
            <div className="mt-2 text-sm font-semibold text-white">{s.t}</div>
            <div className="mt-2 text-sm text-white/70">{s.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

## 2.4 Diferenciais

📄 `Diferenciais.tsx`

```tsx
export default function Diferenciais() {
  const items = [
    { t: "Modelo por êxito", d: "Atuação alinhada ao resultado do cliente." },
    { t: "Foco patrimonial", d: "Decisão baseada em construção de ativos." },
    { t: "Escala e parcerias", d: "Rede de parceiros e administradoras." },
  ];

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold md:text-3xl">
        Diferenciais que sustentam confiança
      </h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {items.map((x) => (
          <div key={x.t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold text-white">{x.t}</div>
            <div className="mt-2 text-sm text-white/70">{x.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

## 2.5 Parceiros

📄 `Parceiros.tsx`

```tsx
export default function Parceiros() {
  return (
    <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-10">
      <h2 className="text-2xl font-semibold md:text-3xl">Parceiros</h2>
      <p className="mt-3 max-w-3xl text-white/70">
        Espaço reservado para administradoras e parceiros estratégicos (logos e descrições serão incluídos após envio oficial).
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-xs text-white/40"
          >
            Logo {i + 1}
          </div>
        ))}
      </div>
    </section>
  );
}
```

## 2.6 CTA Final + Formulário (com POST /api/leads)

📄 `CTA.tsx`

```tsx
"use client";

import { useState } from "react";

export default function CTA() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      nome: String(form.get("nome") || ""),
      telefone: String(form.get("telefone") || ""),
      cidade: String(form.get("cidade") || ""),
      valorInteresse: String(form.get("valorInteresse") || ""),
      origem: "site",
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setOk(res.ok);
      if (res.ok) (e.target as HTMLFormElement).reset();
    } catch {
      setOk(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mt-16 rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-10">
      <h2 className="text-2xl font-semibold md:text-3xl">
        Vamos estruturar sua estratégia patrimonial
      </h2>
      <p className="mt-3 max-w-3xl text-white/70">
        Preencha os dados e um especialista entra em contato. Se preferir, fale direto no WhatsApp.
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <form onSubmit={submit} className="space-y-4">
          <input name="nome" required placeholder="Seu nome"
            className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm outline-none focus:border-yellow-400/40"
          />
          <input name="telefone" required placeholder="WhatsApp"
            className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm outline-none focus:border-yellow-400/40"
          />
          <input name="cidade" placeholder="Cidade"
            className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm outline-none focus:border-yellow-400/40"
          />
          <input name="valorInteresse" placeholder="Valor aproximado (ex: 400.000)"
            className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm outline-none focus:border-yellow-400/40"
          />

          <button
            disabled={loading}
            className="w-full rounded-xl bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95 disabled:opacity-60"
          >
            {loading ? "Enviando..." : "Solicitar contato"}
          </button>

          {ok === true && (
            <p className="text-sm text-green-400">Dados enviados com sucesso.</p>
          )}
          {ok === false && (
            <p className="text-sm text-red-400">Falha ao enviar. Tente novamente.</p>
          )}
        </form>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
          <div className="text-sm font-semibold">Atendimento direto</div>
          <p className="mt-2 text-sm text-white/70">
            Se quiser acelerar, fale agora com nosso time.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_WHATSAPP_URL || "#"}
            className="mt-6 inline-flex rounded-xl border border-yellow-400/40 px-6 py-3 text-sm font-semibold text-yellow-300 transition hover:bg-yellow-400/10"
          >
            Abrir WhatsApp
          </a>

          <p className="mt-6 text-xs text-white/50">
            Build Atlas • Exithus Consultoria • Atendimento consultivo
          </p>
        </div>
      </div>
    </section>
  );
}
```

---

# 🧪 3) Testes simples (Health + Lead Submit)

✅ **Tipo:** Execução / validação (para Cline/Codex)
📁 **Destino:** `\tasks\` (operacional) + `\site\` (scripts)
📌 **Pode enviar ao cliente?** Não

## 3.1 Script de teste (bash)

📁 **Destino:** `\site\build-atlas-next\scripts\test-api.sh`
📄 **Arquivo:** `test-api.sh`

```bash
#!/usr/bin/env bash
set -e

echo "== Testando API /api/leads =="

curl -s -X POST "http://localhost:3000/api/leads" \
  -H "Content-Type: application/json" \
  -d '{"nome":"Teste","telefone":"5592999999999","cidade":"Manaus","valorInteresse":"400000","origem":"script"}' \
  | jq .

echo "OK"
```

## 3.2 Task de validação

📁 **Destino:** `\tasks\MCP-TASK-0220-testes-smoke.md`

```markdown
# MCP-TASK-0220 — Testes Smoke (Local/Staging)

## Objetivo
Validar que o básico está funcionando antes de mostrar ao cliente.

## Ações
- Subir docker compose
- Rodar migrate
- Testar / (home)
- Testar POST /api/leads via script

## Aceite
- Home abre
- API retorna 201
- Lead gravado no banco

## Evidência
- Print terminal
- Print navegador
```

---

# 🌐 4) Nginx (staging/prod) + SSL

✅ **Tipo:** Documentação e execução
📁 **Destino:**

* Docs: `\docs\technical\`
* Task: `\tasks\`
* Arquivo Nginx: `\site\infra\nginx\`

## 4.1 Modelo Nginx

📁 **Destino:** `\site\infra\nginx\build-atlas.nginx.conf`
📄 **Arquivo:** `build-atlas.nginx.conf`

```nginx
server {
    listen 80;
    server_name SEU_DOMINIO_AQUI;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        proxy_read_timeout 60s;
        proxy_connect_timeout 60s;
    }
}
```

## 4.2 Task Deploy Nginx + SSL

📁 **Destino:** `\tasks\MCP-TASK-0221-nginx-ssl.md`

```markdown
# MCP-TASK-0221 — Configurar Nginx + SSL (Staging/Prod)

## Objetivo
Publicar o Next.js via Nginx com HTTPS.

## Ações
- Copiar conf para /etc/nginx/sites-available/build-atlas
- Ativar symlink em sites-enabled
- nginx -t e restart
- Instalar certbot
- certbot --nginx -d dominio

## Aceite
- Site em HTTPS
- Redirecionamento 80→443
- Renovação automática ativa

## Evidência
- URL https
- Print certbot
```

## 4.3 Documento de referência (oficial)

📁 **Destino:** `\docs\technical\build-atlas_nginx-ssl_v1.0.md`
📄 **Arquivo:** `build-atlas_nginx-ssl_v1.0.md`

```markdown
# Nginx + SSL — Build Atlas (v1.0)

## Objetivo
Servir o container Next.js com reverse proxy e HTTPS.

## Arquivo base
- \site\infra\nginx\build-atlas.nginx.conf

## Procedimento
1) Copiar conf
2) Ativar site
3) Validar nginx -t
4) certbot --nginx -d <dominio>
```

---

# ✅ Checklist final (para você ver “o que é o quê”)

## 📚 Docs (oficial)

* `\docs\technical\build-atlas_architecture_master_v1.0.md`
* `\docs\technical\build-atlas_docker-deploy_v1.0.md`
* `\docs\technical\build-atlas_nginx-ssl_v1.0.md`

## 🧠 Brain (interno)

* `\brain\build-atlas-next\estrategia-ambientes_e_migracao_v1.0.md`

## 🛠 Tasks (execução Cline/Codex)

* `MCP-TASK-0213...` até `MCP-TASK-0221...`
* `MCP-TASK-0220-testes-smoke.md`

## 💻 Site (código)

* `Dockerfile`, `docker-compose.yml`, `.env.example`
* `src/components/sections/*`
* `src/app/api/leads/route.ts`
* `infra/nginx/*`
* `scripts/test-api.sh`

Perfeito, Márcio.
Agora vamos fechar o ciclo **Dev → Staging → Produção** com:

* 🚀 GitHub Actions (Deploy automático Staging)
* 📦 Checklist formal de Migração para VPS Cliente
* 🔐 Hardening extra
* 📊 Versionamento e controle de release

Tudo organizado no padrão:

* 📚 `\docs`
* 🧠 `\brain`
* 🛠 `\tasks`
* 💻 `\site`

---

# 🚀 1️⃣ GITHUB ACTIONS — DEPLOY AUTOMÁTICO STAGING

---

## 📁 DOCUMENTAÇÃO

📁 **Destino:**

```
\docs\technical\build-atlas_ci-cd_staging_v1.0.md
```

📄 **Arquivo:** `build-atlas_ci-cd_staging_v1.0.md`

```markdown
# CI/CD — Staging SSAG (v1.0)

## Objetivo
Automatizar deploy na VPS SSAG ao fazer push na branch `staging`.

## Fluxo
Push branch staging → GitHub Action → SSH VPS SSAG → docker compose up -d --build

## Pré-requisitos
- VPS SSAG com Docker instalado
- Usuário deploy configurado
- Chave SSH no GitHub Secrets
```

---

## 💻 ARQUIVO REAL DO WORKFLOW

📁 **Destino:**

```
\site\build-atlas-next\.github\workflows\deploy-staging.yml
```

📄 **Arquivo:** `deploy-staging.yml`

```yaml
name: Deploy Staging SSAG

on:
  push:
    branches:
      - staging

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.SSH_HOST }}
          username: ${{ secrets.SSH_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /var/www/build-atlas
            git pull origin staging
            docker compose down
            docker compose up -d --build
```

---

## 🔐 TASK DE IMPLEMENTAÇÃO

📁 **Destino:**

```
\tasks\MCP-TASK-0222-ci-cd-staging.md
```

```markdown
# MCP-TASK-0222 — CI/CD Deploy Staging

## Objetivo
Automatizar deploy staging via GitHub Actions.

## Ações
- Criar branch staging
- Configurar secrets:
  - SSH_HOST
  - SSH_USER
  - SSH_PRIVATE_KEY
- Criar workflow deploy-staging.yml
- Testar push automático

## Aceite
- Push em staging dispara workflow
- VPS atualiza automaticamente
```

---

# 📦 2️⃣ CHECKLIST MIGRAÇÃO PRODUÇÃO (VPS CLIENTE)

---

## 📁 DOCUMENTAÇÃO

📁 **Destino:**

```
\docs\technical\build-atlas_migracao-producao_checklist_v1.0.md
```

📄 **Arquivo:** `build-atlas_migracao-producao_checklist_v1.0.md`

```markdown
# Checklist de Migração — Produção Cliente

## 1. Infraestrutura
☐ VPS criada
☐ Docker instalado
☐ Docker Compose instalado
☐ Firewall configurado

## 2. Código
☐ Repositório clonado
☐ .env configurado
☐ docker compose up -d --build

## 3. Banco
☐ Dump realizado (se necessário)
☐ Importado no novo ambiente

## 4. Nginx
☐ Configuração criada
☐ nginx -t validado
☐ Certbot executado

## 5. DNS
☐ A record apontando para nova VPS
☐ Propagação confirmada

## 6. Testes
☐ Home funcionando
☐ API /api/leads funcionando
☐ Evento GA4 registrado
☐ Evento Meta Pixel registrado
```

---

## 🛠 TASK EXECUÇÃO MIGRAÇÃO

📁 **Destino:**

```
\tasks\MCP-TASK-0223-migracao-producao.md
```

```markdown
# MCP-TASK-0223 — Migração Produção Cliente

## Objetivo
Replicar staging no ambiente final do cliente.

## Ações
- Instalar Docker na VPS cliente
- Clonar repositório
- Configurar .env produção
- Subir containers
- Configurar Nginx + SSL
- Atualizar DNS

## Aceite
- Site em HTTPS no domínio oficial
- Leads funcionando
- Analytics registrando eventos
```

---

# 🔐 3️⃣ HARDENING EXTRA (ENTERPRISE)

---

## 📁 DOCUMENTAÇÃO

📁 **Destino:**

```
\docs\technical\build-atlas_security-hardening_v1.0.md
```

---

### Itens recomendados:

* Fail2Ban na VPS
* Firewall UFW
* Desabilitar login root
* Chave SSH obrigatória
* Rate limit Nginx
* Backup automático do volume Postgres

---

## 🛠 TASK HARDENING

📁 **Destino:**

```
\tasks\MCP-TASK-0224-security-hardening-vps.md
```

```markdown
# MCP-TASK-0224 — Hardening VPS

## Objetivo
Aumentar segurança da VPS staging/produção.

## Ações
- Configurar UFW
- Instalar Fail2Ban
- Desativar login root
- Configurar rate limit Nginx
- Configurar backup automático Postgres

## Aceite
- Porta 22 protegida
- Tentativas inválidas bloqueadas
- Backup diário funcionando
```

---

# 📊 4️⃣ CONTROLE DE RELEASE (Governança)

---

## 📁 DOCUMENTAÇÃO

📁 **Destino:**

```
\docs\technical\build-atlas_release-process_v1.0.md
```

---

### Modelo de versionamento:

```text
v1.0.0 — Lançamento institucional
v1.1.0 — Ajustes visuais
v1.2.0 — SEO aprimorado
v2.0.0 — Portal cliente
```

Branches:

```text
main → produção
staging → homologação
dev → desenvolvimento
```

---

## 🛠 TASK VERSIONAMENTO

📁 **Destino:**

```
\tasks\MCP-TASK-0225-versionamento-release.md
```

```markdown
# MCP-TASK-0225 — Versionamento e Release

## Objetivo
Organizar fluxo Git adequado.

## Ações
- Criar branches main/staging/dev
- Criar tag v1.0.0 após aprovação cliente
- Documentar changelog

## Aceite
- Tag criada
- Histórico organizado
```

---

# 🧭 VISÃO FINAL DO ECOSSISTEMA BUILD ATLAS

Agora você tem:

## 📚 Documentação técnica completa

## 🧠 Planejamento estratégico

## 🛠 13+ Tasks executáveis

## 💻 Código real estruturado

## 🐳 Docker pronto

## 🚀 CI/CD pronto

## 🔐 Segurança prevista

## 🔁 Migração estruturada

---

