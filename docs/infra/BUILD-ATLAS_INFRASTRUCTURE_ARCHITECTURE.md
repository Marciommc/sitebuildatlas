# Arquitetura Oficial — Ambiente Build Atlas

## 🌐 Fluxo Público

```
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

```
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
