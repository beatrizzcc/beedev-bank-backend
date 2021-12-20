import CustomersModel from "./models/CustomersModel.js"

export default class CreateCustomerController {
    create(name, account){
        const model = new CustomersModel()
        model.create({
            name,
            account
        }).then((res)=> {
            console.log('success')
        }).catch((err) => {
            console.log(err)
        })

    }

}

