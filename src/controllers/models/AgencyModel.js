//const { BaseModel } = require("./BaseModel")
import BaseModel from "./BaseModel.js"



export default class AgencyModel extends BaseModel{

    tableName = 'agency'


}

/*const modelA = new AgencyModel()
modelA.getAll().then(res => {
  console.log(res)
})

const modelC = new CustomersModel()
modelC.getAll().then(res => {
  console.log(res)
})
*/

