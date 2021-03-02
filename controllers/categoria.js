import categoria from '../models/categoria.js';

const categoriaGet = async (req,res) => {
    const categoria = await categoria
    .find({
        $or: [
            {nombre:new RegExp(value, 'i')}
            //{nombre:new RegExp(value, 'i')}

        ]
    })
    .sorft({'nombre':-1})

    res.json({
        categoria
    })
}

const categoriaPost = async (req,res) =>{
    const {nombre,descripcion}=req.body;
    const categoria = new categoria(req.body);

   await categoria.save();

    res.json({
        categoria
    })

}

export {categoriaPost, categoriaGet}