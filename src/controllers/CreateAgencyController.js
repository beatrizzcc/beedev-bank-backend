import AgencyModel  from "./models/AgencyModel.js";


export default class CreateAgencyController {


    async create(number, address){
        console.log('chamou a class')
        const agencyModel = new AgencyModel()

        const agencyProps = {
            number,
            address,
            //colunaErrada: true
        }
        
       const createdAgency = await agencyModel.create(agencyProps)
       //console.log(createdAgency)

       return createdAgency
        
    }
}


    /*const result = agencyModel.getAll()
    //console.log(result)
    result.then( (res) => {
        console.log('success')
        console.log(res)
    }*/



/*module.exports = {
    CreateAgencyController,

}*/