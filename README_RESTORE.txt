# README_RESTORE.txt

Instruções para restaurar a cópia gerada (git bundle):

1) Verificar hash SHA256 do arquivo bundle:
   sha256sum gaia-borda.bundle

2) Clonar a partir do bundle:
   git clone gaia-borda.bundle -b main gaia-borda-restored

3) Alternativa: importar o bundle em um repositório existente:
   git init repo
   git remote add origin <url>
   git fetch ../gaia-borda.bundle

(As instruções podem variar; ajustar conforme necessidade.)
