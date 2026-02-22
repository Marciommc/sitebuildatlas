# PLANO DE IMPLEMENTAÇÃO COMPLETO — BUILD ATLAS (v3.0 REBASELINE)

**Data:** 20/02/2026  
**Objetivo:** Replanejar o projeto com base no que já foi implementado no site, na ata e nos documentos mais recentes, alinhando escopo contratual (Fase 1) e evolução futura (Fase 2).

---

## 1) FONTES ANALISADAS

- `brain/implementation_plan.md`
- `brain/plano-implementacao_build-atlas_v2.0-completo.md`
- `brain/Atas de reunião/ATA DA 1ª REUNIÃO-Completa.md`
- `brain/Atas de reunião/ATA DA 1ª REUNIÃO-Cliente.md`
- `contracts/proposta-permuta_build-atlas_2026_v1.0.md`
- `contracts/contrato-permuta_build-atlas_v1.0.md`
- `docs/technical/build-atlas_site-architecture_v1.0.md`
- `brain/build-atlas-next/arquitetura-geral_v1.0.md`
- `brain/build-atlas-next/estrategia-ambientes.md`
- Estado atual do código:
  - `index.html`, `login.html`, `dashboard.html`, `admin.html`
  - `css/style.css`
  - `js/app.js`, `js/auth.js`, `js/supabase-client.js`

---

## 2) DIAGNÓSTICO DO QUE JÁ ESTÁ MONTADO NO SITE

### 2.1 Implementado e funcional (estado atual)
- Site institucional estático em HTML/CSS/JS.
- Layout responsivo com animações e boa estrutura visual.
- Formulário com integração PipeRun (`fetch` em `js/app.js`).
- Botão flutuante do WhatsApp.
- SEO básico parcial (title, description e JSON-LD LocalBusiness).
- Páginas de autenticação e painel já criadas (`login`, `dashboard`, `admin`).
- Camada mock para “Supabase” usando `localStorage` (`MOCK_MODE=true`).

### 2.2 Divergências com ata + proposta + contrato
1. **Marca e posicionamento:** site público ainda em **Exithus** (não Build Atlas como marca principal da Fase 1).
2. **Identidade visual:** tema atual é **dark/gold**, enquanto alinhamento da ata aponta **preto/vermelho**.
3. **Escopo contratado Fase 1:** portal/área restrita/CRM **não deveriam estar como entrega ativa**.
4. **Página de parceiros:** não existe página/seção institucional consolidada com dados oficiais.
5. **Tracking e mídia:** Pixel Meta e GA/Console não configurados com IDs oficiais.
6. **SEO técnico completo:** faltam sitemap.xml, robots.txt, OG completo por página e validações finais.
7. **Segurança de formulário:** não há reCAPTCHA/anti-spam implementado.
8. **Dados de lead:** estrutura atual não contempla integralmente o modelo técnico (`valor_interesse`, `cidade`, `origem`).

### 2.3 Observação técnica importante
- `brain/build-atlas-next/modelagem-banco-completa.md` está vazio (0 bytes), portanto a modelagem “completa” ainda não foi consolidada nesse arquivo.

---

## 3) MATRIZ DE ADERÊNCIA (FASE 1)

## Itens obrigatórios Fase 1
- [x] Site institucional publicado em código local
- [x] Formulário de captação
- [x] Integração WhatsApp
- [x] SEO (parcial) - Robots e Sitemap gerados
- [ ] Página de parceiros com conteúdo validado (Falta Logo)
- [ ] Pixel Meta + Google (GA4/Console) com IDs reais (Falta ID)
- [x] Domínio oficial + VPS + SSL em produção (`buildatlas-preview.ssagtecnologia.com`)

## Itens fora do escopo Fase 1 (congelar)
- [x] Portal do cliente (já existe como POC)
- [x] Área restrita (já existe como POC)
- [x] CRM interno no site (mock)
- [x] Automações avançadas

---

## 4) DECISÃO DE BASELINE RECOMENDADA

Para preservar aderência contratual e acelerar entrega:

1. **Manter Fase 1 focada em institucional + captação + rastreamento + publicação.**
2. **Congelar login/dashboard/admin como trilha Fase 2** (não destacar no menu público).
3. **Reposicionar a marca para Build Atlas** com assinatura institucional do Grupo Exithus.
4. **Fechar lacunas críticas de go-live**: parceiros, SEO técnico final, Pixel/GA, domínio/VPS/SSL.

---

## 5) NOVO PLANO COMPLETO DE IMPLEMENTAÇÃO

## FASE 0 — ALINHAMENTO E INSUMOS (D+0 a D+2)
**Objetivo:** remover bloqueios de conteúdo, marca e infraestrutura.

### Entradas do cliente (obrigatórias)
- Missão, visão, valores e slogan aprovado.
- Domínio oficial + acesso ao registrador.
- E-mail corporativo de recebimento de leads.
- Logos e links dos parceiros autorizados.
- IDs oficiais: Meta Pixel, GA4, Search Console.

### Saídas SSAG
- Termo de baseline da Fase 1 (com exclusões formais da Fase 2).
- Checklist de pendências com responsáveis e prazos.

---

## FASE 1 — REALINHAMENTO DE MARCA E ESTRUTURA (D+3 a D+6)
**Objetivo:** adequar o site atual ao posicionamento Build Atlas.

### Ações
- Trocar branding textual/visual de Exithus para Build Atlas.
- Aplicar guideline visual aprovado (preto/vermelho + tipografia definida).
- Revisar arquitetura da home com fluxo estratégico:
  1. Hero
  2. Sobre Build Atlas
  3. Como funciona
  4. Diferenciais
  5. Parceiros
  6. CTA final
  7. Rodapé institucional
- Remover “Área do Cliente” da navegação pública da Fase 1.

### Critérios de aceite
- Linguagem 100% Build Atlas na navegação pública.
- Aprovação visual do cliente antes da fase técnica final.

---

## FASE 2 — CAPTAÇÃO, TRACKING E SEO TÉCNICO (D+7 a D+11)
**Objetivo:** consolidar aquisição de leads e medição de performance.

### Ações
- Formulário:
  - manter PipeRun;
  - adicionar reCAPTCHA/anti-spam;
  - reforçar validações (telefone, obrigatórios, consentimento LGPD).
- Ajustar payload e campos mínimos para padrão técnico:
  - `nome`, `telefone`, `valor_interesse`, `cidade`, `origem`, `data`.
- SEO técnico:
  - titles/descriptions por página;
  - Open Graph;
  - `sitemap.xml`;
  - `robots.txt`;
  - schema atualizado para Build Atlas.
- Tracking:
  - GA4 + Meta Pixel + Search Console (com validação real).

### Critérios de aceite
- Lead chega no PipeRun com campos consistentes.
- Eventos mínimos rastreados: `PageView`, `LeadSubmit`, `WhatsAppClick`.
- Propriedade validada no Search Console.

---

## FASE 3 — PARCEIROS, QA E PUBLICAÇÃO (D+12 a D+16)
**Objetivo:** fechar Fase 1 e colocar em produção estável.

### Ações
- Entregar página/seção de parceiros com materiais oficiais.
- Setup de VPS, DNS, SSL e redirects HTTPS.
- Publicação em domínio oficial.
- QA funcional:
  - formulário e integrações;
  - botões/links;
  - responsividade;
  - performance básica e metadados.

### Critérios de aceite
- Site online no domínio oficial com SSL válido.
- Jornada de captação funcionando ponta a ponta.
- Checklist de QA sem bloqueadores críticos.

---

## FASE 4 — FECHAMENTO FASE 1 E TRANSIÇÃO (D+17 a D+20)
**Objetivo:** concluir entrega contratual e preparar evolução.

### Entregáveis
- Documento de acessos (domínio, VPS, integrações).
- Guia rápido operacional (edição básica e parceiros).
- Relatório de implementação (escopo cumprido + pendências).
- Backlog oficial da Fase 2 (portal/CRM/área restrita).

---

## 6) PLANO DE EVOLUÇÃO (FASE 2 — APÓS ADITIVO)

Implementar somente após aprovação comercial:

- Login real e gestão de sessão.
- Dashboard do cliente com documentos reais.
- Painel admin real (usuários, leads, correspondências).
- Banco PostgreSQL em produção.
- API segura (Node/serverless) + controle de permissões.
- Migração para stack alvo (Next.js + TS + Tailwind), se aprovado.

**Status atual:** login/dashboard/admin ficam como **POC interna** (não entrega Fase 1).

---

## 7) PRIORIZAÇÃO EXECUTIVA (O QUE AJUSTAR AGORA)

### Prioridade Alta (bloqueia aceite)
1. Rebranding completo Build Atlas.
2. Congelar/remover exposição da área logada na home.
3. Implementar parceiros oficiais.
4. Configurar Pixel/GA/Console com IDs reais.
5. Publicar em VPS + domínio + SSL.

### Prioridade Média
6. Completar SEO técnico (sitemap/robots/OG/schema).
7. Reforçar segurança de formulário (reCAPTCHA + validações).

### Prioridade Baixa (Fase 2)
8. Banco e autenticação reais.
9. CRM interno e automações avançadas.

---

## 8) RISCOS E MITIGAÇÕES

1. **Insumos incompletos do cliente** (domínio, IDs, parceiros)  
   Mitigação: checklist com responsável e data limite.

2. **Confusão de escopo Fase 1 vs Fase 2**  
   Mitigação: baseline formal assinada e backlog separado.

3. **Mudanças recorrentes de posicionamento**  
   Mitigação: aprovar copy e direção visual antes de ajustes finais.

4. **Dependência de terceiros (PipeRun, DNS, VPS)**  
   Mitigação: janela de homologação + plano de rollback simples.

---

## 9) CHECKLIST FINAL DE EXECUÇÃO (REBASELINE)

- [x] Aprovar baseline Fase 1 com cliente
- [ ] Receber todos os insumos pendentes (IDs e Logos)
- [x] Rebrand completo para Build Atlas
- [x] Retirar exposição pública da área logada
- [x] Implementar página/seção de parceiros (Pendente apenas imagens finais)
- [x] Fechar SEO técnico completo (Sitemap/Robots)
- [ ] Configurar GA4 + Pixel + Search Console
- [x] Publicar em VPS com domínio e SSL
- [x] Executar QA final e aceite
- [ ] Encerrar Fase 1 e abrir Fase 2 por aditivo
