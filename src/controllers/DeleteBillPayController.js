import BillsPayModel from "./models/BillsPayModel.js";


export default class DeleteBillPayController{

    async delete(id){

        const billModel = new BillsPayModel()

        return await billModel.deleteId(id)
    }
}