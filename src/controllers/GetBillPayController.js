import BillsPayModel from "./models/BillsPayModel.js"

export class GetBillPayController {

    async get(){
        const BillPayModel = new BillsPayModel()

        return await BillPayModel.getAll().then()
    }
}
