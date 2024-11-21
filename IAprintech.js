//IA integrada

import {
    GoogleGenerativeAI,
    HarmBlockThreshold,
    HarmCategory
} from '@google/generative-ai';

import {
    MongoClient
} from 'mongodb';

import ora from 'ora';

import chalk from 'chalk';

import {
    default as prompt
} from 'prompt-sync';

const promptSync = prompt();

const url = "mongodb://127.0.0.1:27017";



import express from 'express';
const app = express();
import session  from'express-session';
import methodOverride from'method-override';

app.use(express.urlencoded({
    extended: true
  }));
  app.use(express.json());
  app.use(methodOverride("_method"));


const client = new MongoClient(url);
const dbName = "sistema3DPrinting";
await client.connect();
const bancodb = client.db(dbName);
const colecao = bancodb.collection('avaliacoes');
const avaliacao = await colecao.find({}, {
    projection: {
        _id: 0,
        usuario: 1, 
        recomendacao: 1,
        desc_avaliacao: 1
    }
}).toArray();


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


app.get('/iaresponse',  async (req, res) => {
    res.send(`PORRA`)

});

app.listen(async () => {
    console.log(`Servidor rodando`);
  });