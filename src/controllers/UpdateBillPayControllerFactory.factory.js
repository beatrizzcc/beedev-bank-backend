import { UpdateBillPayController } from './UpdateBillPayController.js'

export async function UpdateBillPayControllerFactory(req){

    const controller = new UpdateBillPayController()
   
    return await controller.update(req.params.id)
}