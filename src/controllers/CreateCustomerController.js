const { CustomersModel } = require("./models/CustomersModel")

class CreateCustomerController {
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

module.exports = {
    CreateCustomerController
}