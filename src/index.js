console.log('heyyyyyy')
//var express = require('express');
import  express from 'express';
//var cors = require('cors');
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

import knex from 'knex';
import response from 'express';
//const { CreateAgencyController } = require('./controllers/CreateAgencyController');
//import CreateAgencyController from './controllers/CreateAgencyController.js'
//const { CreateCustomerController } = require('./controllers/CreateCustomerController');
import CreateCustomerController from './controllers/CreateCustomerController.js'

import { CreateAgencyControllerFactory } from './controllers/CreateAgencyController.factory.js';
import { GetAgencyControllerFactory } from './controllers/GetAgencyController.factory.js';
import { engine } from 'express-handlebars';
import jwt from "jsonwebtoken";

const secretKey = 'my-super-hard-secret-key'
const connection = knex({
    client: 'mysql2',
    version: '5.7',
    debug: true,
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : 'bia2101',
      database : 'school'
    }
});


app.get('/', function (req, res) {
  console.log('oiii')
  res.send('Hello World')
})

function middlewareAdmin(req, res, next){
    //console.log('passou ')
    let user = true;

    let token = req.headers.authorization
    //console.log('token.........')
    //console.log(token)

    
    
    try{
        const validation = jwt.verify(token, secretKey)
        next()

    }catch(e){
        res.statusCode = 401
        res.send()

    }
}

app.use('/admin', middlewareAdmin);

app.post('/admin/api/agency', async (req, res) =>  {
    const result = await CreateAgencyControllerFactory(req)
   
    res.statusCode = result.statusCode
   
    res.json(result)

    
})

app.get('/admin/api/agency', async (req, res) =>  {
   const result = await GetAgencyControllerFactory(req)

   res.json(result)

    
})
//teste

app.get('/customer', (req, res) =>  {
    res.render('customer', {
        foo: 'BEEDEV 2',
        showTitle: true,
        rg: [
            {name: 'Cassia', 
            details: [
                {age: 12, from: 'Brasil'},     
            ]
        
            },
            {name: 'Catarina', 
            details: [
                {age: 18, from: 'Australia'}
            ]
            }
        ]
    })
   
      
})

app.post('/api/customers', (req, res) => {
   const createCustomerController = new CreateCustomerController()
   createCustomerController.create(req.body.name, req.body.account)

   res.json({status: true})
})

app.post('/api/v1/auth-admin', (req, res) => {
    let username = req.body.username
    let password = req.body.password

    if(!username || !password){
        res.statusCode = 401
        return res.send()
    }

    let validation = true
    if(!validation){
        res.statusCode = 401
        return res.send()
    }else{
        let token = jwt.sign({ foo: username }, secretKey);
        
        res.send({
            token
        })
    }
})

app.get('/api/customers', (req, res) =>  {
    res.json({
        
        name: 'Beatriz',
        age: 19,
        money: 15.000
    })
      
})

app.get('/api/extract', (req, res) => {
    res.json([
        { description: 'Conta de Luz', value: 50.00, date: '2022-01-03 16:10' },
        { description: 'Conta de Agua', value: 75.00, date: '2022-02-22 16:10' },
        { description: 'Conta de Internet', value: 110.00, date: '2022-01-21 16:10' },
       
    ])
})




app.get('/example', (req, res) =>  {
   res.render('example', {
       foo: 'BEEDEV'
   })
     
})






app.get('/students/api', function (request, response, next) {
    const q = connection()
    .select(['S.id', 'S.firstname', 'S.lastname', 'SHS.grade', 'SU.name'])
    .from('students AS S')
    .innerJoin('students_has_subjects AS SHS', 'SHS.students_id', 'S.id')
    .innerJoin('subjects AS SU', 'SHS.subjects_id', 'SU.id' )
    .then((res) => {
       parseStudentsFromDB(res)
    })
    .catch( (res) => {
        console.log('catch')
        console.log(res)
    })

    function parseStudentsFromDB(students){

        let parsedObjects = {};

        for( let student of students){

            if(!parsedObjects[student.id]){
                parsedObjects[student.id] = {};
            }

            parsedObjects[student.id].nome = {
                firstName: student.firstname,
                secondName: student.lastname
            }
        }
        //console.log('then')
        //console.log(res)
        console.log(parsedObjects)
    }
    
  let students = [
    {   
        id: 0,
        nome:
        {
            firstName: 'Beatriz',
            secondName: 'Martins',
        },
        notaMatematica: 8,
        notaIngles: 9,
        
    },

    {   id: 1,
        nome:{
            firstName: 'Fabiana',
            secondName: 'Castelani',
        },              
        notaMatematica: 9,
        notaIngles: 3,
        
    },

    {   id: 2,
        nome:{
            firstName: 'José',
            secondName: 'Silva',
        },
        notaMatematica: 4,
        notaIngles: 7,
        
    },

    {   id: 3,
        nome:{
            firstName: 'Paulo',
            secondName: 'Barros',
        },
        notaMatematica: 8,
        notaIngles: 2,
        
    },

    {
        id: 4,
        nome:{
            firstName: 'Benedita',
            secondName: 'Matos',
        },
        notaMatematica: 4,
        notaIngles: -2,
       
    },

    {   id:5,
        nome:{
            firstName: 'Osmar',
            secondName: 'Campos',
        },
        notaMatematica: 7,
        notaIngles: 8,
       
    },

    {   id:6,
        nome:{
            firstName: 'Jéssica',
            secondName: 'Ferreira',
        },
        notaMatematica: 10,
        notaIngles: 4,
        
    },

    {   id:7,
        nome:{
            firstName: 'Pedro',
            secondName: 'Lima',
        },
        notaMatematica: 19,
        notaIngles: 13,
        
    }
];

 response.json(students)

}),

app.get('/api/compras', (req, res) => {

    function comprasDB(){
        for(let compra of compras){
            console.log(compra)
        }
    }

    const compras = [
        {id: 0, item: 'mel', valor: 5},
        {id: 1, item: 'jabuticaba', valor: 2},
        {id: 2, item: 'pera', valor: 3},
        {id: 3, item: 'abacate', valor: 6}
    ]

    res.json(compras)

})
 
app.listen(3000, function(){
    console.log('iniciou na porta 3000')
})


/*async function promiseNumber(posicao){
    let numbers = [1, 3, 5, 7]

    //console.log(numbers[posicao])

    return new Promise( (resolve,reject) => {
        if(numbers[posicao]){
            resolve(numbers[posicao])

        }else{
            reject('number não encontrado')
        }
      
    })
}
const n = promiseNumber(3)
n.then( (res) =>{
    console.log(res)
})
console.log('numeroooo')
console.log(n)

async function asyncCalcular(){
    const n1 = await promiseNumber(1)
    const n2 = await promiseNumber(3)

    const calculo = n1 + n2
    console.log(calculo)
}

//asyncCalcular()

function calcular(){
    const n1 = promiseNumber(1)
        .then( (res)=>{
            console.log('n1')
            console.log(res)
        })
    const n2 = promiseNumber(3)
        .then( (res)=>{
            console.log('n2')
            console.log(res)
        })

    const calculo = n1 + n2
    console.log(calculo)
}
calcular()*/

