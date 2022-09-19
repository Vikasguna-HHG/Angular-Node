const CrudModel = require("../../model/model");
var nodemailer = require("nodemailer");

exports.Crud_PostData = async function (req, res, next) {
  try {
    const Crud_PostData_Data = {
      name: req.body.name,
      age: req.body.age,
      password: req.body.password,
      phone: req.body.phone,
      gender: req.body.gender,
      email: req.body.email,
      hobby: req.body.hobby,
      address: req.body.address,
    };

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "hhgsoftechteam10@gmail.com",
        pass: "@Surat123",
      },
    });

    var mailOptions = {
      from: "hhgsoftechteam10@gmail.com",
      to: req.body.email,
      subject: "Sending Email using Node.js",
      text: "That was easy!",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    const Crud_PostData_Data1 = await CrudModel.create(Crud_PostData_Data);
    console.log(Crud_PostData_Data);

    return res.status(201).json({
      status: "success",
      data: Crud_PostData_Data1,
    });
  } catch (error) {
    console.log("Catch Error " + error);
    return res.status(404).json({
      status: "Error",
      error,
    });
  }
};

exports.Crud_GetData = async function (req, res, next) {
  try {
    const Crud_Getdata = await CrudModel.find();
    return res.status(200).json({
      status: "success",
      data: Crud_Getdata,
    });
  } catch (error) {
    console.log("Catch Error " + error);
    return res.status(404).json({
      status: "Error",
      error,
    });
  }
};

exports.Crud_DeleteData = async function (req, res, next) {
  try {
    await CrudModel.findByIdAndDelete(req.params.id);
    return res.status(204).json({
      status: "success",
    });
  } catch (error) {
    console.log("Catch Error " + error);
    return res.status(404).json({
      status: "Error",
      error,
    });
  }
};

exports.Crud_FindData = async function (req, res, next) {
  try {
    const Crud_FindData_Data = await CrudModel.findById(req.params.id);
    return res.status(200).json({
      status: "success",
      data: Crud_FindData_Data,
    });
  } catch (error) {
    console.log("Catch Error " + error);
    return res.status(204).json({
      status: "Error",
      error,
    });
  }
};

exports.Crud_UpdateData = async function (req, res, next) {
  console.log(req);
  try {
    const Crud_FindById_Data1 = await CrudModel.findById(req.params.id);
    Crud_FindById_Data1.name = req.body.name;
    Crud_FindById_Data1.age = req.body.age;
    Crud_FindById_Data1.phone = req.body.phone;
    Crud_FindById_Data1.email = req.body.email;

    const Crud_UpdateData_data = await CrudModel.findByIdAndUpdate(
      req.params.id,
      Crud_FindById_Data1
    );
    return res.status(202).json({
      status: "success",
      data: Crud_UpdateData_data,
    });
  } catch (error) {
    console.log("Catch Error " + error);
    return res.status(404).json({
      status: "Error",
      error,
    });
  }
};
