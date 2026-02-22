Perfeito. Agora estamos falando de infraestrutura real. 👊

Você está em:

* Ubuntu 24
* Plesk gerenciando Apache
* Vários containers já rodando
* Portas já bem distribuídas
* Ambiente estável

Então **vamos integrar o Build Atlas nesse ecossistema sem bagunçar nada**.

---

# 🎯 ESTRATÉGIA CORRETA NO SEU CENÁRIO

Como você usa **Plesk + Apache**, o ideal NÃO é criar VirtualHost manual.

O ideal é:

> Criar subdomínio pelo Plesk
> Usar Apache como Reverse Proxy
> Apontar para container Docker isolado

Isso mantém governança visual e controle central.

---

# 🏗️ PLANO SEGURO PARA BUILD ATLAS

## 1️⃣ Criar subdomínio no Plesk

Exemplo recomendado:

```
buildatlas-preview.ssag.digital
```

Ou

```
buildatlas-preview.ssagtecnologia.com
```

Mas prefira o domínio mais neutro.

No Plesk:

* Ir em Domínios
* Adicionar Subdomínio
* Documento raiz padrão
* Não usar PHP

---

## 2️⃣ Criar container Docker isolado

Você já tem containers nas portas:

* 3000
* 3001
* 3002
* 5000
* 5005
* 5101
* 5201
* 1433
* 14330

Vamos usar uma porta livre.

Sugestão segura:

```
3010
```

---

# 🐳 DOCKER-COMPOSE PARA BUILD ATLAS

Criar pasta:

```
/var/www/buildatlas-preview/
```

docker-compose.yml:

```yaml
version: "3.9"

services:
  buildatlas:
    image: nginx:alpine
    container_name: buildatlas-preview
    restart: always
    volumes:
      - ./app:/usr/share/nginx/html:ro
    ports:
      - "3010:80"
```

Se for Next SSR:

```yaml
version: "3.9"

services:
  buildatlas:
    image: node:18-alpine
    container_name: buildatlas-preview
    working_dir: /app
    volumes:
      - ./app:/app
    command: sh -c "npm install && npm run build && npm start"
    ports:
      - "3010:3000"
    restart: always
```

---

# 🌐 3️⃣ CONFIGURAR NO PLESK (IMPORTANTE)

No Plesk:

Subdomínio → Apache & Nginx Settings

Adicionar no campo:

### Apache Additional directives:

```apache
ProxyPreserveHost On
ProxyPass / http://127.0.0.1:3010/
ProxyPassReverse / http://127.0.0.1:3010/
```

Salvar.

---

# 🔐 SSL

No próprio Plesk:

* Ativar Let's Encrypt
* Forçar HTTPS
* Redirecionamento automático

Nada manual.

---

# 🧠 POR QUE ISSO É MELHOR NO SEU CASO?

Porque:

✔ Mantém padrão da sua VPS
✔ Não mexe no Apache raiz
✔ Não cria conflito com containers existentes
✔ Mantém governança visual
✔ Fácil remover depois

---

# 🔎 ANÁLISE DO SEU AMBIENTE ATUAL

Você já tem:

* 2 MSSQL
* 1 Postgres
* 2 APIs .NET
* 2 Sites Node
* WikiJS
* Backend TindKey

Ou seja…

Você já está operando como mini-cloud privada.

Então Build Atlas deve ser:

✔ Container isolado
✔ Porta isolada
✔ Proxy via Plesk
✔ Sem interferir nos outros serviços

---

# 🚀 SCRIPT DE DEPLOY ADAPTADO AO SEU CENÁRIO

deploy.sh:

```bash
#!/bin/bash

echo "🚀 Deploy Build Atlas..."

cd /var/www/buildatlas-preview

docker compose down
docker compose up -d --build

echo "🔄 Finalizado!"
```

Sem reiniciar Apache manualmente (Plesk já gerencia).

---

# 🔥 CHECKLIST ANTES DA REUNIÃO

* [ ] Subdomínio resolve DNS
* [ ] HTTPS ativo
* [ ] Formulário funcionando
* [ ] Cookie banner ativo
* [ ] Testado no 4G real
* [ ] Sem erro no console
* [ ] Sem menção à SSAG no front

---

# 🏆 ESTRATÉGIA DE APRESENTAÇÃO

Você fala:

> “O ambiente está rodando em nossa infraestrutura privada de homologação. Assim que o domínio oficial for liberado, fazemos a ativação definitiva.”

Você não fala de:

* Docker
* Porta
* Proxy
* Apache

Cliente não precisa saber.

---

# ⚠️ CUIDADO IMPORTANTE

Você já tem dois MSSQL rodando (1433 e 14330).

Garanta que Build Atlas não utilize nenhuma porta conflitante.

Use 3010.
É seguro.

---

# 🎯 Conclusão

Sim.
Pode subir.
E no seu ambiente atual, a forma mais segura é:

Subdomínio via Plesk + Docker isolado + Proxy Apache via painel.

---
Perfeito.
Agora vamos organizar isso **nível enterprise real**, usando:

* Ubuntu 24
* Plesk
* Docker já em produção
* SSH (deploy + root)
* Containers organizados
* Subdomínio de homologação

Vou estruturar tudo em 4 blocos estratégicos:

---

# 🧠 1️⃣ ARQUITETURA ATUAL (VISÃO ORGANIZADA)

Você já opera assim:

```
Internet
   ↓
DNS
   ↓
Plesk (Apache)
   ↓
Reverse Proxy
   ↓
Docker Containers
   ↓
APIs / Sites / DBs
```

Build Atlas vai entrar como:

```
Internet
   ↓
buildatlas-preview.ssag.digital
   ↓
Plesk (Apache)
   ↓
Proxy → 127.0.0.1:3010
   ↓
Container buildatlas-preview
```

Sem conflito.
Sem interferir no cluster.

---

# 🔐 2️⃣ DEPLOY ENTERPRISE COM SSH (DEPLOY USER)

Como você já tem:

* SSH root
* SSH deploy

👉 **Nunca use root para deploy.**
Use `deploy`.

---

## Estrutura ideal no servidor

```id="8a4h3v"
/home/deploy/apps/buildatlas-preview/
```

Dentro:

* docker-compose.yml
* Dockerfile (se precisar)
* app/
* deploy.sh

---

## Permissões

```id="vtv8kz"
sudo chown -R deploy:deploy /home/deploy/apps/buildatlas-preview
```

---

# 🚀 3️⃣ SCRIPT DE DEPLOY ENTERPRISE (COM GIT)

Salvar como:

```id="q9lf4m"
/home/deploy/apps/buildatlas-preview/deploy.sh
```

```bash
#!/bin/bash

echo "🚀 Build Atlas Deploy Iniciado..."

cd /home/deploy/apps/buildatlas-preview || exit

echo "📥 Atualizando repositório..."
git pull origin main

echo "🐳 Parando container antigo..."
docker compose down

echo "🏗️ Subindo novo container..."
docker compose up -d --build

echo "🔎 Verificando status..."
docker ps | grep buildatlas-preview

echo "✅ Deploy finalizado com sucesso."
```

Permissão:

```id="0kks1h"
chmod +x deploy.sh
```

---

# 🔄 4️⃣ DEPLOY VIA SSH REMOTO (LOCAL → VPS)

No seu Windows:

```id="5w3r3d"
ssh deploy@IP_DA_VPS
```

Ou direto:

```id="qv4y3h"
ssh deploy@IP_DA_VPS "cd /home/deploy/apps/buildatlas-preview && ./deploy.sh"
```

Isso já permite integração futura com Codex/Cline.

---

# 🌐 5️⃣ PLESK CONFIGURAÇÃO CORRETA

No Subdomínio:

Apache & Nginx Settings → Additional directives:

```apache
ProxyPreserveHost On
ProxyPass / http://127.0.0.1:3010/
ProxyPassReverse / http://127.0.0.1:3010/
```

Não mexer no Apache global.

---

# 🔐 6️⃣ PLANO DE MIGRAÇÃO QUANDO DOMÍNIO OFICIAL CHEGAR

Quando eles enviarem o domínio:

1. Criar novo subdomínio no Plesk
2. Copiar proxy config
3. Apontar DNS para VPS
4. Ativar SSL
5. Testar
6. Desativar preview

Zero downtime.

---

# 🏗️ 7️⃣ STAGE + PROD (RECOMENDADO)

Você pode criar:

```
buildatlas-stage.ssag.digital → porta 3010
buildatlas-prod.ssag.digital  → porta 3011
```

Dois containers separados.

Isso já te coloca nível agência estruturada.

---

# 📊 8️⃣ MONITORAMENTO BÁSICO

Sem complicar:

```id="nczn3p"
docker logs buildatlas-preview
```

Ou instalar:

* Netdata
* Uptime Kuma
* Ou usar Plesk Monitor

---

# 🔒 9️⃣ HARDENING RECOMENDADO

* Firewall UFW ativo
* Não expor porta 3010 externamente
* Somente Apache acessa local
* Fail2ban ativo
* SSL forçado

---

# 🎯 10️⃣ CHECK FINAL PRÉ-REUNIÃO

* [ ] Subdomínio resolve
* [ ] SSL ativo
* [ ] Site rápido (<2s)
* [ ] Formulário testado
* [ ] Cookie banner validado
* [ ] Testado no 4G real
* [ ] Testado no Safari iPhone
* [ ] Sem erros console

---

# 🏆 Resultado

Você terá:

✔ Ambiente isolado
✔ Deploy via SSH seguro
✔ Docker organizado
✔ Proxy via Plesk
✔ Estrutura pronta para domínio oficial
✔ Nível enterprise real

---
Perfeito.
Agora vamos estruturar isso como **infraestrutura profissional documentada**, não improviso.

Você terá:

* 📊 Diagrama oficial da arquitetura
* 🏗️ Plano formal Stage / Prod
* 🔁 CI/CD com GitHub Actions
* 📋 Checklist de Infra para usar no pitch
* 📁 Organização para \docs e \brain

---

# 📁 ORGANIZAÇÃO DE DOCUMENTAÇÃO

Salvar:

```id="arv4p1"
\docs\infra\BUILD-ATLAS_INFRASTRUCTURE_ARCHITECTURE.md
\docs\infra\BUILD-ATLAS_STAGE_PROD_STRATEGY.md
\docs\infra\BUILD-ATLAS_CICD_GITHUB_ACTIONS.md
\docs\infra\BUILD-ATLAS_INFRA_PITCH_CHECKLIST.md
```

---

# 1️⃣ 📊 ARQUITETURA VISUAL OFICIAL

## BUILD-ATLAS_INFRASTRUCTURE_ARCHITECTURE.md

---

# Arquitetura Oficial — Ambiente Build Atlas

## 🌐 Fluxo Público

```id="dcz8mf"
Cliente
   ↓
DNS (Cloudflare / Registro.br)
   ↓
VPS Ubuntu 24 + Plesk
   ↓
Apache Reverse Proxy
   ↓
Docker Container (Build Atlas)
```

---

## 🐳 Cluster Atual da VPS

```id="p5o8mt"
ssag-cae-api        → 5101
ssag-cortex-api     → 5201
ssag-site           → 3002
inovam-site         → 3001
tindkey-backend     → 3000
wikijs              → 3443
buildatlas-preview  → 3010 (novo)
```

Build Atlas NÃO interfere nos demais.

---

## 🔐 Segurança

* SSL via Plesk
* Porta 3010 exposta apenas internamente
* Apache faz proxy
* SSH restrito por chave
* Deploy via usuário `deploy`

---

# 2️⃣ 🏗️ PLANO FORMAL STAGE / PROD

## BUILD-ATLAS_STAGE_PROD_STRATEGY.md

---

## 🎯 Estrutura recomendada

```id="afg7s2"
buildatlas-stage.ssag.digital → Porta 3010
buildatlas-preview.ssag.digital → Porta 3012 (se quiser manter)
buildatlas.com.br (futuro) → Porta 3011
```

---

## 🐳 Docker Compose separado

Stage:

```yaml id="5i9vln"
services:
  buildatlas-stage:
    image: ghcr.io/marciommc/buildatlas:stage
    ports:
      - "3010:3000"
```

Prod:

```yaml id="d4yk8r"
services:
  buildatlas-prod:
    image: ghcr.io/marciommc/buildatlas:latest
    ports:
      - "3011:3000"
```

---

## 🔁 Fluxo de Migração Oficial

1. Deploy em Stage
2. Validação interna
3. Aprovação cliente
4. Deploy em Prod
5. Atualização DNS
6. SSL
7. Monitoramento

Zero downtime.

---

# 3️⃣ 🔁 CI/CD COM GITHUB ACTIONS

## BUILD-ATLAS_CICD_GITHUB_ACTIONS.md

---

Criar arquivo:

```
.github/workflows/deploy.yml
```

---

## Exemplo

```yaml id="n6w2j1"
name: Deploy Build Atlas

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout código
        uses: actions/checkout@v3

      - name: Build Docker image
        run: docker build -t ghcr.io/marciommc/buildatlas:latest .

      - name: Login GHCR
        run: echo "${{ secrets.GITHUB_TOKEN }}" | docker login ghcr.io -u USERNAME --password-stdin

      - name: Push imagem
        run: docker push ghcr.io/marciommc/buildatlas:latest

      - name: Deploy remoto
        uses: appleboy/ssh-action@v0.1.6
        with:
          host: ${{ secrets.VPS_HOST }}
          username: deploy
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /home/deploy/apps/buildatlas-prod
            docker compose pull
            docker compose up -d
```

---

## 🔐 Secrets necessários no GitHub

* VPS_HOST
* SSH_PRIVATE_KEY
* VPS_USER (deploy)

---

# 4️⃣ 📋 CHECKLIST DE INFRA PARA O PITCH

## BUILD-ATLAS_INFRA_PITCH_CHECKLIST.md

---

## Infraestrutura pronta

✔ Ambiente Docker isolado
✔ Reverse Proxy via Apache
✔ SSL ativo
✔ Estrutura Stage / Prod
✔ Deploy automatizado
✔ Monitoramento preparado
✔ Migração futura sem downtime

---

## Frase para usar na reunião:

> “O projeto não está apenas visualmente pronto. Ele já está estruturado dentro de um ambiente isolado, seguro e escalável, com deploy automatizado e pronto para migração definitiva ao domínio oficial.”

Isso muda a percepção do cliente.

Você deixa de ser “quem fez o site”.

Você vira:

Arquitetura Digital.

---

# 🎯 Resultado Final

Você agora possui:

✔ Infraestrutura organizada
✔ Deploy automatizado
✔ Cluster controlado
✔ Escalabilidade
✔ Estratégia de migração
✔ Diferencial competitivo no pitch

---
Perfeito.
Agora vamos consolidar você definitivamente como **Arquitetura Digital Oficial da Build Atlas**.

Vou estruturar os 4 blocos finais de forma profissional, prontos para usar em reunião, contrato ou proposta futura.

Organização sugerida:

```
\docs\infra\BUILD-ATLAS_SLA_E_MANUTENCAO.md
\docs\infra\BUILD-ATLAS_PROPOSTA_FASE2_TECNICA.md
\docs\infra\BUILD-ATLAS_CONTRATO_HOSPEDAGEM_SUPORTE.md
\docs\infra\BUILD-ATLAS_MODELO_SUPORTE_MENSAL.md
```

---

# 1️⃣ SLA E MANUTENÇÃO

## BUILD-ATLAS_SLA_E_MANUTENCAO.md

---

# SLA – Build Atlas (Ambiente Digital)

## 1. Escopo

Este SLA cobre:

* Disponibilidade do ambiente
* Correção de erros técnicos
* Monitoramento básico
* Segurança de infraestrutura
* Backup estrutural (se aplicável)

---

## 2. Níveis de Disponibilidade

Meta:

* 99% uptime mensal

Exclusões:

* Falhas de DNS externo
* Problemas de registrador
* Falhas de terceiros (Cloudflare, Google, Meta)

---

## 3. Níveis de Atendimento

| Prioridade | Descrição       | Tempo de Resposta |
| ---------- | --------------- | ----------------- |
| Alta       | Site fora do ar | Até 2h            |
| Média      | Erro funcional  | Até 12h           |
| Baixa      | Ajuste visual   | Até 48h           |

---

## 4. O que NÃO está incluso

* Alterações fora do escopo da Fase atual
* Novo layout
* Novo módulo
* CRM
* Integração externa não prevista

---

# 2️⃣ PROPOSTA TÉCNICA – FASE 2

## BUILD-ATLAS_PROPOSTA_FASE2_TECNICA.md

---

# Fase 2 — Estrutura Administrativa e Governança Digital

## Objetivo

Implementar painel administrativo logado com:

* Gestão de leads
* CRM básico
* Registro de operações
* Histórico de clientes
* Controle de conversões

---

## Escopo técnico sugerido

* Backend Node ou .NET
* Banco PostgreSQL
* Autenticação JWT
* Controle de permissões
* Exportação de relatórios

---

## Infraestrutura

* Container dedicado
* Porta isolada
* Proxy via Plesk
* SSL
* Ambiente Stage antes de Prod

---

## Benefício estratégico

Permite:

✔ Controle interno
✔ Auditoria
✔ Profissionalização
✔ Escalabilidade

---

# 3️⃣ CONTRATO DE HOSPEDAGEM E SUPORTE

## BUILD-ATLAS_CONTRATO_HOSPEDAGEM_SUPORTE.md

---

# Contrato Simplificado de Hospedagem e Suporte Técnico

## 1. Objeto

Prestação de serviços de:

* Hospedagem VPS
* Infraestrutura Docker
* SSL
* Backup básico
* Suporte técnico

---

## 2. Valor mensal sugerido

Modelo Base:

* Hospedagem técnica + manutenção: R$ ___ / mês

Modelo Premium:

* Hospedagem + monitoramento + ajustes + melhorias leves: R$ ___ / mês

---

## 3. Vigência

Contrato com validade de 12 meses.

---

## 4. Rescisão

Aviso prévio mínimo de 30 dias.

---

# 4️⃣ MODELO DE SUPORTE MENSAL

## BUILD-ATLAS_MODELO_SUPORTE_MENSAL.md

---

# Plano de Suporte Técnico Mensal

## Plano Essencial

✔ Hospedagem
✔ SSL
✔ Monitoramento básico
✔ 2h de ajustes mensais

---

## Plano Executivo

✔ Hospedagem
✔ Monitoramento ativo
✔ 6h de ajustes mensais
✔ Consultoria digital estratégica

---

## Plano Estrutural

✔ Ambiente Stage + Prod
✔ Deploy automatizado
✔ Backup diário
✔ Consultoria mensal

---

# 🎯 COMO USAR ISSO NA REUNIÃO

Você diz:

> “A Fase 1 entrega o posicionamento institucional.
> A Fase 2 entrega governança interna.
> E a manutenção garante estabilidade e escalabilidade.”

Você deixa claro:

* Site não é custo.
* É ativo estrutural.

---

# 🏆 POSICIONAMENTO FINAL

Você agora possui:

✔ Arquitetura técnica
✔ Governança
✔ Infra estruturada
✔ Modelo de SLA
✔ Proposta evolutiva
✔ Contrato preparado
✔ Escalabilidade
✔ Controle

Você não está vendendo site.

Você está oferecendo:

Estrutura Digital de Governança Patrimonial.

---
