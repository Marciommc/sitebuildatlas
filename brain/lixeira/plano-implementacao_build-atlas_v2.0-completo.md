# PLANO DE IMPLEMENTAÇÃO COMPLETO — BUILD ATLAS (v2.0)

**Data:** 20/02/2026  
**Base de análise:**
- `brain/implementation_plan.md` (plano legado Exithus)
- `brain/Atas de reunião/ATA DA 1ª REUNIÃO-Cliente.md`
- `brain/Atas de reunião/ATA DA 1ª REUNIÃO-Completa.md`
- `contracts/proposta-permuta_build-atlas_2026_v1.0.md`
- `contracts/contrato-permuta_build-atlas_v1.0.md`
- `docs/technical/build-atlas_site-architecture_v1.0.md`
- Estado atual do site (`index.html`, `login.html`, `dashboard.html`, `admin.html`, `js/app.js`, `js/auth.js`, `js/supabase-client.js`)

---

## 1) DIAGNÓSTICO: O QUE JÁ ESTÁ PRONTO HOJE

### 1.1 Já implementado tecnicamente
- Site institucional em HTML/CSS/JS com responsividade.
- Seções ricas de conversão (hero, sobre, como funciona, simulador, planos, depoimentos, contato).
- Integração de formulário com PipeRun (`js/app.js`).
- Captura local de leads (mock Supabase/localStorage) em paralelo ao PipeRun.
- SEO básico presente (meta description + JSON-LD LocalBusiness).
- Botão WhatsApp flutuante.
- Páginas de login, dashboard e admin com autenticação mock (`MOCK_MODE=true`).

### 1.2 Conflitos com o escopo aprovado (Proposta/Contrato/Ata)
1. **Marca principal do site ainda está Exithus**, enquanto o projeto é institucional da **Build Atlas**.
2. **Área logada/Admin já existe**, mas está **fora do escopo da Fase 1** (portal, área restrita e CRM não incluídos).
3. Estrutura de páginas atual não está 100% aderente ao wireframe mínimo aprovado (faltam blocos explicitamente orientados para Build Atlas/parceiros institucionais no tom da nova marca).
4. Identidade visual atual não está alinhada ao direcionamento da ata (base preto/vermelho e manual mínimo de aplicação).
5. Arquitetura técnica aprovada cita stack futura (Next.js/Tailwind/VPS), mas execução atual está em site estático; precisa decisão formal de continuidade (manter estático nesta fase ou migrar stack).

---

## 2) MATRIZ DE ADERÊNCIA (RESUMO)

## Escopo Fase 1 (deve ter)
- [x] Página institucional
- [x] Formulário de captação
- [x] WhatsApp
- [~] SEO (parcial, precisa reforço técnico)
- [ ] Página de parceiros com conteúdo oficial validado
- [ ] Pixel Meta + Google configurados com IDs oficiais
- [ ] Publicação em VPS + domínio oficial da operação

## Fora de escopo Fase 1 (não deve entrar agora)
- [x] Portal do cliente / área restrita (já existe, **congelar para Fase 2**)
- [x] CRM interno no site (já existe em mock, **não promover para produção nesta fase**)
- [x] Automações avançadas (não implementar agora)

---

## 3) DIRETRIZ DE AJUSTE ESTRATÉGICO

### Decisão recomendada para não quebrar contrato
1. **Fase 1 = institucional + captação**, foco total em Build Atlas.
2. **Área logada/admin = trilha separada (Fase 2)**, sem ativar no menu público e sem divulgar ao cliente como entrega da Fase 1.
3. Validar com cliente naming e arquitetura de marca:
   - “Build Atlas” como marca principal;
   - “Integrante do Grupo Exithus” como assinatura institucional.

---

## 4) NOVO PLANO DE IMPLEMENTAÇÃO (COMPLETO)

## FASE 0 — GOVERNANÇA E INSUMOS (D+0 a D+2)
**Objetivo:** eliminar bloqueios de conteúdo e infraestrutura.

### Entradas obrigatórias do cliente
- Missão, visão e valores finais.
- Domínio oficial e acesso ao registrador.
- E-mail corporativo de recebimento de leads.
- Logos/links de parceiros autorizados.
- IDs de rastreamento (Meta Pixel, GA4, Search Console).

### Entregáveis SSAG
- Checklist de pendências validado com responsáveis e prazo.
- Termo de escopo Fase 1 reforçando exclusões (portal/CRM/área restrita).

---

## FASE 1 — REALINHAMENTO DE MARCA E UX (D+3 a D+6)
**Objetivo:** transformar o site atual em versão Build Atlas aderente à ata.

### Ações
- Trocar identidade textual e visual Exithus -> Build Atlas (mantendo referência institucional ao grupo).
- Aplicar paleta aprovada (preto/vermelho) e ajustes de tipografia conforme manual mínimo.
- Reorganizar home no fluxo aprovado:
  1. Hero + CTA
  2. O que é Build Atlas
  3. Como funciona
  4. Diferenciais
  5. Parceiros
  6. CTA final
  7. Rodapé institucional
- Revisar copy com foco em:
  - patrimônio via consórcio;
  - modelo de êxito;
  - público PF/PJ.

### Critérios de aceite
- 100% da navegação pública em linguagem Build Atlas.
- Estrutura da home aderente ao wireframe estratégico.
- Aprovação visual do cliente antes da etapa técnica final.

---

## FASE 2 — CAPTAÇÃO, SEO E TRACKING (D+7 a D+10)
**Objetivo:** consolidar aquisição de leads e mensuração.

### Ações
- Formulário: manter PipeRun + validações adicionais (máscara telefone, campos obrigatórios, anti-spam/reCAPTCHA).
- Ajustar campos para aderência ao documento técnico (`nome`, `telefone`, `valor_interesse`, `cidade`, `origem`).
- SEO técnico mínimo:
  - title/description por página
  - Open Graph
  - sitemap.xml
  - robots.txt
  - schema markup atualizado para Build Atlas
- Configurar Pixel Meta + GA4 + Search Console com verificações reais.

### Critérios de aceite
- Lead chega no PipeRun com campos corretos.
- Eventos principais rastreados: `PageView`, `Lead`, `WhatsAppClick`.
- Validação de indexação inicial no Search Console.

---

## FASE 3 — INFRAESTRUTURA E PUBLICAÇÃO (D+11 a D+14)
**Objetivo:** colocar em produção com segurança.

### Ações
- Provisionar VPS (Contabo/Hetzner) com hardening básico.
- Configurar domínio e DNS.
- Instalar SSL e redirect HTTPS.
- Publicar versão estável e executar smoke tests.
- Configurar rotina de backup e logs básicos.

### Critérios de aceite
- Site online no domínio oficial com SSL válido.
- Formulário e botões de contato operando em produção.
- Checklist de QA sem bloqueadores críticos.

---

## FASE 4 — ESTABILIZAÇÃO E ENTREGA (D+15 a D+20)
**Objetivo:** fechamento de Fase 1 com documentação.

### Ações
- Correções pós-go-live.
- Manual rápido operacional (edição de textos, troca de parceiros, contatos).
- Registro de pendências para Fase 2.

### Entregáveis finais
- URL de produção
- Documento de credenciais e acessos
- Checklist de escopo concluído
- Backlog formal da Fase 2 (portal/CRM/área restrita)

---

## 5) PLANO DA FASE 2 (PÓS-CONTRATO FASE 1)

**Somente mediante aditivo/comercial separado.**

Itens candidatos:
- Área do cliente (login real)
- Painel administrativo real
- Banco PostgreSQL em produção
- Gestão de leads interna
- Automações de WhatsApp
- Integrações avançadas/CRM

Status do que já existe hoje (mock):
- `login.html`, `dashboard.html`, `admin.html`, `js/auth.js`, `js/supabase-client.js`

Recomendação:
- Manter como **POC interna**, sem exposição comercial como entrega da Fase 1.

---

## 6) RISCOS E MITIGAÇÃO

1. **Sem domínio/acessos** -> trava deploy.  
   Mitigação: coletar credenciais na Fase 0 com prazo formal.

2. **Mudança recorrente de posicionamento de marca** -> retrabalho.  
   Mitigação: aprovar copy-mãe e wireframe antes de codar ajustes finais.

3. **Confusão de escopo (Fase 1 vs Fase 2)** -> risco contratual.  
   Mitigação: termo de escopo assinado + backlog de evolução separado.

4. **Dependência de IDs de mídia/tráfego** -> rastreamento incompleto.  
   Mitigação: responsáveis nomeados pelo cliente e data-limite.

---

## 7) CHECKLIST EXECUTIVO

- [ ] Aprovar identidade Build Atlas (texto + visual)
- [ ] Receber todos os insumos do cliente (domínio, parceiros, M/V/V, pixels)
- [ ] Ajustar home conforme wireframe aprovado
- [ ] Validar formulário + WhatsApp + PipeRun
- [ ] Configurar SEO/Schema/Sitemap/Robots
- [ ] Configurar GA4/Pixel/Search Console
- [ ] Publicar em VPS com SSL
- [ ] Fazer QA final + aceite do cliente
- [ ] Encerrar Fase 1 e abrir backlog formal da Fase 2
