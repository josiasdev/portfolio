# Plano: Importar Licenças e Certificados do LinkedIn para o Portfólio

> **Data de elaboração:** Setembro de 2026  
> **Status:** Planejamento

---

## ⚠️ Contexto Crítico: O que a API gratuita do LinkedIn realmente oferece

Antes de qualquer coisa, é importante ser direto sobre as limitações reais da API oficial do LinkedIn em 2026:

| Recurso | Tier Gratuito (self-service) | Partner/Aprovado |
|---|---|---|
| Login com LinkedIn (nome, foto, headline) | ✅ Disponível | ✅ |
| Email do membro autenticado | ✅ Disponível | ✅ |
| Postar no feed | ✅ Disponível | ✅ |
| **Certificações / Licenças** | ❌ Bloqueado | ✅ Somente parceiros aprovados |
| Experiência profissional | ❌ Bloqueado | ✅ Somente parceiros aprovados |
| Educação | ❌ Bloqueado | ✅ Somente parceiros aprovados |

**Conclusão:** O endpoint de certificações (`GET /v2/people/id={id}/certifications`) existe na documentação, mas seu uso é **restrito a desenvolvedores aprovados pelo LinkedIn**, não disponível no tier gratuito self-service. Isso foi confirmado em issues públicas do Stack Overflow e na própria documentação da Microsoft/LinkedIn.

Fontes:
- [Getting Access to LinkedIn APIs](https://learn.microsoft.com/en-us/linkedin/shared/authentication/getting-access) — lista oficial de permissões abertas e fechadas
- [Profile Edit API - Certifications](https://learn.microsoft.com/en-us/linkedin/shared/integrations/people/profile-edit-api/certifications) — documenta o endpoint, mas com nota "restricted to approved developers"
- [Stack Overflow: Not enough permissions to access certifications](https://stackoverflow.com/questions/76519331/linkedin-api-not-enough-permissions-to-access-post-people-id-id-certificat)
- [LinkedIn API Pricing Guide 2026 - Blotato](https://www.blotato.com/blog/linkedin-api-pricing)

---

## Abordagens Viáveis (da mais recomendada para a menos)

### ✅ Abordagem 1 — Exportação de Dados do LinkedIn + Parsing automático (RECOMENDADA)

Esta é a abordagem mais limpa, sem depender de aprovação externa, sem custo, e 100% dentro dos Termos de Uso do LinkedIn.

**Como funciona:**
1. Você exporta seus dados do LinkedIn (Settings → Data Privacy → Get a copy of your data)
2. O LinkedIn entrega um arquivo ZIP com um CSV `Certifications.csv` (se você tiver certificações cadastradas)
3. Um script de build converte esse CSV em um JSON estático que o portfólio consome
4. Você re-executa esse processo manualmente quando atualizar o LinkedIn (ou automatiza com GitHub Actions)

**Formato do arquivo exportado:**

O LinkedIn fornece um arquivo `Certifications.csv` dentro do ZIP com as colunas:
```
Name, Url, Authority, Started On, Finished On, License Number, Associated With
```

**Fontes:**
- [LinkedIn: Download your account data](https://www.linkedin.com/help/linkedin/answer/50191) — inclui nota: "if you don't have certifications listed, you won't receive a Certifications file"
- [LinkedIn: Export larger data archive](https://www.linkedin.com/help/linkedin/answer/a570340)

---

#### Implementação da Abordagem 1

**Passo 1 — Exportar os dados do LinkedIn**

```
Settings & Privacy → Data Privacy → Get a copy of your data
→ Selecionar "Certifications" (ou full archive)
→ Aguardar email (pode levar até 24–72h)
→ Baixar o ZIP e extrair Certifications.csv
```

**Passo 2 — Script de conversão (Node.js / Bun)**

Criar `scripts/parse-linkedin-certifications.ts`:

```typescript
import { readFileSync, writeFileSync } from "fs";
import { parse } from "csv-parse/sync";

interface LinkedInCertification {
  name: string;
  url: string;
  authority: string;
  startedOn: string;
  finishedOn: string;
  licenseNumber: string;
  associatedWith: string;
}

const raw = readFileSync("./scripts/Certifications.csv", "utf-8");

const records = parse(raw, {
  columns: true,
  skip_empty_lines: true,
  trim: true,
}) as Record<string, string>[];

const certifications: LinkedInCertification[] = records.map((row) => ({
  name: row["Name"] ?? "",
  url: row["Url"] ?? "",
  authority: row["Authority"] ?? "",
  startedOn: row["Started On"] ?? "",
  finishedOn: row["Finished On"] ?? "",
  licenseNumber: row["License Number"] ?? "",
  associatedWith: row["Associated With"] ?? "",
}));

writeFileSync(
  "./src/data/certifications.json",
  JSON.stringify(certifications, null, 2),
  "utf-8"
);

console.log(`✅ ${certifications.length} certificações exportadas.`);
```

**Passo 3 — Consumir o JSON no componente Certifications.tsx**

```typescript
import certifications from "@/data/certifications.json";

// certifications é um array tipado, basta mapear
```

**Passo 4 (opcional) — GitHub Actions para lembrar de atualizar**

Criar `.github/workflows/certifications-reminder.yml`:

```yaml
name: Certifications Update Reminder

on:
  schedule:
    - cron: "0 9 1 * *" # Todo dia 1° do mês às 9h

jobs:
  remind:
    runs-on: ubuntu-latest
    steps:
      - name: Create reminder issue
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: "🔔 Lembrete: atualizar certificações do LinkedIn",
              body: "Verifique se há novas certificações no LinkedIn e re-exporte o Certifications.csv.",
              labels: ["maintenance"]
            })
```

---

### ✅ Abordagem 2 — Ferramenta "LinkedIn to JSON Resume" (browser bookmarklet)

Uma extensão/bookmarklet open source que lê sua página de perfil do LinkedIn e extrai todos os dados (incluindo certificações) para o formato [JSON Resume](https://jsonresume.org/).

**Como funciona:**
1. Acesse sua página de perfil no LinkedIn
2. Execute o bookmarklet: ele extrai os dados diretamente do DOM da página
3. Copie o JSON gerado e salve como `src/data/certifications.json`

**Repositório:** [joshuatz/linkedin-to-jsonresume](https://github.com/joshuatz/linkedin-to-jsonresume)

**Observação:** A extensão Chrome está temporariamente quebrada (issue com Manifest V3). O bookmarklet ainda funciona. Veja [Issue #81](https://github.com/joshuatz/linkedin-to-jsonresume/issues/81).

O JSON Resume inclui a seção `certificates`:

```json
{
  "certificates": [
    {
      "name": "AWS Solutions Architect",
      "issuer": "Amazon Web Services",
      "date": "2024-01",
      "url": "https://..."
    }
  ]
}
```

---

### ⚠️ Abordagem 3 — API OAuth + Login com LinkedIn (parcialmente viável)

Usando o **"Sign in with LinkedIn using OpenID Connect"** (única permissão gratuita), dá para obter nome, foto e headline do usuário autenticado. **Não retorna certificações**, mas pode ser útil para sincronizar outros dados básicos do perfil automaticamente.

**Fluxo OAuth 3-legged:**

```
1. Criar app em https://developer.linkedin.com/
2. Adicionar produto "Sign in with LinkedIn using OpenID Connect"
3. Permissões disponíveis: profile, email
4. Redirect URI → seu domínio ou localhost
5. Trocar authorization code por access token
6. Chamar GET https://api.linkedin.com/v2/me
```

**O que retorna gratuitamente:**
```json
{
  "localizedFirstName": "Josias",
  "localizedLastName": "Batista",
  "localizedHeadline": "...",
  "profilePicture": { ... },
  "vanityName": "josias-batista"
}
```

Certificações **não estão incluídas** nesse payload.

**Fontes:**
- [LinkedIn OAuth Authorization Code Flow](https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow)
- [Profile API - r_liteprofile / r_basicprofile](https://learn.microsoft.com/en-us/linkedin/shared/integrations/people/profile-api)
- [Authenticating with OAuth 2.0](https://learn.microsoft.com/en-us/linkedin/shared/authentication/authentication)

---

### ❌ Abordagem 4 — Scraping / APIs de terceiros (NÃO RECOMENDADA)

Existem APIs de terceiros (Apify, ScrapIn, Bright Data, etc.) que extraem dados do LinkedIn via scraping. **Não recomendado** pelos seguintes motivos:

1. Viola os [Termos de Uso do LinkedIn](https://www.linkedin.com/legal/user-agreement)
2. A Proxycurl, maior referência desse mercado, foi processada e encerrou em julho de 2025
3. Risco de banimento da conta
4. Custo: todas as APIs sérias são pagas

---

## Plano de Implementação Recomendado (Abordagem 1)

```
Semana 1
├── [ ] Exportar dados do LinkedIn (Settings → Data Privacy → Get a copy)
├── [ ] Aguardar o ZIP chegar por email (até 72h)
└── [ ] Extrair Certifications.csv do arquivo

Semana 1-2
├── [ ] Instalar dependência: bun add csv-parse
├── [ ] Criar scripts/parse-linkedin-certifications.ts
├── [ ] Criar src/data/certifications.json (gerado pelo script)
└── [ ] Atualizar componente Certifications.tsx para consumir o JSON

Semana 2
├── [ ] Adicionar script npm/bun para re-gerar o JSON
│       "certifications": "bun run scripts/parse-linkedin-certifications.ts"
└── [ ] (Opcional) Configurar GitHub Actions para lembrete mensal
```

---

## Estrutura de Arquivos Proposta

```
portfolio/
├── scripts/
│   ├── Certifications.csv          ← exportado do LinkedIn (gitignore opcional)
│   └── parse-linkedin-certifications.ts
├── src/
│   └── data/
│       └── certifications.json     ← gerado pelo script, commitado no repo
└── .github/
    └── workflows/
        └── certifications-reminder.yml  ← lembrete mensal (opcional)
```

---

## Resumo

| Abordagem | Gratuito | Automatizável | Risco | Complexidade |
|---|---|---|---|---|
| 1. Export CSV + Script | ✅ | Semi (manual export + script) | Nenhum | Baixa |
| 2. Bookmarklet JSON Resume | ✅ | Manual | Nenhum | Baixa |
| 3. OAuth API (sem certificações) | ✅ | Sim | Nenhum | Média |
| 4. Scraping / APIs terceiros | 💰 Pago | Sim | Alto | Alta |

**A Abordagem 1 é a melhor opção**: gratuita, dentro dos termos do LinkedIn, e a única que entrega as certificações de forma confiável sem aprovação de parceiro.

---

## Referências e Documentação

| Recurso | URL |
|---|---|
| LinkedIn API: Getting Access | https://learn.microsoft.com/en-us/linkedin/shared/authentication/getting-access |
| Profile API (campos disponíveis) | https://learn.microsoft.com/en-us/linkedin/shared/integrations/people/profile-api |
| Certifications Endpoint (partner-only) | https://learn.microsoft.com/en-us/linkedin/shared/integrations/people/profile-edit-api/certifications |
| OAuth 2.0 Authorization Code Flow | https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow |
| LinkedIn: Exportar seus dados | https://www.linkedin.com/help/linkedin/answer/50191 |
| linkedin-to-jsonresume (bookmarklet) | https://github.com/joshuatz/linkedin-to-jsonresume |
| JSON Resume Schema | https://jsonresume.org/schema/ |
| csv-parse (npm) | https://csv.js.org/parse/ |
