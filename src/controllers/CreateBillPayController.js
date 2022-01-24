

export default class CreateBillPayController {
    
    constructor(
        title,
        value,
        dueDate,
        userId,
        model
    ){

        this.title = title
        this.value = value
        this.dueDate = dueDate
        this.userId = userId
        this.model = model
        
    }

    async create(){
        console.log(this)
       const id = await this.model.create({
            title: this.title,
            value: this.value,
            due_date: this.dueDate,
            customers_id: this.userId
        })

        return id
    }

    
}