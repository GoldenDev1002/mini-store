let getAllStatic = async (req, res)=> {
    throw new Error("testing async errors");
res.status(200).json({msg: 'static testing route'});
}

let getAllStaticProducts = async (req, res)=> {
    res.status(200).json({msg: "all static testing routes"})
}


module.exports = {
    getAllStatic,
    getAllStaticProducts
}