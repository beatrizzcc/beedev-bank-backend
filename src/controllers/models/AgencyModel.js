const { BaseModel } = require("./BaseModel")
const { CustomersModel } = require("./CustomersModel")


class AgencyModel extends BaseModel{

    tableName = 'agency'


}

const modelA = new AgencyModel()
modelA.getAll().then(res => {
  console.log(res)
})

const modelC = new CustomersModel()
modelC.getAll().then(res => {
  console.log(res)
})



module.exports = {
    AgencyModel
}