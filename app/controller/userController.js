const con = require("../config/database");
const table = require("../config/tables");
const utils = require("../common/utils");


exports.Registration = async (req, res) => {
  const requestData = req.body;
  var image_file = req.files;
  if (image_file != undefined && image_file.length > 0) {
    var image_name = req.files[0].originalname;
    var url =
      utils.getStoreImageFolderPath(FOLDER_NAME.USER_PROFILES) +
      image_name;
    requestData.Image = url;
    utils.storeImageToFolder(
      image_file[0].path,
      image_name,
      FOLDER_NAME.USER_PROFILES,
    );
  
  }
    const sql =
      `INSERT INTO ${table.employeeregistration} (FirstName, LastName, Email, Password, Address, Number,Technology,JoiningDate,BankAccountNumber,PFNumber,CIFNumber,Salary,Photo,Position)` +
      ` VALUES ('${requestData.FirstName}', '${requestData.LastName}', '${requestData.Email}', '${requestData.Password}', '${requestData.Address}', '${requestData.Number}','${requestData.Technology}','${requestData.JoiningDate}','${requestData.BankAccountNumber}','${requestData.PFNumber}','${requestData.CIFNumber}','${requestData.Salary}','${requestData.Image}','${requestData.Position}')`;
    con.query(sql, (err, results) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: `Server Internal error`,
          error: err,
        });
      }
      return res.status(200).json({
        success: true,
        status: 200,
        message: "create Account successfully",
        result: results,
      });
    });
  
};


exports.userLogin = async (req, res) => {
  const postData = req.body;

  console.log("BODY:", postData);

  // Dono cases handle karega (Email/email)
  const email = postData.Email || postData.email;
  const password = postData.Password || postData.password;

  const sql = `SELECT * FROM ${table.employeeregistration} WHERE Email='${email}'`;

  con.query(sql, (err, results) => {
    if (err) {
      console.log("SQL ERROR:", err);
      return res.send({ success: false, message: "Server error" });
    }

    if (results.length > 0) {
      if (results[0].Password === password) {
        return res.send({
          success: true,
          message: "Logged in successfully",
          result: results[0],
        });
      } else {
        return res.send({
          success: false,
          message: "Invalid Password",
        });
      }
    } else {
      return res.send({
        success: false,
        message: "Invalid Email",
      });
    }
  });
}; 


exports.getEmployeeFromTechnology = async (req, res) => {
  const sql = `SELECT * FROM ${table.employeeregistration} WHERE Technology="${req.body.Technology}" AND id!= ${req.body.id}`;
  con.query(sql, (err, results) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: `Server Internal error`,
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      status: 200,
      message: "Task detail",
      result: results,
    });
  });
}

exports.getEmployee = async (req, res) => {
  const sql = `SELECT * FROM ${table.employeeregistration}`;
  con.query(sql, (err, results) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: `Server Internal error`,
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      status: 200,
      message: "Task detail",
      result: results,
    });
  });
}


