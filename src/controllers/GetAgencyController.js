import AgencyModel from "./models/AgencyModel.js"

export class GetAgencyController {

    async get(){
        const agencyModel = new AgencyModel()
        
        return await agencyModel.getAll().then()
    }
}