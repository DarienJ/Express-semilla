import mongoose from "mongoose";

const CategoriaSchema=mongoose.Schema({
    nombre: {type:String,required:true,maxlenght:50,unique:true},
    descripcion: {type:String,required:false,maxlenght:255,unique:false},
    estado: {type:Number, default:1},
    createdA: {type:Date, default:Date.now}
})

export default mongoose.model('Categoria', CategoriaSchema)