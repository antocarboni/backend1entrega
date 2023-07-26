import express, { application } from "express"
import productRouter from "../routes/product.router.js"
const app=express()
const PORT=8080;

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(express.Router())
app.use("/api", productRouter)

import {dirname} from "path"
import { fileURLToPath } from "url";

const __dirname=dirname(fileURLToPath(import.meta.url))
console.log(__dirname);

app.listen(PORT,()=>{
    console.log("El servidor está funcionando!")
})