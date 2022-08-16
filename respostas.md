Respostas - Lista 1

    1 -     Primeiro, para instalarmos o Framework Angular globalmente, digitamos no terminal (cmd) o seguinte: "npm install -g @angular/cli", após aguardar a instalação de forma global na máquinda, pode-se ver a versão do framework com "ng version". 
    Em seguida, devemos criar um novo projeto. Para isso, abrimos o terminal (cmd) diretamente numa pasta que será alocado o projeto ou pode-se ir/criar essa pasta pelo próprio terminal (cmd).
    Após estar no local determinado, digita-se "ng new" + o nome da pasta raiz do projeto (ex: ng new angularProject). Aguarda-se a formação dos conteúdos criados pelo framework. 
    Após a criação, deve-se entrar na pasta raiz pelo terminal (cmd) e para rodar o projeto utiliza-se "ng serve" para rodar o servidor e em seguida abrir o projeto ou, então, "ng serve --open/-o" para rodar o servidor e já abrir o projeto automaticamente.

    5 - Há diferenças entre o repositório local e o repositório remoto criado. Não tem no repositório remoto as pastas: vscode e modulos.
    E há arquivos no repositório remoto que não há no repositório local: .browserslistrc, .editorconfig, 
    .gitignore.

    Acredito que essas diferenças ocorrem para a garantia do melhor funcionamento do framework quando enviado para o repositório remoto e, também para evitar enviar multiplas pastas e arquivos como no "modulos".

    6 - O comando do Node instala as dependências é o "npm i" com o terminal (cmd) aberto na pasta raiz.  O npm rastreia os módulos instalados em um projeto com o arquivo package.json que reside em um diretório de projeto.