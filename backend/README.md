# Como rodar 

Entre na pasta backend no seu computador e execute 
### `npm i`
### `npm start`

# Documentação de rotas

Todos os inputs devem ser seguidos exatamente como exemplificado. Note que os outputs são aqueles esperados caso os dados de entrada sigam o padrão. Caso alguma variável no input seja trocada ou invaidada, uma mensagem de erro parecerá e irá explicar o que causou o erro.

### * validateSecret/

Para validação do segredo que o usuário vai entrar assim que tentar se cadastrar

#### `input:`
```javascript
{ "secret": <secret-key> }
```

#### `output:`
```javascript
{
"success": boolean
"message": String
}
```

### * register/

Para registro do usuário

#### `input:`
```javascript
{
	"username": <username>, 
	"email": <email>,
	"password": <password>,
	"secret": <secret-key>
}
```

#### `output:`
```javascript
{
 "success": boolean
 "message": String
 "id": String
}
```
### * login/

Para login do usuário

#### `input:`
```javascript
{
	"email": <email>,
	"password": <password>,
}
```

#### `output:`
```javascript
{
 "success": boolean
 "message": String
 "token": String
 "id': String
}
```

### * test/

Para teste do token, este dado so dve ser mostrado se o token for válido

#### `input:`
```javascript
{
	"x-access-token": <token>
}
```

#### `output:`
```javascript
{
 "success": boolean
 "message": id
}
```

# Estrutura das pastas

* src/

  * app/
  
    * controllers/
      
      >Controllers com suas funções, a parte realmente a ser implementada, o que o endpoint implementa, contendo e atualizações com mongo, aws e outros. Usar sempre classes
    
    * models/
      
      >Schema do mongo, cada vez que um novo esquema for criado, deve ser adicionado um arquivo com ele 
      
     * middlewares/
     
        >"Meio de campo" do servidor, não é necessário toda vez, mas se por exemplo, uma ação como autenticação com algum site ou coisas que necessitem parar o servidor para uma tarefa não relacionada ao endpoint em si, deve ser feita nesta pasta como um novo arquivo


  * index.js
    
      >Porta que o server vai rodar, não é necessário mudança
  
  * server.js
  
      >Requires pro express, mongo, routes e inicialização de alguma biblioteca (mongoose, cors, express, não necessária mudança constante). Inicialização como um todo
      
  * routes
      
      >Rotas e endpoints, contendo todos os controllers necessários importados
     
  ### Referencias uteis
  
  ##### Aws:
  
  >https://docs.aws.amazon.com/AmazonS3/latest/dev/Welcome.html
  >https://github.com/awsdocs/aws-doc-sdk-examples/tree/master/javascript/example_code/s3
  
  ##### Mongo:
  
  >https://mongoosejs.com/docs/guide.html
