import { Router } from "express";
import { createRequire } from 'module';
import productosApiArch from "../daos/productos/productosDaoArchivo.js";
import productosApi from "../daos/productos/productosDaoSQL.js";


const productos = process.env.DB === "sql" ? productosApi : productosApiArch; 
const productosApiRouter = new Router();

console.log(productos)
let Administrador = true;

productosApiRouter.get('/', async (req, res) => {
    try {
        res.json(await productos.listarAll())
    } catch (error) {
        res.json({
            err: -1,
            message: error
        })
    }
})

productosApiRouter.get('/:id', async (req, res) => {
    try {
        res.json(await productos.listar(req.params.id))
    } catch (error) {
        res.json({
            err: -1,
            message: error
        })
    }
})

productosApiRouter.post('/', async (req, res) => {
    if(Administrador){
        try {
            res.json(await productos.guardar(req.body))
        } catch (error) {
            res.json({
                err: -1,
                message: error
            })
        }
    }
    else{
        res.json({
            err: -1,
            message: "ruta no autorizada"
        })
    }
})

productosApiRouter.put('/:id', async (req, res) => {
    if(Administrador){
        try {
            res.json(await productos.actualizar({ ...req.body, id: req.params.id }))
        } catch (error) {
            res.json({
                err: -1,
                message: error
            })
        }
    }
    else{
        res.json({
            err: -1,
            message: "ruta no autorizada"
        })
    }
})

productosApiRouter.delete('/:id', async (req, res) => {
    if(Administrador){
        try {
            res.json(await productos.borrar(req.params.id))
        } catch (error) {
            res.json({
                err: -1,
                message: error
            })
        }
    }
    else{
        res.json({
            err: -1,
            message: "ruta no autorizada"
        })
    }
})


export default productosApiRouter;