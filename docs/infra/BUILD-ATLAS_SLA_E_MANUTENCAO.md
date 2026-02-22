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
