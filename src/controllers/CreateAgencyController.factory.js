import CreateAgencyController from './CreateAgencyController.js'
import {RequestError} from '../utils/RequestError.js';


export async function CreateAgencyControllerFactory(req){
    const createAgcCtrl = new CreateAgencyController()

    let result = {
        status: true,
        id: null, 
        error: false,
        statusCode: 200
    }

    try{
        validateAgency(req.body)
        const ctrlResult = await createAgcCtrl.create(
            req.body.number,
            req.body.address
        )
            result.id = ctrlResult[0]
            //res.statusCode = 200
    }catch(e){
        if(e.name === 'RequestError'){
            result.statusCode = 400
            result.error = e.message
        }else{
            result.statusCode = 500

        }
        result.status = false

    }


    return result
    
}

function validateAgency(reqBody){

    let error = false
    if(reqBody.number.indexOf('?') >= 0){
        //res.statusCode = 400
        //throw new Error('Invalid agency number')
        //throw new RequestError('Invalid Agency Number')
        error = 'Invalid Agency Number -> ?'
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