import * as model from "../models/productos.js";

class ContenedorSql {
    async listar(id) {
        const productoFilter = await model.productos.find({id: id})
        return productoFilter;
    }

    async listarAll() {
        try {
            const allProductos = await model.productos.find({})
            return allProductos
        } catch (error) {
            throw new Error(`Error al mostrar todos los productos: ${error}`)
        }
    }

    async guardar(elemento) {
        if(elemento){
            const elementos =  await this.listarAll()
    
            let newId;
    
            if(elementos.length == 0) {
                newId = 1;
            } else {
                newId = elementos[elementos.length - 1].id + 1
            }
    
            const nuevoElemento = { ...elemento, id: newId }
            const nuevoElementoSaveModel = new model.productos(nuevoElemento);
            const nuevoElementoSave = await nuevoElementoSaveModel.save()
            return nuevoElementoSave;
        }
        else{
            return{
                err: -1,
                message: "no envio ningun producto"
            }
        }
    }

    async actualizar(elemento) {
        const productoUpdate = await model.productos.updateOne({id: elemento.id}, {
            $set: {elemento}
        })
        return productoUpdate;
    }

    async borrar(id) {
        const productoDelete = await model.productos.deleteOne({id: id})
        return productoDelete
    }

    async borrarAll() {
        const productoDeleteAll = await model.productos.deleteMany({})
        return productoDeleteAll;
    }

}

export default ContenedorSql;