//const knex = require('knex');
import knex from 'knex'


export default class BaseModel {

    constructor(){
        this.database = knex({
          client: 'mysql2',
          connection: {
            host : 'localhost',
            user : 'root',
            password : 'bia2101',
            database : 'bank-beedev'
          }
      });
    }

    getAll(){
        return this.database
              .select('*')
              .from(this.tableName)
  
    }

    
    create(data){
        return this.database()
          .table(this.tableName)
          .insert(data)
  
      }

}
