let express = require("express");
let router = express.Router();

let {
    getAllStatic,
    getAllStaticProducts
} = require("../controllers/products")

router.route("/").get(getAllStatic)
router.route("/static").get(getAllStaticProducts)

module.exports = router;