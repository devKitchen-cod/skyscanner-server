const jwt = require("jsonwebtoken");
const key = require("../key/key");
const userModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const adminKey = process.env.ADMINKEY;

module.exports.createUser = async function (req, res) {
  const { name, email, password } = req.body;
  console.log("Auth = ", name, email, password);
  const check = await CheckDuplicate(email);
  const role = "user";
  const pass = HashPassword(password);

  if (!check) {
    try {
      console.log("type of =", typeof pass);
      const user = await userModel.create({
        name: name,
        email: email,
        password: pass,
        role: role,
      });

      // console.log("admin == ", user);
      const token = jwt.sign(
        {
          email: email,
          name: name,
          password: pass,
          role: role,
          key: adminKey,
        },
        key.jwt,
        { expiresIn: 60 * 60 }
      );
      res.status(200).json({ token: token, user });
    } catch (error) {
      console.log(error);
      console.log("you already have account by this email");
      res.status(500).json("error = ", error);
    }
  }
};

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("login1 = ", email, password);
  const check = await CheckEmailPassword(email, password);
  console.log("check == ", check);
  const token = jwt.sign({ email: email, password: password }, key.jwt, {
    expiresIn: 60 * 60,
  });
  // console.log(token);
  const data = {
    token: token,
    data_user: check.data_user,
  };
  check.valid ? res.status(200).json(data) : res.status(500).json("500");
};

module.exports.updateUser = async function (req, res) {
  const { edit_name, edit_email, edit_password, name, email, password } =
    req.body;
  try {
    const update_user = await userModel.updateOne(
      { name: name, email },
      { $set: { email: edit_email } }
    );
    console.log(update_user);
    res.status(200).json(update_user);
  } catch (e) {
    console.log(e);
  }
};

module.exports.deleteUser = async function (req, res) {};

module.exports.getAdmin = async function (req, res) {
  console.log("req== ", req.body);
  const { key, email } = req.body;
  const check_user = await userModel.findOne({ email: email });
  if (key === adminKey) {
    try {
      const update_user = await userModel.updateOne(
        { email: email },
        { $set: { key_admin: key } }
      );
      const new_user = await userModel.findOne({ email: email });
      console.log("new user = ", new_user);
      res.status(200).json(new_user);
    } catch (e) {
      console.log("err = ", e);
      res.status(messege("wrong admin key"));
    }
  }
};

const CheckDuplicate = async (check_email) => {
  const res = await userModel.findOne({ email: check_email });
  console.log(res);
  return res;
};

const CheckEmailPassword = async (email, password) => {
  console.log("CheckEmailPassword===", email, password);
  const check_user = await userModel.findOne({ email: email });
  const check_pass = CheckPass(password, check_user.password);
  if (check_user && check_pass === true) {
    const objres = {
      data_user: check_user,
      valid: true,
    };
    return objres;
  } else {
    return false;
  }
};

const HashPassword = (password) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

const CheckPass = (password, dbPass) => {
  const res = bcrypt.compareSync(password, dbPass);
  console.log("T/F pass", res);
  return res;
};
