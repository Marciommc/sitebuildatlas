# MCP-TASK-0233 — Cookie Banner com Bloqueio Real

## Objetivo
Implementar banner LGPD/GDPR que:

- Solicita consentimento explícito
- Armazena decisão no localStorage
- Bloqueia GA4 e Pixel até aceite

## Ações
- Criar componente/estrutura de CookieBanner
- Centralizar regra de consentimento
- Condicionar scripts ao consentimento

## Critério de Aceite
- GA4 NÃO executa antes de consentimento
- Consentimento persistente
- Usuário pode rejeitar

## Evidência
- Console comprovando bloqueio
