Criar arquivo:

```
.github/workflows/deploy.yml
```

---

## Exemplo

```yaml
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
