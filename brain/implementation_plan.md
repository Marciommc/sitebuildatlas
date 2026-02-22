# Plano de Implementação - Modernização Site Exithus Consultoria

## Fase 1: Estrutura e Design (Concluído)
- [x] Estrutura HTML5 Semântica
- [x] Design Premium (Dark/Gold)
- [x] Responsividade Completa
- [x] Formulário integrado ao Piperun

## Fase 2: Interatividade e Conversão (Concluído)
- [x] Motion UI (Animações)
- [x] Botão WhatsApp
- [x] Simulador Interativo
- [x] SEO Local

## Fase 3: Sistema & Área Logada (Novo!)
Para atender à necessidade de uma **Área Administrativa e de Assinantes** sem perder a performance do site estático, utilizaremos uma arquitetura **Serverless** (Backend-as-a-Service).

### Stack Sugerida: **Supabase** (Open Source Firebase Alternative)
*   **Por que:** Permite adicionar Autenticação e Banco de Dados SQL diretamente ao nosso HTML/JS, sem precisar configurar servidores complexos (.NET/Node) neste momento. É gratuito, seguro e escala infinitamente.

### Funcionalidades
1.  **Autenticação (Auth):**
    *   Página de Login (`login.html`) moderna.
    *   Login por E-mail/Senha ou Magic Link (E-mail sem senha).
    *   Proteção de rotas (Redireciona se não logado).

2.  **Área do Assinante (`dashboard.html`):**
    *   Visualização de documentos exclusivos.
    *   Status de processos/contratos.
    *   Atualização de cadastro.

3.  **Área Administrativa (`admin.html`):**
    *   **Gestão de Leads:** Visualizar todos os cadastros feitos no site (Backup do Piperun).
    *   **Cadastro de Correspondências:** Interface para registrar envios/recebimentos para os clientes.
    *   **Gestão de Assinantes:** Criar/Bloquear usuários.

4.  **Banco de Dados (Postgres):**
    *   Tabela `users`: Perfis e níveis de acesso (Admin/Cliente).
    *   Tabela `contacts`: Histórico de formulários.
    *   Tabela `correspondence`: Registro de interações.

## Arquivos Novos
*   `/js/supabase-client.js` (Conexão Segura)
*   `/pages/login.html`
*   `/pages/dashboard.html`
*   `/pages/admin.html`
