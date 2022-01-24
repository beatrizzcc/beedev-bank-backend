import BillsPayModel from "./models/BillsPayModel.js";


export class UpdateBillPayController{

    async update(id){
       
        const UpdateModel = new BillsPayModel()

        return await UpdateModel.updateId(id).then()
    }
}