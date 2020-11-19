# Inicializador de chat do whatsapp

Inicializador de conversas no whatsapp, inserindo o DDD + número do telefone e selecionando o navegador.
Uma ferramenta bem util caso você precise iniciar várias conversas no whatsapp e não queira/precise adicionar os contatos em sua agenda.

Para executar o projeto, após clonar os repositórios são necessários os seguintes comandos.

```
npm install
npm start 
```

Para facilitar na hora de codar, o comando ```npm start``` pode ser substituido por ```electromon ./main.js```. Dessa forma, o programa atualizara e compilará sozinho a cada save.

# Interface

![Screenshot](interface.png)

A interface simples torna o seu uso muito intuitivo, basta selecionar o DDD (84 padrão), e o número do contato.
A mensagem é opcional.

Após esses passos, selecionar o navegador onde o whatsapp web está autenticado, no meu caso a consturuição dessa forma possibilitou que eu usasse o whatsapp pessoal no chrome, e o business no firefox, sem a necessidade de autenticar várias vezes no mesmo navegador quando precisasse mudar de um whats para outro.
