# Chat Group Api Rest

Am Simple chat created using NodeJs and socket.io.

## To-do

- [x] Criação de usuário:

  - [x] Email, Name, Password.
  - [x] O usuário não pode criar outro usuário com o mesmo email.

- [x] Login de usuário usando o email e senha.

  - [x] Gerar token de autenticação.

- [ ] Edição de usuário:

  - [ ] O usuário pode adicionar uma foto de perfil.
  - [ ] O usuário pode editar o nome.

- [x] Busca de usuários:

  - [x] Buscar por nome.
  - [x] Buscar todos os usuários.

- [x] Criação de Sala de chat:

  - [x] O usuário pode criar uma sala com name, description.
  - [ ] O usuário pode convidar outros para sala.
  - [x] O apenas usuários que fez o login podem acessar uma sala.

- [x] Envio de mensagens:

  - [ ] Apenas usuários autenticados podem enviar mensagens.
  - [ ] A mensagem deve conter content, name, photo,timestamp.
