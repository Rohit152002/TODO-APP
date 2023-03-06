const express = require("express");
const app = express();
const routes = require("./routes/route");
const cors=require('cors')
app.use(
   cors({
      origin:"http://192.168.147.248:5500",
      // origin:"http://127.0.0.1:5500"
   })
)
const db=require('./routes/dbconfig')
db.connect((err)=>{
   if(err)throw(err);
   console.log("connection database successful");
})
app.use(express.json())

app.get('/',(req,res)=>{
   res.send("helloword")
})
app.use('/',routes)
app.listen(3000, (req, res) => {
  console.log("http://localhost:3000");
});
