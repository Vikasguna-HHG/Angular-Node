const CrudService = require("../../Services/crud-Services/crud-services");

exports.Crud_PostData = async function (req, res, next) {
  return CrudService.Crud_PostData(req, res, next);
};
exports.Crud_GetData = async function (req, res, next) {
  return CrudService.Crud_GetData(req, res, next);
};
exports.Crud_DeleteData = async function (req, res, next) {
  return CrudService.Crud_DeleteData(req, res, next);
};
exports.Crud_FindData = async function (req, res, next) {
  return CrudService.Crud_FindData(req, res, next);
};

exports.Crud_UpdateData = async function (req, res, next) {
  return CrudService.Crud_UpdateData(req, res, next);
};
