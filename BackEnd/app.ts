import express,{ Express,Request,Response } from "express";
import { fetchMessCutbyID,updateMessCutbyID } from "./firestore";
import cors from 'cors';

const app:Express=express();
const port=8080

app.use(express.json())
app.use(cors())

app.get('/fetchMessCutbyID',async (req,res)=>{
    try{
        const response=await fetchMessCutbyID(new Date().toLocaleString('default', { month: 'long' }),<string>req.query.ID)
        
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
    console.log(body)
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
