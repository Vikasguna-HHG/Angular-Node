var express = require("express");
var router = express.Router();
var api = require("../controller/crud-controller/crud-controller");

/* GET users listing. */
// router.post("/insert", api.insertBussenessUnit);
// router.get("/getData", api.getBussenessUnit);

router.post("/Crud_PostData", api.Crud_PostData);
router.get("/Crud_GetData", api.Crud_GetData);
router.delete("/Crud_DeleteData/:id", api.Crud_DeleteData);
router.get("/Crud_FindData/:id", api.Crud_FindData);
router.post("/Crud_UpdateData/:id", api.Crud_UpdateData);

module.exports = router;
