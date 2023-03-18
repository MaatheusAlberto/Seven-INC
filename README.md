### Clonar e instalar repositorios backend e frontend.

 1º git clone https://github.com/MaatheusAlberto/Seven-INC.git

 2º Para instalar o frontend digite: `yarn install`

 3º Para instalar o backend digite: `npm install`

 4º Ter instalado o Banco de dados MongoDB e a ferramenta MongoDB Compass instalado

 5º Criar databases "seven-inc" collection "funcionarios


### Iniciar os ambientes

1º backend `npm run dev`, caso não conect com banco de dados deve-se verificar se o moongose.connect esta correto de acordo com o localhost e a porta do seu banco de dados:
  mongoose.connect('mongodb://127.0.0.1:27017/seven-inc?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')

2º frontent `yarn start` [http://localhost:3000]

### Testar backend no postman ou outras ferramentas

- listar funcionarios
  Get: http://localhost:8080/api/employee/

- listar funcionario por id
  Get: http://localhost:8080/api/employee/:id

- Cadastrar funcionario
  POST: http://localhost:8080/api/employee

  JSON exemplo:{
        "name": "teste de hoje",
        "document": "88888877777",
        "email": "teste@testandoo.com",
        "phone": "1199998877",
        "birth_date":"28/12/1990",
        "salary": 1800,
        "created_at":"28/12/2023"
      }

- Atualizar dados do funcionario
  PUT: http://localhost:8080/api/employee/:id

  JSON exemplo:{
      "name": "teste de hoje",
      "document": "88888877777",
      "email": "teste@testandoo.com",
      "phone": "1199998877",
      "birth_date":"28/12/1990",
      "salary": 1800,
      "created_at":"28/12/2023"
    }

- Excluir funcionario
  DELETE: http://localhost:8080/api/employee/:id
