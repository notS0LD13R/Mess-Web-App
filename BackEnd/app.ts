import express,{ Express,Request,Response } from "express";
import { fetchMessCutbyID,updateMessCutbyID } from "./firestore";
const app:Express=express();
const port=8080

app.use(express.json())

app.get('/fetchMessCutbyID',async (req,res)=>{
    const body=req.body
    try{
        const response=await fetchMessCutbyID('temp',body.ID)
        const result={
            date:new Date(),
            ...response
        }
        res.status(200).send(result)
    }
    catch(err){
        res.status(400).send(err)
    }
})

app.post('/updateMessCutbyID',async(req,res)=>{
    const body=req.body
    const month=new Date().toLocaleString('default', { month: 'long' });
    try{
        await updateMessCutbyID(month,body.ID,body.CutDays)
        res.status(200).send('Updated CutDays')
    }
    catch(err){
        res.status(400).send(err)
    }
})



app.listen(port,()=>console.log(`Server running on ${port}`))
