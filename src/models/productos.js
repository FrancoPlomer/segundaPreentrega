import mongoose from "mongoose";

const productosCollection = 'productos';

const productosSchema = new mongoose.Schema({
    tittle: {
        type: String, 
        require: true, 
        max: 100,
    },
    descripcion: {
        type: String, 
        require: true, 
        max: 200,
    },
    codigo: {
        type: Number, 
        require: true, 
        max: 100,
    },
    fotoUrl: {
        type: String, 
        require: true, 
        max: 100,
    },
    price: {
        type: String, 
        require: true, 
        max: 100,
    },
    ID: {
        type: Number, 
        require: true, 
        max: 50,
    },
    timestamp: {
        type: String, 
        require: true, 
        max: 100,
    },
    stock: {
        type: Number, 
        require: true, 
        max: 500,
    },
})

export const productos = mongoose.model(productosCollection, productosSchema);