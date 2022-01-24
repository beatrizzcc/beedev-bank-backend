import { GetBillPayController } from './GetBillPayController.js'

export async function GetBillPayControllerFactory(req){

    const controller = new GetBillPayController()
    
    return await controller.get()
}