# MCP-TASK-0228 — Implementar Cookie Consent (LGPD & GDPR)

## Objetivo
Implementar cookie banner que:
- Pede consentimento explícito antes de ativar cookies de analytics ou marketing
- Atualiza estado de consentimento
- Bloqueia GA4/Meta Pixel até aceitar

## Ações
- Banner persistente (topo/rodapé)
- Opção de aceitar/rejeitar/granular
- Armazenar consentimento localStorage

## Critério de Aceite
- GA4/Pixel não executa antes de consentimento
- Consentimento registrado
- Permite rejeitar cookies não essenciais

## Evidência
- Banner funcionando
- Logs consentimento
