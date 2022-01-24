import DeleteBillPayController from "./DeleteBillPayController.js";

export async function DeleteBillPayControllerFactory(req){


    const controller = new DeleteBillPayController()
    return await controller.delete(req.params.id)
}