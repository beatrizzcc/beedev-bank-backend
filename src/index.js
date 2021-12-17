console.log('heyyyyyy')
var express = require('express');
var cors = require('cors');
const app = express()

app.use(cors())
app.use(express.json())

const knex = require('knex');
const { response } = require('express');
const { CreateAgencyController } = require('./controllers/CreateAgencyController');
const { CreateCustomerController } = require('./controllers/CreateCustomerController');
const { RequestError } = require('./utils/RequestError');
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

app.post('/api/agency', async (req, res) =>  {
    console.log(req.body)
    const createAgcCtrl = new CreateAgencyController()

    let result = {
        status: true,
        id: null, 
        error: false
    }

    try{
        validateAgency(req.body)
        const ctrlResult = await createAgcCtrl.create(
            req.body.number,
            req.body.address
        )
            result.id = ctrlResult[0]
            res.statusCode = 200
    }catch(e){
        console.log('deu erro')
        console.log(e)

        if
        (e.name === 'RequestError'){
            res.statusCode = 400
            result.error = e.message
        }else{
            res.statusCode = 500

        }
        result.status = false

    }
    
   
    res.json(result)

    
})

function validateAgency(reqBody){

    let error = false
    if(reqBody.number.indexOf('?') >= 0){
        //res.statusCode = 400
        //throw new Error('Invalid agency number')
        //throw new RequestError('Invalid Agency Number')
        error = 'Invalid Agency Number'
    }
    if(reqBody.number.indexOf(' ') >= 0){
        //throw new Error('Blank space invalid')
        //throw new RequestError('Blank Space Invalid')
        error = 'Blank Space Invalid'
    }
    if(reqBody.number.length >= 8){
        //throw new Error('Several characters invalid')
       // throw new RequestError('Several Characters Invalid')
       error = 'Several Characters Invalid'
    }

    if(error){
        throw new RequestError(error)
    }

}

app.post('/api/customers', (req, res) => {
   const createCustomerController = new CreateCustomerController()
   createCustomerController.create(req.body.name, req.body.account)

   res.json({status: true})
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
