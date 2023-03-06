const mysql=require('mysql')
const db=mysql.createConnection({
    host:"localhost",
    user:"todoApp",
    password:"todoapp",
    database:"todoapp",
})
module.exports=db