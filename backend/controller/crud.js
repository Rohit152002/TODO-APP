const {v4:uuidv4}=require('uuid')
const db=require("../routes/dbconfig")
const display=(req,res)=>{
        res.setHeader('Content-Type','application/json')
        db.query("Select * from todo",(err,result)=>{
            if(err) throw err;
            return res.status(200).json({status:"success",data:result})
            
        })
}

const create=(req,res)=>{
    res.setHeader("Content-Type", "application/json");
    const {task}=req.body;
  console.log(req.body);
  if(!(req.body)){
        return res.status(404).json({status:"nots"})
  }
    db.query(`Insert todo set id="${uuidv4()}",task="${task}"`,(err,result)=>{
        if(err)throw err;
        return res.status(200).json({status:"success",task:result})
    })
}

const edit=(req,res)=>{
    res.setHeader("Content-Type", "application/json");
    console.log(req.body);
    const taskid=req.params.id;
    const {task}=req.body;
    db.query(`Update todo set task="${task}" where id = "${taskid}"`,(err,result)=>{
        if(err)throw err;
        return res.status(200).json({status:"success",task:"task has been updated"})
    })
}
const del=(req,res)=>{
    const taskid=req.params.id;
    console.log(taskid);
    res.setHeader('Content-Type','application/json')
    db.query(`Delete from todo where id="${taskid}"`,(err,result)=>{
        if(err)throw err;
        return res.status(200).json({status:"success",success:"deleted"})
    })
}

module.exports={
    display,
    create,
    edit,
    del
}