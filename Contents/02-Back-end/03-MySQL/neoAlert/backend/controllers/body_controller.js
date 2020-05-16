
exports.checkBody = (res,body,arrayValores)=>{
    for (const valor of arrayValores){
        if (body[valor] === undefined){
            res.status(400).send({"error":"revisa tu body"})
            throw new Error("body mal formado")
        }
    }
}