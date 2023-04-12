import express,{ Express,Request,Response } from "express";
import { fetchDocbyID } from "./firestore";
const app:Express=express();
const port=8080

app.use(express.json())

app.get('/',async (req:Request,res:Response)=>{
    res.send(await fetchDocbyID('temp','B20DS063'))
})



app.listen(port,()=>console.log(`Server running on ${port}`))
