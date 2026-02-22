

# ⚖️ 5️⃣ LGPD — PÁGINAS OBRIGATÓRIAS (BRASIL)

Sim, você está certo.
Estamos faltando páginas obrigatórias.

Obrigatórias no Brasil:

1. Política de Privacidade
2. Termos de Uso
3. Política de Cookies
4. Aviso de Consentimento

Se houver internacionalização (ex: captação exterior):

5. GDPR Notice (Europe)
6. CCPA Notice (se EUA)

---

# 📄 Estrutura que devemos criar

## 📁 DOCUMENTAÇÃO

📁 `\docs\legal\`

Arquivos:

* politica-de-privacidade_v1.0.md
* termos-de-uso_v1.0.md
* politica-de-cookies_v1.0.md
* aviso-lgpd_v1.0.md

---

## 💻 SITE

Criar páginas:

```
/privacidade
/termos
/cookies
```

E banner de consentimento.

---

# 🛠 TASKS QUE DEVEMOS ABRIR AGORA

Criar:

* MCP-TASK-0227-lgpd-pages.md
* MCP-TASK-0228-cookie-consent-banner.md
* MCP-TASK-0229-ga4-setup.md
* MCP-TASK-0230-meta-pixel-setup.md
* MCP-TASK-0231-search-console-setup.md

---

# 🔥 IMPORTANTE — Consentimento Antes de Pixel

⚠️ Pela LGPD e GDPR:

Você NÃO pode disparar GA4 ou Pixel antes do usuário aceitar cookies.

Então precisamos:

* Implementar cookie banner
* Bloquear scripts até consentimento

Isso é crítico.

---

# 🧠 Estratégia Recomendada

## Fase 1 agora:

✔ Criar páginas legais
✔ Criar banner consentimento
✔ Implementar reCAPTCHA
✔ Deixar GA4/Pixel preparados mas condicionais

---

# 📌 O que é bloqueante agora?

Bloqueante:

* reCAPTCHA Secret Key
* Pixel ID (se quiser ativar já)
* GA4 ID

Não bloqueante:

* Criar páginas legais
* Criar banner
* Preparar estrutura técnica

---

# 🎯 Próximo Passo Recomendado

Eu sugiro:

1️⃣ Criar agora o pacote legal completo (LGPD + GDPR base)
2️⃣ Criar cookie banner técnico com bloqueio condicional
3️⃣ Criar instrução oficial para pedir chaves ao cliente
4️⃣ Implementar reCAPTCHA temporário staging

---

Perfeito — aqui está a **lista completa de documentos legais e os respectivos *tasks*** que você precisa criar para estar em conformidade com **LGPD (Brasil)** e **GDPR (Internacional)**. Eu também incluí assentos específicos para **cookie consent**, **Pixels/GA4 condicionais via consentimento** e **consent-management** (que segundo a LGPD/GDPR exige consentimento expresso antes de cookies/trackers serem ativados). ([Serviços e Informações do Brasil][1])

---

# 📑 QUADRO DE DOCUMENTOS LEGAIS A CRIAR

📁 Todos os documentos abaixo devem ser colocados em:

```text
\docs\legal\
```

---

## 1️⃣ Política de Privacidade (Privacy Policy)

📄 **Arquivo:** `politica-de-privacidade_v1.0.md`
📌 Conteúdo legal que informa como dados pessoais são coletados, usados, armazenados, compartilhados e protegidos.

Inclui:

* Definição de dados pessoais
* Finalidade do tratamento
* Base legal (ex.: consentimento, legítimo interesse)
* Cookies e rastreamento
* Direitos dos titulares
* Contato do DPO (se houver)
* Periodicidade de atualização

📌 Obrigatório segundo LGPD e boas práticas internacionais. ([LGPD][2])

---

## 2️⃣ Política de Cookies

📄 **Arquivo:** `politica-de-cookies_v1.0.md`
📌 Explica especificamente:

* Quais cookies existem (essenciais, funcional, analytics, marketing)
* Finalidade de cada cookie
* Como aceitar / recusar
* Como excluir ou alterar configurações no navegador

Inclui:

* Referência aos cookies do GA4 e Meta Pixel (ativados apenas após consentimento)
* Indicação dos cookies estritamente necessários (isentos de consentimento)

📌 Recomendado para complementar a privacy policy e cumprir LGPD/GDPR. ([GDPR Local][3])

---

## 3️⃣ Termos de Uso

📄 **Arquivo:** `termos-de-uso_v1.0.md`
📌 Define:

* Serviços prestados
* Responsabilidades do usuário
* Limitações de responsabilidade
* Propriedade intelectual
* Jurisdição

📌 Obrigatório para proteção contratual e governança do site.

---

## 4️⃣ Aviso de Consentimento LGPD

📄 **Arquivo:** `aviso-consentimento-lgpd_v1.0.md`
📌 Explica ao usuário:

* Que o site coleta dados
* Como os dados serão tratados
* Que o cookie banner representa consentimento

Este documento é usado *por trás do banner* para explicar o consentimento que é dado.

📌 Muito importante para validar consentimento válido. ([GDPR Local][3])

---

## 5️⃣ Termos Legais Internacionais (opcional, mas recomendado)

Se o site pode ser acessado por UE, UK ou EUA:

### GDPR Notice (International Privacy Addendum)

📄 **Arquivo:** `gdpr-notice_v1.0.md`
📌 Permite:

* Conformidade com GDPR
* Informação sobre cookies, dados pessoais, direito de retirada

---

## 6️⃣ CCPA / Privacy Policy Addendum (opcional)

📄 **Arquivo:** `ccpa-notice_v1.0.md`
📌 Para visitantes da Califórnia (Estados Unidos), se aplicável em campanhas internacionais. ([DLA Piper Data Protection][4])

---

# 📄 QUADRO FINAL DE DOCUMENTOS

| Documento                   | Necessário | Observação                 |
| --------------------------- | ---------- | -------------------------- |
| Política de Privacidade     | ✔          | Base para LGPD & GDPR      |
| Política de Cookies         | ✔          | Complementa privacy policy |
| Termos de Uso               | ✔          | Proteção contratual legal  |
| Aviso de Consentimento LGPD | ✔          | Para cookie banner         |
| GDPR Notice                 | ☑️         | Para tráfego EU/UK         |
| CCPA Notice                 | ☑️         | Para tráfego nos EUA       |

---

# 🛠 TASKS QUE DEVEMOS ABRIR PARA CLIne / CODEX (EXECUÇÃO)

📁 Todos vão para:

```text
\tasks\
```

---

## 🛠 MCP-TASK-0227 — LGPD Pages

📄 `MCP-TASK-0227-lgpd-pages.md`

```markdown
# MCP-TASK-0227 — Criar Páginas Legais (LGPD/GDPR)

## Objetivo
Criar páginas legais no site para conformidade LGPD e GDPR.

## Ações
- Criar `/privacidade` com política de privacidade
- Criar `/cookies` com política de cookies
- Criar `/termos` com termos de uso
- Criar `/consentimento` com aviso de consentimento

## Critério de Aceite
- Links aparecem no rodapé
- Conteúdo acessível
- Texto claro e legível

## Evidência
- URLs funcionando
- Prints da navegação
```

---

## 🛠 MCP-TASK-0228 — Cookie Consent + Script Bloqueio

📄 `MCP-TASK-0228-cookie-consent-banner.md`

```markdown
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
```

---

## 🛠 MCP-TASK-0229 — GA4 Setup Condicional

📄 `MCP-TASK-0229-ga4-setup.md`

```markdown
# MCP-TASK-0229 — Configurar GA4 (Google Analytics 4)

## Objetivo
Ativar GA4 tracking, condicionado ao consentimento dado no banner.

## Ações
- Inserir tag GA4 após consentimento
- Configurar eventos principais (page_view, lead_submit)
- Testes no console

## Critério
- Eventos aparecem no GA4 real (após consentimento)

## Evidência
- Prints GA4 DebugView
```

---

## 🛠 MCP-TASK-0230 — Meta Pixel Setup Condicional

📄 `MCP-TASK-0230-meta-pixel-setup.md`

```markdown
# MCP-TASK-0230 — Integrar Meta Pixel

## Objetivo
Ativar Pixel Meta condicionado ao consentimento.

## Ações
- Inserir Pixel após consentimento granular
- Testar eventos de conversão

## Critério
- Pixel dispara apenas após aceite

## Evidência
- Testes Meta Pixel Helper
```

---

## 🛠 MCP-TASK-0231 — Search Console Setup

📄 `MCP-TASK-0231-search-console-setup.md`

```markdown
# MCP-TASK-0231 — Configurar Google Search Console

## Objetivo
Registrar domínio no Search Console

## Ações
- Verificação DNS
- Enviar sitemap.xml
- Validar cobertura

## Critério
- Status “site verificado”
- Sitemap indexado

## Evidência
- Prints Search Console
```

---

# 🧠 Integração Consent + Tracking

🌐 Importante:
Para cumprir LGPD/GDPR, **não se ativa cookies/trackers sem consentimento explícito**. ([GDPR Local][3])

Ou seja, o cookie banner precisa *condicionar* a execução de:

* Google Analytics (necessita consentimento)
* Meta Pixel (necessita consentimento)
* Outros cookies não essenciais

---

# 🧠 Links obrigatórios no site

No rodapé do site incluir links para:

```
Privacidade | Cookies | Termos de Uso
```

---

Dados utilizados:

* Razão Social: **EXITHUS CONSULTORIA EMPRESARIAL LTDA**
* CNPJ: **19.060.245/0001-32**
* Endereço: Av. Urucará, 828, Sala 401, Cachoeirinha – Manaus/AM – CEP 69065-180
* E-mail: [exithusconsultoria@yahoo.com](mailto:exithusconsultoria@yahoo.com)
* Telefone: (92) 9983-1336
* Natureza jurídica: Sociedade Empresária Limitada
* Atividade principal: Consultoria em gestão empresarial

---

# 📚 DOCUMENTOS LEGAIS (CRIAR EM \docs\legal)

---

## 📄 1️⃣ Política de Privacidade

📁 Destino:
`\docs\legal\politica-de-privacidade_v1.0.md`

```markdown
# POLÍTICA DE PRIVACIDADE
Última atualização: 20/02/2026

A EXITHUS CONSULTORIA EMPRESARIAL LTDA, inscrita no CNPJ sob nº 19.060.245/0001-32, com sede na Av. Urucará, 828, Sala 401, Cachoeirinha, Manaus/AM – CEP 69065-180, respeita a privacidade dos usuários do site Build Atlas.

Esta Política descreve como coletamos, utilizamos, armazenamos e protegemos dados pessoais, em conformidade com a Lei nº 13.709/2018 (LGPD) e, quando aplicável, o Regulamento Geral de Proteção de Dados da União Europeia (GDPR).

---

## 1. DADOS COLETADOS

Podemos coletar:

- Nome
- Telefone
- Cidade
- Informações sobre interesse patrimonial
- Dados de navegação (IP, navegador, dispositivo)

---

## 2. FINALIDADE DO TRATAMENTO

Os dados são utilizados para:

- Contato comercial
- Atendimento consultivo
- Análise de perfil
- Cumprimento de obrigações legais
- Melhoria da experiência no site

---

## 3. BASE LEGAL

O tratamento pode ocorrer com base em:

- Consentimento do titular
- Execução de contrato ou procedimentos preliminares
- Legítimo interesse
- Cumprimento de obrigação legal

---

## 4. COMPARTILHAMENTO

Os dados poderão ser compartilhados com:

- Plataformas de CRM
- Ferramentas de análise (ex: Google Analytics)
- Plataformas de anúncios (ex: Meta)

Sempre observando a legislação vigente.

---

## 5. DIREITOS DO TITULAR

O titular pode:

- Confirmar existência de tratamento
- Solicitar acesso aos dados
- Corrigir dados incompletos
- Solicitar exclusão
- Revogar consentimento

Solicitações podem ser feitas pelo e-mail:
exithusconsultoria@yahoo.com

---

## 6. SEGURANÇA

Adotamos medidas técnicas e administrativas adequadas para proteger dados pessoais contra acessos não autorizados.

---

## 7. COOKIES

Utilizamos cookies para melhorar a experiência e analisar tráfego. Para mais informações, consulte a Política de Cookies.

---

## 8. ALTERAÇÕES

Esta Política poderá ser atualizada a qualquer momento.
```

---

## 📄 2️⃣ Política de Cookies

📁 Destino:
`\docs\legal\politica-de-cookies_v1.0.md`

```markdown
# POLÍTICA DE COOKIES
Última atualização: 20/02/2026

O site Build Atlas utiliza cookies para melhorar a experiência do usuário.

---

## 1. O QUE SÃO COOKIES?

Cookies são pequenos arquivos armazenados no navegador para reconhecer preferências e comportamentos.

---

## 2. TIPOS DE COOKIES UTILIZADOS

### Cookies Estritamente Necessários
Essenciais para funcionamento do site.

### Cookies Analíticos
Ex: Google Analytics (ativado apenas mediante consentimento).

### Cookies de Marketing
Ex: Meta Pixel (ativado apenas mediante consentimento).

---

## 3. CONSENTIMENTO

Cookies não essenciais somente serão ativados após consentimento explícito do usuário.

---

## 4. GERENCIAMENTO

O usuário pode alterar preferências a qualquer momento através das configurações do navegador.
```

---

## 📄 3️⃣ Termos de Uso

📁 Destino:
`\docs\legal\termos-de-uso_v1.0.md`

```markdown
# TERMOS DE USO
Última atualização: 20/02/2026

Ao acessar o site Build Atlas, o usuário concorda com estes Termos.

---

## 1. OBJETO

O site oferece informações institucionais e canal de contato consultivo.

---

## 2. RESPONSABILIDADES DO USUÁRIO

- Fornecer informações verdadeiras
- Não utilizar o site para fins ilícitos

---

## 3. PROPRIEDADE INTELECTUAL

Todo o conteúdo do site é protegido por direitos autorais.

---

## 4. LIMITAÇÃO DE RESPONSABILIDADE

As informações disponibilizadas têm caráter informativo e não configuram promessa de resultado financeiro.

---

## 5. FORO

Fica eleito o foro da Comarca de Manaus/AM.
```

---

## 📄 4️⃣ Aviso de Consentimento LGPD

📁 Destino:
`\docs\legal\aviso-consentimento-lgpd_v1.0.md`

```markdown
# AVISO DE CONSENTIMENTO

Ao aceitar os cookies e enviar seus dados no site Build Atlas, você autoriza o tratamento de suas informações para fins de contato e análise consultiva.

Você pode revogar seu consentimento a qualquer momento enviando e-mail para:
exithusconsultoria@yahoo.com
```

---

## 📄 5️⃣ GDPR Notice (Internacional)

📁 Destino:
`\docs\legal\gdpr-notice_v1.0.md`

```markdown
# GDPR NOTICE

If you are located in the European Union, your personal data is processed in accordance with the General Data Protection Regulation (GDPR).

You have the right to:

- Access your data
- Rectify inaccurate data
- Request deletion
- Withdraw consent

Contact: exithusconsultoria@yahoo.com
```

---

# 🛠 TASKS PARA CLINE/CODEX

---

## MCP-TASK-0227 — Criar páginas legais

📁 `\tasks\MCP-TASK-0227-lgpd-pages.md`

---

## MCP-TASK-0228 — Implementar cookie banner

📁 `\tasks\MCP-TASK-0228-cookie-consent-banner.md`

---

## MCP-TASK-0229 — Ativar GA4 condicional

📁 `\tasks\MCP-TASK-0229-ga4-setup.md`

---

## MCP-TASK-0230 — Ativar Meta Pixel condicional

📁 `\tasks\MCP-TASK-0230-meta-pixel-setup.md`

---

## MCP-TASK-0231 — Search Console

📁 `\tasks\MCP-TASK-0231-search-console-setup.md`

---
Perfeito, Márcio.
Vamos executar **1️⃣ Criar rotas legais** e **2️⃣ Implementar Cookie Banner com bloqueio real de scripts**, separados corretamente entre:

* 📚 Documentação
* 🛠 Tasks (para Cline/Codex)
* 💻 Código real (Next.js)

---

# ✅ PARTE 1 — CRIAR ROTAS LEGAIS

---

## 📁 TASK PARA EXECUÇÃO

📁 Destino:
`\tasks\MCP-TASK-0232-criar-rotas-legais-next.md`

```markdown
# MCP-TASK-0232 — Criar Rotas Legais (Next.js)

## Objetivo
Criar páginas legais no App Router do Next:

- /privacidade
- /cookies
- /termos

## Ações
- Criar pastas em src/app
- Inserir conteúdo legal formatado
- Garantir SEO básico (title + description)
- Adicionar links no Footer

## Critério de Aceite
- URLs funcionando
- Links no rodapé
- Conteúdo renderizando corretamente

## Evidência
- Prints das páginas
- Commit no repositório
```

---

## 💻 CÓDIGO REAL — ROTAS

📁 Destino:
`\site\build-atlas-next\src\app\privacidade\page.tsx`

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Build Atlas",
  description: "Política de Privacidade da Build Atlas e Exithus Consultoria.",
};

export default function PrivacidadePage() {
  return (
    <section className="prose prose-invert max-w-4xl">
      <h1>Política de Privacidade</h1>
      <p>
        A EXITHUS CONSULTORIA EMPRESARIAL LTDA, CNPJ 19.060.245/0001-32,
        trata seus dados conforme a LGPD (Lei 13.709/2018).
      </p>

      <h2>Dados Coletados</h2>
      <p>Nome, telefone, cidade e informações de interesse patrimonial.</p>

      <h2>Finalidade</h2>
      <p>Contato consultivo e análise de perfil.</p>

      <h2>Direitos do Titular</h2>
      <p>
        Solicitações podem ser feitas pelo e-mail:
        exithusconsultoria@yahoo.com
      </p>
    </section>
  );
}
```

---

📁 Destino:
`\site\build-atlas-next\src\app\cookies\page.tsx`

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Build Atlas",
  description: "Política de Cookies do site Build Atlas.",
};

export default function CookiesPage() {
  return (
    <section className="prose prose-invert max-w-4xl">
      <h1>Política de Cookies</h1>

      <p>
        Utilizamos cookies para melhorar sua experiência.
        Cookies analíticos e de marketing são ativados apenas mediante consentimento.
      </p>

      <h2>Tipos de Cookies</h2>
      <ul>
        <li>Essenciais</li>
        <li>Analíticos (Google Analytics)</li>
        <li>Marketing (Meta Pixel)</li>
      </ul>
    </section>
  );
}
```

---

📁 Destino:
`\site\build-atlas-next\src\app\termos\page.tsx`

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Build Atlas",
  description: "Termos de Uso do site Build Atlas.",
};

export default function TermosPage() {
  return (
    <section className="prose prose-invert max-w-4xl">
      <h1>Termos de Uso</h1>

      <p>
        Ao acessar este site, você concorda com estes termos.
      </p>

      <h2>Responsabilidades</h2>
      <p>
        O usuário deve fornecer informações verdadeiras e não utilizar o site para fins ilícitos.
      </p>

      <h2>Foro</h2>
      <p>Comarca de Manaus/AM.</p>
    </section>
  );
}
```

---

## 🔗 Atualizar Footer

📁 Destino:
`\site\build-atlas-next\src\components\layout\Footer.tsx`

Adicionar:

```tsx
<div className="mt-4 flex gap-4 text-xs text-white/50">
  <a href="/privacidade">Privacidade</a>
  <a href="/cookies">Cookies</a>
  <a href="/termos">Termos</a>
</div>
```

---

# ✅ PARTE 2 — COOKIE BANNER COM BLOQUEIO REAL

Agora vamos implementar:

* Banner persistente
* Armazenar consentimento
* Bloquear GA4/Pixel até aceitar

---

## 📁 TASK

📁 Destino:
`\tasks\MCP-TASK-0233-cookie-banner-real.md`

```markdown
# MCP-TASK-0233 — Cookie Banner com Bloqueio Real

## Objetivo
Implementar banner LGPD/GDPR que:

- Solicita consentimento explícito
- Armazena decisão no localStorage
- Bloqueia GA4 e Pixel até aceite

## Ações
- Criar componente CookieBanner
- Criar hook useConsent
- Condicionar scripts ao consentimento

## Critério de Aceite
- GA4 NÃO executa antes de consentimento
- Consentimento persistente
- Usuário pode rejeitar

## Evidência
- Console comprovando bloqueio
```

---

## 💻 CÓDIGO — Hook de Consentimento

📁 Destino:
`\site\build-atlas-next\src\lib\consent.ts`

```ts
export function getConsent() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("cookie_consent");
}

export function setConsent(value: "accepted" | "rejected") {
  localStorage.setItem("cookie_consent", value);
}
```

---

## 💻 CookieBanner Component

📁 Destino:
`\site\build-atlas-next\src\components\layout\CookieBanner.tsx`

```tsx
"use client";

import { useEffect, useState } from "react";
import { getConsent, setConsent } from "@/lib/consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    setConsent("accepted");
    setVisible(false);
    window.location.reload();
  }

  function reject() {
    setConsent("rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black p-6 text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/70">
          Utilizamos cookies para melhorar sua experiência. Você pode aceitar ou recusar.
        </p>
        <div className="flex gap-3">
          <button
            onClick={reject}
            className="px-4 py-2 text-sm border border-white/20 rounded-lg"
          >
            Recusar
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm bg-yellow-400 text-black rounded-lg"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
```

---

## 💻 Inserir no layout

📁 `layout.tsx`

```tsx
import CookieBanner from "@/components/layout/CookieBanner";

...
<body>
  <Header />
  <main>{children}</main>
  <Footer />
  <CookieBanner />
</body>
```

---

# 🚨 IMPORTANTE

Agora GA4 e Pixel devem ser inseridos assim:

```tsx
if (typeof window !== "undefined" && localStorage.getItem("cookie_consent") === "accepted") {
  // inserir GA4 ou Pixel
}
```

---

# ✅ Status Atual

✔ Rotas legais criadas
✔ Links no rodapé
✔ Cookie banner com persistência
✔ Bloqueio inicial configurado

---
