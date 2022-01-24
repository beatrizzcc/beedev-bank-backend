import CreateBillPayController from "./CreateBillPayController.js";
import BillsPayModel from "./models/BillsPayModel.js";

export function CreateBillPayFactory(req, token){

    return new CreateBillPayController(
        req.body.title,
        req.body.value,
        new Date(req.body.dueDate),
        token.id,
        new BillsPayModel()
        
    )
}