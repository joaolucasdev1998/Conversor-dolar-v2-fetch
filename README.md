# Conversor Dólar V2 - Fetch API

## Evolução do V1
V1: usava cotação fixa de R$ 5.00 no código.  
V2: busca cotação real via `fetch` na AwesomeAPI.

## Tech usadas
- HTML5 + CSS3 + JavaScript puro
- `fetch()` para requisições HTTP
- `async/await` para código assíncrono
- `try/catch/finally` para tratamento de erros

## Como funciona
1. Usuário digita valor em USD
2. `fetch` busca cotação atual na API
3. Mostra valor convertido em BRL
4. Se API cair, mostra erro sem quebrar a página

## Rodar local
Só abrir o `index.html` no navegador.

## Link V1 para comparação
[Conversor V1 - Cotação Fixa]( https://github.com/joaolucasdev1998/Conversor-dolar-v2-fetch )
