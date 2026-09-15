# Gaia-Borda

Protótipo "GAIA" — Sistema Operacional Borda para assistência pessoal autoral.

Responsável: Antonio Alberto Lopes Elias

IMPORTANTE: Zenodo DOI será referenciado quando fornecido.

## Preview (GitHub Pages)
O demo será publicado em: https://dralbertoeliasBr.github.io/gaia-borda/

## Objetivo
Prototipar um orquestrador leve (bolinha overlay) com três motores modulares: linguagem/voz, visão e matemática, além de um motor legacy que guarda histórico e actua como backup.

## Conteúdo do repositório
- BOLINHA.html — protótipo conceitual (overlay, ASR/TTS, stub visão)
- gaia_bolinha.user.js — userscript para injeção
- book/ — estrutura do livro e capítulos
- CONFIG/schema.json — heurísticas
- docs, MANIFESTO.md, CREDITS.md, OPINION.md

## Privacidade
Por padrão, tudo roda localmente. Módulos pesados (WASM) são opt-in e baixados com confirmação do usuário. Ações sensíveis requerem dupla autorização.

## Como testar (Android/Chrome)
1. Abra o URL do GitHub Pages no Chrome Android.
2. Permita microfone e câmera (quando solicitado).
3. Toque na bolinha para abrir o painel e teste falar (ASR) e TTS.

