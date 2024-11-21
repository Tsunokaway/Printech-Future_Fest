
//CRUD mongodb

let fs = require("fs");
const {
  MongoClient,
  ObjectId
} = require("mongodb");
const express = require("express");
const app = express();
const port = 3092;
const session = require('express-session');
const bcrypt = require('bcrypt');


const methodOverride = require("method-override");
const res = require("express/lib/response");
const {
  default: req
} = require("express/lib/request");

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(methodOverride("_method"));

const url = "mongodb://127.0.0.1:27017";
const dbName = "sistema3DPrinting";
const colecao_pedidos = "pedidos";
const colecao_avaliacoes = "avaliacoes";
const colecao_usuarios = "usuarios";

const {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory
} = require('@google/generative-ai');

const MODEL_NAME = 'gemini-1.0-pro';

const API_KEY = 'AIzaSyD1iLvwcd67DavBBunrZp2oB5sEW6wBoqw';




const GENERATION_CONFIG = {
  temperature: 0.1,
  topK: 1,
  topP: 1,
  maxOutputTokens: 2048,
};


const SAFETY_SETTINGS = [{
  category: HarmCategory.HARM_CATEGORY_HARASSMENT,
  threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
},
{
  category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
  threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
},
{
  category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
  threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
},
{
  category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
  threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
},
];


app.listen(port, async () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});



// IMAGENS
app.get('/imagem_wave.webp', (req, res) => {
  res.sendFile(__dirname + "/img/waves_home.webp");

});

app.get('/fundoTrans', (req, res) => {
  res.sendFile(__dirname + "/img/fundoTrans.svg");

});


app.get('/ondaHome', (req, res) => {
  res.sendFile(__dirname + "/img/ondasHome.svg");

});

app.get('/ondaHome2', (req, res) => {
  res.sendFile(__dirname + "/img/ondasHome2.svg");

});

app.get('/ondaHome3', (req, res) => {
  res.sendFile(__dirname + "/img/ondasHome3.svg");

});

app.get('/ondaSobrenos', (req, res) => {
  res.sendFile(__dirname + "/img/ondaSobrenos.svg");

});


app.get('/transparente', (req, res) => {
  res.sendFile(__dirname + "/img/Rectangle.svg");

});


app.get('/localizacao', (req, res) => {
  res.sendFile(__dirname + "/img/localizacao.svg");

});


app.get('/bolas1', (req, res) => {
  res.sendFile(__dirname + "/img/bolas1.svg");

});

app.get('/bolas2', (req, res) => {
  res.sendFile(__dirname + "/img/bolas2.svg");

});

app.get('/bolas3', (req, res) => {
  res.sendFile(__dirname + "/img/bolas3.svg");

});

app.get('/bolas4', (req, res) => {
  res.sendFile(__dirname + "/img/bolas4.svg");

});

app.get('/bolas5', (req, res) => {
  res.sendFile(__dirname + "/img/bolas5.svg");

});

app.get('/b-corp', (req, res) => {
  res.sendFile(__dirname + "/img/b-corp.svg");

});

app.get('/perna_robotica', (req, res) => {
  res.sendFile(__dirname + "/img/perna_robotica.svg");

});

app.get('/corda', (req, res) => {
  res.sendFile(__dirname + "/img/corda-sobre-nos-matar.svg");

});

app.get('/mao_robotica', (req, res) => {
  res.sendFile(__dirname + "/img/mao_robotica.svg");

});

app.get('/forma3D', (req, res) => {
  res.sendFile(__dirname + "/img/forma3D.svg");

});

app.get('/forma3D2', (req, res) => {
  res.sendFile(__dirname + "/img/forma3D2.svg");

});

app.get('/mao_robotica2', (req, res) => {
  res.sendFile(__dirname + "/img/mao_robotica2.svg");

});


app.get('/imagem_wave', (req, res) => {
  res.sendFile(__dirname + "/img/waves.svg");

});

app.get('/quadrados_3D', (req, res) => {
  res.sendFile(__dirname + "/img/Booleans.svg");

});

app.get('/upvote', (req, res) => {
  res.sendFile(__dirname + "/img/Good_Quality.svg");

});

app.get('/upvote_azul', (req, res) => {
  res.sendFile(__dirname + "/img/Good_Quality_Azul.svg");

});


app.get('/downvote', (req, res) => {
  res.sendFile(__dirname + "/img/Bad_Quality.svg");

});

app.get('/nos', (req, res) => {
  res.sendFile(__dirname + "/img/nozes.svg");
});

app.get('/yasmin-nos', (req, res) => {
  res.sendFile(__dirname + "/img/yasmin.svg");
});

app.get('/lucas-nos', (req, res) => {
  res.sendFile(__dirname + "/img/lucas.svg");
});

app.get('/ryu-nos', (req, res) => {
  res.sendFile(__dirname + "/img/ryu.svg");
});

app.get('/lima-nos', (req, res) => {
  res.sendFile(__dirname + "/img/lima.svg");
});


app.get('/gabriel-nos', (req, res) => {
  res.sendFile(__dirname + "/img/gabriel.svg");
});

app.get('/bookmark_heart', (req, res) => {
  res.sendFile(__dirname + "/img/logo.svg");

});
app.get('/logo_branco', (req, res) => {
  res.sendFile(__dirname + "/img/logo_branco.svg");

});
app.get('/hamburger', (req, res) => {
  res.sendFile(__dirname + "/img/Hamburger_B.svg");
});

app.get('/hamburger_branco', (req, res) => {
  res.sendFile(__dirname + "/img/Hamburger_A.svg");
});

app.get('/protese_braco', (req, res) => {
  res.sendFile(__dirname + "/img/protese_braco.jpg");

});

app.get('/protese_coracao', (req, res) => {
  res.sendFile(__dirname + "/img/protese_coracao.jpg");

});
app.get('/protese_dente', (req, res) => {
  res.sendFile(__dirname + "/img/protese_dente.jpg");

});
app.get('/protese_perna', (req, res) => {
  res.sendFile(__dirname + "/img/protese_perna.jpg");

});

app.get('/Fundo-Login', (req, res) => {
  res.sendFile(__dirname + "/img/Group_toma.svg");

});

app.get('/Fundo-cadastro', (req, res) => {
  res.sendFile(__dirname + "/img/Group_cadastro.svg");

});


app.get('/bgvideo', (req, res) => {
  res.sendFile(__dirname + "/video/video.mp4");

});

app.get('/bgvideo', (req, res) => {
  res.sendFile(__dirname + "/video/video.mp4");

});

app.get('/bgvideo2', (req, res) => {
  res.sendFile(__dirname + "/video/video2.mp4");

});

app.get('/bgvideo3', (req, res) => {
  res.sendFile(__dirname + "/video/video3.mp4");

});

app.get('/bgvideo4', (req, res) => {
  res.sendFile(__dirname + "/video/video4.mp4");

});

app.get('/bgvideo5', (req, res) => {
  res.sendFile(__dirname + "/video/video5.mp4");

});

app.get('/bgvideo6', (req, res) => {
  res.sendFile(__dirname + "/video/video6.mp4");

});

app.get('/bgvideo7', (req, res) => {
  res.sendFile(__dirname + "/video/video7.mp4");

});




/* 
███████╗██╗░░░██╗ 
██╔════╝██║░░░██║ 
█████╗░░██║░░░██║ 
██╔══╝░░██║░░░██║ 
███████╗╚██████╔╝ 
╚══════╝░╚═════╝░ 

 ░█████╗░███╗░░░███╗░█████╗░
 ██╔══██╗████╗░████║██╔══██╗
 ███████║██╔████╔██║██║░░██║
 ██╔══██║██║╚██╔╝██║██║░░██║
 ██║░░██║██║░╚═╝░██║╚█████╔╝
 ╚═╝░░╚═╝╚═╝░░░░░╚═╝░╚════╝░

╗░█████╗░
║██╔══██╗
║██║░░██║
║██║░░██║
║╚█████╔╝
╝░╚════╝░

██████╗░██╗░░░██╗██╗░░░██╗
██╔══██╗╚██╗░██╔╝██║░░░██║
██████╔╝░╚████╔╝░██║░░░██║
██╔══██╗░░╚██╔╝░░██║░░░██║
██║░░██║░░░██║░░░╚██████╔╝
╚═╝░░╚═╝░░░╚═╝░░░░╚═════╝░
*/

//Login Usuário e Administrador
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(session({
  secret: 'segredo-super-secreto',
  resave: false,
  saveUninitialized: true,
}));



app.get('/registro', (req, res) => {
  res.sendFile(__dirname + '/html/registro.html');
});

app.post('/registro', async (req, res) => {
  const cliente = new MongoClient(url, {
    useUnifiedTopology: true
  });

  try {
    await cliente.connect();

    const banco = cliente.db(dbName);
    const colecaoUser = banco.collection(colecao_usuarios);
    const usuarioExistente = await colecaoUser.findOne({
      usuario: req.body.usuario
    });
    const emailExistente = await colecaoUser.findOne({
      email: req.body.email
    });



    if (usuarioExistente || emailExistente) {
      res.send('Usuário já existente! Tente outro nome de usuário.');

    } else {

      const senhaCriptografada = await bcrypt.hash(req.body.senha, 10);
      await colecaoUser.insertOne({
        usuario: req.body.usuario,
        email: req.body.email,
        senha: senhaCriptografada,

      });
      res.redirect('/login');
    }
  } catch (erro) {
    res.send('Erro ao registrar o usuário.')
  } finally {
    cliente.close();
  }
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/html/login.html');
});

app.post('/login', async (req, res) => {
  const cliente = new MongoClient(url, {
    useUnifiedTopology: true
  });


  try {


    await cliente.connect();
    const banco = cliente.db(dbName);
    const colecaoUser = banco.collection(colecao_usuarios);
    const email = await colecaoUser.findOne({
      email: req.body.usuario
    });
    const usuario = await colecaoUser.findOne({
      usuario: req.body.usuario
    });
    const emailADM = "adm@gmail.com";
    const nomeADM = "adm";



    /* Explicação dessa coisa:
    a const usuario é usado para confirmar se foi um nome, o email para confirmar se oque foi escrito é um email, já o nomeADM  e emailADM 
    são usados para verificar se o usuário é umadministrador com o req.body.usuario, enquanto o usuario.senha é usado para ver se
    o o usuario com esse nome possui essa senha, mesma coisa com o email.senha. Ou seja para fazer o login em ADM
    é OBRIGATÓRIO registrar uma conta com o email: "adm@gmail.com" e com o usuario "adm",com uma senha.
    */


    if ((usuario && req.body.usuario == nomeADM && await bcrypt.compare(req.body.senha, usuario.senha)) || (email && req.body.usuario == emailADM && await bcrypt.compare(req.body.senha, email.senha))) {
      req.session.email = req.body.usuario;
      req.session.usuario = req.body.usuario;

      res.redirect('/adm');
      console.log('ADM');

    } else if ((usuario && await bcrypt.compare(req.body.senha, usuario.senha)) || (email && await bcrypt.compare(req.body.senha, email.senha))) {
      req.session.usuario = req.body.usuario;
      req.session.email = req.body.usuario;

      res.redirect('/home');
      console.log('USUARIO');
    } else {

      res.redirect('/login');

      console.log('A senha ou o nome estão errados :D');
      return;
    }

  } catch (err) {

    console.error('Erro ao realizar  o login: ', err);
    res
      .status(500)
      .send('Deu erro');
    console.log('Input usuario:', req.body.usuario);

  } finally {
    cliente.close();
  }
});

function protegerRota(req, res, proximo) {
  if (req.session.usuario) {
    proximo();
  } else {
    res.redirect('/registro');
  }
};



// Pagina inicial SEM LOGIN
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/html/home_sem_login.html');
});

// Rediricionar o registrar

//principal USUÁRIO
app.get("/home", protegerRota, (req, res) => {
  res.sendFile(__dirname + "/html/login_user/home.html");
});

app.get('/usuarios', protegerRota, async (req, res) => {
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db(dbName);
    const colecao = db.collection(colecao_usuarios);

    const usuario = await colecao.find({
      $or: [{
        usuario: req.session.usuario
      }, {
        email: req.session.email
      }]
    }, {
      projection: {
        _id: 1,
        usuario: 1,
        email: 1
      }
    }).toArray();


    const ususarioJson = res.json(usuario);

    if (!usuario) {
      console.log(usuario);
      console.log("nao");
    } else {
      console.log(usuario);
      console.log("deu");
    }


  } catch (err) {
    console.log("usuario:", err);
    res
      .status(500)
      .send("Erro ao buscar usuario. Por favor,tente novamente mais tarde");
  } finally {
    client.close();
  }
});








app.get("/servicos", protegerRota, async (req, res) => {
  res.sendFile(__dirname + "/html/login_user/servicos.html");
});
app.get("/modelos", protegerRota, async (req, res) => {
  res.sendFile(__dirname + "/html/login_user/modelos.html");
});
app.get("/sobrenos", protegerRota, async (req, res) => {
  res.sendFile(__dirname + "/html/login_user/sobrenos.html");
});

app.get("/atualizar-avaliacao", protegerRota, async (req, res) => {
  res.sendFile(__dirname + "/html/updates/atualizar_avaliacao.html")
});

//principal ADM
app.get("/adm", (req, res) => {
  res.sendFile(__dirname + "/html/login_adm/home.html");
});

app.get("/servicos_adm", protegerRota, async (req, res) => {
  res.sendFile(__dirname + "/html/login_adm/servicos.html");
});
app.get("/modelos_adm", protegerRota, async (req, res) => {
  res.sendFile(__dirname + "/html/login_adm/modelos.html");
});
app.get("/sobrenos_adm", protegerRota, async (req, res) => {
  res.sendFile(__dirname + "/html/login_adm/sobrenos.html");
});


app.get('/sair', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send('Erro ao sair!');
    }
    res.redirect('/');
  });
});

//USUÁRIO QUE NÃO TEM LOGIN
//Não pode acessar outras páginas HTML
//Não pode fazer avaliações 




//Card pedidos

//função truncar descrição


//CRUDs do Site

//Usuário
//CRIAR PEDIDOS
app.post("/criar-pedidos", protegerRota, async (req, res) => {

  const pedido_novo = req.body;
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db(dbName);
    const colecao = db.collection(colecao_pedidos); //definir banco desejado

    const result = await colecao.insertOne(pedido_novo); //inserir o novo paciente
    console.log(`Pedido registrado ID: ${result.insertedId}`);
    res.redirect("/servicos");
  } catch (
  err //entra em execução caso alguma linha do try não funcionar
  ) {
    console.error("Erro ao registrar o pedido:", err);
    res
      .status(500)
      .send(
        "Erro ao registrar o pedido. Por favor, tente novamente mais tarde."
      );
  } finally {
    client.close();
  }
});






//Administrador.+

//BUSCAR PEDIDO PELO ID

/*O adm vai pesquisar o nome da pessoa que fez o pedido 
(entao como ele vai saber o nome das pessoas? é um mago?
)então faz aparecer todos os pedidos na página de serviços? é só criar uma pagina especifica de pedidos OU alteramos a pagina de serviço para o adm
nao tem que ser uma exata copia da parte do usuario, pode ser diferente e tem que ser mesmo, sim sim, eu prefiro alterar a página do que criar outra nova.
entao como a gente vai apresentar pro adm os pedidos feitos?
tem que ser organizado
que tal fazermos uma table deixa que eu faço entao, ok vou fazer a parte de procurar os pedidos por nome deixa que eu faço tambem*/

//Busca do pedido pelo nome

app.get("/servicos_adm/pedido/:nome_pedido", protegerRota, async (req, res) => {
  const {
    nome_pedido
  } = req.params;
  const client = new MongoClient(url);

  try {
    await client.connect();
    const bancodb = client.db(dbName);
    const colecao = bancodb.collection('pedidos');

    const pedido = await colecao.find({
      nome_pedido: nome_pedido
    }, {
      projection: {
        _id: 0,
        nome_pedido: 1,
        email: 1,
        desc: 1
      }
    }).toArray();


    if (!pedido) {
      console.log(nome_pedido);
      return res.status(500).send("pedido não encontrado");

    } else if (pedido) {
      console.log(pedido);
      res.send(
        pedido
      );
    };

  } catch (err) {
    console.log(nome_pedido);
    console.log(pedido);
    console.error("Erro ao buscar seu pedido:", err);
    res
      .status(500)
      .send("Erro ao buscar seu pedido. Por favor, tente novamente mais tarde");
  } finally {

    client.close();

  }
});



//Cliente
//Deletar pedido
app.post("/deletar-pedido", protegerRota, async (req, res) => {
  const {
    id
  } = req.body;
  const client = new MongoClient(url);

  try {
    await client.connect();

    const db = client.db(dbName);
    const colecao = db.collection(colecao_pedidos);

    const result = await colecao.deleteOne({
      _id: new ObjectId(id)
    });

    if (result.deletedCount > 0) {
      console.log(`pedido com ID: ${id} deletado com sucesso`);
      res.redirect('/servicos');
    } else {
      res.status(404).send("pedido não encontrado");
    }
  } catch (err) {
    console.error("Erro ao deletar o pedido:", err);
    res
      .status(500)
      .send(
        "Erro ao deletar o pedido. Por favor, tente novamente mais tarde"
      );
  } finally {
    client.close();
  }
});


//Administrador
//BUSCAR TODOS OS PEDIDOS








app.get('/pedidos', protegerRota, async (req, res) => {
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db(dbName);
    const colecao = db.collection('pedidos');

    const pedido = await colecao.find({
      $or: [{
        usuario: req.session.usuario
      }, {
        email: req.session.email
      }]
    }, {
      projection: {
        _id: 1,
        usuario: 1,
        email: 1,
        desc: 1
      }
    }).toArray();
    res.json(pedido);

    console.log(pedido)

  } catch (err) {
    console.log("Pedidos:", err);
    res
      .status(500)
      .send("Erro ao buscar pedidos. Por favor,tente novamente mais tarde");
  } finally {
    client.close();
  }
});


//Usuários
//CRIAR AVALIACOES
app.post("/criar-avaliacoes", protegerRota, async (req, res) => {
  const avaliacao_nova = req.body;
  const client = new MongoClient(url);


  try {
    await client.connect();
    const db = client.db(dbName);
    const colecao = db.collection(colecao_avaliacoes); //definir banco desejado

    const result = await colecao.insertOne(avaliacao_nova); //inserir o novo paciente
    console.log(`Avaliação registrada com sucesso! ID: ${result.insertedId}`);
    res.redirect("/home");
  } catch (
  err //entra em execução caso alguma linha do try não funcionar
  ) {
    console.error("Erro ao registrar a avaliação:", err);
    res
      .status(500)
      .send(
        "Erro ao registrar a avaliação. Por favor, tente novamente mais tarde."
      );
  } finally {
    client.close();
  }
});

//Usuários
//mostra nome navbar
app.get("/mostrar-nome", protegerRota, async (req, res) => {
  try {
    const {
      usuario
    } = req.params;
    username = req.session.usuario;
    res.redirect('/home');
    console.log('bem-vindo', username);
    //document.getElementById('mostrar-nome') = username;
  } catch (err) {
    console.log("avaliacao:", err);
    res
      .status(500)
      .send("Erro ao buscar avaliacao. Por favor,tente novamente mais tarde");
  }

});

//Usuários
//ATUALIZAR AVALIACAO
//Usuário não poderá editar qualquer avaliação apenas a sua




app.post("/atualizar-avaliacao", async (req, res) => {
  const {
    id,
    desc_avaliacao,
    recomendacao
  } = req.body;
  const client = new MongoClient(url);
  console.log(id);

  try {

    await client.connect();
    const db = client.db(dbName);
    const colecao = db.collection('avaliacoes');

    const result = await colecao.updateOne({
      _id: new ObjectId(id)
    }, {
      $set: {
        desc_avaliacao,
        recomendacao
      },
    });
    if (result.modifiedCount > 0) {
      console.log(`Avaliação ID: ${id} foi atualizado`);
      res.redirect("/home");
    } else {
      res.status(404).send("Avaliação não encontrado");

    }
  } catch (err) {
    console.error("Erro ao atualizar o avaliação:", err);
    res
      .status(500)
      .send(
        "Erro ao atualizar sua avaliacao. Por favor, tente novament mais tarde."

      );

    console.log('tem erro', err)
  } finally {
    client.close();
  }
});


app.get("/avaliacao/:id", protegerRota, async (req, res) => {
  const {
    id
  } = req.params;
  const client = new MongoClient(url);

  try {
    await client.connect();
    const bancodb = client.db(dbName);
    const colecao = bancodb.collection('avaliacoes');

    const avaliacao = await colecao.findOne({
      _id: new ObjectId(id)
    });


    if (!avaliacao) {
      console.log(recomendacao);
      return res.status(500).send("avaliacao não encontrada");

    }

    res.send(avaliacao);
  } catch (err) {

    console.error("Erro ao buscar sua avaliacao:", err);
    res
      .status(500)
      .send("Erro ao buscar sua avaliacao. Por favor, tente novamente mais tarde");
  } finally {

    client.close();

  }
});

//Usuário
//BUSCAR AVALIAÇÃO POR RECOMENDADA OU NÃO RECOMENDADA

//Usuários
//DELETAR AVALIAÇÃO
//Usuário não poderá deletar qualquer avaliação apenas a sua
app.post("/deletar-avaliacao", protegerRota, async (req, res) => {

  const {
    id
  } = req.body;
  const client = new MongoClient(url);
  // if (req.session.usuario = req.body.usuario) {
  try {
    await client.connect();

    const db = client.db(dbName);
    const colecao = db.collection(colecao_avaliacoes);

    const result = await colecao.deleteOne({
      _id: new ObjectId(id)
    });

    if (result.deletedCount > 0) {
      console.log(`Avaliação com ID: ${id} deletada com sucesso`);
      res.redirect("/home");
    } else {
      res.status(404).send("Avaliação não encontrada");
      console.log('deu erro');
    }
  } catch (err) {
    console.error("Erro ao deletar a avaliação:", err);
    res
      .status(500)
      .send(
        "Erro ao deletar a avaliação. Por favor, tente novamente mais tarde"
      );
    console.log('oxi');
  } finally {
    client.close();
  }
  // } else {
  //   res.redirect('/home');
  //   console.log('Você não pode deletar esa avaliação')
  // }

});

//Usuários
//BUSCAR TODOS As AVALIACOES

app.get('/avaliacoes', protegerRota, async (req, res) => {
  const client = new MongoClient(url);


  try {
    await client.connect();
    const db = client.db(dbName);
    const colecao = db.collection(colecao_avaliacoes);

    const avaliacao = await colecao.find(
      {

        $or: [{
          usuario: req.session.usuario
        }]
      }, {
      projection: {
        _id: 1,
        desc_avaliacao: 1,
        recomendacao: 1
      }
    }).toArray();
    const avaliacaoJSON = res.json(avaliacao);
  } catch (err) {
    console.log("avaliacao:", err);
    res
      .status(500)
      .send("Erro ao buscar avaliacao. Por favor,tente novamente mais tarde");
  } finally {
    client.close();
  }
});



//IA

app.get('/iaresponse', async (req, res) => {

  async function runChat() {

    const client = new MongoClient(url, { useUnifiedTopology: true });
    await client.connect();
    const bancodb = client.db(dbName);
    const colecao = bancodb.collection(colecao_avaliacoes);
    const avaliacao = await colecao.find({}, {
      projection: {
        _id: 0,
        usuario: 1,
        recomendacao: 1,
        desc_avaliacao: 1
      }
    }).toArray();



    try {
      const genAI = new GoogleGenerativeAI(API_KEY);

      const model = genAI.getGenerativeModel({
        model: MODEL_NAME
      });
      const chat = model.startChat({
        generationConfig: GENERATION_CONFIG,
        safetySetting: SAFETY_SETTINGS,
        history: [],
      });
      //const userInput = promptSync(avaliacao)
      const result = await chat.sendMessage('Vou te passar um arquivo json que contém avaliações sobre o site. Caso não ter nenhuma avaliação, responda que não há nenhuma avaliação disponível. Analise o json e os classifique os como positivos ou negativos , corte linhas apos o final de cada descrição, se possivel retirar os títulos "recomendacao:","desc_avaliacao", remova  os asteriscos, apenas bote a descricao e o nome dos usuarios que os criaram, ignorar avaliações inadequadas e de palavriado sujo, trate as avaliações com base na descrição das avaliações dos aqruivos json. Converta issO para ser apenas div, como se fosse parte do codigo de outro html, mantendo uma classificacao de negativo e positivo sem repetir, com estilo e bootstrap 5, troque a fonte pela fonte: Worksans,  e mude a cor da fonte para a cor: #00ACEE, retire os "```" e "html``"' + JSON.stringify(avaliacao));
      // result = await chat.sendMessage(JSON.stringify(avaliacao));
      if (result.error) {
        console.error(('AI Erro:'), result.error.message);
        return res.status(500);
      }
      const respostaIa = result.response.text();

      res.send(respostaIa)

      console.log(respostaIa);
    } catch (error) {

      console.log(('Erro encontrado: '), error.message);
      res.status(500);
    } finally {
      console.log("aaaa eu to bem");
      await client.close();
    };


  }
  await runChat();

});



