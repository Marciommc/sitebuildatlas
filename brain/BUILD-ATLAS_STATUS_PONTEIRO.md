# ESTADO ATUAL DO PROJETO BUILD ATLAS (HANDOFF)

**Data da Última Atualização:** 21/02/2026
**Fase Atual:** Fim da Fase 1 (Institucional) - Pré-Reunião de Aprovação

---

## 📍 1. SITUAÇÃO DO AMBIENTE (NO AR)
O repositório oficial foi criado, o Docker e o CI/CD (GitHub Actions) foram configurados.
O site institucional estático da Fase 1 está rodando no servidor via proxy reverso.

- **Frontend Repositório:** `https://github.com/Marciommc/sitebuildatlas`
- **Ambiente de Homologação (VPS):** `https://buildatlas-preview.ssagtecnologia.com`
- **Infraestrutura:** VPS Ubuntu 24 -> Plesk -> Apache (Proxy) -> Docker (httpd:alpine, Porta 3010).

---

## ⏳ 2. PENDÊNCIAS FINAIS DA FASE 1 (Go-Live Definitivo)
As dependências a seguir estão no radar e aguardam **retorno do cliente** na reunião:

1. **Domínio Oficial:** Registrar e apontar o domínio final (`buildatlas.com.br` ou similar).
2. **Logos dos Parceiros:** Substituir as imagens provisórias na seção "Parceiros Governança".
3. **Tracking IDs:** Injetar o `META_PIXEL_ID` e o `GA4_MEASUREMENT_ID` definitivos no `.html`.

---

## 🚀 3. PRÓXIMAS ETAPAS (FASE 2 - Aditivo CRM/Portal)
Caso a proposta de expansão (`BUILD-ATLAS_PROPOSTA_FASE2_TECNICA.md`) seja aprovada pelo cliente, o trabalho técnico seguirá para as ferramentas de retaguarda:

1. Ativar o **Painel Administrativo (Admin)** e a **Área Restrita do Cliente (Dashboard)**.
2. Trocar a camada LocalStorage/Mock por um banco de dados relacional real (PostgreSQL).
3. Configurar sessões de Login autênticas via JWT/Supabase/Node.
4. Conectar o pipeline de automação para leitura dos leads recebidos via PipeRun.

---

## 📂 4. ONDE ENCONTRAR OS DOCUMENTOS ESTRATÉGICOS
Para evitar poluição, o projeto sofreu uma profunda higienização. Tudo o que importa está nas pastas oficiais:

* `\docs\branding\BUILD_ATLAS_MASTER_BRAND_BOOK_2026.md`: A bíblia da comunicação, cores e estética da marca.
* `\docs\infra\*.md`: Toda a documentação da arquitetura Docker, GitHub Actions, SLA B2B e escopos de contrato.
* `\brain\plano-implementacao_build-atlas_v3.0-rebaseline.md`: O roteiro base da divisão contratual Fase 1 vs Fase 2.
* `\brain\Atas de reunião\`: Histórico das negociações de escopo iniciais.
