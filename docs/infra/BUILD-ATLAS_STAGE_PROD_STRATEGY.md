## 🎯 Estrutura recomendada

```
buildatlas-stage.ssag.digital → Porta 3010
buildatlas-preview.ssag.digital → Porta 3012 (se quiser manter)
buildatlas.com.br (futuro) → Porta 3011
```

---

## 🐳 Docker Compose separado

Stage:

```yaml
services:
  buildatlas-stage:
    image: ghcr.io/marciommc/buildatlas:stage
    ports:
      - "3010:3000"
```

Prod:

```yaml
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
